const checkNumber2Sign = require('./check-number-2-sign');

test(' checkNumber2Sign -2*5 must return false', () => {
    expect(checkNumber2Sign('-2*5',2)).toBe('+');
});


test(' checkNumber2Sign -2*-5 must return false', () => {
    expect(checkNumber2Sign('-2*-5',2)).toBe('-');
});