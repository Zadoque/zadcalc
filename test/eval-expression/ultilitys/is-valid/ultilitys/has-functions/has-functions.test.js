const hasFunctions = require("../../../../../../src/eval-expression/utilities/is-valid/ultilitys/has-functions/has-functions");


test("", () => {
    expect(hasFunctions("sqrt(2+3)")).toBe(true);
});