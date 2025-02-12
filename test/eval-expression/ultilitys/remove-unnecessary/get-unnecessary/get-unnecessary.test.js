getUnnecessary = require('./get-unnecessary');
let remove1 = [[5,9],[0,10]];
let remove2 = [[0,12]];
/*
test('getUnnecessary({9+5-(2+8)})',() => {
    expect(getUnnecessary('{9+5-(2+8)}')).toStrictEqual(remove1);
}); */

test('getUnnecessary({9+5-(2+8)*4})',() => {
    expect(getUnnecessary('{9+5-(2+8)*8}')).toStrictEqual(remove2);
});