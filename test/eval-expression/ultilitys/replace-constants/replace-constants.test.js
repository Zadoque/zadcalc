const replaceConstants = require("../../../../src/eval-expression/utilities/replace-constants/replace-constants");

test("", () => {
    expect(replaceConstants("2E4")).toBe(`2*${Math.E}*4`);
})