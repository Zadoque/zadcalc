const compute = require('../../../../../../src/eval-expression/utilities/resolve/utilities/compute/compute');

test('Compute([9,8],+) must return 17', () => {
    expect(compute([-9,-8],'+')).toBe('-17');
});

test('Compute([152,148],+) must return +300', () => {
    expect(compute([152,148],'+')).toBe('+300');
});

test('Compute([11.7,1],'/') must return +11.7', () => {
    expect(compute([11.7,1],'/')).toBe('+11.7');
});