const simplifySquareBrack = require('../../../../../../src/eval-expression/utilities/simplify/utilities/simplify-square-brack/simplify-square-brack');

test(`simplifyParentheses [(2+4)*8] must return +48`, () => {
    expect(simplifySquareBrack('[(2+4)*8]')).toBe('+48');
});

test(`simplifyParentheses (3-1)[(2+4)*8] must return 2*6*8`, () => {
    expect(simplifySquareBrack('(3-1)[(2+4)*8]')).toBe('(3-1)*+48');
});
