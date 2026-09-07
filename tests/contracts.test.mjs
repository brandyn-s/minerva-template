import assert from 'node:assert/strict';
import test from 'node:test';
import { caseIds, fixtureFor, runConformance, scenarios, UnsupportedCapabilityError } from '../contracts/index.mjs';

const card = (id, text = id, x = 0, y = 0) => ({ id, text, x, y });
const d = (type, input = {}, result = { acknowledged: true }) =>
  ['dispatch', { type, ...input }, result];
const s = (value) => ['inspect', undefined, value];
const a = card('a', 'Alpha', 40, 60);
const r = card('r', 'Result', 140, 60);

// Scripted readback oracle only: no domain logic, persistence, or browser simulation.
const traces = {
  'semantic-placement': [
    d('createCard', a), s({ cards: [a], historyDepth: 1 }),
    d('undo'), s({ cards: [], historyDepth: 0 }),
    d('redo'), s({ cards: [a], historyDepth: 1, providerStarts: 0 }),
    d('branch', { id: 'op', target: 'a' }),
    d('settle', { id: 'op', outcome: 'landed', card: r }),
    s({ cards: [a, r], historyDepth: 2, providerStarts: 1 }),
    d('undo'), s({ cards: [a], historyDepth: 1 }),
    d('redo'), s({ cards: [a, r], historyDepth: 2, providerStarts: 1 }),
  ],
  'focus-receipt': [
    s({ summaryCount: 2, focus: ['a'] }),
    d('branch', { id: 'op', targets: ['a', 'b'] }),
    s({ summaryCount: 2, focus: ['a'], receiptCards: ['a@1', 'b@1'],
      sentCards: ['a@1', 'b@1'], providerStarts: 1 }),
  ],
  'overflow-editing': [
    d('branch', { id: 'blocked', targets: [] },
      { acknowledged: false, code: 'CONTEXT_OVERFLOW' }),
    s({ providerStarts: 0, blockedCause: { actual: 2, limit: 1 } }),
    d('editCard', { id: 'a', text: 'Edited' }),
    d('setFocus', { ids: ['a'] }),
    s({ cards: [card('a', 'Edited'), card('b')], focus: ['a'] }),
    d('branch', { id: 'allowed', targets: [] }),
    s({ providerStarts: 1, receiptCards: ['a@2'] }),
  ],
  'running-authority': [
    d('branch', { id: 'early', target: 'a' }),
    s({ early: { status: 'running', authority: 'epoch-early' }, providerStarts: 1 }),
    d('branch', { id: 'later', target: 'b' }),
    d('settle', { id: 'later', outcome: 'failed' }),
    d('retry', { id: 'later', attempt: 'retry-1' }),
    d('editCard', { id: 'b', text: 'Unrelated' }),
    d('undo'),
    s({ early: { status: 'running', authority: 'epoch-early' }, providerStarts: 3 }),
    d('undo'),
    s({ early: { status: 'running', authority: 'epoch-early' }, providerStarts: 3 }),
    d('redo'),
    s({ early: { status: 'running', authority: 'epoch-early' }, providerStarts: 3 }),
    d('redo'),
    s({ early: { status: 'running', authority: 'epoch-early' }, providerStarts: 3 }),
    d('settle', { id: 'early', outcome: 'landed', card: card('early-result') }),
    s({ early: { status: 'landed', authority: 'epoch-early' },
      cards: [card('a'), card('b', 'Unrelated'), card('early-result')], providerStarts: 3 }),
  ],
  'storage-recovery': [
    d('createCard', card('a', 'One')),
    d('editCard', { id: 'a', text: 'Two' }),
    d('editCard', { id: 'a', text: 'Three' }),
    d('corruptStorage', { actualRevisionKey: 3, embeddedRevisionId: 2, cachedHead: 'unreadable' }),
    d('reload', {}, { acknowledged: false }),
    s({ revision: 2, mode: 'recovery-read-only', unreadableBoundary: 3,
      cards: [card('a', 'Two')], providerStarts: 0 }),
  ],
  'runtime-references': [
    s({ revision: 0, acknowledgements: 0, providerStarts: 0, cards: [card('a')] }),
    ...[17, null, {}, ['a']].flatMap((id) => [
      d('rawCommand', { command: { type: 'editCard', id, text: 'Invalid' } },
        { acknowledged: false, code: 'INVALID_REFERENCE' }),
      s({ revision: 0, acknowledgements: 0, providerStarts: 0, cards: [card('a')] }),
    ]),
  ],
  'keyboard-durability': [
    d('focusCardControl', { id: 'a' }),
    ...[1, 2, 3].flatMap((x) => [
      d('key', { key: 'ArrowRight' }),
      s({ activeControl: 'card:a:move', cards: [card('a', 'a', x, 0)],
        focus: ['a'], durableCards: [card('a', 'a', x, 0)] }),
    ]),
    d('reload', {}, { acknowledged: false }),
    s({ cards: [card('a', 'a', 3, 0)], focus: ['a'], providerStarts: 0 }),
  ],
};

function scriptedFactory(id, mutate = () => {}) {
  return async ({ caseId }) => {
    assert.equal(caseId, id);
    const trace = structuredClone(traces[id]);
    mutate(trace);
    let cursor = 0;
    return {
      capabilities: [id],
      async dispatch(input) {
        const [method, expected, output] = trace[cursor++] ?? [];
        assert.equal(method, 'dispatch', 'unexpected adapter command');
        assert.deepEqual(input, expected, 'adapter command must match independent oracle');
        return output;
      },
      async inspect() {
        const [method, , output] = trace[cursor++] ?? [];
        assert.equal(method, 'inspect', 'unexpected inspection');
        return output;
      },
      async dispose() {},
    };
  };
}

test('harness self-test: absent adapters are explicitly NOT RUN, never conformance', async () => {
  const report = await runConformance(undefined);
  assert.equal(report.ok, false);
  assert.equal(report.results.length, 7);
  assert.ok(report.results.every(({ status, reason }) => status === 'NOT RUN' && reason));
});

for (const id of Object.keys(traces)) {
  test(`harness self-test: positive scripted trace, NOT product proof: ${id}`, async () => {
    const report = await runConformance(scriptedFactory(id), { cases: [id] });
    assert.deepEqual(report.results.map(({ id, status }) => ({ id, status })), [{ id, status: 'PASS' }]);
    assert.equal(report.ok, true);
  });
}

const faults = [
  ['semantic-placement', 1, 'historyDepth', 2],
  ['semantic-placement', 8, 'historyDepth', 3],
  ['semantic-placement', 12, 'providerStarts', 2],
  ['focus-receipt', 0, 'summaryCount', 1],
  ['focus-receipt', 2, 'sentCards', ['a@1']],
  ['focus-receipt', 2, 'focus', ['a', 'b']],
  ['overflow-editing', 1, 'providerStarts', 1],
  ['overflow-editing', 4, 'cards', [card('a'), card('b')]],
  ['running-authority', 7, 'early', { status: 'cancelled', authority: 'epoch-early' }],
  ['running-authority', 9, 'early', { status: 'running', authority: 'revoked' }],
  ['running-authority', 11, 'providerStarts', 4],
  ['running-authority', 15, 'early', { status: 'running', authority: 'epoch-early' }],
  ['storage-recovery', 5, 'revision', 1],
  ['storage-recovery', 5, 'cards', []],
  ['storage-recovery', 5, 'mode', 'writable'],
  ['runtime-references', 1, 'acknowledged', true],
  ['runtime-references', 4, 'acknowledgements', 1],
  ['keyboard-durability', 4, 'activeControl', 'body'],
  ['keyboard-durability', 6, 'durableCards', [card('a', 'a', 2, 0)]],
  ['keyboard-durability', 8, 'cards', [card('a')]],
];

for (const [id, step, field, value] of faults) {
  test(`harness rejects faulty trace: ${id} step ${step} ${field}`, async () => {
    const report = await runConformance(scriptedFactory(id, (trace) => {
      trace[step][2][field] = value;
    }), { cases: [id] });
    assert.equal(report.ok, false);
    assert.equal(report.results[0].status, 'FAIL');
    assert.match(report.results[0].reason, /AssertionError/);
  });
}

test('harness rejects unknown/empty cases and reports missing capabilities explicitly', async () => {
  await assert.rejects(runConformance(undefined, { cases: ['typo'] }), /Unknown/);
  await assert.rejects(runConformance(undefined, { cases: [] }), /empty/);
  const report = await runConformance(async () => ({}), { cases: ['semantic-placement'] });
  assert.equal(report.results[0].status, 'NOT RUN');
  assert.equal(report.ok, false);
});

test('harness validates selections and initializes independent synthetic fixtures', async () => {
  assert.deepEqual(Object.keys(scenarios), caseIds);
  assert.throws(() => fixtureFor('unknown'), /Unknown/);
  await assert.rejects(runConformance(undefined, { cases: ['focus-receipt', 'focus-receipt'] }), /Duplicate/);
  const first = fixtureFor('focus-receipt');
  first.cards[0].text = 'Mutated';
  assert.equal(fixtureFor('focus-receipt').cards[0].text, 'a');
  assert.equal(fixtureFor('overflow-editing').limits.contextCards, 1);
});

test('harness distinguishes unsupported capability, implementation errors, and cleanup failures', async () => {
  for (const [error, status] of [
    [new UnsupportedCapabilityError('No real keyboard'), 'NOT RUN'],
    [new Error('adapter broke'), 'FAIL'],
    [null, 'FAIL'],
  ]) {
    const report = await runConformance(async () => { throw error; }, { cases: ['keyboard-durability'] });
    assert.equal(report.results[0].status, status);
    assert.equal(report.ok, false);
  }
  const report = await runConformance(async (input) => {
    const adapter = await scriptedFactory('focus-receipt')(input);
    adapter.dispose = async () => { throw new Error('cleanup'); };
    return adapter;
  }, { cases: ['focus-receipt'] });
  assert.equal(report.results[0].status, 'FAIL');
  assert.match(report.results[0].reason, /cleanup/);
});

test('capability declarations must be arrays and unsupported dispatch is NOT RUN', async () => {
  const make = async (input) => {
    const adapter = await scriptedFactory('focus-receipt')(input);
    adapter.capabilities = 'focus-receipt';
    return adapter;
  };
  assert.equal((await runConformance(make, { cases: ['focus-receipt'] })).results[0].status, 'NOT RUN');
  const unsupported = async (input) => {
    const adapter = await scriptedFactory('focus-receipt')(input);
    adapter.dispatch = async () => { throw new UnsupportedCapabilityError('provider control missing'); };
    return adapter;
  };
  assert.equal((await runConformance(unsupported, { cases: ['focus-receipt'] })).results[0].status, 'NOT RUN');
});
