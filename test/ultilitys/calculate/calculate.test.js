const calculate = require('./calculate.js');

test("Calculate '7-2+6*3'must return '+6*3'",() => {
    expect(calculate('7-2+6*3')).toBe('+6*3');
});