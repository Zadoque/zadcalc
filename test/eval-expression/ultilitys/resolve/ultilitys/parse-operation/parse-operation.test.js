const parseOperation = require('../../../../../../src/eval-expression/ultilitys/resolve/ultilitys/parse-operation/parse-operation')
let info1 = {
    index_start: 0,
    index_op: 6,
    index_end: 10,
    sign: '+'
}
let info2 = {
    index_start: 0,
    index_op: 4,
    index_end: 5,
    sign: '/'
}
let info3 = {
    index_start: 0,
    index_op: 3,
    index_end: 6,
    sign: '+'
}
test(`ExtractOperation -509.8+6.98-3 must return ${info1}`, () => {
    expect(parseOperation('-509.8+6.98-3')).toStrictEqual(info1);
});

test(`ExtractOperation 11.7/1 must return ${info2}`, () => {
    expect(parseOperation('11.7/1')).toStrictEqual(info2);
});

test(`ExtractOperation 556+728 must return ${info3}`, () => {
    expect(parseOperation('556+728')).toStrictEqual(info3);
});