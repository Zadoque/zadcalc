const evalExpression = require('./eval-expression');
test(`evalExpression {-2[9.4/8.0]6-4/(5-3)-8} must return 2*6*8`, () => {
    expect(evalExpression('{-2[9.4/8.0]6-4/(5-3)-8}')).toBe('-24.1');
});

test(`evalExpression 1/90 must return 2*6*8`, () => {
    expect(evalExpression('1/90')).toBe('-24.1');
});