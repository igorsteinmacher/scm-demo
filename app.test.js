const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./app');

test('adds numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('environment is configured', () => {
  assert.ok(process.env.APP_ENV, 'APP_ENV must be set');
});
