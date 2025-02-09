const getNumbers = require('./get-numbers.js');

    let numbers = [+6, +3]

test(`getNumbers +6*3 must return ${numbers}`, () => {
    expect(getNumbers('+6*3',2)).toStrictEqual(numbers);
});