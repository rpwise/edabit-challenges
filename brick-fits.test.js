const doesBrickFit = require('./brick-fits.js');

test('1x1x1 brick fit in 1x1 opening', () => {
  expect(doesBrickFit(1,1,1, 1,1)).toBe(true);
});

test('1x1x2 brick fit in 1x1 opening', () => {
    expect(doesBrickFit(1,1,2, 1,1)).toBe(true);
  });

test('1x2x2 brick fit in 1x1 opening', () => {
    expect(doesBrickFit(1,2,2, 1,1)).toBe(false);
  });

test('2x2x2 brick fit in 1x1 opening', () => {
    expect(doesBrickFit(2,2,2, 1,1)).toBe(false);
  });

  test('brick fits of null', () => {
    expect(() => { 
        doesBrickFit(null, null, null, null, null);
    }).toThrow("Parameter is null");
  });

  test('brick fits of null', () => {
    expect(() => { 
        doesBrickFit(null,1,1, 1,1);
    }).toThrow("Parameter is null");
  });