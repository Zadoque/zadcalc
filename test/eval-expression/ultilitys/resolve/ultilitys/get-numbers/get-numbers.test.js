const getNumbers = require('../../../../../../src/eval-expression/utilities/resolve/utilities/get-numbers/get-numbers');

let numbers = [+6, +3];
let numbers3 = [+556,+728];
let numbers2 = [+11.7,+1];

test(`getNumbers +6*3 must return ${numbers}`, () => {
    expect(getNumbers('+6*3',2)).toStrictEqual(numbers);
});

test(`getNumbers 11.7/1 must return ${numbers2}`, () => {
    expect(getNumbers('11.7/1',4)).toStrictEqual(numbers2);
});

test(`getNumbers 556+728 must return ${numbers3}`, () => {
    expect(getNumbers('556++728',3)).toStrictEqual(numbers3);
}); 