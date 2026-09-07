import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    directory: { type: "string" },
  },
});

const gatesDirectory = resolve(values.directory ?? "evidence/gates");
const receiptFiles = readdirSync(gatesDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
  .map((entry) => entry.name)
  .sort();

let acceptedGates = 0;

for (const receiptFile of receiptFiles) {
  const receipt = JSON.parse(readFileSync(resolve(gatesDirectory, receiptFile), "utf8"));
  const hasValidEnvelope =
    receipt.schemaVersion === 1 &&
    typeof receipt.gate === "string" &&
    /^R\d+[A-Z]?$/.test(receipt.gate) &&
    ["accepted", "active", "blocked", "falsified"].includes(receipt.status) &&
    typeof receipt.sourceRevision === "string" &&
    /^[0-9a-f]{40}$/.test(receipt.sourceRevision);

  if (!hasValidEnvelope) {
    throw new Error(`Invalid gate receipt: ${receiptFile}`);
  }

  if (receipt.status === "accepted") {
    acceptedGates += 1;
  }
}

process.stdout.write(`METRIC accepted_gates=${acceptedGates}\n`);
