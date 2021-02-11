const countTrue = require('./how-much-is-true.js');

test('false false false', () => {
    var array1 = [false, false, false];
    expect(countTrue(array1)).toBe(0);
  });

  test('true false false', () => {
    var array2 = [true, false, false];
    expect(countTrue(array2)).toBe(1);
  });

  test('true true false', () => {
    var array3 = [true, true, false];
    expect(countTrue(array3)).toBe(2);
  });