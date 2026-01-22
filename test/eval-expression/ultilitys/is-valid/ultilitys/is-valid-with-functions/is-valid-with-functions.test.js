const isValidWithFunctions = require("./../../../../../../src/eval-expression/utilities/is-valid/ultilitys/is-valid-with-functions/is-valid-with-functions");

test("", () => {
    expect(isValidWithFunctions("sen(34)")).toBe(true);
})