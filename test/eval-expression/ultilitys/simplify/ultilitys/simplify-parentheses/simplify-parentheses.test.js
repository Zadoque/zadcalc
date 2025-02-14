const simplifyParentheses = require('../../../../../../src/eval-expression/utilities/simplify/utilities/simplify-parentheses/simplify-parentheses');

test(`simplifyParentheses (2+4)*8 must return 6`, () => {
    expect(simplifyParentheses('(2+4)*8')).toBe('+6*8');
});

test(`simplifyParentheses (3-1)(2+4)*8 must return 2*6*8`, () => {
    expect(simplifyParentheses('(3-1)(2+4)*8')).toBe('+2*+6*8');
});