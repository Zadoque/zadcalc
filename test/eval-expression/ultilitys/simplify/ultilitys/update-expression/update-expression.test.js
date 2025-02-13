const updateExpression = require('../../../../../../src/eval-expression/ultilitys/simplify/ultilitys/update-expression/update-expression')

test(`updateExpression (2+4)*8 must return +6*8`, () => {
    expect(updateExpression('(2+4)*8', '+6',[0,4])).toBe('+6*8');
});


test(`updateExpression '(2+3)*4-[6/2]+8-2' must return "+14"`, () => {
    expect(updateExpression('(2*3)*4-[6/2]+8-2',3,[8,12])).toBe('(2*3)*4-3+8-2');
});