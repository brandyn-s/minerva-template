import { existsSync, readdirSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const schema = JSON.parse(
  readFileSync(resolve(scriptDirectory, "../evidence/gate-receipt.schema.json"), "utf8"),
);
const validateReceipt = new Ajv2020({ allErrors: true }).compile(schema);

try {
  const { values } = parseArgs({
    options: {
      directory: { type: "string" },
    },
  });
  const gatesDirectory = resolve(values.directory ?? "evidence/gates");
  const repository = resolve(".");
  const receiptFiles = existsSync(gatesDirectory)
    ? readdirSync(gatesDirectory, { withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
        .map((entry) => entry.name)
        .sort()
    : [];
  const receipts = [];
  let passedGates = 0;

  for (const receiptFile of receiptFiles) {
    const receipt = JSON.parse(readFileSync(resolve(gatesDirectory, receiptFile), "utf8"));

    if (!validateReceipt(receipt)) {
      const details = validateReceipt.errors
        .map((error) => `${error.instancePath || "/"} ${error.message}`)
        .join("; ");
      throw new Error(`schema validation failed for ${receiptFile}: ${details}`);
    }

    receipts.push({ receiptFile, receipt });
  }

  const gateIds = new Set();
  for (const { receipt } of receipts) {
    if (gateIds.has(receipt.gate)) {
      throw new Error(`duplicate gate ${receipt.gate}`);
    }
    gateIds.add(receipt.gate);
  }

  for (const { receiptFile, receipt } of receipts) {
    if (receiptFile !== `${receipt.gate}.json`) {
      throw new Error(`filename ${receiptFile} does not match gate ${receipt.gate}`);
    }

    const resolvedSource = spawnSync(
      "git",
      ["cat-file", "-e", `${receipt.sourceRevision}^{commit}`],
      { cwd: repository, stdio: "ignore" },
    );
    if (resolvedSource.status !== 0) {
      throw new Error(
        `source revision ${receipt.sourceRevision} does not resolve to a commit`,
      );
    }
    const sourceIsAncestor = spawnSync(
      "git",
      ["merge-base", "--is-ancestor", receipt.sourceRevision, "HEAD"],
      { cwd: repository, stdio: "ignore" },
    );
    if (sourceIsAncestor.status !== 0) {
      throw new Error(
        `source revision ${receipt.sourceRevision} is not an ancestor of HEAD`,
      );
    }

    if (receipt.status === "passed") {
      passedGates += 1;
    }
  }

  process.stdout.write(`METRIC accepted_gates=${passedGates}\n`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`roadmap:status failed: ${message}\n`);
  process.exitCode = 1;
}
