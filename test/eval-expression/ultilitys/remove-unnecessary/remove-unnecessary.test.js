const removeUnnecessary = require('./remove-unnecessary');

test('removeUnnecessary({2+3} must return 2+3', () => {
    expect(removeUnnecessary('{2+3}')).toBe('2+3');
});