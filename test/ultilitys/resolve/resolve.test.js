const resolve = require('./resolve.js');

test("Calculate '7-2+6*3'must return '7-2+18'",() => {
    expect(resolve('7-2+6*3')).toBe('23');
});

test("Calculate '7-2+6*3-55-3'must return '7-2+18'",() => {
    expect(resolve('7-2+6*3-55-3')).toBe('-35');
});

test("Calculate '7-2+6*-3-55-3'must return '7-2+18'",() => {
    expect(resolve('7-2+6*-3-55-3')).toBe('-71');
});
