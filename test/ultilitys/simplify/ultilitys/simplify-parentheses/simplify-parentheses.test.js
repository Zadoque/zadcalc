const simplifyParentheses = require('./simplify-parentheses.js');

test(`simplifyParentheses (2+4)*8 must return 6`, () => {
    expect(simplifyParentheses('(2+4)*8')).toBe('+6*8');
});

test(`simplifyParentheses (3-1)(2+4)*8 must return 2*6*8`, () => {
    expect(simplifyParentheses('(3-1)(2+4)*8')).toBe('+2*+6*8');
});