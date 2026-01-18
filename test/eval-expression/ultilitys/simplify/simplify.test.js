const simplify = require(`../../../../src/eval-expression/utilities/simplify/simplify`);

test(`simplifyParentheses (2+4)*8 must return 6`, () => {
    expect(simplify(`(2+4)*8`)).toBe(`+6*8`);
});

test(`simplify {(3-1)(2+4)}*8 must return 2*6*8`, () => {
    expect(simplify(`{(3-1)(2+4)}*8`)).toBe(`+12*8`);
});

test(`simplify {-2[9.4/8.0]6-4/(5-3)-8} must return 2*6*8`, () => {
    expect(simplify(`{-2*[9.4/8.0]*6-4/(5-3)-8}`)).toBe(`-24.1`);
});


test(`simplify {{[[(2+3)]]} must return +5`, () => {
    expect(simplify(`{(2+3)}`)).toBe(`+5`);
});


test(`simplify 2+3*4-[6/2]+8-2 must return "2+3*4-3+8-2"`, () => {
    expect(simplify(`2+3*4-[6/2]+8-2`)).toBe(`2+3*4-3+8-2`);
});



test(`simplify  '(2*3)*4-[6/2]+8-2' must return "+6*4-3+8-2"`, () => {
    expect(simplify(`(2*3)*4-[6/2]+8-2`)).toBe(`+6*4-3+8-2`);
});

test(`simplify('2^(3)+5') must return 2^3+5`, () => {
    expect(simplify(`2^(3)+5`)).toBe(`2^3+5`);
});

test(`simplify('(2)^(3)+5') must return 2^3+5`, () => {
    expect(simplify(`(2)^(3)+5`)).toBe(`2^3+5`);
});


test(`simplify('(-2)^(3)+5') must return @NEG2^3+5`, () => {
    expect(simplify(`(-2)^(3)+5`)).toBe(`@NEG2^3+5`);
});


test(`simplify('(-2+1)^(3)+5') must return @NEG1^3+5`, () => {
    expect(simplify(`(-2+1)^(3)+5`)).toBe(`@NEG1^3+5`);
});


test(`simplify('(-2{3-5})^(3)+5') must return 4^3+5`, () => {
    expect(simplify(`(-2{3-5})^(3)+5`)).toBe(`+4^3+5`);
});

