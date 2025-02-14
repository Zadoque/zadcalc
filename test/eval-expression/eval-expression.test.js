const mathResolver = require('../../src/eval-expression/eval-expression');
const evalExpression = mathResolver.evalExpression;
test(`evalExpression {-2[9.4/8.0]6-4/(5-3)-8} must return 2*6*8`, () => {
    mathResolver.settings.to_fi
    expect(evalExpression('{-2[9.4/8.0]6-4/(5-3)-8}')).toBe('-24.1');
});

test(`evalExpression 1/90 must return 2*6*8`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression('1/90')).toBe('1/90');
});



test(`evalExpression 3+2/3-5/7+12/78 must return +3.106227106`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression('3+2/3-5/7+12/78')).toBe('848/273');
});
test(`evalExpression 1/3+2/3 must return +3.106227106`, () => {
    expect(evalExpression('1/3+2/3')).toBe('1');
});

