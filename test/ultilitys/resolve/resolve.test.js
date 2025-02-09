const resolve = require('./resolve.js');

test("Resolve1( '7-2+6+3') must return '14'",() => {
    expect(resolve('7-2+6+3')).toBe('14');
});

test("resolve2 '7-2+6*3-55-3'must return '-35'",() => {
    expect(resolve('7-2+6*3-55-3')).toBe('-35');
});

test("resolve3 '7-2+6*-3-55-3'must return '-71'",() => {
    expect(resolve('7-2+6*-3-55-3')).toBe('-71');
}); 

test("resolve4 '11+3'must return '14'",() => {
    expect(resolve('11*-3')).toBe('-33');
}); 