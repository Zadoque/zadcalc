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
    expect(resolve('11.7/1')).toBe('+11.7');
}); 

test("resolve7 '556+728'must return '+1284'",() => {
    expect(resolve('556+728')).toBe('+1284');
}); 


test("resolve8 ''2+3*4-6/2+8-2'must return '+17'",() => {
    expect(resolve('2+3*4-6/2+8-2')).toBe('+17');
}); 

test("resolve9 '1/90'must return '+17'",() => {
    expect(resolve('1/90')).toBe('+0.011111111111111112');
}); 