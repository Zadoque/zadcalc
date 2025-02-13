const mathResolver = require('../../src/eval-expression/eval-expression');
const evalExpression = mathResolver.evalExpression;
test(`evalExpression {-2[9.4/8.0]6-4/(5-3)-8} must return 2*6*8`, () => {
    expect(evalExpression('{-2[9.4/8.0]6-4/(5-3)-8}')).toBe('-24.1');
});

test(`evalExpression 1/90 must return 2*6*8`, () => {
    expect(evalExpression('1/90')).toBe('+0.011111111111111112');
});


test(`evalExpression 3+2/3-5/7+12/78 must return +3.106227106`, () => {
    expect(evalExpression('3+2/3-5/7+12/78')).toBe('+3.106227106227106');
});

test(`evalExpression 1/3+2/3 must return +3.106227106`, () => {
    expect(evalExpression('1/3+2/3')).toBe('+1');
});

