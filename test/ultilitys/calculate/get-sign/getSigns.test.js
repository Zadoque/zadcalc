const getSigns =  require('./getSigns.js')
let test1 = [true, false];
test(` Get signs(+2*-6, 2) must return ${test1}`, () => {
    expect(getSigns('+2*-6', 2)).toStrictEqual(test1);
});

test(` Get signs(5-5+13+2*-6, 2) must return ${test1}`, () => {
    expect(getSigns('+5-5+13+2*-6', 9)).toStrictEqual(test1);
});