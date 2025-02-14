const extractExpressionInside = require('../../../../../../../src/eval-expression/utilities/simplify/utilities/simplify-square-brack/utilities/extract-expression-inside');
let info = {
    resolve_str : '(2+4)*8',
    indexs: [0,8],
    expression: '[(2+4)*8]'
}
test(`extractExpressionInside bracket (2+4)*8 must return ${info}`, () => {
    expect(extractExpressionInside('[(2+4)*8]')).toStrictEqual(info);
});