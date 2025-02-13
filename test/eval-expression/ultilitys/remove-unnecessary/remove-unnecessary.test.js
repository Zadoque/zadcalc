const removeUnnecessary = require('./remove-unnecessary');

test('removeUnnecessary((2+3)*5 must return 2+3', () => {
    expect(removeUnnecessary('5-(2+3)-5')).toBe('5-2+3-5');
});