const hasFunctions = require("../../../../src/eval-expression/utilities/has-functions/has-functions");


test("", () => {
    expect(hasFunctions("sqrt(2+3)")).toBe(true);
});