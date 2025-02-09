const getNumbers = require('./getNumbers.js');
let info = {
    indexs : [1,3],
    numbers: ['6','3']
}
test(`getNumbers +6*3 must return ${info}`, () => {
    expect(getNumbers('+6*3',2)).toStrictEqual(info);
});