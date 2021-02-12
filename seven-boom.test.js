const sevenBoom = require('./seven-boom.js');

test('7, 1, 2, 3', () => {
    var array1 = [7, 1, 2, 3];
    expect(sevenBoom(array1)).toBe("Boom!");
  });

  test('1, 2, 3, 4', () => {
    var array2 = [1, 2, 3, 4];
    expect(sevenBoom(array2)).toBe("there is no 7 in the array");
  });

  test('1, 2, 3, 4', () => {
    var array2 = null;
    expect(sevenBoom(array2)).toBe("there is no 7 in the array");
  });