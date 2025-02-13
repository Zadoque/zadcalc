const extractExpressionInside = require('../../../../../../../src/eval-expression/ultilitys/simplify/ultilitys/simplify-parentheses/ultilitys/extract-expression-inside');
let info = {
    resolve_str : '2+4',
    indexs: [0,4],
    expression: '(2+4)*8'
}
test(`extractExpressionInside (2+4)*8 must return ${info}`, () => {
    expect(extractExpressionInside('(2+4)*8')).toStrictEqual(info);
});