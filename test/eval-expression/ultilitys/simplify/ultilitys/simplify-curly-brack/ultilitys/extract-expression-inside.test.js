const extractExpressionInside = require('../../../../../../../src/eval-expression/ultilitys/simplify/ultilitys/simplify-curly-brack/ultilitys/extract-expression-inside');
let info = {
    resolve_str : '-5+4',
    indexs: [8,13],
    expression: '(2+4)*8-{-5+4}'
}
let info1 = {
    resolve_str: '-2[9.4/8.90]6-4/(5-3)-8',
    indexs: [0,24],
    expression: '{-2[9.4/8.90]6-4/(5-3)-8}'
}
test(`extractExpressionInside Curly bracket (2+4)*8-{-5+4} must return ${info}`, () => {
    expect(extractExpressionInside('(2+4)*8-{-5+4}')).toStrictEqual(info);
});

test(`extractExpressionInside Curly bracket {-2[9.4/8.90]6-4/(5-3)-8} must return -2[9.4/8.90]6-4/(5-3)-8`, () => {
    expect(extractExpressionInside('{-2[9.4/8.90]6-4/(5-3)-8}')).toStrictEqual(info1);
});