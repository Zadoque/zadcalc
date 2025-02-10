const simplify = require('./simplify');

test(`simplify (2+4)*8 must return 6`, () => {
    expect(simplify('(2+4)*8')).toBe('6*8');
});

test(`simplify (3-1)(2+4)*8 must return 2*6*8`, () => {
    expect(simplify('(3-1)(2+4)*8')).toBe('2*6*8');
});