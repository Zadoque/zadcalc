const decimalToFrac = require('../../../../src/eval-expression/utilities/decimal-to-frac/decimal-to-frac');

test('decimalToFrac (3.106227106227106227', () => {
    expect(decimalToFrac ('3.106227106227106')).toBe('+848/273');
});

test('decimalToFrac (0.33333333', () => {
    expect(decimalToFrac ('0.3333333333333333')).toBe('+1/3');
});

test('decimalToFrac (0.789245893333333', () => {
    expect(decimalToFrac ('+0.7892458933333333')).toBe('+29596721/37500000');
});

test('decimalToFrac (0.25', () => {
    expect(decimalToFrac ('0.25')).toBe('+1/4');
});

test('decimalToFrac (0.142857142857)', () => {
    expect(decimalToFrac('0.142857142857')).toBe('+1/7');
})

test('decimalToFrac (0.142857142857)', () => {
    expect(decimalToFrac('0.333')).toBe('+1/3');
})
