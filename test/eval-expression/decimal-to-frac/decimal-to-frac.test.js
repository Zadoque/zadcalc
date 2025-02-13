const decimalToFrac = require('../../../src/eval-expression/ultilitys/decimal-to-frac/decimal-to-frac');

test('decimalToFrac (0.106227106227106227', () => {
    expect(decimalToFrac ('0.106227106227106227')).toBe(false);
});

test('decimalToFrac (0.33333333', () => {
    expect(decimalToFrac ('0.3333333333333333')).toBe(false);
});

test('decimalToFrac (0.789245893333333', () => {
    expect(decimalToFrac ('0.7892458933333333')).toBe(true);
});

