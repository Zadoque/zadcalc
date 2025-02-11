const extractExpressionInside = require('./extract-expression-inside');
let info = {
    resolve_str : '(2+4)*8',
    indexs: [0,8],
    expression: '[(2+4)*8]'
}
test(`extractExpressionInside bracket (2+4)*8 must return ${info}`, () => {
    expect(extractExpressionInside('[(2+4)*8]')).toStrictEqual(info);
});