const getUniqueValues = require('./get-unique-values.js');

test('get unique ints', () => {
    var array1 = [1, 2, 2, 3, 5, 5, 5, 6];
    expect(getUniqueValues(array1)).toStrictEqual([1, 2, 3, 5, 6]);
  });

  test('get unique strings', () => {
    var array1 = ["one", "two", "two", "three"];
    expect(getUniqueValues(array1)).toStrictEqual(["one", "two", "three"]);
  });