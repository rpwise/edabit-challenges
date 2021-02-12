const cube = require('./cube.js');

test('cube of 1 to equal 1', () => {
    expect(cube(1)).toBe(1);
  });
  
  test('cube of 3 to equal 9', () => {
    expect(cube(3)).toBe(27);
  });

  test('cube of 5 to equal 125', () => {
    expect(cube(5)).toBe(125);
  });

  test('cube of null', () => {
    expect(() => { 
        cube(null);
    }).toThrow("Parameter is null");
  });