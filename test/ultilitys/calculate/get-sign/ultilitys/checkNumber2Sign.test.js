const checkNumber2Sign = require('./checkNumber2Sign');

test(' checkNumber2Sign -2*5 must return false', () => {
    expect(checkNumber2Sign('-2*5',2)).toBe(true);
});


test(' checkNumber2Sign -2*-5 must return false', () => {
    expect(checkNumber2Sign('-2*-5',2)).toBe(false);
});