const getSigns =  require('../../../../../../../src/eval-expression/utilities/resolve/utilities/get-numbers/utilities/get-signs')
let test1 = ['+', '-'];
let test2 = ['+', '+'];
7-2+6*3
test(` Get signs(+2*-6, 2) must return ${test1}`, () => {
    expect(getSigns('+2*-6', 1,2)).toStrictEqual(test1);
});

test(` Get signs(5-5+13+2*-6, 2) must return ${test1}`, () => {
    expect(getSigns('+5-5+13+2*-6', 8,9)).toStrictEqual(test1);
});

test(` Get signs(7-2+6*3, 5) must return ${test2}`, () => {
    expect(getSigns('7-2+6*3', 4,5)).toStrictEqual(test2);
});
test(` Get signs('7-2+6*-3-55-3', 5) must return ${test1}`, () => {
    expect(getSigns('7-2+6*-3-55-3', 4,5)).toStrictEqual(test1);
});

test(` Get signs('11.7/1, 4,0) must return ${test2}`, () => {
    expect(getSigns('11.7/1',0, 4)).toStrictEqual(test2);
});