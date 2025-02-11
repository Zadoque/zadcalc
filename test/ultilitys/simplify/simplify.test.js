const simplify = require('./simplify');
/*
test(`simplifyParentheses (2+4)*8 must return 6`, () => {
    expect(simplify('(2+4)*8')).toBe('6*8');
});

test(`simplify {(3-1)(2+4)}*8 must return 2*6*8`, () => {
    expect(simplify('{(3-1)(2+4)}*8')).toBe('12*8');
});
*/
test(`simplify {-2[9.4/8.90]6-4/(5-3)-8} must return 2*6*8`, () => {
    expect(simplify('{-2[9.4/8.90]6-4/(5-3)-8}')).toBe('-22');
});