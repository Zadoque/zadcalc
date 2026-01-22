const isValid = require('../../../../src/eval-expression/utilities/is-valid/is-valid'); 


test("Case 1.2 isValid('5*(2-+1)')", () => {
    expect(isValid('5*(2-+1)')).toStrictEqual(['5*(2-+1)', false]);
});