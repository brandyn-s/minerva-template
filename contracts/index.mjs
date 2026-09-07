import assert from 'node:assert/strict';

export const caseIds = Object.freeze([
  'semantic-placement', 'focus-receipt', 'overflow-editing', 'running-authority',
  'storage-recovery', 'runtime-references', 'keyboard-durability',
]);

const card = (id, text = id, x = 0, y = 0) => ({ id, text, x, y });
const check = async (adapter, expected) => {
  const actual = await adapter.inspect();
  for (const [field, value] of Object.entries(expected)) {
    assert.deepEqual(actual[field], value, field);
  }
  return actual;
};
const command = async (adapter, type, input = {}) => {
  const result = await adapter.dispatch({ type, ...input });
  assert.equal(result?.acknowledged, true, `${type}: completed acknowledgement`);
};
const rejected = async (adapter, type, input, code) => {
  const result = await adapter.dispatch({ type, ...input });
  assert.equal(result?.acknowledged, false, `${type}: must not acknowledge`);
  assert.equal(result?.code, code, `${type}: rejection reason`);
};

export class UnsupportedCapabilityError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnsupportedCapabilityError';
  }
}

export function fixtureFor(id) {
  if (!caseIds.includes(id)) throw new Error(`Unknown case: ${id}`);
  return {
    schemaVersion: 1,
    revision: 0,
    cards: ['semantic-placement', 'storage-recovery'].includes(id) ? []
      : id === 'keyboard-durability' || id === 'runtime-references'
        ? [card('a')] : [card('a'), card('b')],
    focus: id === 'overflow-editing' ? ['a', 'b']
      : ['focus-receipt', 'keyboard-durability'].includes(id) ? ['a'] : [],
    selectedTargets: id === 'focus-receipt' ? ['a', 'b'] : [],
    limits: { contextCards: id === 'overflow-editing' ? 1 : 10 },
    keyboardMoveStep: 1,
  };
}

export const scenarios = Object.freeze({
  async 'semantic-placement'(adapter) {
    const a = card('a', 'Alpha', 40, 60);
    const r = card('r', 'Result', 140, 60);
    await command(adapter, 'createCard', a);
    await check(adapter, { cards: [a], historyDepth: 1 });
    await command(adapter, 'undo');
    await check(adapter, { cards: [], historyDepth: 0 });
    await command(adapter, 'redo');
    await check(adapter, { cards: [a], historyDepth: 1, providerStarts: 0 });
    await command(adapter, 'branch', { id: 'op', target: 'a' });
    await command(adapter, 'settle', { id: 'op', outcome: 'landed', card: r });
    await check(adapter, { cards: [a, r], historyDepth: 2, providerStarts: 1 });
    await command(adapter, 'undo');
    await check(adapter, { cards: [a], historyDepth: 1 });
    await command(adapter, 'redo');
    await check(adapter, { cards: [a, r], historyDepth: 2, providerStarts: 1 });
  },
  async 'focus-receipt'(adapter) {
    await check(adapter, { summaryCount: 2, focus: ['a'] });
    await command(adapter, 'branch', { id: 'op', targets: ['a', 'b'] });
    await check(adapter, {
      summaryCount: 2, focus: ['a'], receiptCards: ['a@1', 'b@1'],
      sentCards: ['a@1', 'b@1'], providerStarts: 1,
    });
  },
  async 'overflow-editing'(adapter) {
    await rejected(adapter, 'branch', { id: 'blocked', targets: [] }, 'CONTEXT_OVERFLOW');
    await check(adapter, { providerStarts: 0, blockedCause: { actual: 2, limit: 1 } });
    await command(adapter, 'editCard', { id: 'a', text: 'Edited' });
    await command(adapter, 'setFocus', { ids: ['a'] });
    await check(adapter, { cards: [card('a', 'Edited'), card('b')], focus: ['a'] });
    await command(adapter, 'branch', { id: 'allowed', targets: [] });
    await check(adapter, { providerStarts: 1, receiptCards: ['a@2'] });
  },
  async 'running-authority'(adapter) {
    await command(adapter, 'branch', { id: 'early', target: 'a' });
    const baseline = await adapter.inspect();
    assert.equal(baseline.early?.status, 'running');
    assert.equal(typeof baseline.early?.authority, 'string');
    assert.ok(baseline.early.authority.length > 0);
    assert.equal(baseline.providerStarts, 1);
    const early = structuredClone(baseline.early);
    await command(adapter, 'branch', { id: 'later', target: 'b' });
    await command(adapter, 'settle', { id: 'later', outcome: 'failed' });
    await command(adapter, 'retry', { id: 'later', attempt: 'retry-1' });
    await command(adapter, 'editCard', { id: 'b', text: 'Unrelated' });
    for (const action of ['undo', 'undo', 'redo', 'redo']) {
      await command(adapter, action);
      await check(adapter, { early, providerStarts: 3 });
    }
    await command(adapter, 'settle', { id: 'early', outcome: 'landed', card: card('early-result') });
    await check(adapter, {
      early: { ...early, status: 'landed' },
      cards: [card('a'), card('b', 'Unrelated'), card('early-result')], providerStarts: 3,
    });
  },
  async 'storage-recovery'(adapter) {
    await command(adapter, 'createCard', card('a', 'One'));
    await command(adapter, 'editCard', { id: 'a', text: 'Two' });
    await command(adapter, 'editCard', { id: 'a', text: 'Three' });
    await command(adapter, 'corruptStorage', {
      actualRevisionKey: 3, embeddedRevisionId: 2, cachedHead: 'unreadable',
    });
    await adapter.dispatch({ type: 'reload' });
    await check(adapter, {
      revision: 2, mode: 'recovery-read-only', unreadableBoundary: 3,
      cards: [card('a', 'Two')], providerStarts: 0,
    });
  },
  async 'runtime-references'(adapter) {
    const expected = { revision: 0, acknowledgements: 0, providerStarts: 0, cards: [card('a')] };
    await check(adapter, expected);
    for (const id of [17, null, {}, ['a']]) {
      await rejected(adapter, 'rawCommand', {
        command: { type: 'editCard', id, text: 'Invalid' },
      }, 'INVALID_REFERENCE');
      await check(adapter, expected);
    }
  },
  async 'keyboard-durability'(adapter) {
    await command(adapter, 'focusCardControl', { id: 'a' });
    for (const x of [1, 2, 3]) {
      await command(adapter, 'key', { key: 'ArrowRight' });
      await check(adapter, {
        activeControl: 'card:a:move', cards: [card('a', 'a', x, 0)],
        focus: ['a'], durableCards: [card('a', 'a', x, 0)],
      });
    }
    await adapter.dispatch({ type: 'reload' });
    await check(adapter, { cards: [card('a', 'a', 3, 0)], focus: ['a'], providerStarts: 0 });
  },
});

export async function runConformance(adapterFactory, { cases = caseIds } = {}) {
  if (!Array.isArray(cases) || cases.length === 0) throw new Error('Cases must be a nonempty array');
  for (const id of cases) {
    if (!caseIds.includes(id)) throw new Error(`Unknown case: ${id}`);
  }
  if (new Set(cases).size !== cases.length) throw new Error('Duplicate cases');
  const results = [];
  for (const id of cases) {
    let adapter;
    let result;
    try {
      if (typeof adapterFactory !== 'function') {
        throw new UnsupportedCapabilityError('Adapter factory absent');
      }
      adapter = await adapterFactory({ caseId: id, fixture: fixtureFor(id) });
      if (!Array.isArray(adapter?.capabilities) || !adapter.capabilities.includes(id)
        || !['dispatch', 'inspect', 'dispose'].every((name) => typeof adapter[name] === 'function')) {
        throw new UnsupportedCapabilityError(`Missing capability or adapter method for ${id}`);
      }
      await scenarios[id](adapter);
      result = { id, status: 'PASS' };
    } catch (error) {
      result = {
        id, status: error instanceof UnsupportedCapabilityError ? 'NOT RUN' : 'FAIL',
        reason: `${error?.name ?? 'Error'}: ${error?.message ?? String(error)}`,
      };
    } finally {
      if (typeof adapter?.dispose === 'function') {
        try {
          await adapter.dispose();
        } catch (error) {
          result = { id, status: 'FAIL', reason: `Adapter cleanup failed: ${String(error)}` };
        }
      }
    }
    results.push(result);
  }
  return { ok: results.every(({ status }) => status === 'PASS'), results };
}
