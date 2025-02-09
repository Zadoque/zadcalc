const compute = require('./compute');

test('Compute([9,8],+) must return 17', () => {
    expect(compute([-9,-8],'+')).toBe(-17);
});