const isValid = require('../../../../src/eval-expression/utilities/is-valid/is-valid'); 

// Case 1: Two signs together
test("Case 1.1 isValid('++2')", () => {
    expect(isValid('++2')).toBe(false);
});
test("Case 1.2 isValid('5*(2-+1)')", () => {
    expect(isValid('5*(2-+1)')).toBe(false);
});
test("Case 1.3 isValid('3**2')", () => {
    expect(isValid('3**2')).toBe(false);
});
test("Case 1.4 isValid('--4')", () => {
    expect(isValid('--4')).toBe(false);
});
test("Case 1.5 isValid('7//2')", () => {
    expect(isValid('7//2')).toBe(false);
});

// Case 2: Empty curly brackets
test("Case 2.1 isValid('{}')", () => {
    expect(isValid('{}')).toBe(false);
});
test("Case 2.2 isValid('{+}')", () => {
    expect(isValid('{+}')).toBe(false);
});
test("Case 2.3 isValid('{*}')", () => {
    expect(isValid('{*}')).toBe(false);
});
test("Case 2.4 isValid('{/}')", () => {
    expect(isValid('{/}')).toBe(false);
});
test("Case 2.5 isValid('{-}')", () => {
    expect(isValid('{-}')).toBe(false);
});

// Case 3: Empty parentheses
test("Case 3.1 isValid('()')", () => {
    expect(isValid('()')).toBe(false);
});
test("Case 3.2 isValid('(+)')", () => {
    expect(isValid('(+)')).toBe(false);
});
test("Case 3.3 isValid('(*)')", () => {
    expect(isValid('(*)')).toBe(false);
});
test("Case 3.4 isValid('(/)')", () => {
    expect(isValid('(/)')).toBe(false);
});
test("Case 3.5 isValid('(-)')", () => {
    expect(isValid('(-)')).toBe(false);
});

// Case 4: Empty square brackets
test("Case 4.1 isValid('[]')", () => {
    expect(isValid('[]')).toBe(false);
});
test("Case 4.2 isValid('[+]')", () => {
    expect(isValid('[+]')).toBe(false);
});
test("Case 4.3 isValid('[*]')", () => {
    expect(isValid('[*]')).toBe(false);
});
test("Case 4.4 isValid('[/]')", () => {
    expect(isValid('[/]')).toBe(false);
});
test("Case 4.5 isValid('[-]')", () => {
    expect(isValid('[-]')).toBe(false);
});

// Case 5: '*' or '/' after an opening bracket
test("Case 5.1 isValid('{*2}')", () => {
    expect(isValid('{*2}')).toBe(false);
});
test("Case 5.2 isValid('[*3]')", () => {
    expect(isValid('[*3]')).toBe(false);
});
test("Case 5.3 isValid('(*4)')", () => {
    expect(isValid('(*4)')).toBe(false);
});
test("Case 5.4 isValid('{/5}')", () => {
    expect(isValid('{/5}')).toBe(false);
});
test("Case 5.5 isValid('[/6]')", () => {
    expect(isValid('[/6]')).toBe(false);
});

// Case 6: Non-number before a dot
test("Case 6.1 isValid('+.5')", () => {
    expect(isValid('+.5')).toBe(false);
});
test("Case 6.2 isValid('*.5')", () => {
    expect(isValid('*.5')).toBe(false);
});
test("Case 6.3 isValid('/.5')", () => {
    expect(isValid('/.5')).toBe(false);
});
test("Case 6.4 isValid('- .5')", () => {
    expect(isValid('- .5')).toBe(false);
});
test("Case 6.5 isValid('  .5')", () => {
    expect(isValid('  .5')).toBe(false);
});

// Case 7: Non-number after a dot
test("Case 7.1 isValid('5.+')", () => {
    expect(isValid('5.+')).toBe(false);
});
test("Case 7.2 isValid('5.*')", () => {
    expect(isValid('5.*')).toBe(false);
});
test("Case 7.3 isValid('5./')", () => {
    expect(isValid('5./')).toBe(false);
});
test("Case 7.4 isValid('5.-')", () => {
    expect(isValid('5.-')).toBe(false);
});
test("Case 7.5 isValid('5. ') ", () => {
    expect(isValid('5. ')).toBe(false);
});

// Case 8: Dot at beginning or end
test("Case 8.1 isValid('.5')", () => {
    expect(isValid('.5')).toBe(false);
});
test("Case 8.2 isValid('5.')", () => {
    expect(isValid('5.')).toBe(false);
});
test("Case 8.3 isValid('.')", () => {
    expect(isValid('.')).toBe(false);
});
test("Case 8.4 isValid('..')", () => {
    expect(isValid('..')).toBe(false);
});
test("Case 8.5 isValid(' . ') ", () => {
    expect(isValid(' . ')).toBe(false);
});

// Case 9: Multiple dots in a number
test("Case 9.1 isValid('5.5.5')", () => {
    expect(isValid('5.5.5')).toBe(false);
});
test("Case 9.2 isValid('12.34.56')", () => {
    expect(isValid('12.34.56')).toBe(false);
});
test("Case 9.3 isValid('1..2')", () => {
    expect(isValid('1..2')).toBe(false);
});
test("Case 9.4 isValid('3.14.159')", () => {
    expect(isValid('3.14.159')).toBe(false);
});
test("Case 9.5 isValid('99.99.99')", () => {
    expect(isValid('99.99.99')).toBe(false);
});

test("Case 10.0 isValid('{2+4}}')", () => {
    expect(isValid('{2+4}}')).toBe(false);
});

test("Case 10.1 isValid('5')", () => {
    expect(isValid('5')).toBe(true);
});

test("Case 11 IsValid('-3+2')", () => {
    expect(isValid('-3+2')).toBe(true);
});



// ============================================================================
// GRUPO 1: Casos Básicos Válidos (10 testes)
// ============================================================================

test("Case 1.1: isValid('5')", () => {
    expect(isValid('5')).toBe(true);
});

test("Case 1.2: isValid('123')", () => {
    expect(isValid('123')).toBe(true);
});

test("Case 1.3: isValid('-5')", () => {
    expect(isValid('-5')).toBe(true);
});

test("Case 1.4: isValid('-123')", () => {
    expect(isValid('-123')).toBe(true);
});

test("Case 1.5: isValid('0')", () => {
    expect(isValid('0')).toBe(true);
});

test("Case 1.6: isValid('-0')", () => {
    expect(isValid('-0')).toBe(true);
});

test("Case 1.7: isValid('999999')", () => {
    expect(isValid('999999')).toBe(true);
});

test("Case 1.8: isValid('2+3')", () => {
    expect(isValid('2+3')).toBe(true);
});

test("Case 1.9: isValid('5-2')", () => {
    expect(isValid('5-2')).toBe(true);
});

test("Case 1.10: isValid('-3+2')", () => {
    expect(isValid('-3+2')).toBe(true);
});

// ============================================================================
// GRUPO 2: Operações Básicas Válidas (15 testes)
// ============================================================================

test("Case 2.1: isValid('2*3')", () => {
    expect(isValid('2*3')).toBe(true);
});

test("Case 2.2: isValid('10/2')", () => {
    expect(isValid('10/2')).toBe(true);
});

test("Case 2.3: isValid('2+3*4')", () => {
    expect(isValid('2+3*4')).toBe(true);
});

test("Case 2.4: isValid('10/2-3')", () => {
    expect(isValid('10/2-3')).toBe(true);
});

test("Case 2.5: isValid('1+2+3+4+5')", () => {
    expect(isValid('1+2+3+4+5')).toBe(true);
});

test("Case 2.6: isValid('10-5-2-1')", () => {
    expect(isValid('10-5-2-1')).toBe(true);
});

test("Case 2.7: isValid('2*3*4*5')", () => {
    expect(isValid('2*3*4*5')).toBe(true);
});

test("Case 2.8: isValid('100/10/2')", () => {
    expect(isValid('100/10/2')).toBe(true);
});

test("Case 2.9: isValid('2+3-4*5/6')", () => {
    expect(isValid('2+3-4*5/6')).toBe(true);
});

test("Case 2.10: isValid('-5*3')", () => {
    expect(isValid('-5*3')).toBe(true);
});

test("Case 2.11: isValid('-10/2')", () => {
    expect(isValid('-10/2')).toBe(true);
});

test("Case 2.12: isValid('5+-3')", () => {
    expect(isValid('5+-3')).toBe(false);
});

test("Case 2.13: isValid('5--3')", () => {
    expect(isValid('5--3')).toBe(false);
});

test("Case 2.14: isValid('5*-3')", () => {
    expect(isValid('5*-3')).toBe(false);
});

test("Case 2.15: isValid('10/-2')", () => {
    expect(isValid('10/-2')).toBe(true);
});

// ============================================================================
// GRUPO 3: Exponenciação Válida (15 testes)
// ============================================================================

test("Case 3.1: isValid('2^3')", () => {
    expect(isValid('2^3')).toBe(true);
});

test("Case 3.2: isValid('5^2')", () => {
    expect(isValid('5^2')).toBe(true);
});

test("Case 3.3: isValid('10^0')", () => {
    expect(isValid('10^0')).toBe(true);
});

test("Case 3.4: isValid('2^10')", () => {
    expect(isValid('2^10')).toBe(true);
});

test("Case 3.5: isValid('3^2+5')", () => {
    expect(isValid('3^2+5')).toBe(true);
});

test("Case 3.6: isValid('2+3^4')", () => {
    expect(isValid('2+3^4')).toBe(true);
});

test("Case 3.7: isValid('2^3*5')", () => {
    expect(isValid('2^3*5')).toBe(true);
});

test("Case 3.8: isValid('10^2/4')", () => {
    expect(isValid('10^2/4')).toBe(true);
});

test("Case 3.9: isValid('2^3^2')", () => {
    expect(isValid('2^3^2')).toBe(true);
});

test("Case 3.10: isValid('5^2-3^2')", () => {
    expect(isValid('5^2-3^2')).toBe(true);
});

test("Case 3.11: isValid('2^3+4^2-5^1')", () => {
    expect(isValid('2^3+4^2-5^1')).toBe(true);
});

test("Case 3.12: isValid('10^2*3^2')", () => {
    expect(isValid('10^2*3^2')).toBe(true);
});

test("Case 3.13: isValid('2^10/2^5')", () => {
    expect(isValid('2^10/2^5')).toBe(true);
});

test("Case 3.14: isValid('3^3^3')", () => {
    expect(isValid('3^3^3')).toBe(true);
});

test("Case 3.15: isValid('-2^3')", () => {
    expect(isValid('-2^3')).toBe(true);
});

// ============================================================================
// GRUPO 4: Notação Científica Válida (20 testes)
// ============================================================================

test("Case 4.1: isValid('1e2')", () => {
    expect(isValid('1e2')).toBe(true);
});

test("Case 4.2: isValid('2e10')", () => {
    expect(isValid('2e10')).toBe(true);
});

test("Case 4.3: isValid('5e0')", () => {
    expect(isValid('5e0')).toBe(true);
});

test("Case 4.4: isValid('1e-2')", () => {
    expect(isValid('1e-2')).toBe(true);
});

test("Case 4.5: isValid('3e+5')", () => {
    expect(isValid('3e+5')).toBe(true);
});

test("Case 4.6: isValid('2.5e3')", () => {
    expect(isValid('2.5e3')).toBe(true);
});

test("Case 4.7: isValid('1.5e-10')", () => {
    expect(isValid('1.5e-10')).toBe(true);
});

test("Case 4.8: isValid('9.99e+99')", () => {
    expect(isValid('9.99e+99')).toBe(true);
});

test("Case 4.9: isValid('1e2+3e4')", () => {
    expect(isValid('1e2+3e4')).toBe(true);
});

test("Case 4.10: isValid('5e3-2e2')", () => {
    expect(isValid('5e3-2e2')).toBe(true);
});

test("Case 4.11: isValid('1e2*3e1')", () => {
    expect(isValid('1e2*3e1')).toBe(true);
});

test("Case 4.12: isValid('1e10/2e5')", () => {
    expect(isValid('1e10/2e5')).toBe(true);
});

test("Case 4.13: isValid('2e3^2')", () => {
    expect(isValid('2e3^2')).toBe(true);
});

test("Case 4.14: isValid('2^3e2')", () => {
    expect(isValid('2^3e2')).toBe(true);
});

test("Case 4.15: isValid('1.5e-3*2.5e+2')", () => {
    expect(isValid('1.5e-3*2.5e+2')).toBe(true);
});

test("Case 4.16: isValid('0e0')", () => {
    expect(isValid('0e0')).toBe(true);
});

test("Case 4.17: isValid('1e100')", () => {
    expect(isValid('1e100')).toBe(true);
});

test("Case 4.18: isValid('1e-100')", () => {
    expect(isValid('1e-100')).toBe(true);
});

test("Case 4.19: isValid('6.022e23')", () => {
    expect(isValid('6.022e23')).toBe(true);
});

test("Case 4.20: isValid('-1e2')", () => {
    expect(isValid('-1e2')).toBe(true);
});

// ============================================================================
// GRUPO 5: Decimais Válidos (10 testes)
// ============================================================================

test("Case 5.1: isValid('3.14')", () => {
    expect(isValid('3.14')).toBe(true);
});

test("Case 5.2: isValid('0.5')", () => {
    expect(isValid('0.5')).toBe(true);
});

test("Case 5.3: isValid('0.0001')", () => {
    expect(isValid('0.0001')).toBe(true);
});

test("Case 5.4: isValid('123.456')", () => {
    expect(isValid('123.456')).toBe(true);
});

test("Case 5.5: isValid('2.5+3.7')", () => {
    expect(isValid('2.5+3.7')).toBe(true);
});

test("Case 5.6: isValid('10.5-3.2')", () => {
    expect(isValid('10.5-3.2')).toBe(true);
});

test("Case 5.7: isValid('2.5*3.5')", () => {
    expect(isValid('2.5*3.5')).toBe(true);
});

test("Case 5.8: isValid('10.5/2.5')", () => {
    expect(isValid('10.5/2.5')).toBe(true);
});

test("Case 5.9: isValid('2.5^3.2')", () => {
    expect(isValid('2.5^3.2')).toBe(true);
});

test("Case 5.10: isValid('-3.14')", () => {
    expect(isValid('-3.14')).toBe(true);
});

// ============================================================================
// GRUPO 6: Brackets Válidos (15 testes)
// ============================================================================

test("Case 6.1: isValid('(2+3)')", () => {
    expect(isValid('(2+3)')).toBe(true);
});

test("Case 6.2: isValid('[5-2]')", () => {
    expect(isValid('[5-2]')).toBe(true);
});

test("Case 6.3: isValid('{10*3}')", () => {
    expect(isValid('{10*3}')).toBe(true);
});

test("Case 6.4: isValid('(2+3)*4')", () => {
    expect(isValid('(2+3)*4')).toBe(true);
});

test("Case 6.5: isValid('2*(3+4)')", () => {
    expect(isValid('2*(3+4)')).toBe(true);
});

test("Case 6.6: isValid('(2+3)*(4+5)')", () => {
    expect(isValid('(2+3)*(4+5)')).toBe(true);
});

test("Case 6.7: isValid('((2+3))')", () => {
    expect(isValid('((2+3))')).toBe(true);
});

test("Case 6.8: isValid('[{(5)}]')", () => {
    expect(isValid('[{(5)}]')).toBe(true);
});

test("Case 6.9: isValid('(2+3)^2')", () => {
    expect(isValid('(2+3)^2')).toBe(true);
});

test("Case 6.10: isValid('2^(3+1)')", () => {
    expect(isValid('2^(3+1)')).toBe(true);
});

test("Case 6.11: isValid('{2^3}+5')", () => {
    expect(isValid('{2^3}+5')).toBe(true);
});

test("Case 6.12: isValid('[5^2]')", () => {
    expect(isValid('[5^2]')).toBe(true);
});

test("Case 6.13: isValid('(1e2+3e1)')", () => {
    expect(isValid('(1e2+3e1)')).toBe(true);
});

test("Case 6.14: isValid('[2.5*3.7]')", () => {
    expect(isValid('[2.5*3.7]')).toBe(true);
});

test("Case 6.15: isValid('{[(1+2)*3]-[4/5]}')", () => {
    expect(isValid('{[(1+2)*3]-[4/5]}')).toBe(true);
});

// ============================================================================
// GRUPO 7: Casos Inválidos - Operadores (15 testes)
// ============================================================================

test("Case 7.1: isValid('++2')", () => {
    expect(isValid('++2')).toBe(false);
});

test("Case 7.2: isValid('5*(2-+1)')", () => {
    expect(isValid('5*(2-+1)')).toBe(false);
});

test("Case 7.3: isValid('3**2')", () => {
    expect(isValid('3**2')).toBe(false);
});

test("Case 7.4: isValid('--4')", () => {
    expect(isValid('--4')).toBe(false);
});

test("Case 7.5: isValid('7//2')", () => {
    expect(isValid('7//2')).toBe(false);
});

test("Case 7.6: isValid('*5')", () => {
    expect(isValid('*5')).toBe(false);
});

test("Case 7.7: isValid('/10')", () => {
    expect(isValid('/10')).toBe(false);
});

test("Case 7.8: isValid('^3')", () => {
    expect(isValid('^3')).toBe(false);
});

test("Case 7.9: isValid('5+')", () => {
    expect(isValid('5+')).toBe(false);
});

test("Case 7.10: isValid('5*')", () => {
    expect(isValid('5*')).toBe(false);
});

test("Case 7.11: isValid('5/')", () => {
    expect(isValid('5/')).toBe(false);
});

test("Case 7.12: isValid('5^')", () => {
    expect(isValid('5^')).toBe(false);
});

test("Case 7.13: isValid('2^^3')", () => {
    expect(isValid('2^^3')).toBe(false);
});

test("Case 7.14: isValid('2^*3')", () => {
    expect(isValid('2^*3')).toBe(false);
});

test("Case 7.15: isValid('2^+^3')", () => {
    expect(isValid('2^+^3')).toBe(false);
});

// ============================================================================
// GRUPO 8: Casos Inválidos - Brackets (10 testes)
// ============================================================================

test("Case 8.1: isValid('{}')", () => {
    expect(isValid('{}')).toBe(false);
});

test("Case 8.2: isValid('()')", () => {
    expect(isValid('()')).toBe(false);
});

test("Case 8.3: isValid('[]')", () => {
    expect(isValid('[]')).toBe(false);
});

test("Case 8.4: isValid('{+}')", () => {
    expect(isValid('{+}')).toBe(false);
});

test("Case 8.5: isValid('(*)')", () => {
    expect(isValid('(*)')).toBe(false);
});

test("Case 8.6: isValid('[/]')", () => {
    expect(isValid('[/]')).toBe(false);
});

test("Case 8.7: isValid('(2+3')", () => {
    expect(isValid('(2+3')).toBe(false);
});

test("Case 8.8: isValid('2+3)')", () => {
    expect(isValid('2+3)')).toBe(false);
});

test("Case 8.9: isValid('[{(5)}')", () => {
    expect(isValid('[{(5)}')).toBe(false);
});

test("Case 8.10: isValid('({*2}')", () => {
    expect(isValid('({*2}')).toBe(false);
});

// ============================================================================
// GRUPO 9: Casos Inválidos - Decimais (10 testes)
// ============================================================================

test("Case 9.1: isValid('.5')", () => {
    expect(isValid('.5')).toBe(false);
});

test("Case 9.2: isValid('5.')", () => {
    expect(isValid('5.')).toBe(false);
});

test("Case 9.3: isValid('.')", () => {
    expect(isValid('.')).toBe(false);
});

test("Case 9.4: isValid('5.5.5')", () => {
    expect(isValid('5.5.5')).toBe(false);
});

test("Case 9.5: isValid('1..2')", () => {
    expect(isValid('1..2')).toBe(false);
});

test("Case 9.6: isValid('+.5')", () => {
    expect(isValid('+.5')).toBe(false);
});

test("Case 9.7: isValid('*.5')", () => {
    expect(isValid('*.5')).toBe(false);
});

test("Case 9.8: isValid('5.+')", () => {
    expect(isValid('5.+')).toBe(false);
});

test("Case 9.9: isValid('5.*')", () => {
    expect(isValid('5.*')).toBe(false);
});

test("Case 9.10: isValid('3.14.159')", () => {
    expect(isValid('3.14.159')).toBe(false);
});

// ============================================================================
// GRUPO 10: Casos Inválidos - Notação Científica (10 testes)
// ============================================================================

test("Case 10.1: isValid('e2')", () => {
    expect(isValid('e2')).toBe(false);
});

test("Case 10.2: isValid('1e')", () => {
    expect(isValid('1e')).toBe(false);
});

test("Case 10.3: isValid('2e+')", () => {
    expect(isValid('2e+')).toBe(false);
});

test("Case 10.4: isValid('3e-')", () => {
    expect(isValid('3e-')).toBe(false);
});

test("Case 10.5: isValid('1ee2')", () => {
    expect(isValid('1ee2')).toBe(false);
});

test("Case 10.6: isValid('2e++3')", () => {
    expect(isValid('2e++3')).toBe(false);
});

test("Case 10.7: isValid('3e--2')", () => {
    expect(isValid('3e--2')).toBe(false);
});

test("Case 10.8: isValid('2e*3')", () => {
    expect(isValid('2e*3')).toBe(false);
});

test("Case 10.9: isValid('5e/2')", () => {
    expect(isValid('5e/2')).toBe(false);
});

test("Case 10.10: isValid('1.5e')", () => {
    expect(isValid('1.5e')).toBe(false);
});

// ============================================================================
// GRUPO 11: Casos Inválidos - Caracteres (10 testes)
// ============================================================================

test("Case 11.1: isValid('')", () => {
    expect(isValid('')).toBe(false);
});

test("Case 11.2: isValid(' ')", () => {
    expect(isValid(' ')).toBe(false);
});

test("Case 11.3: isValid('a')", () => {
    expect(isValid('a')).toBe(false);
});

test("Case 11.4: isValid('x')", () => {
    expect(isValid('x')).toBe(false);
});

test("Case 11.5: isValid('2+x')", () => {
    expect(isValid('2+x')).toBe(false);
});

test("Case 11.6: isValid('$5')", () => {
    expect(isValid('$5')).toBe(false);
});

test("Case 11.7: isValid('2@3')", () => {
    expect(isValid('2@3')).toBe(false);
});

test("Case 11.8: isValid('2#3')", () => {
    expect(isValid('2#3')).toBe(false);
});

test("Case 11.9: isValid('2%3')", () => {
    expect(isValid('2%3')).toBe(false);
});

test("Case 11.10: isValid('2&3')", () => {
    expect(isValid('2&3')).toBe(false);
});

// ============================================================================
// GRUPO 12: Combinações Complexas Válidas (10 testes)
// ============================================================================

test("Case 12.1: isValid('2^3+4^2-5*6/7')", () => {
    expect(isValid('2^3+4^2-5*6/7')).toBe(true);
});

test("Case 12.2: isValid('(1e2+2e1)^3')", () => {
    expect(isValid('(1e2+2e1)^3')).toBe(true);
});

test("Case 12.3: isValid('2.5^3.5*1.5e2')", () => {
    expect(isValid('2.5^3.5*1.5e2')).toBe(true);
});

test("Case 12.4: isValid('((((5))))')", () => {
    expect(isValid('((((5))))')).toBe(true);
});

test("Case 12.5: isValid('{[(2+3)*4]-[5/6]}^2')", () => {
    expect(isValid('{[(2+3)*4]-[5/6]}^2')).toBe(true);
});

test("Case 12.6: isValid('1e2+2e1+3e0+4e-1+5e-2')", () => {
    expect(isValid('1e2+2e1+3e0+4e-1+5e-2')).toBe(true);
});

test("Case 12.7: isValid('2^2^2^2')", () => {
    expect(isValid('2^2^2^2')).toBe(true);
});

test("Case 12.8: isValid('-1e-10*-2e+10')", () => {
    expect(isValid('-1e-10*-2e+10')).toBe(true);
});

test("Case 12.9: isValid('(1+2)*(3+4)*(5+6)')", () => {
    expect(isValid('(1+2)*(3+4)*(5+6)')).toBe(true);
});

test("Case 12.10: isValid('10^2/5^2+3^2-2^2')", () => {
    expect(isValid('10^2/5^2+3^2-2^2')).toBe(true);
});



test("Case 13.1: isValid('1e-102e10') // dois 'e' consecutivos sem operador", () => {
    expect(isValid('1e-102e10')).toBe(false);
});

test("Case 13.2: isValid('3e5e2') // dois 'e' consecutivos", () => {
    expect(isValid('3e5e2')).toBe(false);
});

test("Case 13.3: isValid('2e+10e-5') // dois 'e' com sinais", () => {
    expect(isValid('2e+10e-5')).toBe(false);
});

test("Case 13.4: isValid('1.5e2.5e3') // dois 'e' com decimais", () => {
    expect(isValid('1.5e2.5e3')).toBe(false);
});

test("Case 13.5: isValid('e') // 'e' sozinho", () => {
    expect(isValid('e')).toBe(false);
});

test("Case 13.6: isValid('ee') // duplo 'e'", () => {
    expect(isValid('ee')).toBe(false);
});

test("Case 13.7: isValid('1e2e') // 'e' no final após notação válida", () => {
    expect(isValid('1e2e')).toBe(false);
});

test("Case 13.8: isValid('e1e2') // 'e' no início", () => {
    expect(isValid('e1e2')).toBe(false);
});

test("Case 13.9: isValid('2e+*3') // operador após 'e+'", () => {
    expect(isValid('2e+*3')).toBe(false);
});

test("Case 13.10: isValid('5e-/2') // operador após 'e-'", () => {
    expect(isValid('5e-/2')).toBe(false);
});

test("Case 13.11: isValid('1e 2') // espaço entre 'e' e número", () => {
    expect(isValid('1e 2')).toBe(false);
});

test("Case 13.12: isValid('1 e2') // espaço antes de 'e'", () => {
    expect(isValid('1 e2')).toBe(false);
});

test("Case 13.13: isValid('1e+') // 'e+' sem número", () => {
    expect(isValid('1e+')).toBe(false);
});

test("Case 13.14: isValid('1e-') // 'e-' sem número", () => {
    expect(isValid('1e-')).toBe(false);
});

test("Case 13.15: isValid('2e++10') // duplo sinal após 'e'", () => {
    expect(isValid('2e++10')).toBe(false);
});

test("Case 13.16: isValid('3e--5') // duplo sinal negativo após 'e'", () => {
    expect(isValid('3e--5')).toBe(false);
});

test("Case 13.17: isValid('4e+-2') // sinais misturados após 'e'", () => {
    expect(isValid('4e+-2')).toBe(false);
});

test("Case 13.18: isValid('5e-+3') // sinais misturados após 'e'", () => {
    expect(isValid('5e-+3')).toBe(false);
});

test("Case 13.19: isValid('1e2.5') // decimal no expoente", () => {
    expect(isValid('1e2.5')).toBe(false);
});

test("Case 13.20: isValid('2e3.14') // decimal no expoente", () => {
    expect(isValid('2e3.14')).toBe(false);
});

test("Case 14.1: isValid('2+*3') // + seguido de *", () => {
    expect(isValid('2+*3')).toBe(false);
});

test("Case 14.2: isValid('5-/2') // - seguido de /", () => {
    expect(isValid('5-/2')).toBe(false);
});

test("Case 14.3: isValid('3*/4') // * seguido de /", () => {
    expect(isValid('3*/4')).toBe(false);
});

test("Case 14.4: isValid('7/*2') // / seguido de *", () => {
    expect(isValid('7/*2')).toBe(false);
});

test("Case 14.5: isValid('2^/3') // ^ seguido de /", () => {
    expect(isValid('2^/3')).toBe(false);
});

test("Case 14.6: isValid('5^*2') // ^ seguido de *", () => {
    expect(isValid('5^*2')).toBe(false);
});

test("Case 14.7: isValid('+') // + sozinho", () => {
    expect(isValid('+')).toBe(false);
});

test("Case 14.8: isValid('-') // - sozinho", () => {
    expect(isValid('-')).toBe(false);
});

test("Case 14.9: isValid('*') // * sozinho", () => {
    expect(isValid('*')).toBe(false);
});

test("Case 14.10: isValid('/') // / sozinho", () => {
    expect(isValid('/')).toBe(false);
});

test("Case 14.11: isValid('^') // ^ sozinho", () => {
    expect(isValid('^')).toBe(false);
});

test("Case 14.12: isValid('2+++3') // triplo +", () => {
    expect(isValid('2+++3')).toBe(false);
});

test("Case 14.13: isValid('5---2') // triplo -", () => {
    expect(isValid('5---2')).toBe(false);
});

test("Case 14.14: isValid('3***2') // triplo *", () => {
    expect(isValid('3***2')).toBe(false);
});

test("Case 14.15: isValid('10///2') // triplo /", () => {
    expect(isValid('10///2')).toBe(false);
});

test("Case 14.16: isValid('2^^^3') // triplo ^", () => {
    expect(isValid('2^^^3')).toBe(false);
});

test("Case 14.17: isValid('+-*/^') // sequência de operadores", () => {
    expect(isValid('+-*/^')).toBe(false);
});

test("Case 14.18: isValid('2+3-*4') // - seguido de *", () => {
    expect(isValid('2+3-*4')).toBe(false);
});

test("Case 14.19: isValid('5*6+/2') // + seguido de /", () => {
    expect(isValid('5*6+/2')).toBe(false);
});

test("Case 14.20: isValid('1^2-^3') // - seguido de ^", () => {
    expect(isValid('1^2-^3')).toBe(false);
});

test("Case 15.1: isValid('((2+3)') // falta fechar (", () => {
    expect(isValid('((2+3)')).toBe(false);
});

test("Case 15.2: isValid('(2+3))') // excesso de )", () => {
    expect(isValid('(2+3))')).toBe(false);
});

test("Case 15.3: isValid('[5+2') // falta fechar [", () => {
    expect(isValid('[5+2')).toBe(false);
});

test("Case 15.4: isValid('5+2]') // excesso de ]", () => {
    expect(isValid('5+2]')).toBe(false);
});

test("Case 15.5: isValid('{3*4') // falta fechar {", () => {
    expect(isValid('{3*4')).toBe(false);
});

test("Case 15.6: isValid('3*4}') // excesso de }", () => {
    expect(isValid('3*4}')).toBe(false);
});

test("Case 15.7: isValid('(2+[3)*4]') // ordem errada de fechamento", () => {
    expect(isValid('(2+[3)*4]')).toBe(false);
});

test("Case 15.8: isValid('[{5})') // tipos incompatíveis", () => {
    expect(isValid('[{5})')).toBe(false);
});

test("Case 15.9: isValid('({3}]') // tipos incompatíveis", () => {
    expect(isValid('({3}]')).toBe(false);
});

test("Case 15.10: isValid('[{(1+2)})') // tipos incompatíveis no final", () => {
    expect(isValid('[{(1+2)})')).toBe(false);
});

test("Case 15.11: isValid('((((5))') // faltam 2 fechamentos", () => {
    expect(isValid('((((5))')).toBe(false);
});

test("Case 15.12: isValid('(5))))') // excesso de 2 fechamentos", () => {
    expect(isValid('(5))))')).toBe(false);
});

test("Case 15.13: isValid('(2+3]') // abre ( fecha [", () => {
    expect(isValid('(2+3]')).toBe(false);
});

test("Case 15.14: isValid('[5-2)') // abre [ fecha (", () => {
    expect(isValid('[5-2)')).toBe(false);
});

test("Case 15.15: isValid('{7*3]') // abre { fecha [", () => {
    expect(isValid('{7*3]')).toBe(false);
});

test("Case 15.16: isValid('[(3+4}]') // } no meio de [ ]", () => {
    expect(isValid('[(3+4}]')).toBe(false);
});

test("Case 15.17: isValid('{(2+3})') // ordem errada", () => {
    expect(isValid('{(2+3})')).toBe(false);
});

test("Case 15.18: isValid(')(') // fecha antes de abrir", () => {
    expect(isValid(')(')).toBe(false);
});

test("Case 15.19: isValid('][') // fecha antes de abrir", () => {
    expect(isValid('][')).toBe(false);
});

test("Case 15.20: isValid('}{') // fecha antes de abrir", () => {
    expect(isValid('}{')).toBe(false);
});

test("Case 16.1: isValid('1.2.3') // dois pontos em um número", () => {
    expect(isValid('1.2.3')).toBe(false);
});

test("Case 16.2: isValid('10.5.2.1') // três pontos", () => {
    expect(isValid('10.5.2.1')).toBe(false);
});

test("Case 16.3: isValid('0.0.5') // dois pontos começando com zero", () => {
    expect(isValid('0.0.5')).toBe(false);
});

test("Case 16.4: isValid('2.+3.5') // ponto antes de operador", () => {
    expect(isValid('2.+3.5')).toBe(false);
});

test("Case 16.5: isValid('3.5+.2') // ponto no início do segundo número", () => {
    expect(isValid('3.5+.2')).toBe(false);
});

test("Case 16.6: isValid('1.2.3+4.5.6') // múltiplos números com pontos duplos", () => {
    expect(isValid('1.2.3+4.5.6')).toBe(false);
});

test("Case 16.7: isValid('..5') // dois pontos no início", () => {
    expect(isValid('..5')).toBe(false);
});

test("Case 16.8: isValid('5..') // dois pontos no final", () => {
    expect(isValid('5..')).toBe(false);
});

test("Case 16.9: isValid('1...2') // três pontos consecutivos", () => {
    expect(isValid('1...2')).toBe(false);
});

test("Case 16.10: isValid('1.2.3.4.5') // quatro pontos", () => {
    expect(isValid('1.2.3.4.5')).toBe(false);
});

test("Case 16.11: isValid('2.5.*3.7') // ponto antes de *", () => {
    expect(isValid('2.5.*3.7')).toBe(false);
});

test("Case 16.12: isValid('4.1./2.3') // ponto antes de /", () => {
    expect(isValid('4.1./2.3')).toBe(false);
});

test("Case 16.13: isValid('5.5.^2.2') // pontos duplos com ^", () => {
    expect(isValid('5.5.^2.2')).toBe(false);
});

test("Case 16.14: isValid('1.2.+3.4.') // múltiplos erros de ponto", () => {
    expect(isValid('1.2.+3.4.')).toBe(false);
});

test("Case 16.15: isValid('...') // apenas pontos", () => {
    expect(isValid('...')).toBe(false);
});

test("Case 17.1: isValid('0.1+0.2') // decimais pequenos", () => {
    expect(isValid('0.1+0.2')).toBe(true);
});

test("Case 17.2: isValid('99.99+0.01') // soma de decimais", () => {
    expect(isValid('99.99+0.01')).toBe(true);
});

test("Case 17.3: isValid('3.14159') // pi aproximado", () => {
    expect(isValid('3.14159')).toBe(true);
});

test("Case 17.4: isValid('2.718281') // e aproximado", () => {
    expect(isValid('2.718281')).toBe(true);
});

test("Case 17.5: isValid('0.00001') // decimal muito pequeno", () => {
    expect(isValid('0.00001')).toBe(true);
});

test("Case 17.6: isValid('999.999') // decimal grande", () => {
    expect(isValid('999.999')).toBe(true);
});

test("Case 17.7: isValid('1.1+2.2+3.3') // múltiplos decimais", () => {
    expect(isValid('1.1+2.2+3.3')).toBe(true);
});

test("Case 17.8: isValid('5.5*2.2') // multiplicação de decimais", () => {
    expect(isValid('5.5*2.2')).toBe(true);
});

test("Case 17.9: isValid('10.8/2.4') // divisão de decimais", () => {
    expect(isValid('10.8/2.4')).toBe(true);
});

test("Case 17.10: isValid('3.5^2.5') // exponenciação de decimais", () => {
    expect(isValid('3.5^2.5')).toBe(true);
});

test("Case 17.11: isValid('0.5+0.25+0.125') // frações decimais", () => {
    expect(isValid('0.5+0.25+0.125')).toBe(true);
});

test("Case 17.12: isValid('1.41421356') // raiz de 2 aproximada", () => {
    expect(isValid('1.41421356')).toBe(true);
});

test("Case 17.13: isValid('0.333333') // 1/3 aproximado", () => {
    expect(isValid('0.333333')).toBe(true);
});

test("Case 17.14: isValid('12.34+56.78-90.12') // operações múltiplas", () => {
    expect(isValid('12.34+56.78-90.12')).toBe(true);
});

test("Case 17.15: isValid('0.1*0.2*0.3') // multiplicações de decimais", () => {
    expect(isValid('0.1*0.2*0.3')).toBe(true);
});

test("Case 18.1: isValid('-2^2') // base negativa", () => {
    expect(isValid('-2^2')).toBe(true);
});

test("Case 18.2: isValid('-5^3') // base negativa ímpar", () => {
    expect(isValid('-5^3')).toBe(true);
});

test("Case 18.3: isValid('2^-1') // expoente negativo", () => {
    expect(isValid('2^-1')).toBe(true);
});

test("Case 18.4: isValid('10^-5') // potência de 10 negativa", () => {
    expect(isValid('10^-5')).toBe(true);
});

test("Case 18.5: isValid('-3^-2') // ambos negativos", () => {
    expect(isValid('-3^-2')).toBe(true);
});

test("Case 18.6: isValid('-2^-3') // ambos negativos", () => {
    expect(isValid('-2^-3')).toBe(true);
});

test("Case 18.7: isValid('(-2)^2') // base negativa com parênteses", () => {
    expect(isValid('(-2)^2')).toBe(true);
});

test("Case 18.8: isValid('(-5)^3') // base negativa com parênteses", () => {
    expect(isValid('(-5)^3')).toBe(true);
});

test("Case 18.9: isValid('2^(-1)') // expoente negativo com parênteses", () => {
    expect(isValid('2^(-1)')).toBe(true);
});

test("Case 18.10: isValid('(-2)^(-3)') // ambos com parênteses", () => {
    expect(isValid('(-2)^(-3)')).toBe(true);
});

test("Case 18.11: isValid('-10^2') // base negativa sem parênteses", () => {
    expect(isValid('-10^2')).toBe(true);
});

test("Case 18.12: isValid('3^-4+2^-1') // múltiplos expoentes negativos", () => {
    expect(isValid('3^-4+2^-1')).toBe(true);
});

test("Case 18.13: isValid('-2^3*-3^2') // multiplicação com negativos", () => {
    expect(isValid('-2^3*-3^2')).toBe(true);
});

test("Case 18.14: isValid('(-5)^2-(-3)^2') // subtração com bases negativas", () => {
    expect(isValid('(-5)^2-(-3)^2')).toBe(true);
});

test("Case 18.15: isValid('-1^100') // base -1", () => {
    expect(isValid('-1^100')).toBe(true);
});

test("Case 19.1: isValid('1.23e45') // notação com decimal", () => {
    expect(isValid('1.23e45')).toBe(true);
});

test("Case 19.2: isValid('9.8e1') // 9.8 * 10", () => {
    expect(isValid('9.8e1')).toBe(true);
});

test("Case 19.3: isValid('6.67e-11') // constante gravitacional", () => {
    expect(isValid('6.67e-11')).toBe(true);
});

test("Case 19.4: isValid('1.6e-19') // carga do elétron", () => {
    expect(isValid('1.6e-19')).toBe(true);
});

test("Case 19.5: isValid('3e8') // velocidade da luz", () => {
    expect(isValid('3e8')).toBe(true);
});

test("Case 19.6: isValid('6.022e23') // número de Avogadro", () => {
    expect(isValid('6.022e23')).toBe(true);
});

test("Case 19.7: isValid('1e-10+1e-11') // soma de notações pequenas", () => {
    expect(isValid('1e-10+1e-11')).toBe(true);
});

test("Case 19.8: isValid('1e10-1e9') // subtração de notações grandes", () => {
    expect(isValid('1e10-1e9')).toBe(true);
});

test("Case 19.9: isValid('2e5*3e4') // multiplicação científica", () => {
    expect(isValid('2e5*3e4')).toBe(true);
});

test("Case 19.10: isValid('1e20/1e10') // divisão científica", () => {
    expect(isValid('1e20/1e10')).toBe(true);
});

test("Case 19.11: isValid('(1e2)^2') // notação com parênteses e potência", () => {
    expect(isValid('(1e2)^2')).toBe(true);
});

test("Case 19.12: isValid('2^(3e1)') // expoente em notação científica", () => {
    expect(isValid('2^(3e1)')).toBe(true);
});

test("Case 19.13: isValid('1.5e2+2.5e3-3.5e1') // múltiplas operações", () => {
    expect(isValid('1.5e2+2.5e3-3.5e1')).toBe(true);
});

test("Case 19.14: isValid('9.99e99+1.11e11') // números muito grandes", () => {
    expect(isValid('9.99e99+1.11e11')).toBe(true);
});

test("Case 19.15: isValid('1e-100+1e-200') // números muito pequenos", () => {
    expect(isValid('1e-100+1e-200')).toBe(true);
});

test("Case 19.16: isValid('5e0') // expoente zero", () => {
    expect(isValid('5e0')).toBe(true);
});

test("Case 19.17: isValid('1e1*1e1') // 10 * 10", () => {
    expect(isValid('1e1*1e1')).toBe(true);
});

test("Case 19.18: isValid('(2e3+3e2)*4e1') // expressão complexa", () => {
    expect(isValid('(2e3+3e2)*4e1')).toBe(true);
});

test("Case 19.19: isValid('[1e5-2e4]/3e3') // com brackets", () => {
    expect(isValid('[1e5-2e4]/3e3')).toBe(true);
});

test("Case 19.20: isValid('{5e10+5e9}^2') // com chaves e potência", () => {
    expect(isValid('{5e10+5e9}^2')).toBe(true);
});

test("Case 20.1: isValid('((2+3))') // duplo parênteses", () => {
    expect(isValid('((2+3))')).toBe(true);
});

test("Case 20.2: isValid('[[[5]]]') // triplo colchetes", () => {
    expect(isValid('[[[5]]]')).toBe(true);
});

test("Case 20.3: isValid('{{{3}}}') // triplo chaves", () => {
    expect(isValid('{{{3}}}')).toBe(true);
});

test("Case 20.4: isValid('[(2+3)]') // colchete dentro de parêntese", () => {
    expect(isValid('[(2+3)]')).toBe(true);
});

test("Case 20.5: isValid('{(5-2)}') // parêntese dentro de chave", () => {
    expect(isValid('{(5-2)}')).toBe(true);
});

test("Case 20.6: isValid('[{(1)}]') // todos aninhados", () => {
    expect(isValid('[{(1)}]')).toBe(true);
});

test("Case 20.7: isValid('((2+3)*(4+5))') // operação dentro de duplo parênteses", () => {
    expect(isValid('((2+3)*(4+5))')).toBe(true);
});

test("Case 20.8: isValid('[{2+3}*{4+5}]') // múltiplas chaves em colchetes", () => {
    expect(isValid('[{2+3}*{4+5}]')).toBe(true);
});

test("Case 20.9: isValid('([(2+3)])^2') // aninhamento com potência", () => {
    expect(isValid('([(2+3)])^2')).toBe(true);
});

test("Case 20.10: isValid('{[5*(2+3)]-[4/(1+1)]}') // expressão complexa aninhada", () => {
    expect(isValid('{[5*(2+3)]-[4/(1+1)]}')).toBe(true);
});

test("Case 20.11: isValid('((((((5))))))') // seis níveis", () => {
    expect(isValid('((((((5))))))')).toBe(true);
});

test("Case 20.12: isValid('[({[({5})]})]') // padrão complexo", () => {
    expect(isValid('[({[({5})]})]')).toBe(true);
});

test("Case 20.13: isValid('(2+[3+{4+5}])') // três tipos misturados", () => {
    expect(isValid('(2+[3+{4+5}])')).toBe(true);
});

test("Case 20.14: isValid('{[(1+2)*(3+4)]+(5+6)}') // operações múltiplas aninhadas", () => {
    expect(isValid('{[(1+2)*(3+4)]+(5+6)}')).toBe(true);
});

test("Case 20.15: isValid('[{(2^3)^2}^1]') // potências aninhadas", () => {
    expect(isValid('[{(2^3)^2}^1]')).toBe(true);
});

test("Case 21.1: isValid('0') // zero simples", () => {
    expect(isValid('0')).toBe(true);
});

test("Case 21.2: isValid('00') // duplo zero", () => {
    expect(isValid('00')).toBe(true);
});

test("Case 21.3: isValid('000') // triplo zero", () => {
    expect(isValid('000')).toBe(true);
});

test("Case 21.4: isValid('0+0') // soma de zeros", () => {
    expect(isValid('0+0')).toBe(true);
});

test("Case 21.5: isValid('0*5') // zero vezes número", () => {
    expect(isValid('0*5')).toBe(true);
});

test("Case 21.6: isValid('5*0') // número vezes zero", () => {
    expect(isValid('5*0')).toBe(true);
});

test("Case 21.7: isValid('0/5') // zero dividido", () => {
    expect(isValid('0/5')).toBe(true);
});

test("Case 21.8: isValid('0^5') // zero elevado", () => {
    expect(isValid('0^5')).toBe(true);
});

test("Case 21.9: isValid('5^0') // número elevado a zero", () => {
    expect(isValid('5^0')).toBe(true);
});

test("Case 21.10: isValid('0^0') // zero elevado a zero", () => {
    expect(isValid('0^0')).toBe(true);
});

test("Case 21.11: isValid('0e0') // zero em notação científica", () => {
    expect(isValid('0e0')).toBe(true);
});

test("Case 21.12: isValid('0.0') // zero decimal", () => {
    expect(isValid('0.0')).toBe(true);
});

test("Case 21.13: isValid('0.00') // zero com casas decimais", () => {
    expect(isValid('0.00')).toBe(true);
});

test("Case 21.14: isValid('-0') // zero negativo", () => {
    expect(isValid('-0')).toBe(true);
});

test("Case 21.15: isValid('0-0') // subtração de zeros", () => {
    expect(isValid('0-0')).toBe(true);
});

test("Case 22.1: isValid('1+2+3+4+5+6+7+8+9+10') // soma longa", () => {
    expect(isValid('1+2+3+4+5+6+7+8+9+10')).toBe(true);
});

test("Case 22.2: isValid('10-9-8-7-6-5-4-3-2-1') // subtração longa", () => {
    expect(isValid('10-9-8-7-6-5-4-3-2-1')).toBe(true);
});

test("Case 22.3: isValid('1*2*3*4*5') // multiplicação longa", () => {
    expect(isValid('1*2*3*4*5')).toBe(true);
});

test("Case 22.4: isValid('1000/10/10/10') // divisão longa", () => {
    expect(isValid('1000/10/10/10')).toBe(true);
});

test("Case 22.5: isValid('2^2^2') // exponenciação encadeada", () => {
    expect(isValid('2^2^2')).toBe(true);
});

test("Case 22.6: isValid('1+2*3-4/5^6') // todas operações", () => {
    expect(isValid('1+2*3-4/5^6')).toBe(true);
});

test("Case 22.7: isValid('((((1+2)+3)+4)+5)') // soma aninhada", () => {
    expect(isValid('((((1+2)+3)+4)+5)')).toBe(true);
});

test("Case 22.8: isValid('1e1+1e2+1e3+1e4+1e5') // notação científica crescente", () => {
    expect(isValid('1e1+1e2+1e3+1e4+1e5')).toBe(true);
});

test("Case 22.9: isValid('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9') // decimais longos", () => {
    expect(isValid('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9')).toBe(true);
});

test("Case 22.10: isValid('(1+2)*(3+4)*(5+6)*(7+8)') // multiplicação de somas", () => {
    expect(isValid('(1+2)*(3+4)*(5+6)*(7+8)')).toBe(true);
});

test("Case 23.1: isValid('  ') // apenas espaços", () => {
    expect(isValid('  ')).toBe(false);
});

test("Case 23.2: isValid(' + ') // operador com espaços", () => {
    expect(isValid(' + ')).toBe(false);
});

test("Case 23.3: isValid('2 . 5') // espaços ao redor do ponto", () => {
    expect(isValid('2 . 5')).toBe(false);
});

test("Case 23.4: isValid('1 e 2') // espaço no 'e'", () => {
    expect(isValid('1 e 2')).toBe(false);
});

test("Case 23.5: isValid('( )') // parênteses vazios com espaço", () => {
    expect(isValid('( )')).toBe(false);
});

test("Case 23.6: isValid('[ ]') // colchetes vazios com espaço", () => {
    expect(isValid('[ ]')).toBe(false);
});

test("Case 23.7: isValid('{ }') // chaves vazias com espaço", () => {
    expect(isValid('{ }')).toBe(false);
});

test("Case 23.8: isValid('2 + + 3') // operadores duplicados com espaço", () => {
    expect(isValid('2 + + 3')).toBe(false);
});

test("Case 23.9: isValid('5 * * 2') // operadores duplicados com espaço", () => {
    expect(isValid('5 * * 2')).toBe(false);
});

test("Case 23.10: isValid('3 ^ ^ 2') // operadores duplicados com espaço", () => {
    expect(isValid('3 ^ ^ 2')).toBe(false);
});


// ============================================================================
// GRUPO 13: Espaços em Branco - Válidos (15 testes)
// ============================================================================

test("Case 13.1: isValid(' 5 ')", () => {
    expect(isValid(' 5 ')).toBe(true);
});

test("Case 13.2: isValid('2 + 3')", () => {
    expect(isValid('2 + 3')).toBe(true);
});

test("Case 13.3: isValid('2  +  3')", () => {
    expect(isValid('2  +  3')).toBe(true);
});

test("Case 13.4: isValid(' ( 2 + 3 ) ')", () => {
    expect(isValid(' ( 2 + 3 ) ')).toBe(true);
});

test("Case 13.5: isValid('2 * 3 + 4')", () => {
    expect(isValid('2 * 3 + 4')).toBe(true);
});

test("Case 13.6: isValid('  2  ^  3  ')", () => {
    expect(isValid('  2  ^  3  ')).toBe(true);
});

test("Case 13.7: isValid('1 e 2')", () => {
    expect(isValid('1 e 2')).toBe(true);
});

test("Case 13.8: isValid('1 e + 2')", () => {
    expect(isValid('1 e + 2')).toBe(true);
});

test("Case 13.9: isValid('2 . 5')", () => {
    expect(isValid('2 . 5')).toBe(true);
});

test("Case 13.10: isValid('[ 5 ]')", () => {
    expect(isValid('[ 5 ]')).toBe(true);
});

test("Case 13.11: isValid('{ 10 }')", () => {
    expect(isValid('{ 10 }')).toBe(true);
});

test("Case 13.12: isValid('  -  5  ')", () => {
    expect(isValid('  -  5  ')).toBe(true);
});

test("Case 13.13: isValid('2 + 3 * 4 - 5 / 6')", () => {
    expect(isValid('2 + 3 * 4 - 5 / 6')).toBe(true);
});

test("Case 13.14: isValid('  1  e  -  2  ')", () => {
    expect(isValid('  1  e  -  2  ')).toBe(true);
});

test("Case 13.15: isValid('( 2 + 3 ) * ( 4 + 5 )')", () => {
    expect(isValid('( 2 + 3 ) * ( 4 + 5 )')).toBe(true);
});

// ============================================================================
// GRUPO 14: Números Negativos em Contextos Diversos (20 testes)
// ============================================================================

test("Case 14.1: isValid('(-5)')", () => {
    expect(isValid('(-5)')).toBe(true);
});

test("Case 14.2: isValid('[-10]')", () => {
    expect(isValid('[-10]')).toBe(true);
});

test("Case 14.3: isValid('{-25}')", () => {
    expect(isValid('{-25}')).toBe(true);
});

test("Case 14.4: isValid('2*(-3)')", () => {
    expect(isValid('2*(-3)')).toBe(true);
});

test("Case 14.5: isValid('10/(-2)')", () => {
    expect(isValid('10/(-2)')).toBe(true);
});

test("Case 14.6: isValid('(-2)^3')", () => {
    expect(isValid('(-2)^3')).toBe(true);
});

test("Case 14.7: isValid('(-2)^(-3)')", () => {
    expect(isValid('(-2)^(-3)')).toBe(true);
});

test("Case 14.8: isValid('(-1e2)')", () => {
    expect(isValid('(-1e2)')).toBe(true);
});

test("Case 14.9: isValid('(-2.5)')", () => {
    expect(isValid('(-2.5)')).toBe(true);
});

test("Case 14.10: isValid('(-2)+(-3)')", () => {
    expect(isValid('(-2)+(-3)')).toBe(true);
});

test("Case 14.11: isValid('(-5)*(-6)')", () => {
    expect(isValid('(-5)*(-6)')).toBe(true);
});

test("Case 14.12: isValid('(-10)/(-2)')", () => {
    expect(isValid('(-10)/(-2)')).toBe(true);
});

test("Case 14.13: isValid('(-2)^(-2)')", () => {
    expect(isValid('(-2)^(-2)')).toBe(true);
});

test("Case 14.14: isValid('[(-5)+(-3)]')", () => {
    expect(isValid('[(-5)+(-3)]')).toBe(true);
});

test("Case 14.15: isValid('{(-2)*(-3)}')", () => {
    expect(isValid('{(-2)*(-3)}')).toBe(true);
});

test("Case 14.16: isValid('(-1e-5)')", () => {
    expect(isValid('(-1e-5)')).toBe(true);
});

test("Case 14.17: isValid('(-0.001)')", () => {
    expect(isValid('(-0.001)')).toBe(true);
});

test("Case 14.18: isValid('((-5))')", () => {
    expect(isValid('((-5))')).toBe(true);
});

test("Case 14.19: isValid('(((-10)))')", () => {
    expect(isValid('(((-10)))')).toBe(true);
});

test("Case 14.20: isValid('-2.5e-3')", () => {
    expect(isValid('-2.5e-3')).toBe(true);
});

// ============================================================================
// GRUPO 15: Exponenciação com Negativos e Decimais (15 testes)
// ============================================================================

test("Case 15.1: isValid('2^(-3)')", () => {
    expect(isValid('2^(-3)')).toBe(true);
});

test("Case 15.2: isValid('5^(-1)')", () => {
    expect(isValid('5^(-1)')).toBe(true);
});

test("Case 15.3: isValid('10^(-10)')", () => {
    expect(isValid('10^(-10)')).toBe(true);
});

test("Case 15.4: isValid('2.5^(-2)')", () => {
    expect(isValid('2.5^(-2)')).toBe(true);
});

test("Case 15.5: isValid('(-3)^2')", () => {
    expect(isValid('(-3)^2')).toBe(true);
});

test("Case 15.6: isValid('(-2)^(-2)')", () => {
    expect(isValid('(-2)^(-2)')).toBe(true);
});

test("Case 15.7: isValid('0.5^3')", () => {
    expect(isValid('0.5^3')).toBe(true);
});

test("Case 15.8: isValid('0.1^10')", () => {
    expect(isValid('0.1^10')).toBe(true);
});

test("Case 15.9: isValid('3.14^2.71')", () => {
    expect(isValid('3.14^2.71')).toBe(true);
});

test("Case 15.10: isValid('(2.5)^(3.5)')", () => {
    expect(isValid('(2.5)^(3.5)')).toBe(true);
});

test("Case 15.11: isValid('10^0.5')", () => {
    expect(isValid('10^0.5')).toBe(true);
});

test("Case 15.12: isValid('2^(-0.5)')", () => {
    expect(isValid('2^(-0.5)')).toBe(true);
});

test("Case 15.13: isValid('(-2.5)^2')", () => {
    expect(isValid('(-2.5)^2')).toBe(true);
});

test("Case 15.14: isValid('0.001^0.001')", () => {
    expect(isValid('0.001^0.001')).toBe(true);
});

test("Case 15.15: isValid('1000^(-0.333)')", () => {
    expect(isValid('1000^(-0.333)')).toBe(true);
});

// ============================================================================
// GRUPO 16: Notação Científica - Casos Extremos (15 testes)
// ============================================================================

test("Case 16.1: isValid('1e1000')", () => {
    expect(isValid('1e1000')).toBe(true);
});

test("Case 16.2: isValid('1e-1000')", () => {
    expect(isValid('1e-1000')).toBe(true);
});

test("Case 16.3: isValid('9.999999e999')", () => {
    expect(isValid('9.999999e999')).toBe(true);
});

test("Case 16.4: isValid('1.1e1')", () => {
    expect(isValid('1.1e1')).toBe(true);
});

test("Case 16.5: isValid('0.1e1')", () => {
    expect(isValid('0.1e1')).toBe(true);
});

test("Case 16.6: isValid('100e-2')", () => {
    expect(isValid('100e-2')).toBe(true);
});

test("Case 16.7: isValid('0.01e2')", () => {
    expect(isValid('0.01e2')).toBe(true);
});

test("Case 16.8: isValid('1.23456789e10')", () => {
    expect(isValid('1.23456789e10')).toBe(true);
});

test("Case 16.9: isValid('5e+0')", () => {
    expect(isValid('5e+0')).toBe(true);
});

test("Case 16.10: isValid('5e-0')", () => {
    expect(isValid('5e-0')).toBe(true);
});

test("Case 16.11: isValid('(1e5)+(2e3)')", () => {
    expect(isValid('(1e5)+(2e3)')).toBe(true);
});

test("Case 16.12: isValid('1e10*1e-10')", () => {
    expect(isValid('1e10*1e-10')).toBe(true);
});

test("Case 16.13: isValid('(5e2)^2')", () => {
    expect(isValid('(5e2)^2')).toBe(true);
});

test("Case 16.14: isValid('2^(1e1)')", () => {
    expect(isValid('2^(1e1)')).toBe(true);
});

test("Case 16.15: isValid('(-5e-5)')", () => {
    expect(isValid('(-5e-5)')).toBe(true);
});

// ============================================================================
// GRUPO 17: Brackets Aninhados Complexos (15 testes)
// ============================================================================

test("Case 17.1: isValid('((((((5))))))')", () => {
    expect(isValid('((((((5))))))')).toBe(true);
});

test("Case 17.2: isValid('[[[[[5]]]]]')", () => {
    expect(isValid('[[[[[5]]]]]')).toBe(true);
});

test("Case 17.3: isValid('{{{{{5}}}}}')", () => {
    expect(isValid('{{{{{5}}}}}')).toBe(true);
});

test("Case 17.4: isValid('[{[(5)]}]')", () => {
    expect(isValid('[{[(5)]}]')).toBe(true);
});

test("Case 17.5: isValid('{[({5})]})')", () => {
    expect(isValid('{[({5})]}')).toBe(true);
});

test("Case 17.6: isValid('({[({[5]})]}))')", () => {
    expect(isValid('({[({[5]})]}')).toBe(true);
});

test("Case 17.7: isValid('((2+3)*(4+5))')", () => {
    expect(isValid('((2+3)*(4+5))')).toBe(true);
});

test("Case 17.8: isValid('[(2+3)*(4+5)]')", () => {
    expect(isValid('[(2+3)*(4+5)]')).toBe(true);
});

test("Case 17.9: isValid('{[(2+3)]*(4+5)}')", () => {
    expect(isValid('{[(2+3)]*(4+5)}')).toBe(true);
});

test("Case 17.10: isValid('((2+3)*((4+5)))')", () => {
    expect(isValid('((2+3)*((4+5)))')).toBe(true);
});

test("Case 17.11: isValid('[{(2)}+{(3)}]')", () => {
    expect(isValid('[{(2)}+{(3)}]')).toBe(true);
});

test("Case 17.12: isValid('(1+(2+(3+(4+5))))')", () => {
    expect(isValid('(1+(2+(3+(4+5))))')).toBe(true);
});

test("Case 17.13: isValid('[1*[2*[3*[4*5]]]]')", () => {
    expect(isValid('[1*[2*[3*[4*5]]]]')).toBe(true);
});

test("Case 17.14: isValid('{1-{2-{3-{4-5}}}}')", () => {
    expect(isValid('{1-{2-{3-{4-5}}}}')).toBe(true);
});

test("Case 17.15: isValid('((1))+((2))')", () => {
    expect(isValid('((1))+((2))')).toBe(true);
});

// ============================================================================
// GRUPO 18: Operadores Inválidos - Início/Fim (15 testes)
// ============================================================================

test("Case 18.1: isValid('+5')", () => {
    expect(isValid('+5')).toBe(false);
});

test("Case 18.2: isValid('*5')", () => {
    expect(isValid('*5')).toBe(false);
});

test("Case 18.3: isValid('/5')", () => {
    expect(isValid('/5')).toBe(false);
});

test("Case 18.4: isValid('^5')", () => {
    expect(isValid('^5')).toBe(false);
});

test("Case 18.5: isValid('5-')", () => {
    expect(isValid('5-')).toBe(false);
});

test("Case 18.6: isValid('5+')", () => {
    expect(isValid('5+')).toBe(false);
});

test("Case 18.7: isValid('5*')", () => {
    expect(isValid('5*')).toBe(false);
});

test("Case 18.8: isValid('5/')", () => {
    expect(isValid('5/')).toBe(false);
});

test("Case 18.9: isValid('5^')", () => {
    expect(isValid('5^')).toBe(false);
});

test("Case 18.10: isValid('+5+')", () => {
    expect(isValid('+5+')).toBe(false);
});

test("Case 18.11: isValid('*5*')", () => {
    expect(isValid('*5*')).toBe(false);
});

test("Case 18.12: isValid('/5/')", () => {
    expect(isValid('/5/')).toBe(false);
});

test("Case 18.13: isValid('^5^')", () => {
    expect(isValid('^5^')).toBe(false);
});

test("Case 18.14: isValid('++')", () => {
    expect(isValid('++')).toBe(false);
});

test("Case 18.15: isValid('**')", () => {
    expect(isValid('**')).toBe(false);
});

// ============================================================================
// GRUPO 19: Brackets Desbalanceados (20 testes)
// ============================================================================

test("Case 19.1: isValid('(2+3')", () => {
    expect(isValid('(2+3')).toBe(false);
});

test("Case 19.2: isValid('2+3)')", () => {
    expect(isValid('2+3)')).toBe(false);
});

test("Case 19.3: isValid('[2+3')", () => {
    expect(isValid('[2+3')).toBe(false);
});

test("Case 19.4: isValid('2+3]')", () => {
    expect(isValid('2+3]')).toBe(false);
});

test("Case 19.5: isValid('{2+3')", () => {
    expect(isValid('{2+3')).toBe(false);
});

test("Case 19.6: isValid('2+3}')", () => {
    expect(isValid('2+3}')).toBe(false);
});

test("Case 19.7: isValid('((2+3)')", () => {
    expect(isValid('((2+3)')).toBe(false);
});

test("Case 19.8: isValid('(2+3))')", () => {
    expect(isValid('(2+3))')).toBe(false);
});

test("Case 19.9: isValid('[(2+3]')", () => {
    expect(isValid('[(2+3]')).toBe(false);
});

test("Case 19.10: isValid('[2+3)]')", () => {
    expect(isValid('[2+3)]')).toBe(false);
});

test("Case 19.11: isValid('{(2+3}')", () => {
    expect(isValid('{(2+3}')).toBe(false);
});

test("Case 19.12: isValid('{2+3)}')", () => {
    expect(isValid('{2+3)}')).toBe(false);
});

test("Case 19.13: isValid('([{2+3}]')", () => {
    expect(isValid('([{2+3}]')).toBe(false);
});

test("Case 19.14: isValid('[{(2+3)]}')", () => {
    expect(isValid('[{(2+3)]}')).toBe(false);
});

test("Case 19.15: isValid('(((')", () => {
    expect(isValid('(((')).toBe(false);
});

test("Case 19.16: isValid(')))')", () => {
    expect(isValid(')))')).toBe(false);
});

test("Case 19.17: isValid('[[[')", () => {
    expect(isValid('[[[')).toBe(false);
});

test("Case 19.18: isValid(']]]')", () => {
    expect(isValid(']]]')).toBe(false);
});

test("Case 19.19: isValid('{{{')", () => {
    expect(isValid('{{{')).toBe(false);
});

test("Case 19.20: isValid('}}}')", () => {
    expect(isValid('}}}')).toBe(false);
});

// ============================================================================
// GRUPO 20: Notação Científica Inválida (15 testes)
// ============================================================================

test("Case 20.1: isValid('e')", () => {
    expect(isValid('e')).toBe(false);
});

test("Case 20.2: isValid('e5')", () => {
    expect(isValid('e5')).toBe(false);
});

test("Case 20.3: isValid('5e')", () => {
    expect(isValid('5e')).toBe(false);
});

test("Case 20.4: isValid('5e+')", () => {
    expect(isValid('5e+')).toBe(false);
});

test("Case 20.5: isValid('5e-')", () => {
    expect(isValid('5e-')).toBe(false);
});

test("Case 20.6: isValid('5ee5')", () => {
    expect(isValid('5ee5')).toBe(false);
});

test("Case 20.7: isValid('5e5e5')", () => {
    expect(isValid('5e5e5')).toBe(false);
});

test("Case 20.8: isValid('5e++5')", () => {
    expect(isValid('5e++5')).toBe(false);
});

test("Case 20.9: isValid('5e--5')", () => {
    expect(isValid('5e--5')).toBe(false);
});

test("Case 20.10: isValid('5e+-5')", () => {
    expect(isValid('5e+-5')).toBe(false);
});

test("Case 20.11: isValid('5e-+5')", () => {
    expect(isValid('5e-+5')).toBe(false);
});

test("Case 20.12: isValid('5e*5')", () => {
    expect(isValid('5e*5')).toBe(false);
});

test("Case 20.13: isValid('5e/5')", () => {
    expect(isValid('5e/5')).toBe(false);
});

test("Case 20.14: isValid('5e^5')", () => {
    expect(isValid('5e^5')).toBe(false);
});

test("Case 20.15: isValid('.5e2')", () => {
    expect(isValid('.5e2')).toBe(false);
});

// ============================================================================
// GRUPO 21: Decimais com Espaços (10 testes)
// ============================================================================

test("Case 21.1: isValid('2 .5')", () => {
    expect(isValid('2 .5')).toBe(false);
});

test("Case 21.2: isValid('2. 5')", () => {
    expect(isValid('2. 5')).toBe(false);
});

test("Case 21.3: isValid(' . 5')", () => {
    expect(isValid(' . 5')).toBe(false);
});

test("Case 21.4: isValid('5 . ')", () => {
    expect(isValid('5 . ')).toBe(false);
});

test("Case 21.5: isValid('2 . 5 . 3')", () => {
    expect(isValid('2 . 5 . 3')).toBe(false);
});

test("Case 21.6: isValid('  .  ')", () => {
    expect(isValid('  .  ')).toBe(false);
});

test("Case 21.7: isValid('. . .')", () => {
    expect(isValid('. . .')).toBe(false);
});

test("Case 21.8: isValid('1 . . 2')", () => {
    expect(isValid('1 . . 2')).toBe(false);
});

test("Case 21.9: isValid('+ . 5')", () => {
    expect(isValid('+ . 5')).toBe(false);
});

test("Case 21.10: isValid('5 . +')", () => {
    expect(isValid('5 . +')).toBe(false);
});

// ============================================================================
// GRUPO 22: Combinações de Operadores Inválidos (15 testes)
// ============================================================================

test("Case 22.1: isValid('5+-3')", () => {
    expect(isValid('5+-3')).toBe(false);
});

test("Case 22.2: isValid('5-+3')", () => {
    expect(isValid('5-+3')).toBe(false);
});

test("Case 22.3: isValid('5*+3')", () => {
    expect(isValid('5*+3')).toBe(false);
});

test("Case 22.4: isValid('5/+3')", () => {
    expect(isValid('5/+3')).toBe(false);
});

test("Case 22.5: isValid('5^+3')", () => {
    expect(isValid('5^+3')).toBe(false);
});

test("Case 22.6: isValid('5+*3')", () => {
    expect(isValid('5+*3')).toBe(false);
});

test("Case 22.7: isValid('5-*3')", () => {
    expect(isValid('5-*3')).toBe(false);
});

test("Case 22.8: isValid('5*/3')", () => {
    expect(isValid('5*/3')).toBe(false);
});

test("Case 22.9: isValid('5/*3')", () => {
    expect(isValid('5/*3')).toBe(false);
});

test("Case 22.10: isValid('5^*3')", () => {
    expect(isValid('5^*3')).toBe(false);
});

test("Case 22.11: isValid('5*^3')", () => {
    expect(isValid('5*^3')).toBe(false);
});

test("Case 22.12: isValid('5+/3')", () => {
    expect(isValid('5+/3')).toBe(false);
});

test("Case 22.13: isValid('5-/3')", () => {
    expect(isValid('5-/3')).toBe(false);
});

test("Case 22.14: isValid('5/^3')", () => {
    expect(isValid('5/^3')).toBe(false);
});

test("Case 22.15: isValid('5^/3')", () => {
    expect(isValid('5^/3')).toBe(false);
});

// ============================================================================
// GRUPO 23: Zeros e Casos Especiais (15 testes)
// ============================================================================

test("Case 23.1: isValid('0')", () => {
    expect(isValid('0')).toBe(true);
});

test("Case 23.2: isValid('00')", () => {
    expect(isValid('00')).toBe(true);
});

test("Case 23.3: isValid('000')", () => {
    expect(isValid('000')).toBe(true);
});

test("Case 23.4: isValid('0.0')", () => {
    expect(isValid('0.0')).toBe(true);
});

test("Case 23.5: isValid('0.00')", () => {
    expect(isValid('0.00')).toBe(true);
});

test("Case 23.6: isValid('00.00')", () => {
    expect(isValid('00.00')).toBe(true);
});

test("Case 23.7: isValid('0e0')", () => {
    expect(isValid('0e0')).toBe(true);
});

test("Case 23.8: isValid('0e+0')", () => {
    expect(isValid('0e+0')).toBe(true);
});

test("Case 23.9: isValid('0e-0')", () => {
    expect(isValid('0e-0')).toBe(true);
});

test("Case 23.10: isValid('0.0e0')", () => {
    expect(isValid('0.0e0')).toBe(true);
});

test("Case 23.11: isValid('0+0')", () => {
    expect(isValid('0+0')).toBe(true);
});

test("Case 23.12: isValid('0*0')", () => {
    expect(isValid('0*0')).toBe(true);
});

test("Case 23.13: isValid('0/1')", () => {
    expect(isValid('0/1')).toBe(true);
});

test("Case 23.14: isValid('0^0')", () => {
    expect(isValid('0^0')).toBe(true);
});

test("Case 23.15: isValid('(0)')", () => {
    expect(isValid('(0)')).toBe(true);
});

// ============================================================================
// GRUPO 24: Expressões Longas e Complexas (10 testes)
// ============================================================================

test("Case 24.1: isValid('1+2+3+4+5+6+7+8+9+10')", () => {
    expect(isValid('1+2+3+4+5+6+7+8+9+10')).toBe(true);
});

test("Case 24.2: isValid('1*2*3*4*5*6*7*8*9*10')", () => {
    expect(isValid('1*2*3*4*5*6*7*8*9*10')).toBe(true);
});

test("Case 24.3: isValid('2^2^2^2^2')", () => {
    expect(isValid('2^2^2^2^2')).toBe(true);
});

test("Case 24.4: isValid('((((((((((5))))))))))')", () => {
    expect(isValid('((((((((((5))))))))))')).toBe(true);
});

test("Case 24.5: isValid('1e1+2e2+3e3+4e4+5e5')", () => {
    expect(isValid('1e1+2e2+3e3+4e4+5e5')).toBe(true);
});


test("Case 24.6: isValid('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9')", () => {
    expect(isValid('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9')).toBe(true);
});

test("Case 24.7: isValid('(1+2)*(3+4)*(5+6)*(7+8)*(9+10)')", () => {
    expect(isValid('(1+2)*(3+4)*(5+6)*(7+8)*(9+10)')).toBe(true);
});

test("Case 24.8: isValid('[{(1+2)}]*[{(3+4)}]')", () => {
    expect(isValid('[{(1+2)}]*[{(3+4)}]')).toBe(true);
});

test("Case 24.9: isValid('1.23e45+6.78e90+1.11e22+3.33e44')", () => {
    expect(isValid('1.23e45+6.78e90+1.11e22+3.33e44')).toBe(true);
});

test("Case 24.10: isValid('((1+2)*3-4)/5+6^7-8*9/10')", () => {
    expect(isValid('((1+2)*3-4)/5+6^7-8*9/10')).toBe(true);
});

// ============================================================================
// GRUPO 25: Caracteres Inválidos (20 testes)
// ============================================================================

test("Case 25.1: isValid('abc')", () => {
    expect(isValid('abc')).toBe(false);
});

test("Case 25.2: isValid('x+y')", () => {
    expect(isValid('x+y')).toBe(false);
});

test("Case 25.3: isValid('2a')", () => {
    expect(isValid('2a')).toBe(false);
});

test("Case 25.4: isValid('a2')", () => {
    expect(isValid('a2')).toBe(false);
});

test("Case 25.5: isValid('2+a')", () => {
    expect(isValid('2+a')).toBe(false);
});

test("Case 25.6: isValid('a+2')", () => {
    expect(isValid('a+2')).toBe(false);
});

test("Case 25.7: isValid(')", () => {
    expect(isValid(')')).toBe(false);
});

test("Case 25.8: isValid('@')", () => {
    expect(isValid('@')).toBe(false);
});

test("Case 25.9: isValid('#')", () => {
    expect(isValid('#')).toBe(false);
});

test("Case 25.10: isValid('%')", () => {
    expect(isValid('%')).toBe(false);
});

test("Case 25.11: isValid('&')", () => {
    expect(isValid('&')).toBe(false);
});

test("Case 25.12: isValid('!')", () => {
    expect(isValid('!')).toBe(false);
});

test("Case 25.13: isValid('?')", () => {
    expect(isValid('?')).toBe(false);
});

test("Case 25.14: isValid(';')", () => {
    expect(isValid(';')).toBe(false);
});

test("Case 25.15: isValid(':')", () => {
    expect(isValid(':')).toBe(false);
});

test("Case 25.16: isValid('2+3=5')", () => {
    expect(isValid('2+3=5')).toBe(false);
});

test("Case 25.17: isValid('2<3')", () => {
    expect(isValid('2<3')).toBe(false);
});

test("Case 25.18: isValid('2>3')", () => {
    expect(isValid('2>3')).toBe(false);
});

test("Case 25.19: isValid('2|3')", () => {
    expect(isValid('2|3')).toBe(false);
});

test("Case 25.20: isValid('2\\3')", () => {
    expect(isValid('2\\3')).toBe(false);
});

// ============================================================================
// GRUPO 26: Operadores Após Brackets de Abertura (10 testes)
// ============================================================================

test("Case 26.1: isValid('(+2)')", () => {
    expect(isValid('(+2)')).toBe(false);
});

test("Case 26.2: isValid('[+3]')", () => {
    expect(isValid('[+3]')).toBe(false);
});

test("Case 26.3: isValid('{+4}')", () => {
    expect(isValid('{+4}')).toBe(false);
});

test("Case 26.4: isValid('(*2)')", () => {
    expect(isValid('(*2)')).toBe(false);
});

test("Case 26.5: isValid('[*3]')", () => {
    expect(isValid('[*3]')).toBe(false);
});

test("Case 26.6: isValid('{*4}')", () => {
    expect(isValid('{*4}')).toBe(false);
});

test("Case 26.7: isValid('(/2)')", () => {
    expect(isValid('(/2)')).toBe(false);
});

test("Case 26.8: isValid('[/3]')", () => {
    expect(isValid('[/3]')).toBe(false);
});

test("Case 26.9: isValid('{/4}')", () => {
    expect(isValid('{/4}')).toBe(false);
});

test("Case 26.10: isValid('(^2)')", () => {
    expect(isValid('(^2)')).toBe(false);
});

// ============================================================================
// GRUPO 27: Operadores Antes de Brackets de Fechamento (10 testes)
// ============================================================================

test("Case 27.1: isValid('(2+)')", () => {
    expect(isValid('(2+)')).toBe(false);
});

test("Case 27.2: isValid('[3-]')", () => {
    expect(isValid('[3-]')).toBe(false);
});

test("Case 27.3: isValid('{4*}')", () => {
    expect(isValid('{4*}')).toBe(false);
});

test("Case 27.4: isValid('(5/)')", () => {
    expect(isValid('(5/)')).toBe(false);
});

test("Case 27.5: isValid('[6^]')", () => {
    expect(isValid('[6^]')).toBe(false);
});

test("Case 27.6: isValid('(2+3+)')", () => {
    expect(isValid('(2+3+)')).toBe(false);
});

test("Case 27.7: isValid('[5*6*]')", () => {
    expect(isValid('[5*6*]')).toBe(false);
});

test("Case 27.8: isValid('{10/5/}')", () => {
    expect(isValid('{10/5/}')).toBe(false);
});

test("Case 27.9: isValid('(2^3^)')", () => {
    expect(isValid('(2^3^)')).toBe(false);
});

test("Case 27.10: isValid('((5+))')", () => {
    expect(isValid('((5+))')).toBe(false);
});

// ============================================================================
// GRUPO 28: Múltiplos Pontos Decimais (10 testes)
// ============================================================================

test("Case 28.1: isValid('1.2.3')", () => {
    expect(isValid('1.2.3')).toBe(false);
});

test("Case 28.2: isValid('5.5.5.5')", () => {
    expect(isValid('5.5.5.5')).toBe(false);
});

test("Case 28.3: isValid('10..5')", () => {
    expect(isValid('10..5')).toBe(false);
});

test("Case 28.4: isValid('3...14')", () => {
    expect(isValid('3...14')).toBe(false);
});

test("Case 28.5: isValid('..')", () => {
    expect(isValid('..')).toBe(false);
});

test("Case 28.6: isValid('...')", () => {
    expect(isValid('...')).toBe(false);
});

test("Case 28.7: isValid('1.2.3.4.5')", () => {
    expect(isValid('1.2.3.4.5')).toBe(false);
});

test("Case 28.8: isValid('0.0.0')", () => {
    expect(isValid('0.0.0')).toBe(false);
});

test("Case 28.9: isValid('99.99.99.99')", () => {
    expect(isValid('99.99.99.99')).toBe(false);
});

test("Case 28.10: isValid('1.+2.+3.')", () => {
    expect(isValid('1.+2.+3.')).toBe(false);
});

// ============================================================================
// GRUPO 29: Casos Edge com E (Notação Científica) (15 testes)
// ============================================================================

test("Case 29.1: isValid('E5')", () => {
    expect(isValid('E5')).toBe(false);
});

test("Case 29.2: isValid('5E')", () => {
    expect(isValid('5E')).toBe(false);
});

test("Case 29.3: isValid('5E++')", () => {
    expect(isValid('5E++')).toBe(false);
});

test("Case 29.4: isValid('5E--')", () => {
    expect(isValid('5E--')).toBe(false);
});

test("Case 29.5: isValid('eE5')", () => {
    expect(isValid('eE5')).toBe(false);
});

test("Case 29.6: isValid('5eE5')", () => {
    expect(isValid('5eE5')).toBe(false);
});

test("Case 29.7: isValid('5Ee5')", () => {
    expect(isValid('5Ee5')).toBe(false);
});

test("Case 29.8: isValid('5E5e5')", () => {
    expect(isValid('5E5e5')).toBe(false);
});

test("Case 29.9: isValid('5e5E5')", () => {
    expect(isValid('5e5E5')).toBe(false);
});

test("Case 29.10: isValid('E')", () => {
    expect(isValid('E')).toBe(false);
});

test("Case 29.11: isValid('EE')", () => {
    expect(isValid('EE')).toBe(false);
});

test("Case 29.12: isValid('5EE5')", () => {
    expect(isValid('5EE5')).toBe(false);
});

test("Case 29.13: isValid('5e.5')", () => {
    expect(isValid('5e.5')).toBe(false);
});

test("Case 29.14: isValid('5.e5')", () => {
    expect(isValid('5.e5')).toBe(false);
});

test("Case 29.15: isValid('.5e.5')", () => {
    expect(isValid('.5e.5')).toBe(false);
});

// ============================================================================
// GRUPO 30: Números Muito Grandes (10 testes)
// ============================================================================

test("Case 30.1: isValid('123456789012345678901234567890')", () => {
    expect(isValid('123456789012345678901234567890')).toBe(true);
});

test("Case 30.2: isValid('999999999999999999999999999999')", () => {
    expect(isValid('999999999999999999999999999999')).toBe(true);
});

test("Case 30.3: isValid('1000000000000000000000000000000')", () => {
    expect(isValid('1000000000000000000000000000000')).toBe(true);
});

test("Case 30.4: isValid('123456789.987654321')", () => {
    expect(isValid('123456789.987654321')).toBe(true);
});

test("Case 30.5: isValid('0.123456789012345678901234567890')", () => {
    expect(isValid('0.123456789012345678901234567890')).toBe(true);
});

test("Case 30.6: isValid('9e999999999')", () => {
    expect(isValid('9e999999999')).toBe(true);
});

test("Case 30.7: isValid('1e-999999999')", () => {
    expect(isValid('1e-999999999')).toBe(true);
});

test("Case 30.8: isValid('99999999999999999999^2')", () => {
    expect(isValid('99999999999999999999^2')).toBe(true);
});

test("Case 30.9: isValid('1000000000000+1000000000000')", () => {
    expect(isValid('1000000000000+1000000000000')).toBe(true);
});

test("Case 30.10: isValid('(999999999999999999)')", () => {
    expect(isValid('(999999999999999999)')).toBe(true);
});

// ============================================================================
// Total de Novos Testes: 230
// ============================================================================