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

// ===== EXPONENCIAÇÃO SIMPLES =====
test(`simplify('2^(3)+5') must return 2^3+5`, () => {
    expect(simplify(`2^(3)+5`)).toBe(`2^3+5`);
});

test(`simplify('(2)^(3)+5') must return 2^3+5`, () => {
    expect(simplify(`(2)^(3)+5`)).toBe(`2^3+5`);
});

test(`simplify('10^(2)') must return 10^2`, () => {
    expect(simplify(`10^(2)`)).toBe(`10^2`);
});

test(`simplify('5^(3)*2') must return 5^3*2`, () => {
    expect(simplify(`5^(3)*2`)).toBe(`5^3*2`);
});

test(`simplify('100^(0.5)') must return 100^0.5`, () => {
    expect(simplify(`100^(0.5)`)).toBe(`100^0.5`);
});

// ===== BASE NEGATIVA =====
test(`simplify('(-2)^(3)+5') must return @NEG2^3+5`, () => {
    expect(simplify(`(-2)^(3)+5`)).toBe(`@NEG2^3+5`);
});

test(`simplify('(-3)^(2)') must return @NEG3^2`, () => {
    expect(simplify(`(-3)^(2)`)).toBe(`@NEG3^2`);
});

test(`simplify('(-5)^4') must return @NEG5^4`, () => {
    expect(simplify(`(-5)^4`)).toBe(`@NEG5^4`);
});

test(`simplify('(-10)^(3)*2') must return @NEG10^3*2`, () => {
    expect(simplify(`(-10)^(3)*2`)).toBe(`@NEG10^3*2`);
});

test(`simplify('(-1)^(100)') must return @NEG1^100`, () => {
    expect(simplify(`(-1)^(100)`)).toBe(`@NEG1^100`);
});

// ===== BASE É EXPRESSÃO (RESULTADO NEGATIVO) =====
test(`simplify('(-2+1)^(3)+5') must return @NEG1^3+5`, () => {
    expect(simplify(`(-2+1)^(3)+5`)).toBe(`@NEG1^3+5`);
});

test(`simplify('(1-3)^(2)') must return @NEG2^2`, () => {
    expect(simplify(`(1-3)^(2)`)).toBe(`@NEG2^2`);
});

test(`simplify('(5-10)^(3)') must return @NEG5^3`, () => {
    expect(simplify(`(5-10)^(3)`)).toBe(`@NEG5^3`);
});

test(`simplify('(-1*3)^(4)') must return @NEG3^4`, () => {
    expect(simplify(`(-1*3)^(4)`)).toBe(`@NEG3^4`);
});

// ===== BASE É EXPRESSÃO (RESULTADO POSITIVO) =====
test(`simplify('(-2{3-5})^(3)+5') must return +4^3+5`, () => {
    expect(simplify(`(-2{3-5})^(3)+5`)).toBe(`+4^3+5`);
});

test(`simplify('(2+3)^(2)') must return +5^2`, () => {
    expect(simplify(`(2+3)^(2)`)).toBe(`+5^2`);
});

test(`simplify('(10-3)^(3)') must return +7^3`, () => {
    expect(simplify(`(10-3)^(3)`)).toBe(`+7^3`);
});

test(`simplify('(2*4)^(2)+1') must return +8^2+1`, () => {
    expect(simplify(`(2*4)^(2)+1`)).toBe(`+8^2+1`);
});

test(`simplify('(15/3)^(4)') must return +5^4`, () => {
    expect(simplify(`(15/3)^(4)`)).toBe(`+5^4`);
});

test(`simplify('(1+1+1)^(2)*3') must return +3^2*3`, () => {
    expect(simplify(`(1+1+1)^(2)*3`)).toBe(`+3^2*3`);
});

// ===== EXPOENTE É EXPRESSÃO =====
test(`simplify('2^(1+2)') must return 2^+3`, () => {
    expect(simplify(`2^(1+2)`)).toBe(`2^+3`);
});

test(`simplify('3^(4-1)+5') must return 3^+3+5`, () => {
    expect(simplify(`3^(4-1)+5`)).toBe(`3^+3+5`);
});

test(`simplify('10^(2*2)') must return 10^+4`, () => {
    expect(simplify(`10^(2*2)`)).toBe(`10^+4`);
});

test(`simplify('5^(6/2)') must return 5^+3`, () => {
    expect(simplify(`5^(6/2)`)).toBe(`5^+3`);
});

test(`simplify('2^(2+2+1)*3') must return 2^+5*3`, () => {
    expect(simplify(`2^(2+2+1)*3`)).toBe(`2^+5*3`);
});

// ===== AMBOS SÃO EXPRESSÕES =====
test(`simplify('(1+1)^(2+1)') must return +2^+3`, () => {
    expect(simplify(`(1+1)^(2+1)`)).toBe(`+2^+3`);
});

test(`simplify('(10/2)^(3-1)+7') must return +5^+2+7`, () => {
    expect(simplify(`(10/2)^(3-1)+7`)).toBe(`+5^+2+7`);
});

test(`simplify('(2*2)^(1+1)') must return +4^+2`, () => {
    expect(simplify(`(2*2)^(1+1)`)).toBe(`+4^+2`);
});

test(`simplify('(5-2)^(2*2)*5') must return +3^+4*5`, () => {
    expect(simplify(`(5-2)^(2*2)*5`)).toBe(`+3^+4*5`);
});

// ===== COM COLCHETES E CHAVES =====
test(`simplify('[2]^{3}') must return 2^3`, () => {
    expect(simplify(`[2]^{3}`)).toBe(`2^3`);
});

test(`simplify('{2+3}^[2]') must return +5^2`, () => {
    expect(simplify(`{2+3}^[2]`)).toBe(`+5^2`);
});

test(`simplify('[-5]^{2}+1') must return @NEG5^2+1`, () => {
    expect(simplify(`[-5]^{2}+1`)).toBe(`@NEG5^2+1`);
});

test(`simplify('{10-3}^{2}') must return +7^2`, () => {
    expect(simplify(`{10-3}^{2}`)).toBe(`+7^2`);
});

// ===== CASOS COMPLEXOS =====
test(`simplify('(2+3)^(2)+5^(2)') must return +5^2+5^2`, () => {
    expect(simplify(`(2+3)^(2)+5^(2)`)).toBe(`+5^2+5^2`);
});

test(`simplify('(-1)^(2)+(-2)^(3)') must return @NEG1^2+@NEG2^3`, () => {
    expect(simplify(`(-1)^(2)+(-2)^(3)`)).toBe(`@NEG1^2+@NEG2^3`);
});

test(`simplify('2^(3)+3^(2)') must return 2^3+3^2`, () => {
    expect(simplify(`2^(3)+3^(2)`)).toBe(`2^3+3^2`);
});
