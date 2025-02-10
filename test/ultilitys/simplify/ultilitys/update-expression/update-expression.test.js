const updateExpression = require('./update-expression.js')

test(`updateExpression (2+4)*8 must return +6*8`, () => {
    expect(updateExpression('(2+4)*8', '+6',[0,4])).toBe('+6*8');
});