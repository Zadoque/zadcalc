const resolve = require('./resolve.js');

test("Resolve1( '7-2+6+3') must return '14'",() => {
    expect(resolve('7-2+6+3')).toBe('+14');
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
test("resolve5 '11.7/0'must return 'Error! divisão por zero'",() => {
    expect(resolve('11.7/0')).toBe('Error! divisão por zero');
}); 

test("resolve6 '11.7/1'must return '+11.7'",() => {
    expect(resolve('11.7/1')).toBe('11.7');
}); 

test("resolve7 '556'must return '+11.7'",() => {
    expect(resolve('11.7/1')).toBe('11.7');
}); 