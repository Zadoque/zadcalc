const getNumbers = require('./get-numbers.js');

let numbers = [+6, +3];
let numbers3 = [+556,+728];
let numbers2 = [+11.7,+1];

test(`getNumbers +6*3 must return ${numbers}`, () => {
    expect(getNumbers('+6*3',2)).toStrictEqual(numbers);
});

test(`getNumbers 11.7/1 must return ${numbers2}`, () => {
    expect(getNumbers('11.7/1')).toStrictEqual(numbers2);
});

test(`getNumbers 556+728 must return ${numbers3}`, () => {
    expect(getNumbers('556+728')).toStrictEqual(numbers3);
}); 