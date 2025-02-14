const extractMultOrDiv = require('../../../../../../../../src/eval-expression/utilities/resolve/utilities/parse-operation/utilities/extract-mult-or-div/extract-mult-or-div');
let info1 = {
    index_start: 11,
    index_op: 13,
    index_end: 14,
    sign: '*'
}
test(`Extract opera -509.8+6.98-3*9 must return ${info1}`, () => {
    expect(extractMultOrDiv('-509.8+6.98-3*9')).toStrictEqual(info1);
});