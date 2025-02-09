const checkNumber1Sign = require('./checkNumber1Sign');

test(' checkNumber2Sign -2*5 must return false', () => {
    expect(checkNumber1Sign('-2*5',2)).toBe('-');
});