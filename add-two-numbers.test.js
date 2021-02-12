const sum = require('./add-two-numbers.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + -1 to equal -1', () => {
  expect(sum(0, -1)).toBe(-1);
});

test('add null', () => {
  expect(() => { 
      sum(1, null);
  }).toThrow("Parameter is null");
});

test('add null', () => {
  expect(() => { 
      sum(null, null);
  }).toThrow("Parameter is null");
});

test('add null', () => {
  expect(() => { 
      sum(null, 1);
  }).toThrow("Parameter is null");
});