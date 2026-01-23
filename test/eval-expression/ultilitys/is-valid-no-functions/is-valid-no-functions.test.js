const isValidNoFunctions = require('./../../../../src/eval-expression/utilities/is-valid-no-functions/is-valid-no-functions'); 

// Case 1: Two signs together
test("Case 1.1 isValidNoFunctions('++2')", () => {
    expect(isValidNoFunctions('++2')).toBe(false);
});
test("Case 1.2 isValidNoFunctions('5*(2-+1)')", () => {
    expect(isValidNoFunctions('5*(2-+1)')).toBe(false);
});
test("Case 1.3 isValidNoFunctions('3**2')", () => {
    expect(isValidNoFunctions('3**2')).toBe(false);
});
test("Case 1.4 isValidNoFunctions('--4')", () => {
    expect(isValidNoFunctions('--4')).toBe(false);
});
test("Case 1.5 isValidNoFunctions('7//2')", () => {
    expect(isValidNoFunctions('7//2')).toBe(false);
});

// Case 2: Empty curly brackets
test("Case 2.1 isValidNoFunctions('{}')", () => {
    expect(isValidNoFunctions('{}')).toBe(false);
});
test("Case 2.2 isValidNoFunctions('{+}')", () => {
    expect(isValidNoFunctions('{+}')).toBe(false);
});
test("Case 2.3 isValidNoFunctions('{*}')", () => {
    expect(isValidNoFunctions('{*}')).toBe(false);
});
test("Case 2.4 isValidNoFunctions('{/}')", () => {
    expect(isValidNoFunctions('{/}')).toBe(false);
});
test("Case 2.5 isValidNoFunctions('{-}')", () => {
    expect(isValidNoFunctions('{-}')).toBe(false);
});

// Case 3: Empty parentheses
test("Case 3.1 isValidNoFunctions('()')", () => {
    expect(isValidNoFunctions('()')).toBe(false);
});
test("Case 3.2 isValidNoFunctions('(+)')", () => {
    expect(isValidNoFunctions('(+)')).toBe(false);
});
test("Case 3.3 isValidNoFunctions('(*)')", () => {
    expect(isValidNoFunctions('(*)')).toBe(false);
});
test("Case 3.4 isValidNoFunctions('(/)')", () => {
    expect(isValidNoFunctions('(/)')).toBe(false);
});
test("Case 3.5 isValidNoFunctions('(-)')", () => {
    expect(isValidNoFunctions('(-)')).toBe(false);
});

// Case 4: Empty square brackets
test("Case 4.1 isValidNoFunctions('[]')", () => {
    expect(isValidNoFunctions('[]')).toBe(false);
});
test("Case 4.2 isValidNoFunctions('[+]')", () => {
    expect(isValidNoFunctions('[+]')).toBe(false);
});
test("Case 4.3 isValidNoFunctions('[*]')", () => {
    expect(isValidNoFunctions('[*]')).toBe(false);
});
test("Case 4.4 isValidNoFunctions('[/]')", () => {
    expect(isValidNoFunctions('[/]')).toBe(false);
});
test("Case 4.5 isValidNoFunctions('[-]')", () => {
    expect(isValidNoFunctions('[-]')).toBe(false);
});

// Case 5: '*' or '/' after an opening bracket
test("Case 5.1 isValidNoFunctions('{*2}')", () => {
    expect(isValidNoFunctions('{*2}')).toBe(false);
});
test("Case 5.2 isValidNoFunctions('[*3]')", () => {
    expect(isValidNoFunctions('[*3]')).toBe(false);
});
test("Case 5.3 isValidNoFunctions('(*4)')", () => {
    expect(isValidNoFunctions('(*4)')).toBe(false);
});
test("Case 5.4 isValidNoFunctions('{/5}')", () => {
    expect(isValidNoFunctions('{/5}')).toBe(false);
});
test("Case 5.5 isValidNoFunctions('[/6]')", () => {
    expect(isValidNoFunctions('[/6]')).toBe(false);
});

// Case 6: Non-number before a dot
test("Case 6.1 isValidNoFunctions('+.5')", () => {
    expect(isValidNoFunctions('+.5')).toBe(false);
});
test("Case 6.2 isValidNoFunctions('*.5')", () => {
    expect(isValidNoFunctions('*.5')).toBe(false);
});
test("Case 6.3 isValidNoFunctions('/.5')", () => {
    expect(isValidNoFunctions('/.5')).toBe(false);
});
test("Case 6.4 isValidNoFunctions('- .5')", () => {
    expect(isValidNoFunctions('- .5')).toBe(false);
});
test("Case 6.5 isValidNoFunctions('  .5')", () => {
    expect(isValidNoFunctions('  .5')).toBe(false);
});

// Case 7: Non-number after a dot
test("Case 7.1 isValidNoFunctions('5.+')", () => {
    expect(isValidNoFunctions('5.+')).toBe(false);
});
test("Case 7.2 isValidNoFunctions('5.*')", () => {
    expect(isValidNoFunctions('5.*')).toBe(false);
});
test("Case 7.3 isValidNoFunctions('5./')", () => {
    expect(isValidNoFunctions('5./')).toBe(false);
});
test("Case 7.4 isValidNoFunctions('5.-')", () => {
    expect(isValidNoFunctions('5.-')).toBe(false);
});
test("Case 7.5 isValidNoFunctions('5. ') ", () => {
    expect(isValidNoFunctions('5. ')).toBe(false);
});

// Case 8: Dot at beginning or end
test("Case 8.1 isValidNoFunctions('.5')", () => {
    expect(isValidNoFunctions('.5')).toBe(false);
});
test("Case 8.2 isValidNoFunctions('5.')", () => {
    expect(isValidNoFunctions('5.')).toBe(false);
});
test("Case 8.3 isValidNoFunctions('.')", () => {
    expect(isValidNoFunctions('.')).toBe(false);
});
test("Case 8.4 isValidNoFunctions('..')", () => {
    expect(isValidNoFunctions('..')).toBe(false);
});
test("Case 8.5 isValidNoFunctions(' . ') ", () => {
    expect(isValidNoFunctions(' . ')).toBe(false);
});

// Case 9: Multiple dots in a number
test("Case 9.1 isValidNoFunctions('5.5.5')", () => {
    expect(isValidNoFunctions('5.5.5')).toBe(false);
});
test("Case 9.2 isValidNoFunctions('12.34.56')", () => {
    expect(isValidNoFunctions('12.34.56')).toBe(false);
});
test("Case 9.3 isValidNoFunctions('1..2')", () => {
    expect(isValidNoFunctions('1..2')).toBe(false);
});
test("Case 9.4 isValidNoFunctions('3.14.159')", () => {
    expect(isValidNoFunctions('3.14.159')).toBe(false);
});
test("Case 9.5 isValidNoFunctions('99.99.99')", () => {
    expect(isValidNoFunctions('99.99.99')).toBe(false);
});

test("Case 10.0 isValidNoFunctions('{2+4}}')", () => {
    expect(isValidNoFunctions('{2+4}}')).toBe(false);
});

test("Case 10.1 isValidNoFunctions('5')", () => {
    expect(isValidNoFunctions('5')).toBe(true);
});

test("Case 11 isValidNoFunctions('-3+2')", () => {
    expect(isValidNoFunctions('-3+2')).toBe(true);
});



// ============================================================================
// GRUPO 1: Casos Básicos Válidos (10 testes)
// ============================================================================

test("Case 1.1: isValidNoFunctions('5')", () => {
    expect(isValidNoFunctions('5')).toBe(true);
});

test("Case 1.2: isValidNoFunctions('123')", () => {
    expect(isValidNoFunctions('123')).toBe(true);
});

test("Case 1.3: isValidNoFunctions('-5')", () => {
    expect(isValidNoFunctions('-5')).toBe(true);
});

test("Case 1.4: isValidNoFunctions('-123')", () => {
    expect(isValidNoFunctions('-123')).toBe(true);
});

test("Case 1.5: isValidNoFunctions('0')", () => {
    expect(isValidNoFunctions('0')).toBe(true);
});

test("Case 1.6: isValidNoFunctions('-0')", () => {
    expect(isValidNoFunctions('-0')).toBe(true);
});

test("Case 1.7: isValidNoFunctions('999999')", () => {
    expect(isValidNoFunctions('999999')).toBe(true);
});

test("Case 1.8: isValidNoFunctions('2+3')", () => {
    expect(isValidNoFunctions('2+3')).toBe(true);
});

test("Case 1.9: isValidNoFunctions('5-2')", () => {
    expect(isValidNoFunctions('5-2')).toBe(true);
});

test("Case 1.10: isValidNoFunctions('-3+2')", () => {
    expect(isValidNoFunctions('-3+2')).toBe(true);
});

// ============================================================================
// GRUPO 2: Operações Básicas Válidas (15 testes)
// ============================================================================

test("Case 2.1: isValidNoFunctions('2*3')", () => {
    expect(isValidNoFunctions('2*3')).toBe(true);
});

test("Case 2.2: isValidNoFunctions('10/2')", () => {
    expect(isValidNoFunctions('10/2')).toBe(true);
});

test("Case 2.3: isValidNoFunctions('2+3*4')", () => {
    expect(isValidNoFunctions('2+3*4')).toBe(true);
});

test("Case 2.4: isValidNoFunctions('10/2-3')", () => {
    expect(isValidNoFunctions('10/2-3')).toBe(true);
});

test("Case 2.5: isValidNoFunctions('1+2+3+4+5')", () => {
    expect(isValidNoFunctions('1+2+3+4+5')).toBe(true);
});

test("Case 2.6: isValidNoFunctions('10-5-2-1')", () => {
    expect(isValidNoFunctions('10-5-2-1')).toBe(true);
});

test("Case 2.7: isValidNoFunctions('2*3*4*5')", () => {
    expect(isValidNoFunctions('2*3*4*5')).toBe(true);
});

test("Case 2.8: isValidNoFunctions('100/10/2')", () => {
    expect(isValidNoFunctions('100/10/2')).toBe(true);
});

test("Case 2.9: isValidNoFunctions('2+3-4*5/6')", () => {
    expect(isValidNoFunctions('2+3-4*5/6')).toBe(true);
});

test("Case 2.10: isValidNoFunctions('-5*3')", () => {
    expect(isValidNoFunctions('-5*3')).toBe(true);
});

test("Case 2.11: isValidNoFunctions('-10/2')", () => {
    expect(isValidNoFunctions('-10/2')).toBe(true);
});

test("Case 2.12: isValidNoFunctions('5+-3')", () => {
    expect(isValidNoFunctions('5+-3')).toBe(false);
});

test("Case 2.13: isValidNoFunctions('5--3')", () => {
    expect(isValidNoFunctions('5--3')).toBe(false);
});

test("Case 2.14: isValidNoFunctions('5*-3')", () => {
    expect(isValidNoFunctions('5*-3')).toBe(false);
});

test("Case 2.15: isValidNoFunctions('10/-2')", () => {
    expect(isValidNoFunctions('10/-2')).toBe(false);
});

// ============================================================================
// GRUPO 3: Exponenciação Válida (15 testes)
// ============================================================================

test("Case 3.1: isValidNoFunctions('2^3')", () => {
    expect(isValidNoFunctions('2^3')).toBe(true);
});

test("Case 3.2: isValidNoFunctions('5^2')", () => {
    expect(isValidNoFunctions('5^2')).toBe(true);
});

test("Case 3.3: isValidNoFunctions('10^0')", () => {
    expect(isValidNoFunctions('10^0')).toBe(true);
});

test("Case 3.4: isValidNoFunctions('2^10')", () => {
    expect(isValidNoFunctions('2^10')).toBe(true);
});

test("Case 3.5: isValidNoFunctions('3^2+5')", () => {
    expect(isValidNoFunctions('3^2+5')).toBe(true);
});

test("Case 3.6: isValidNoFunctions('2+3^4')", () => {
    expect(isValidNoFunctions('2+3^4')).toBe(true);
});

test("Case 3.7: isValidNoFunctions('2^3*5')", () => {
    expect(isValidNoFunctions('2^3*5')).toBe(true);
});

test("Case 3.8: isValidNoFunctions('10^2/4')", () => {
    expect(isValidNoFunctions('10^2/4')).toBe(true);
});

test("Case 3.9: isValidNoFunctions('2^3^2')", () => {
    expect(isValidNoFunctions('2^3^2')).toBe(true);
});

test("Case 3.10: isValidNoFunctions('5^2-3^2')", () => {
    expect(isValidNoFunctions('5^2-3^2')).toBe(true);
});

test("Case 3.11: isValidNoFunctions('2^3+4^2-5^1')", () => {
    expect(isValidNoFunctions('2^3+4^2-5^1')).toBe(true);
});

test("Case 3.12: isValidNoFunctions('10^2*3^2')", () => {
    expect(isValidNoFunctions('10^2*3^2')).toBe(true);
});

test("Case 3.13: isValidNoFunctions('2^10/2^5')", () => {
    expect(isValidNoFunctions('2^10/2^5')).toBe(true);
});

test("Case 3.14: isValidNoFunctions('3^3^3')", () => {
    expect(isValidNoFunctions('3^3^3')).toBe(true);
});

test("Case 3.15: isValidNoFunctions('-2^3')", () => {
    expect(isValidNoFunctions('-2^3')).toBe(true);
});

// ============================================================================
// GRUPO 4: Notação Científica Válida (20 testes)
// ============================================================================

test("Case 4.1: isValidNoFunctions('1e2')", () => {
    expect(isValidNoFunctions('1e2')).toBe(true);
});

test("Case 4.2: isValidNoFunctions('2e10')", () => {
    expect(isValidNoFunctions('2e10')).toBe(true);
});

test("Case 4.3: isValidNoFunctions('5e0')", () => {
    expect(isValidNoFunctions('5e0')).toBe(true);
});

test("Case 4.4: isValidNoFunctions('1e-2')", () => {
    expect(isValidNoFunctions('1e-2')).toBe(true);
});

test("Case 4.5: isValidNoFunctions('3e+5')", () => {
    expect(isValidNoFunctions('3e+5')).toBe(true);
});

test("Case 4.6: isValidNoFunctions('2.5e3')", () => {
    expect(isValidNoFunctions('2.5e3')).toBe(true);
});

test("Case 4.7: isValidNoFunctions('1.5e-10')", () => {
    expect(isValidNoFunctions('1.5e-10')).toBe(true);
});

test("Case 4.8: isValidNoFunctions('9.99e+99')", () => {
    expect(isValidNoFunctions('9.99e+99')).toBe(true);
});

test("Case 4.9: isValidNoFunctions('1e2+3e4')", () => {
    expect(isValidNoFunctions('1e2+3e4')).toBe(true);
});

test("Case 4.10: isValidNoFunctions('5e3-2e2')", () => {
    expect(isValidNoFunctions('5e3-2e2')).toBe(true);
});

test("Case 4.11: isValidNoFunctions('1e2*3e1')", () => {
    expect(isValidNoFunctions('1e2*3e1')).toBe(true);
});

test("Case 4.12: isValidNoFunctions('1e10/2e5')", () => {
    expect(isValidNoFunctions('1e10/2e5')).toBe(true);
});

test("Case 4.13: isValidNoFunctions('2e3^2')", () => {
    expect(isValidNoFunctions('2e3^2')).toBe(true);
});

test("Case 4.14: isValidNoFunctions('2^3e2')", () => {
    expect(isValidNoFunctions('2^3e2')).toBe(true);
});

test("Case 4.15: isValidNoFunctions('1.5e-3*2.5e+2')", () => {
    expect(isValidNoFunctions('1.5e-3*2.5e+2')).toBe(true);
});

test("Case 4.16: isValidNoFunctions('0e0')", () => {
    expect(isValidNoFunctions('0e0')).toBe(true);
});

test("Case 4.17: isValidNoFunctions('1e100')", () => {
    expect(isValidNoFunctions('1e100')).toBe(true);
});

test("Case 4.18: isValidNoFunctions('1e-100')", () => {
    expect(isValidNoFunctions('1e-100')).toBe(true);
});

test("Case 4.19: isValidNoFunctions('6.022e23')", () => {
    expect(isValidNoFunctions('6.022e23')).toBe(true);
});

test("Case 4.20: isValidNoFunctions('-1e2')", () => {
    expect(isValidNoFunctions('-1e2')).toBe(true);
});

// ============================================================================
// GRUPO 5: Decimais Válidos (10 testes)
// ============================================================================

test("Case 5.1: isValidNoFunctions('3.14')", () => {
    expect(isValidNoFunctions('3.14')).toBe(true);
});

test("Case 5.2: isValidNoFunctions('0.5')", () => {
    expect(isValidNoFunctions('0.5')).toBe(true);
});

test("Case 5.3: isValidNoFunctions('0.0001')", () => {
    expect(isValidNoFunctions('0.0001')).toBe(true);
});

test("Case 5.4: isValidNoFunctions('123.456')", () => {
    expect(isValidNoFunctions('123.456')).toBe(true);
});

test("Case 5.5: isValidNoFunctions('2.5+3.7')", () => {
    expect(isValidNoFunctions('2.5+3.7')).toBe(true);
});

test("Case 5.6: isValidNoFunctions('10.5-3.2')", () => {
    expect(isValidNoFunctions('10.5-3.2')).toBe(true);
});

test("Case 5.7: isValidNoFunctions('2.5*3.5')", () => {
    expect(isValidNoFunctions('2.5*3.5')).toBe(true);
});

test("Case 5.8: isValidNoFunctions('10.5/2.5')", () => {
    expect(isValidNoFunctions('10.5/2.5')).toBe(true);
});

test("Case 5.9: isValidNoFunctions('2.5^3.2')", () => {
    expect(isValidNoFunctions('2.5^3.2')).toBe(true);
});

test("Case 5.10: isValidNoFunctions('-3.14')", () => {
    expect(isValidNoFunctions('-3.14')).toBe(true);
});

// ============================================================================
// GRUPO 6: Brackets Válidos (15 testes)
// ============================================================================

test("Case 6.1: isValidNoFunctions('(2+3)')", () => {
    expect(isValidNoFunctions('(2+3)')).toBe(true);
});

test("Case 6.2: isValidNoFunctions('[5-2]')", () => {
    expect(isValidNoFunctions('[5-2]')).toBe(true);
});

test("Case 6.3: isValidNoFunctions('{10*3}')", () => {
    expect(isValidNoFunctions('{10*3}')).toBe(true);
});

test("Case 6.4: isValidNoFunctions('(2+3)*4')", () => {
    expect(isValidNoFunctions('(2+3)*4')).toBe(true);
});

test("Case 6.5: isValidNoFunctions('2*(3+4)')", () => {
    expect(isValidNoFunctions('2*(3+4)')).toBe(true);
});

test("Case 6.6: isValidNoFunctions('(2+3)*(4+5)')", () => {
    expect(isValidNoFunctions('(2+3)*(4+5)')).toBe(true);
});

test("Case 6.7: isValidNoFunctions('((2+3))')", () => {
    expect(isValidNoFunctions('((2+3))')).toBe(true);
});

test("Case 6.8: isValidNoFunctions('[{(5)}]')", () => {
    expect(isValidNoFunctions('[{(5)}]')).toBe(true);
});

test("Case 6.9: isValidNoFunctions('(2+3)^2')", () => {
    expect(isValidNoFunctions('(2+3)^2')).toBe(true);
});

test("Case 6.10: isValidNoFunctions('2^(3+1)')", () => {
    expect(isValidNoFunctions('2^(3+1)')).toBe(true);
});

test("Case 6.11: isValidNoFunctions('{2^3}+5')", () => {
    expect(isValidNoFunctions('{2^3}+5')).toBe(true);
});

test("Case 6.12: isValidNoFunctions('[5^2]')", () => {
    expect(isValidNoFunctions('[5^2]')).toBe(true);
});

test("Case 6.13: isValidNoFunctions('(1e2+3e1)')", () => {
    expect(isValidNoFunctions('(1e2+3e1)')).toBe(true);
});

test("Case 6.14: isValidNoFunctions('[2.5*3.7]')", () => {
    expect(isValidNoFunctions('[2.5*3.7]')).toBe(true);
});

test("Case 6.15: isValidNoFunctions('{[(1+2)*3]-[4/5]}')", () => {
    expect(isValidNoFunctions('{[(1+2)*3]-[4/5]}')).toBe(true);
});

// ============================================================================
// GRUPO 7: Casos Inválidos - Operadores (15 testes)
// ============================================================================

test("Case 7.1: isValidNoFunctions('++2')", () => {
    expect(isValidNoFunctions('++2')).toBe(false);
});

test("Case 7.2: isValidNoFunctions('5*(2-+1)')", () => {
    expect(isValidNoFunctions('5*(2-+1)')).toBe(false);
});

test("Case 7.3: isValidNoFunctions('3**2')", () => {
    expect(isValidNoFunctions('3**2')).toBe(false);
});

test("Case 7.4: isValidNoFunctions('--4')", () => {
    expect(isValidNoFunctions('--4')).toBe(false);
});

test("Case 7.5: isValidNoFunctions('7//2')", () => {
    expect(isValidNoFunctions('7//2')).toBe(false);
});

test("Case 7.6: isValidNoFunctions('*5')", () => {
    expect(isValidNoFunctions('*5')).toBe(false);
});

test("Case 7.7: isValidNoFunctions('/10')", () => {
    expect(isValidNoFunctions('/10')).toBe(false);
});

test("Case 7.8: isValidNoFunctions('^3')", () => {
    expect(isValidNoFunctions('^3')).toBe(false);
});

test("Case 7.9: isValidNoFunctions('5+')", () => {
    expect(isValidNoFunctions('5+')).toBe(false);
});

test("Case 7.10: isValidNoFunctions('5*')", () => {
    expect(isValidNoFunctions('5*')).toBe(false);
});

test("Case 7.11: isValidNoFunctions('5/')", () => {
    expect(isValidNoFunctions('5/')).toBe(false);
});

test("Case 7.12: isValidNoFunctions('5^')", () => {
    expect(isValidNoFunctions('5^')).toBe(false);
});

test("Case 7.13: isValidNoFunctions('2^^3')", () => {
    expect(isValidNoFunctions('2^^3')).toBe(false);
});

test("Case 7.14: isValidNoFunctions('2^*3')", () => {
    expect(isValidNoFunctions('2^*3')).toBe(false);
});

test("Case 7.15: isValidNoFunctions('2^+^3')", () => {
    expect(isValidNoFunctions('2^+^3')).toBe(false);
});

// ============================================================================
// GRUPO 8: Casos Inválidos - Brackets (10 testes)
// ============================================================================

test("Case 8.1: isValidNoFunctions('{}')", () => {
    expect(isValidNoFunctions('{}')).toBe(false);
});

test("Case 8.2: isValidNoFunctions('()')", () => {
    expect(isValidNoFunctions('()')).toBe(false);
});

test("Case 8.3: isValidNoFunctions('[]')", () => {
    expect(isValidNoFunctions('[]')).toBe(false);
});

test("Case 8.4: isValidNoFunctions('{+}')", () => {
    expect(isValidNoFunctions('{+}')).toBe(false);
});

test("Case 8.5: isValidNoFunctions('(*)')", () => {
    expect(isValidNoFunctions('(*)')).toBe(false);
});

test("Case 8.6: isValidNoFunctions('[/]')", () => {
    expect(isValidNoFunctions('[/]')).toBe(false);
});

test("Case 8.7: isValidNoFunctions('(2+3')", () => {
    expect(isValidNoFunctions('(2+3')).toBe(false);
});

test("Case 8.8: isValidNoFunctions('2+3)')", () => {
    expect(isValidNoFunctions('2+3)')).toBe(false);
});

test("Case 8.9: isValidNoFunctions('[{(5)}')", () => {
    expect(isValidNoFunctions('[{(5)}')).toBe(false);
});

test("Case 8.10: isValidNoFunctions('({*2}')", () => {
    expect(isValidNoFunctions('({*2}')).toBe(false);
});

// ============================================================================
// GRUPO 9: Casos Inválidos - Decimais (10 testes)
// ============================================================================

test("Case 9.1: isValidNoFunctions('.5')", () => {
    expect(isValidNoFunctions('.5')).toBe(false);
});

test("Case 9.2: isValidNoFunctions('5.')", () => {
    expect(isValidNoFunctions('5.')).toBe(false);
});

test("Case 9.3: isValidNoFunctions('.')", () => {
    expect(isValidNoFunctions('.')).toBe(false);
});

test("Case 9.4: isValidNoFunctions('5.5.5')", () => {
    expect(isValidNoFunctions('5.5.5')).toBe(false);
});

test("Case 9.5: isValidNoFunctions('1..2')", () => {
    expect(isValidNoFunctions('1..2')).toBe(false);
});

test("Case 9.6: isValidNoFunctions('+.5')", () => {
    expect(isValidNoFunctions('+.5')).toBe(false);
});

test("Case 9.7: isValidNoFunctions('*.5')", () => {
    expect(isValidNoFunctions('*.5')).toBe(false);
});

test("Case 9.8: isValidNoFunctions('5.+')", () => {
    expect(isValidNoFunctions('5.+')).toBe(false);
});

test("Case 9.9: isValidNoFunctions('5.*')", () => {
    expect(isValidNoFunctions('5.*')).toBe(false);
});

test("Case 9.10: isValidNoFunctions('3.14.159')", () => {
    expect(isValidNoFunctions('3.14.159')).toBe(false);
});

// ============================================================================
// GRUPO 10: Casos Inválidos - Notação Científica (10 testes)
// ============================================================================

test("Case 10.1: isValidNoFunctions('e2')", () => {
    expect(isValidNoFunctions('e2')).toBe(false);
});

test("Case 10.2: isValidNoFunctions('1e')", () => {
    expect(isValidNoFunctions('1e')).toBe(false);
});

test("Case 10.3: isValidNoFunctions('2e+')", () => {
    expect(isValidNoFunctions('2e+')).toBe(false);
});

test("Case 10.4: isValidNoFunctions('3e-')", () => {
    expect(isValidNoFunctions('3e-')).toBe(false);
});

test("Case 10.5: isValidNoFunctions('1ee2')", () => {
    expect(isValidNoFunctions('1ee2')).toBe(false);
});

test("Case 10.6: isValidNoFunctions('2e++3')", () => {
    expect(isValidNoFunctions('2e++3')).toBe(false);
});

test("Case 10.7: isValidNoFunctions('3e--2')", () => {
    expect(isValidNoFunctions('3e--2')).toBe(false);
});

test("Case 10.8: isValidNoFunctions('2e*3')", () => {
    expect(isValidNoFunctions('2e*3')).toBe(false);
});

test("Case 10.9: isValidNoFunctions('5e/2')", () => {
    expect(isValidNoFunctions('5e/2')).toBe(false);
});

test("Case 10.10: isValidNoFunctions('1.5e')", () => {
    expect(isValidNoFunctions('1.5e')).toBe(false);
});

// ============================================================================
// GRUPO 11: Casos Inválidos - Caracteres (10 testes)
// ============================================================================

test("Case 11.1: isValidNoFunctions('')", () => {
    expect(isValidNoFunctions('')).toBe(false);
});

test("Case 11.2: isValidNoFunctions(' ')", () => {
    expect(isValidNoFunctions(' ')).toBe(false);
});

test("Case 11.3: isValidNoFunctions('a')", () => {
    expect(isValidNoFunctions('a')).toBe(false);
});

test("Case 11.4: isValidNoFunctions('x')", () => {
    expect(isValidNoFunctions('x')).toBe(false);
});

test("Case 11.5: isValidNoFunctions('2+x')", () => {
    expect(isValidNoFunctions('2+x')).toBe(false);
});

test("Case 11.6: isValidNoFunctions('$5')", () => {
    expect(isValidNoFunctions('$5')).toBe(false);
});

test("Case 11.7: isValidNoFunctions('2@3')", () => {
    expect(isValidNoFunctions('2@3')).toBe(false);
});

test("Case 11.8: isValidNoFunctions('2#3')", () => {
    expect(isValidNoFunctions('2#3')).toBe(false);
});

test("Case 11.9: isValidNoFunctions('2%3')", () => {
    expect(isValidNoFunctions('2%3')).toBe(false);
});

test("Case 11.10: isValidNoFunctions('2&3')", () => {
    expect(isValidNoFunctions('2&3')).toBe(false);
});

// ============================================================================
// GRUPO 12: Combinações Complexas Válidas (10 testes)
// ============================================================================

test("Case 12.1: isValidNoFunctions('2^3+4^2-5*6/7')", () => {
    expect(isValidNoFunctions('2^3+4^2-5*6/7')).toBe(true);
});

test("Case 12.2: isValidNoFunctions('(1e2+2e1)^3')", () => {
    expect(isValidNoFunctions('(1e2+2e1)^3')).toBe(true);
});

test("Case 12.3: isValidNoFunctions('2.5^3.5*1.5e2')", () => {
    expect(isValidNoFunctions('2.5^3.5*1.5e2')).toBe(true);
});

test("Case 12.4: isValidNoFunctions('((((5))))')", () => {
    expect(isValidNoFunctions('((((5))))')).toBe(true);
});

test("Case 12.5: isValidNoFunctions('{[(2+3)*4]-[5/6]}^2')", () => {
    expect(isValidNoFunctions('{[(2+3)*4]-[5/6]}^2')).toBe(true);
});

test("Case 12.6: isValidNoFunctions('1e2+2e1+3e0+4e-1+5e-2')", () => {
    expect(isValidNoFunctions('1e2+2e1+3e0+4e-1+5e-2')).toBe(true);
});

test("Case 12.7: isValidNoFunctions('2^2^2^2')", () => {
    expect(isValidNoFunctions('2^2^2^2')).toBe(true);
});

test("Case 12.8: isValidNoFunctions('-1e-10*-2e+10')", () => {
    expect(isValidNoFunctions('-1e-10*-2e+10')).toBe(true);
});

test("Case 12.9: isValidNoFunctions('(1+2)*(3+4)*(5+6)')", () => {
    expect(isValidNoFunctions('(1+2)*(3+4)*(5+6)')).toBe(true);
});

test("Case 12.10: isValidNoFunctions('10^2/5^2+3^2-2^2')", () => {
    expect(isValidNoFunctions('10^2/5^2+3^2-2^2')).toBe(true);
});



test("Case 13.1: isValidNoFunctions('1e-102e10') // dois 'e' consecutivos sem operador", () => {
    expect(isValidNoFunctions('1e-102e10')).toBe(false);
});

test("Case 13.2: isValidNoFunctions('3e5e2') // dois 'e' consecutivos", () => {
    expect(isValidNoFunctions('3e5e2')).toBe(false);
});

test("Case 13.3: isValidNoFunctions('2e+10e-5') // dois 'e' com sinais", () => {
    expect(isValidNoFunctions('2e+10e-5')).toBe(false);
});

test("Case 13.4: isValidNoFunctions('1.5e2.5e3') // dois 'e' com decimais", () => {
    expect(isValidNoFunctions('1.5e2.5e3')).toBe(false);
});

test("Case 13.5: isValidNoFunctions('e') // 'e' sozinho", () => {
    expect(isValidNoFunctions('e')).toBe(false);
});

test("Case 13.6: isValidNoFunctions('ee') // duplo 'e'", () => {
    expect(isValidNoFunctions('ee')).toBe(false);
});

test("Case 13.7: isValidNoFunctions('1e2e') // 'e' no final após notação válida", () => {
    expect(isValidNoFunctions('1e2e')).toBe(false);
});

test("Case 13.8: isValidNoFunctions('e1e2') // 'e' no início", () => {
    expect(isValidNoFunctions('e1e2')).toBe(false);
});

test("Case 13.9: isValidNoFunctions('2e+*3') // operador após 'e+'", () => {
    expect(isValidNoFunctions('2e+*3')).toBe(false);
});

test("Case 13.10: isValidNoFunctions('5e-/2') // operador após 'e-'", () => {
    expect(isValidNoFunctions('5e-/2')).toBe(false);
});

test("Case 13.11: isValidNoFunctions('1e 2') // espaço entre 'e' e número", () => {
    expect(isValidNoFunctions('1e 2')).toBe(true);
});

test("Case 13.12: isValidNoFunctions('1 e2') // espaço antes de 'e'", () => {
    expect(isValidNoFunctions('1 e2')).toBe(true);
});

test("Case 13.13: isValidNoFunctions('1e+') // 'e+' sem número", () => {
    expect(isValidNoFunctions('1e+')).toBe(false);
});

test("Case 13.14: isValidNoFunctions('1e-') // 'e-' sem número", () => {
    expect(isValidNoFunctions('1e-')).toBe(false);
});

test("Case 13.15: isValidNoFunctions('2e++10') // duplo sinal após 'e'", () => {
    expect(isValidNoFunctions('2e++10')).toBe(false);
});

test("Case 13.16: isValidNoFunctions('3e--5') // duplo sinal negativo após 'e'", () => {
    expect(isValidNoFunctions('3e--5')).toBe(false);
});

test("Case 13.17: isValidNoFunctions('4e+-2') // sinais misturados após 'e'", () => {
    expect(isValidNoFunctions('4e+-2')).toBe(false);
});

test("Case 13.18: isValidNoFunctions('5e-+3') // sinais misturados após 'e'", () => {
    expect(isValidNoFunctions('5e-+3')).toBe(false);
});

test("Case 13.19: isValidNoFunctions('1e2.5') // decimal no expoente", () => {
    expect(isValidNoFunctions('1e2.5')).toBe(false);
});

test("Case 13.20: isValidNoFunctions('2e3.14') // decimal no expoente", () => {
    expect(isValidNoFunctions('2e3.14')).toBe(false);
});

test("Case 14.1: isValidNoFunctions('2+*3') // + seguido de *", () => {
    expect(isValidNoFunctions('2+*3')).toBe(false);
});

test("Case 14.2: isValidNoFunctions('5-/2') // - seguido de /", () => {
    expect(isValidNoFunctions('5-/2')).toBe(false);
});

test("Case 14.3: isValidNoFunctions('3*/ 4') // * seguido de /", () => {
    expect(isValidNoFunctions('3*/  4')).toBe(false);
});

test("Case 14.4: isValidNoFunctions('7/*2') // / seguido de *", () => {
    expect(isValidNoFunctions('7/*2')).toBe(false);
});

test("Case 14.5: isValidNoFunctions('2^/3') // ^ seguido de /", () => {
    expect(isValidNoFunctions('2^/3')).toBe(false);
});

test("Case 14.6: isValidNoFunctions('5^*2') // ^ seguido de *", () => {
    expect(isValidNoFunctions('5^*2')).toBe(false);
});

test("Case 14.7: isValidNoFunctions('+') // + sozinho", () => {
    expect(isValidNoFunctions('+')).toBe(false);
});

test("Case 14.8: isValidNoFunctions('-') // - sozinho", () => {
    expect(isValidNoFunctions('-')).toBe(false);
});

test("Case 14.9: isValidNoFunctions('*') // * sozinho", () => {
    expect(isValidNoFunctions('*')).toBe(false);
});

test("Case 14.10: isValidNoFunctions('/') // / sozinho", () => {
    expect(isValidNoFunctions('/')).toBe(false);
});

test("Case 14.11: isValidNoFunctions('^') // ^ sozinho", () => {
    expect(isValidNoFunctions('^')).toBe(false);
});

test("Case 14.12: isValidNoFunctions('2+++3') // triplo +", () => {
    expect(isValidNoFunctions('2+++3')).toBe(false);
});

test("Case 14.13: isValidNoFunctions('5---2') // triplo -", () => {
    expect(isValidNoFunctions('5---2')).toBe(false);
});

test("Case 14.14: isValidNoFunctions('3***2') // triplo *", () => {
    expect(isValidNoFunctions('3***2')).toBe(false);
});

test("Case 14.15: isValidNoFunctions('10///2') // triplo /", () => {
    expect(isValidNoFunctions('10///2')).toBe(false);
});

test("Case 14.16: isValidNoFunctions('2^^^3') // triplo ^", () => {
    expect(isValidNoFunctions('2^^^3')).toBe(false);
});

test("Case 14.17: isValidNoFunctions('+-*/^') // sequência de operadores", () => {
    expect(isValidNoFunctions('+-*/^')).toBe(false);
});

test("Case 14.18: isValidNoFunctions('2+3-*4') // - seguido de *", () => {
    expect(isValidNoFunctions('2+3-*4')).toBe(false);
});

test("Case 14.19: isValidNoFunctions('5*6+/2') // + seguido de /", () => {
    expect(isValidNoFunctions('5*6+/2')).toBe(false);
});

test("Case 14.20: isValidNoFunctions('1^2-^3') // - seguido de ^", () => {
    expect(isValidNoFunctions('1^2-^3')).toBe(false);
});

test("Case 15.1: isValidNoFunctions('((2+3)') // falta fechar (", () => {
    expect(isValidNoFunctions('((2+3)')).toBe(false);
});

test("Case 15.2: isValidNoFunctions('(2+3))') // excesso de )", () => {
    expect(isValidNoFunctions('(2+3))')).toBe(false);
});

test("Case 15.3: isValidNoFunctions('[5+2') // falta fechar [", () => {
    expect(isValidNoFunctions('[5+2')).toBe(false);
});

test("Case 15.4: isValidNoFunctions('5+2]') // excesso de ]", () => {
    expect(isValidNoFunctions('5+2]')).toBe(false);
});

test("Case 15.5: isValidNoFunctions('{3*4') // falta fechar {", () => {
    expect(isValidNoFunctions('{3*4')).toBe(false);
});

test("Case 15.6: isValidNoFunctions('3*4}') // excesso de }", () => {
    expect(isValidNoFunctions('3*4}')).toBe(false);
});

test("Case 15.7: isValidNoFunctions('(2+[3)*4]') // ordem errada de fechamento", () => {
    expect(isValidNoFunctions('(2+[3)*4]')).toBe(false);
});

test("Case 15.8: isValidNoFunctions('[{5})') // tipos incompatíveis", () => {
    expect(isValidNoFunctions('[{5})')).toBe(false);
});

test("Case 15.9: isValidNoFunctions('({3}]') // tipos incompatíveis", () => {
    expect(isValidNoFunctions('({3}]')).toBe(false);
});

test("Case 15.10: isValidNoFunctions('[{(1+2)})') // tipos incompatíveis no final", () => {
    expect(isValidNoFunctions('[{(1+2)})')).toBe(false);
});

test("Case 15.11: isValidNoFunctions('((((5))') // faltam 2 fechamentos", () => {
    expect(isValidNoFunctions('((((5))')).toBe(false);
});

test("Case 15.12: isValidNoFunctions('(5))))') // excesso de 2 fechamentos", () => {
    expect(isValidNoFunctions('(5))))')).toBe(false);
});

test("Case 15.13: isValidNoFunctions('(2+3]') // abre ( fecha [", () => {
    expect(isValidNoFunctions('(2+3]')).toBe(false);
});

test("Case 15.14: isValidNoFunctions('[5-2)') // abre [ fecha (", () => {
    expect(isValidNoFunctions('[5-2)')).toBe(false);
});

test("Case 15.15: isValidNoFunctions('{7*3]') // abre { fecha [", () => {
    expect(isValidNoFunctions('{7*3]')).toBe(false);
});

test("Case 15.16: isValidNoFunctions('[(3+4}]') // } no meio de [ ]", () => {
    expect(isValidNoFunctions('[(3+4}]')).toBe(false);
});

test("Case 15.17: isValidNoFunctions('{(2+3})') // ordem errada", () => {
    expect(isValidNoFunctions('{(2+3})')).toBe(false);
});

test("Case 15.18: isValidNoFunctions(')(') // fecha antes de abrir", () => {
    expect(isValidNoFunctions(')(')).toBe(false);
});

test("Case 15.19: isValidNoFunctions('][') // fecha antes de abrir", () => {
    expect(isValidNoFunctions('][')).toBe(false);
});

test("Case 15.20: isValidNoFunctions('}{') // fecha antes de abrir", () => {
    expect(isValidNoFunctions('}{')).toBe(false);
});

test("Case 16.1: isValidNoFunctions('1.2.3') // dois pontos em um número", () => {
    expect(isValidNoFunctions('1.2.3')).toBe(false);
});

test("Case 16.2: isValidNoFunctions('10.5.2.1') // três pontos", () => {
    expect(isValidNoFunctions('10.5.2.1')).toBe(false);
});

test("Case 16.3: isValidNoFunctions('0.0.5') // dois pontos começando com zero", () => {
    expect(isValidNoFunctions('0.0.5')).toBe(false);
});

test("Case 16.4: isValidNoFunctions('2.+3.5') // ponto antes de operador", () => {
    expect(isValidNoFunctions('2.+3.5')).toBe(false);
});

test("Case 16.5: isValidNoFunctions('3.5+.2') // ponto no início do segundo número", () => {
    expect(isValidNoFunctions('3.5+.2')).toBe(false);
});

test("Case 16.6: isValidNoFunctions('1.2.3+4.5.6') // múltiplos números com pontos duplos", () => {
    expect(isValidNoFunctions('1.2.3+4.5.6')).toBe(false);
});

test("Case 16.7: isValidNoFunctions('..5') // dois pontos no início", () => {
    expect(isValidNoFunctions('..5')).toBe(false);
});

test("Case 16.8: isValidNoFunctions('5..') // dois pontos no final", () => {
    expect(isValidNoFunctions('5..')).toBe(false);
});

test("Case 16.9: isValidNoFunctions('1...2') // três pontos consecutivos", () => {
    expect(isValidNoFunctions('1...2')).toBe(false);
});

test("Case 16.10: isValidNoFunctions('1.2.3.4.5') // quatro pontos", () => {
    expect(isValidNoFunctions('1.2.3.4.5')).toBe(false);
});

test("Case 16.11: isValidNoFunctions('2.5.*3.7') // ponto antes de *", () => {
    expect(isValidNoFunctions('2.5.*3.7')).toBe(false);
});

test("Case 16.12: isValidNoFunctions('4.1./2.3') // ponto antes de /", () => {
    expect(isValidNoFunctions('4.1./2.3')).toBe(false);
});

test("Case 16.13: isValidNoFunctions('5.5.^2.2') // pontos duplos com ^", () => {
    expect(isValidNoFunctions('5.5.^2.2')).toBe(false);
});

test("Case 16.14: isValidNoFunctions('1.2.+3.4.') // múltiplos erros de ponto", () => {
    expect(isValidNoFunctions('1.2.+3.4.')).toBe(false);
});

test("Case 16.15: isValidNoFunctions('...') // apenas pontos", () => {
    expect(isValidNoFunctions('...')).toBe(false);
});

test("Case 17.1: isValidNoFunctions('0.1+0.2') // decimais pequenos", () => {
    expect(isValidNoFunctions('0.1+0.2')).toBe(true);
});

test("Case 17.2: isValidNoFunctions('99.99+0.01') // soma de decimais", () => {
    expect(isValidNoFunctions('99.99+0.01')).toBe(true);
});

test("Case 17.3: isValidNoFunctions('3.14159') // pi aproximado", () => {
    expect(isValidNoFunctions('3.14159')).toBe(true);
});

test("Case 17.4: isValidNoFunctions('2.718281') // e aproximado", () => {
    expect(isValidNoFunctions('2.718281')).toBe(true);
});

test("Case 17.5: isValidNoFunctions('0.00001') // decimal muito pequeno", () => {
    expect(isValidNoFunctions('0.00001')).toBe(true);
});

test("Case 17.6: isValidNoFunctions('999.999') // decimal grande", () => {
    expect(isValidNoFunctions('999.999')).toBe(true);
});

test("Case 17.7: isValidNoFunctions('1.1+2.2+3.3') // múltiplos decimais", () => {
    expect(isValidNoFunctions('1.1+2.2+3.3')).toBe(true);
});

test("Case 17.8: isValidNoFunctions('5.5*2.2') // multiplicação de decimais", () => {
    expect(isValidNoFunctions('5.5*2.2')).toBe(true);
});

test("Case 17.9: isValidNoFunctions('10.8/2.4') // divisão de decimais", () => {
    expect(isValidNoFunctions('10.8/2.4')).toBe(true);
});

test("Case 17.10: isValidNoFunctions('3.5^2.5') // exponenciação de decimais", () => {
    expect(isValidNoFunctions('3.5^2.5')).toBe(true);
});

test("Case 17.11: isValidNoFunctions('0.5+0.25+0.125') // frações decimais", () => {
    expect(isValidNoFunctions('0.5+0.25+0.125')).toBe(true);
});

test("Case 17.12: isValidNoFunctions('1.41421356') // raiz de 2 aproximada", () => {
    expect(isValidNoFunctions('1.41421356')).toBe(true);
});

test("Case 17.13: isValidNoFunctions('0.333333') // 1/3 aproximado", () => {
    expect(isValidNoFunctions('0.333333')).toBe(true);
});

test("Case 17.14: isValidNoFunctions('12.34+56.78-90.12') // operações múltiplas", () => {
    expect(isValidNoFunctions('12.34+56.78-90.12')).toBe(true);
});

test("Case 17.15: isValidNoFunctions('0.1*0.2*0.3') // multiplicações de decimais", () => {
    expect(isValidNoFunctions('0.1*0.2*0.3')).toBe(true);
});

test("Case 18.1: isValidNoFunctions('-2^2') // base negativa", () => {
    expect(isValidNoFunctions('-2^2')).toBe(true);
});

test("Case 18.2: isValidNoFunctions('-5^3') // base negativa ímpar", () => {
    expect(isValidNoFunctions('-5^3')).toBe(true);
});

test("Case 18.3: isValidNoFunctions('2^-1') // expoente negativo", () => {
    expect(isValidNoFunctions('2^-1')).toBe(false);
});

test("Case 18.4: isValidNoFunctions('10^-5') // potência de 10 negativa", () => {
    expect(isValidNoFunctions('10^-5')).toBe(false);
});

test("Case 18.5: isValidNoFunctions('-3^-2') // ambos negativos", () => {
    expect(isValidNoFunctions('-3^-2')).toBe(false);
});

test("Case 18.6: isValidNoFunctions('-2^-3') // ambos negativos", () => {
    expect(isValidNoFunctions('-2^-3')).toBe(false);
});

test("Case 18.7: isValidNoFunctions('(-2)^2') // base negativa com parênteses", () => {
    expect(isValidNoFunctions('(-2)^2')).toBe(true);
});

test("Case 18.8: isValidNoFunctions('(-5)^3') // base negativa com parênteses", () => {
    expect(isValidNoFunctions('(-5)^3')).toBe(true);
});

test("Case 18.9: isValidNoFunctions('2^(-1)') // expoente negativo com parênteses", () => {
    expect(isValidNoFunctions('2^(-1)')).toBe(true);
});

test("Case 18.10: isValidNoFunctions('(-2)^(-3)') // ambos com parênteses", () => {
    expect(isValidNoFunctions('(-2)^(-3)')).toBe(true);
});

test("Case 18.11: isValidNoFunctions('-10^2') // base negativa sem parênteses", () => {
    expect(isValidNoFunctions('-10^2')).toBe(true);
});

test("Case 18.12: isValidNoFunctions('3^-4+2^-1') // múltiplos expoentes negativos", () => {
    expect(isValidNoFunctions('3^-4+2^-1')).toBe(false);
});

test("Case 18.13: isValidNoFunctions('-2^3*-3^2') // multiplicação com negativos", () => {
    expect(isValidNoFunctions('-2^3*-3^2')).toBe(false);
});

test("Case 18.14: isValidNoFunctions('(-5)^2-(-3)^2') // subtração com bases negativas", () => {
    expect(isValidNoFunctions('(-5)^2-(-3)^2')).toBe(true);
});

test("Case 18.15: isValidNoFunctions('-1^100') // base -1", () => {
    expect(isValidNoFunctions('-1^100')).toBe(true);
});

test("Case 19.1: isValidNoFunctions('1.23e45') // notação com decimal", () => {
    expect(isValidNoFunctions('1.23e45')).toBe(true);
});

test("Case 19.2: isValidNoFunctions('9.8e1') // 9.8 * 10", () => {
    expect(isValidNoFunctions('9.8e1')).toBe(true);
});

test("Case 19.3: isValidNoFunctions('6.67e-11') // constante gravitacional", () => {
    expect(isValidNoFunctions('6.67e-11')).toBe(true);
});

test("Case 19.4: isValidNoFunctions('1.6e-19') // carga do elétron", () => {
    expect(isValidNoFunctions('1.6e-19')).toBe(true);
});

test("Case 19.5: isValidNoFunctions('3e8') // velocidade da luz", () => {
    expect(isValidNoFunctions('3e8')).toBe(true);
});

test("Case 19.6: isValidNoFunctions('6.022e23') // número de Avogadro", () => {
    expect(isValidNoFunctions('6.022e23')).toBe(true);
});

test("Case 19.7: isValidNoFunctions('1e-10+1e-11') // soma de notações pequenas", () => {
    expect(isValidNoFunctions('1e-10+1e-11')).toBe(true);
});

test("Case 19.8: isValidNoFunctions('1e10-1e9') // subtração de notações grandes", () => {
    expect(isValidNoFunctions('1e10-1e9')).toBe(true);
});

test("Case 19.9: isValidNoFunctions('2e5*3e4') // multiplicação científica", () => {
    expect(isValidNoFunctions('2e5*3e4')).toBe(true);
});

test("Case 19.10: isValidNoFunctions('1e20/1e10') // divisão científica", () => {
    expect(isValidNoFunctions('1e20/1e10')).toBe(true);
});

test("Case 19.11: isValidNoFunctions('(1e2)^2') // notação com parênteses e potência", () => {
    expect(isValidNoFunctions('(1e2)^2')).toBe(true);
});

test("Case 19.12: isValidNoFunctions('2^(3e1)') // expoente em notação científica", () => {
    expect(isValidNoFunctions('2^(3e1)')).toBe(true);
});

test("Case 19.13: isValidNoFunctions('1.5e2+2.5e3-3.5e1') // múltiplas operações", () => {
    expect(isValidNoFunctions('1.5e2+2.5e3-3.5e1')).toBe(true);
});

test("Case 19.14: isValidNoFunctions('9.99e99+1.11e11') // números muito grandes", () => {
    expect(isValidNoFunctions('9.99e99+1.11e11')).toBe(true);
});

test("Case 19.15: isValidNoFunctions('1e-100+1e-200') // números muito pequenos", () => {
    expect(isValidNoFunctions('1e-100+1e-200')).toBe(true);
});

test("Case 19.16: isValidNoFunctions('5e0') // expoente zero", () => {
    expect(isValidNoFunctions('5e0')).toBe(true);
});

test("Case 19.17: isValidNoFunctions('1e1*1e1') // 10 * 10", () => {
    expect(isValidNoFunctions('1e1*1e1')).toBe(true);
});

test("Case 19.18: isValidNoFunctions('(2e3+3e2)*4e1') // expressão complexa", () => {
    expect(isValidNoFunctions('(2e3+3e2)*4e1')).toBe(true);
});

test("Case 19.19: isValidNoFunctions('[1e5-2e4]/3e3') // com brackets", () => {
    expect(isValidNoFunctions('[1e5-2e4]/3e3')).toBe(true);
});

test("Case 19.20: isValidNoFunctions('{5e10+5e9}^2') // com chaves e potência", () => {
    expect(isValidNoFunctions('{5e10+5e9}^2')).toBe(true);
});

test("Case 20.1: isValidNoFunctions('((2+3))') // duplo parênteses", () => {
    expect(isValidNoFunctions('((2+3))')).toBe(true);
});

test("Case 20.2: isValidNoFunctions('[[[5]]]') // triplo colchetes", () => {
    expect(isValidNoFunctions('[[[5]]]')).toBe(true);
});

test("Case 20.3: isValidNoFunctions('{{{3}}}') // triplo chaves", () => {
    expect(isValidNoFunctions('{{{3}}}')).toBe(true);
});

test("Case 20.4: isValidNoFunctions('[(2+3)]') // colchete dentro de parêntese", () => {
    expect(isValidNoFunctions('[(2+3)]')).toBe(true);
});

test("Case 20.5: isValidNoFunctions('{(5-2)}') // parêntese dentro de chave", () => {
    expect(isValidNoFunctions('{(5-2)}')).toBe(true);
});

test("Case 20.6: isValidNoFunctions('[{(1)}]') // todos aninhados", () => {
    expect(isValidNoFunctions('[{(1)}]')).toBe(true);
});

test("Case 20.7: isValidNoFunctions('((2+3)*(4+5))') // operação dentro de duplo parênteses", () => {
    expect(isValidNoFunctions('((2+3)*(4+5))')).toBe(true);
});

test("Case 20.8: isValidNoFunctions('[{2+3}*{4+5}]') // múltiplas chaves em colchetes", () => {
    expect(isValidNoFunctions('[{2+3}*{4+5}]')).toBe(true);
});

test("Case 20.9: isValidNoFunctions('([(2+3)])^2') // aninhamento com potência", () => {
    expect(isValidNoFunctions('([(2+3)])^2')).toBe(true);
});

test("Case 20.10: isValidNoFunctions('{[5*(2+3)]-[4/(1+1)]}') // expressão complexa aninhada", () => {
    expect(isValidNoFunctions('{[5*(2+3)]-[4/(1+1)]}')).toBe(true);
});

test("Case 20.11: isValidNoFunctions('((((((5))))))') // seis níveis", () => {
    expect(isValidNoFunctions('((((((5))))))')).toBe(true);
});

test("Case 20.12: isValidNoFunctions('[({[({5})]})]') // padrão complexo", () => {
    expect(isValidNoFunctions('[({[({5})]})]')).toBe(true);
});

test("Case 20.13: isValidNoFunctions('(2+[3+{4+5}])') // três tipos misturados", () => {
    expect(isValidNoFunctions('(2+[3+{4+5}])')).toBe(true);
});

test("Case 20.14: isValidNoFunctions('{[(1+2)*(3+4)]+(5+6)}') // operações múltiplas aninhadas", () => {
    expect(isValidNoFunctions('{[(1+2)*(3+4)]+(5+6)}')).toBe(true);
});

test("Case 20.15: isValidNoFunctions('[{(2^3)^2}^1]') // potências aninhadas", () => {
    expect(isValidNoFunctions('[{(2^3)^2}^1]')).toBe(true);
});

test("Case 21.1: isValidNoFunctions('0') // zero simples", () => {
    expect(isValidNoFunctions('0')).toBe(true);
});

test("Case 21.2: isValidNoFunctions('00') // duplo zero", () => {
    expect(isValidNoFunctions('00')).toBe(true);
});

test("Case 21.3: isValidNoFunctions('000') // triplo zero", () => {
    expect(isValidNoFunctions('000')).toBe(true);
});

test("Case 21.4: isValidNoFunctions('0+0') // soma de zeros", () => {
    expect(isValidNoFunctions('0+0')).toBe(true);
});

test("Case 21.5: isValidNoFunctions('0*5') // zero vezes número", () => {
    expect(isValidNoFunctions('0*5')).toBe(true);
});

test("Case 21.6: isValidNoFunctions('5*0') // número vezes zero", () => {
    expect(isValidNoFunctions('5*0')).toBe(true);
});

test("Case 21.7: isValidNoFunctions('0/5') // zero dividido", () => {
    expect(isValidNoFunctions('0/5')).toBe(true);
});

test("Case 21.8: isValidNoFunctions('0^5') // zero elevado", () => {
    expect(isValidNoFunctions('0^5')).toBe(true);
});

test("Case 21.9: isValidNoFunctions('5^0') // número elevado a zero", () => {
    expect(isValidNoFunctions('5^0')).toBe(true);
});

test("Case 21.10: isValidNoFunctions('0^0') // zero elevado a zero", () => {
    expect(isValidNoFunctions('0^0')).toBe(true);
});

test("Case 21.11: isValidNoFunctions('0e0') // zero em notação científica", () => {
    expect(isValidNoFunctions('0e0')).toBe(true);
});

test("Case 21.12: isValidNoFunctions('0.0') // zero decimal", () => {
    expect(isValidNoFunctions('0.0')).toBe(true);
});

test("Case 21.13: isValidNoFunctions('0.00') // zero com casas decimais", () => {
    expect(isValidNoFunctions('0.00')).toBe(true);
});

test("Case 21.14: isValidNoFunctions('-0') // zero negativo", () => {
    expect(isValidNoFunctions('-0')).toBe(true);
});

test("Case 21.15: isValidNoFunctions('0-0') // subtração de zeros", () => {
    expect(isValidNoFunctions('0-0')).toBe(true);
});

test("Case 22.1: isValidNoFunctions('1+2+3+4+5+6+7+8+9+10') // soma longa", () => {
    expect(isValidNoFunctions('1+2+3+4+5+6+7+8+9+10')).toBe(true);
});

test("Case 22.2: isValidNoFunctions('10-9-8-7-6-5-4-3-2-1') // subtração longa", () => {
    expect(isValidNoFunctions('10-9-8-7-6-5-4-3-2-1')).toBe(true);
});

test("Case 22.3: isValidNoFunctions('1*2*3*4*5') // multiplicação longa", () => {
    expect(isValidNoFunctions('1*2*3*4*5')).toBe(true);
});

test("Case 22.4: isValidNoFunctions('1000/10/10/10') // divisão longa", () => {
    expect(isValidNoFunctions('1000/10/10/10')).toBe(true);
});

test("Case 22.5: isValidNoFunctions('2^2^2') // exponenciação encadeada", () => {
    expect(isValidNoFunctions('2^2^2')).toBe(true);
});

test("Case 22.6: isValidNoFunctions('1+2*3-4/5^6') // todas operações", () => {
    expect(isValidNoFunctions('1+2*3-4/5^6')).toBe(true);
});

test("Case 22.7: isValidNoFunctions('((((1+2)+3)+4)+5)') // soma aninhada", () => {
    expect(isValidNoFunctions('((((1+2)+3)+4)+5)')).toBe(true);
});

test("Case 22.8: isValidNoFunctions('1e1+1e2+1e3+1e4+1e5') // notação científica crescente", () => {
    expect(isValidNoFunctions('1e1+1e2+1e3+1e4+1e5')).toBe(true);
});

test("Case 22.9: isValidNoFunctions('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9') // decimais longos", () => {
    expect(isValidNoFunctions('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9')).toBe(true);
});

test("Case 22.10: isValidNoFunctions('(1+2)*(3+4)*(5+6)*(7+8)') // multiplicação de somas", () => {
    expect(isValidNoFunctions('(1+2)*(3+4)*(5+6)*(7+8)')).toBe(true);
});

test("Case 23.1: isValidNoFunctions('  ') // apenas espaços", () => {
    expect(isValidNoFunctions('  ')).toBe(false);
});

test("Case 23.2: isValidNoFunctions(' + ') // operador com espaços", () => {
    expect(isValidNoFunctions(' + ')).toBe(false);
});

test("Case 23.3: isValidNoFunctions('2 . 5') // espaços ao redor do ponto", () => {
    expect(isValidNoFunctions('2 . 5')).toBe(true);
});

test("Case 23.4: isValidNoFunctions('1 e 2') // espaço no 'e'", () => {
    expect(isValidNoFunctions('1 e 2')).toBe(true);
});

test("Case 23.5: isValidNoFunctions('( )') // parênteses vazios com espaço", () => {
    expect(isValidNoFunctions('( )')).toBe(false);
});

test("Case 23.6: isValidNoFunctions('[ ]') // colchetes vazios com espaço", () => {
    expect(isValidNoFunctions('[ ]')).toBe(false);
});

test("Case 23.7: isValidNoFunctions('{ }') // chaves vazias com espaço", () => {
    expect(isValidNoFunctions('{ }')).toBe(false);
});

test("Case 23.8: isValidNoFunctions('2 + + 3') // operadores duplicados com espaço", () => {
    expect(isValidNoFunctions('2 + + 3')).toBe(false);
});

test("Case 23.9: isValidNoFunctions('5 * * 2') // operadores duplicados com espaço", () => {
    expect(isValidNoFunctions('5 * * 2')).toBe(false);
});

test("Case 23.10: isValidNoFunctions('3 ^ ^ 2') // operadores duplicados com espaço", () => {
    expect(isValidNoFunctions('3 ^ ^ 2')).toBe(false);
});


// ============================================================================
// GRUPO 13: Espaços em Branco - Válidos (15 testes)
// ============================================================================

test("Case 13.1: isValidNoFunctions(' 5 ')", () => {
    expect(isValidNoFunctions(' 5 ')).toBe(true);
});

test("Case 13.2: isValidNoFunctions('2 + 3')", () => {
    expect(isValidNoFunctions('2 + 3')).toBe(true);
});

test("Case 13.3: isValidNoFunctions('2  +  3')", () => {
    expect(isValidNoFunctions('2  +  3')).toBe(true);
});

test("Case 13.4: isValidNoFunctions(' ( 2 + 3 ) ')", () => {
    expect(isValidNoFunctions(' ( 2 + 3 ) ')).toBe(true);
});

test("Case 13.5: isValidNoFunctions('2 * 3 + 4')", () => {
    expect(isValidNoFunctions('2 * 3 + 4')).toBe(true);
});

test("Case 13.6: isValidNoFunctions('  2  ^  3  ')", () => {
    expect(isValidNoFunctions('  2  ^  3  ')).toBe(true);
});

test("Case 13.7: isValidNoFunctions('1 e 2')", () => {
    expect(isValidNoFunctions('1 e 2')).toBe(true);
});

test("Case 13.8: isValidNoFunctions('1 e + 2')", () => {
    expect(isValidNoFunctions('1 e + 2')).toBe(true);
});

test("Case 13.9: isValidNoFunctions('2 . 5')", () => {
    expect(isValidNoFunctions('2 . 5')).toBe(true);
});

test("Case 13.10: isValidNoFunctions('[ 5 ]')", () => {
    expect(isValidNoFunctions('[ 5 ]')).toBe(true);
});

test("Case 13.11: isValidNoFunctions('{ 10 }')", () => {
    expect(isValidNoFunctions('{ 10 }')).toBe(true);
});

test("Case 13.12: isValidNoFunctions('  -  5  ')", () => {
    expect(isValidNoFunctions('  -  5  ')).toBe(true);
});

test("Case 13.13: isValidNoFunctions('2 + 3 * 4 - 5 / 6')", () => {
    expect(isValidNoFunctions('2 + 3 * 4 - 5 / 6')).toBe(true);
});

test("Case 13.14: isValidNoFunctions('  1  e  -  2  ')", () => {
    expect(isValidNoFunctions('  1  e  -  2  ')).toBe(true);
});

test("Case 13.15: isValidNoFunctions('( 2 + 3 ) * ( 4 + 5 )')", () => {
    expect(isValidNoFunctions('( 2 + 3 ) * ( 4 + 5 )')).toBe(true);
});

// ============================================================================
// GRUPO 14: Números Negativos em Contextos Diversos (20 testes)
// ============================================================================

test("Case 14.1: isValidNoFunctions('(-5)')", () => {
    expect(isValidNoFunctions('(-5)')).toBe(true);
});

test("Case 14.2: isValidNoFunctions('[-10]')", () => {
    expect(isValidNoFunctions('[-10]')).toBe(true);
});

test("Case 14.3: isValidNoFunctions('{-25}')", () => {
    expect(isValidNoFunctions('{-25}')).toBe(true);
});

test("Case 14.4: isValidNoFunctions('2*(-3)')", () => {
    expect(isValidNoFunctions('2*(-3)')).toBe(true);
});

test("Case 14.5: isValidNoFunctions('10/(-2)')", () => {
    expect(isValidNoFunctions('10/(-2)')).toBe(true);
});

test("Case 14.6: isValidNoFunctions('(-2)^3')", () => {
    expect(isValidNoFunctions('(-2)^3')).toBe(true);
});

test("Case 14.7: isValidNoFunctions('(-2)^(-3)')", () => {
    expect(isValidNoFunctions('(-2)^(-3)')).toBe(true);
});

test("Case 14.8: isValidNoFunctions('(-1e2)')", () => {
    expect(isValidNoFunctions('(-1e2)')).toBe(true);
});

test("Case 14.9: isValidNoFunctions('(-2.5)')", () => {
    expect(isValidNoFunctions('(-2.5)')).toBe(true);
});

test("Case 14.10: isValidNoFunctions('(-2)+(-3)')", () => {
    expect(isValidNoFunctions('(-2)+(-3)')).toBe(true);
});

test("Case 14.11: isValidNoFunctions('(-5)*(-6)')", () => {
    expect(isValidNoFunctions('(-5)*(-6)')).toBe(true);
});

test("Case 14.12: isValidNoFunctions('(-10)/(-2)')", () => {
    expect(isValidNoFunctions('(-10)/(-2)')).toBe(true);
});

test("Case 14.13: isValidNoFunctions('(-2)^(-2)')", () => {
    expect(isValidNoFunctions('(-2)^(-2)')).toBe(true);
});

test("Case 14.14: isValidNoFunctions('[(-5)+(-3)]')", () => {
    expect(isValidNoFunctions('[(-5)+(-3)]')).toBe(true);
});

test("Case 14.15: isValidNoFunctions('{(-2)*(-3)}')", () => {
    expect(isValidNoFunctions('{(-2)*(-3)}')).toBe(true);
});

test("Case 14.16: isValidNoFunctions('(-1e-5)')", () => {
    expect(isValidNoFunctions('(-1e-5)')).toBe(true);
});

test("Case 14.17: isValidNoFunctions('(-0.001)')", () => {
    expect(isValidNoFunctions('(-0.001)')).toBe(true);
});

test("Case 14.18: isValidNoFunctions('((-5))')", () => {
    expect(isValidNoFunctions('((-5))')).toBe(true);
});

test("Case 14.19: isValidNoFunctions('(((-10)))')", () => {
    expect(isValidNoFunctions('(((-10)))')).toBe(true);
});

test("Case 14.20: isValidNoFunctions('-2.5e-3')", () => {
    expect(isValidNoFunctions('-2.5e-3')).toBe(true);
});

// ============================================================================
// GRUPO 15: Exponenciação com Negativos e Decimais (15 testes)
// ============================================================================

test("Case 15.1: isValidNoFunctions('2^(-3)')", () => {
    expect(isValidNoFunctions('2^(-3)')).toBe(true);
});

test("Case 15.2: isValidNoFunctions('5^(-1)')", () => {
    expect(isValidNoFunctions('5^(-1)')).toBe(true);
});

test("Case 15.3: isValidNoFunctions('10^(-10)')", () => {
    expect(isValidNoFunctions('10^(-10)')).toBe(true);
});

test("Case 15.4: isValidNoFunctions('2.5^(-2)')", () => {
    expect(isValidNoFunctions('2.5^(-2)')).toBe(true);
});

test("Case 15.5: isValidNoFunctions('(-3)^2')", () => {
    expect(isValidNoFunctions('(-3)^2')).toBe(true);
});

test("Case 15.6: isValidNoFunctions('(-2)^(-2)')", () => {
    expect(isValidNoFunctions('(-2)^(-2)')).toBe(true);
});

test("Case 15.7: isValidNoFunctions('0.5^3')", () => {
    expect(isValidNoFunctions('0.5^3')).toBe(true);
});

test("Case 15.8: isValidNoFunctions('0.1^10')", () => {
    expect(isValidNoFunctions('0.1^10')).toBe(true);
});

test("Case 15.9: isValidNoFunctions('3.14^2.71')", () => {
    expect(isValidNoFunctions('3.14^2.71')).toBe(true);
});

test("Case 15.10: isValidNoFunctions('(2.5)^(3.5)')", () => {
    expect(isValidNoFunctions('(2.5)^(3.5)')).toBe(true);
});

test("Case 15.11: isValidNoFunctions('10^0.5')", () => {
    expect(isValidNoFunctions('10^0.5')).toBe(true);
});

test("Case 15.12: isValidNoFunctions('2^(-0.5)')", () => {
    expect(isValidNoFunctions('2^(-0.5)')).toBe(true);
});

test("Case 15.13: isValidNoFunctions('(-2.5)^2')", () => {
    expect(isValidNoFunctions('(-2.5)^2')).toBe(true);
});

test("Case 15.14: isValidNoFunctions('0.001^0.001')", () => {
    expect(isValidNoFunctions('0.001^0.001')).toBe(true);
});

test("Case 15.15: isValidNoFunctions('1000^(-0.333)')", () => {
    expect(isValidNoFunctions('1000^(-0.333)')).toBe(true);
});

// ============================================================================
// GRUPO 16: Notação Científica - Casos Extremos (15 testes)
// ============================================================================

test("Case 16.1: isValidNoFunctions('1e1000')", () => {
    expect(isValidNoFunctions('1e1000')).toBe(true);
});

test("Case 16.2: isValidNoFunctions('1e-1000')", () => {
    expect(isValidNoFunctions('1e-1000')).toBe(true);
});

test("Case 16.3: isValidNoFunctions('9.999999e999')", () => {
    expect(isValidNoFunctions('9.999999e999')).toBe(true);
});

test("Case 16.4: isValidNoFunctions('1.1e1')", () => {
    expect(isValidNoFunctions('1.1e1')).toBe(true);
});

test("Case 16.5: isValidNoFunctions('0.1e1')", () => {
    expect(isValidNoFunctions('0.1e1')).toBe(true);
});

test("Case 16.6: isValidNoFunctions('100e-2')", () => {
    expect(isValidNoFunctions('100e-2')).toBe(true);
});

test("Case 16.7: isValidNoFunctions('0.01e2')", () => {
    expect(isValidNoFunctions('0.01e2')).toBe(true);
});

test("Case 16.8: isValidNoFunctions('1.23456789e10')", () => {
    expect(isValidNoFunctions('1.23456789e10')).toBe(true);
});

test("Case 16.9: isValidNoFunctions('5e+0')", () => {
    expect(isValidNoFunctions('5e+0')).toBe(true);
});

test("Case 16.10: isValidNoFunctions('5e-0')", () => {
    expect(isValidNoFunctions('5e-0')).toBe(true);
});

test("Case 16.11: isValidNoFunctions('(1e5)+(2e3)')", () => {
    expect(isValidNoFunctions('(1e5)+(2e3)')).toBe(true);
});

test("Case 16.12: isValidNoFunctions('1e10*1e-10')", () => {
    expect(isValidNoFunctions('1e10*1e-10')).toBe(true);
});

test("Case 16.13: isValidNoFunctions('(5e2)^2')", () => {
    expect(isValidNoFunctions('(5e2)^2')).toBe(true);
});

test("Case 16.14: isValidNoFunctions('2^(1e1)')", () => {
    expect(isValidNoFunctions('2^(1e1)')).toBe(true);
});

test("Case 16.15: isValidNoFunctions('(-5e-5)')", () => {
    expect(isValidNoFunctions('(-5e-5)')).toBe(true);
});

// ============================================================================
// GRUPO 17: Brackets Aninhados Complexos (15 testes)
// ============================================================================

test("Case 17.1: isValidNoFunctions('((((((5))))))')", () => {
    expect(isValidNoFunctions('((((((5))))))')).toBe(true);
});

test("Case 17.2: isValidNoFunctions('[[[[[5]]]]]')", () => {
    expect(isValidNoFunctions('[[[[[5]]]]]')).toBe(true);
});

test("Case 17.3: isValidNoFunctions('{{{{{5}}}}}')", () => {
    expect(isValidNoFunctions('{{{{{5}}}}}')).toBe(true);
});

test("Case 17.4: isValidNoFunctions('[{[(5)]}]')", () => {
    expect(isValidNoFunctions('[{[(5)]}]')).toBe(true);
});

test("Case 17.5: isValidNoFunctions('{[({5})]})')", () => {
    expect(isValidNoFunctions('{[({5})]}')).toBe(true);
});

test("Case 17.6: isValidNoFunctions('({[({[5]})]}))')", () => {
    expect(isValidNoFunctions('({[({[5]})]})')).toBe(true);
});

test("Case 17.7: isValidNoFunctions('((2+3)*(4+5))')", () => {
    expect(isValidNoFunctions('((2+3)*(4+5))')).toBe(true);
});

test("Case 17.8: isValidNoFunctions('[(2+3)*(4+5)]')", () => {
    expect(isValidNoFunctions('[(2+3)*(4+5)]')).toBe(true);
});

test("Case 17.9: isValidNoFunctions('{[(2+3)]*(4+5)}')", () => {
    expect(isValidNoFunctions('{[(2+3)]*(4+5)}')).toBe(true);
});

test("Case 17.10: isValidNoFunctions('((2+3)*((4+5)))')", () => {
    expect(isValidNoFunctions('((2+3)*((4+5)))')).toBe(true);
});

test("Case 17.11: isValidNoFunctions('[{(2)}+{(3)}]')", () => {
    expect(isValidNoFunctions('[{(2)}+{(3)}]')).toBe(true);
});

test("Case 17.12: isValidNoFunctions('(1+(2+(3+(4+5))))')", () => {
    expect(isValidNoFunctions('(1+(2+(3+(4+5))))')).toBe(true);
});

test("Case 17.13: isValidNoFunctions('[1*[2*[3*[4*5]]]]')", () => {
    expect(isValidNoFunctions('[1*[2*[3*[4*5]]]]')).toBe(true);
});

test("Case 17.14: isValidNoFunctions('{1-{2-{3-{4-5}}}}')", () => {
    expect(isValidNoFunctions('{1-{2-{3-{4-5}}}}')).toBe(true);
});

test("Case 17.15: isValidNoFunctions('((1))+((2))')", () => {
    expect(isValidNoFunctions('((1))+((2))')).toBe(true);
});

// ============================================================================
// GRUPO 18: Operadores Inválidos - Início/Fim (15 testes)
// ============================================================================

test("Case 18.1: isValidNoFunctions('+5')", () => {
    expect(isValidNoFunctions('+5')).toBe(true);
});

test("Case 18.2: isValidNoFunctions('*5')", () => {
    expect(isValidNoFunctions('*5')).toBe(false);
});

test("Case 18.3: isValidNoFunctions('/5')", () => {
    expect(isValidNoFunctions('/5')).toBe(false);
});

test("Case 18.4: isValidNoFunctions('^5')", () => {
    expect(isValidNoFunctions('^5')).toBe(false);
});

test("Case 18.5: isValidNoFunctions('5-')", () => {
    expect(isValidNoFunctions('5-')).toBe(false);
});

test("Case 18.6: isValidNoFunctions('5+')", () => {
    expect(isValidNoFunctions('5+')).toBe(false);
});

test("Case 18.7: isValidNoFunctions('5*')", () => {
    expect(isValidNoFunctions('5*')).toBe(false);
});

test("Case 18.8: isValidNoFunctions('5/')", () => {
    expect(isValidNoFunctions('5/')).toBe(false);
});

test("Case 18.9: isValidNoFunctions('5^')", () => {
    expect(isValidNoFunctions('5^')).toBe(false);
});

test("Case 18.10: isValidNoFunctions('+5+')", () => {
    expect(isValidNoFunctions('+5+')).toBe(false);
});

test("Case 18.11: isValidNoFunctions('*5*')", () => {
    expect(isValidNoFunctions('*5*')).toBe(false);
});

test("Case 18.12: isValidNoFunctions('/5/')", () => {
    expect(isValidNoFunctions('/5/')).toBe(false);
});

test("Case 18.13: isValidNoFunctions('^5^')", () => {
    expect(isValidNoFunctions('^5^')).toBe(false);
});

test("Case 18.14: isValidNoFunctions('++')", () => {
    expect(isValidNoFunctions('++')).toBe(false);
});

test("Case 18.15: isValidNoFunctions('**')", () => {
    expect(isValidNoFunctions('**')).toBe(false);
});

// ============================================================================
// GRUPO 19: Brackets Desbalanceados (20 testes)
// ============================================================================

test("Case 19.1: isValidNoFunctions('(2+3')", () => {
    expect(isValidNoFunctions('(2+3')).toBe(false);
});

test("Case 19.2: isValidNoFunctions('2+3)')", () => {
    expect(isValidNoFunctions('2+3)')).toBe(false);
});

test("Case 19.3: isValidNoFunctions('[2+3')", () => {
    expect(isValidNoFunctions('[2+3')).toBe(false);
});

test("Case 19.4: isValidNoFunctions('2+3]')", () => {
    expect(isValidNoFunctions('2+3]')).toBe(false);
});

test("Case 19.5: isValidNoFunctions('{2+3')", () => {
    expect(isValidNoFunctions('{2+3')).toBe(false);
});

test("Case 19.6: isValidNoFunctions('2+3}')", () => {
    expect(isValidNoFunctions('2+3}')).toBe(false);
});

test("Case 19.7: isValidNoFunctions('((2+3)')", () => {
    expect(isValidNoFunctions('((2+3)')).toBe(false);
});

test("Case 19.8: isValidNoFunctions('(2+3))')", () => {
    expect(isValidNoFunctions('(2+3))')).toBe(false);
});

test("Case 19.9: isValidNoFunctions('[(2+3]')", () => {
    expect(isValidNoFunctions('[(2+3]')).toBe(false);
});

test("Case 19.10: isValidNoFunctions('[2+3)]')", () => {
    expect(isValidNoFunctions('[2+3)]')).toBe(false);
});

test("Case 19.11: isValidNoFunctions('{(2+3}')", () => {
    expect(isValidNoFunctions('{(2+3}')).toBe(false);
});

test("Case 19.12: isValidNoFunctions('{2+3)}')", () => {
    expect(isValidNoFunctions('{2+3)}')).toBe(false);
});

test("Case 19.13: isValidNoFunctions('([{2+3}]')", () => {
    expect(isValidNoFunctions('([{2+3}]')).toBe(false);
});

test("Case 19.14: isValidNoFunctions('[{(2+3)]}')", () => {
    expect(isValidNoFunctions('[{(2+3)]}')).toBe(false);
});

test("Case 19.15: isValidNoFunctions('(((')", () => {
    expect(isValidNoFunctions('(((')).toBe(false);
});

test("Case 19.16: isValidNoFunctions(')))')", () => {
    expect(isValidNoFunctions(')))')).toBe(false);
});

test("Case 19.17: isValidNoFunctions('[[[')", () => {
    expect(isValidNoFunctions('[[[')).toBe(false);
});

test("Case 19.18: isValidNoFunctions(']]]')", () => {
    expect(isValidNoFunctions(']]]')).toBe(false);
});

test("Case 19.19: isValidNoFunctions('{{{')", () => {
    expect(isValidNoFunctions('{{{')).toBe(false);
});

test("Case 19.20: isValidNoFunctions('}}}')", () => {
    expect(isValidNoFunctions('}}}')).toBe(false);
});

// ============================================================================
// GRUPO 20: Notação Científica Inválida (15 testes)
// ============================================================================

test("Case 20.1: isValidNoFunctions('e')", () => {
    expect(isValidNoFunctions('e')).toBe(false);
});

test("Case 20.2: isValidNoFunctions('e5')", () => {
    expect(isValidNoFunctions('e5')).toBe(false);
});

test("Case 20.3: isValidNoFunctions('5e')", () => {
    expect(isValidNoFunctions('5e')).toBe(false);
});

test("Case 20.4: isValidNoFunctions('5e+')", () => {
    expect(isValidNoFunctions('5e+')).toBe(false);
});

test("Case 20.5: isValidNoFunctions('5e-')", () => {
    expect(isValidNoFunctions('5e-')).toBe(false);
});

test("Case 20.6: isValidNoFunctions('5ee5')", () => {
    expect(isValidNoFunctions('5ee5')).toBe(false);
});

test("Case 20.7: isValidNoFunctions('5e5e5')", () => {
    expect(isValidNoFunctions('5e5e5')).toBe(false);
});

test("Case 20.8: isValidNoFunctions('5e++5')", () => {
    expect(isValidNoFunctions('5e++5')).toBe(false);
});

test("Case 20.9: isValidNoFunctions('5e--5')", () => {
    expect(isValidNoFunctions('5e--5')).toBe(false);
});

test("Case 20.10: isValidNoFunctions('5e+-5')", () => {
    expect(isValidNoFunctions('5e+-5')).toBe(false);
});

test("Case 20.11: isValidNoFunctions('5e-+5')", () => {
    expect(isValidNoFunctions('5e-+5')).toBe(false);
});

test("Case 20.12: isValidNoFunctions('5e*5')", () => {
    expect(isValidNoFunctions('5e*5')).toBe(false);
});

test("Case 20.13: isValidNoFunctions('5e/5')", () => {
    expect(isValidNoFunctions('5e/5')).toBe(false);
});

test("Case 20.14: isValidNoFunctions('5e^5')", () => {
    expect(isValidNoFunctions('5e^5')).toBe(false);
});

test("Case 20.15: isValidNoFunctions('.5e2')", () => {
    expect(isValidNoFunctions('.5e2')).toBe(false);
});

// ============================================================================
// GRUPO 21: Decimais com Espaços (10 testes)
// ============================================================================

test("Case 21.1: isValidNoFunctions('2 .5')", () => {
    expect(isValidNoFunctions('2 .5')).toBe(true);
});

test("Case 21.2: isValidNoFunctions('2. 5')", () => {
    expect(isValidNoFunctions('2. 5')).toBe(true);
});

test("Case 21.3: isValidNoFunctions(' . 5')", () => {
    expect(isValidNoFunctions(' . 5')).toBe(false);
});

test("Case 21.4: isValidNoFunctions('5 . ')", () => {
    expect(isValidNoFunctions('5 . ')).toBe(false);
});

test("Case 21.5: isValidNoFunctions('2 . 5 . 3')", () => {
    expect(isValidNoFunctions('2 . 5 . 3')).toBe(false);
});

test("Case 21.6: isValidNoFunctions('  .  ')", () => {
    expect(isValidNoFunctions('  .  ')).toBe(false);
});

test("Case 21.7: isValidNoFunctions('. . .')", () => {
    expect(isValidNoFunctions('. . .')).toBe(false);
});

test("Case 21.8: isValidNoFunctions('1 . . 2')", () => {
    expect(isValidNoFunctions('1 . . 2')).toBe(false);
});

test("Case 21.9: isValidNoFunctions('+ . 5')", () => {
    expect(isValidNoFunctions('+ . 5')).toBe(false);
});

test("Case 21.10: isValidNoFunctions('5 . +')", () => {
    expect(isValidNoFunctions('5 . +')).toBe(false);
});

// ============================================================================
// GRUPO 22: Combinações de Operadores Inválidos (15 testes)
// ============================================================================


test("Case 22.1: isValidNoFunctions('5+-3')", () => {
    expect(isValidNoFunctions('5+-3')).toBe(false);
});

test("Case 22.2: isValidNoFunctions('5-+3')", () => {
    expect(isValidNoFunctions('5-+3')).toBe(false);
});

test("Case 22.3: isValidNoFunctions('5*+3')", () => {
    expect(isValidNoFunctions('5*+3')).toBe(false);
});

test("Case 22.4: isValidNoFunctions('5/+3')", () => {
    expect(isValidNoFunctions('5/+3')).toBe(false);
});

test("Case 22.5: isValidNoFunctions('5^+3')", () => {
    expect(isValidNoFunctions('5^+3')).toBe(false);
});

test("Case 22.6: isValidNoFunctions('5+*3')", () => {
    expect(isValidNoFunctions('5+*3')).toBe(false);
});

test("Case 22.7: isValidNoFunctions('5-*3')", () => {
    expect(isValidNoFunctions('5-*3')).toBe(false);
});

test("Case 22.8: isValidNoFunctions('5*/3')", () => {
    expect(isValidNoFunctions('5*/3')).toBe(false);
});

test("Case 22.9: isValidNoFunctions('5/*3')", () => {
    expect(isValidNoFunctions('5/*3')).toBe(false);
});

test("Case 22.10: isValidNoFunctions('5^*3')", () => {
    expect(isValidNoFunctions('5^*3')).toBe(false);
});

test("Case 22.11: isValidNoFunctions('5*^3')", () => {
    expect(isValidNoFunctions('5*^3')).toBe(false);
});

test("Case 22.12: isValidNoFunctions('5+/3')", () => {
    expect(isValidNoFunctions('5+/3')).toBe(false);
});

test("Case 22.13: isValidNoFunctions('5-/3')", () => {
    expect(isValidNoFunctions('5-/3')).toBe(false);
});

test("Case 22.14: isValidNoFunctions('5/^3')", () => {
    expect(isValidNoFunctions('5/^3')).toBe(false);
});

test("Case 22.15: isValidNoFunctions('5^/3')", () => {
    expect(isValidNoFunctions('5^/3')).toBe(false);
});

// ============================================================================
// GRUPO 23: Zeros e Casos Especiais (15 testes)
// ============================================================================

test("Case 23.1: isValidNoFunctions('0')", () => {
    expect(isValidNoFunctions('0')).toBe(true);
});

test("Case 23.2: isValidNoFunctions('00')", () => {
    expect(isValidNoFunctions('00')).toBe(true);
});

test("Case 23.3: isValidNoFunctions('000')", () => {
    expect(isValidNoFunctions('000')).toBe(true);
});

test("Case 23.4: isValidNoFunctions('0.0')", () => {
    expect(isValidNoFunctions('0.0')).toBe(true);
});

test("Case 23.5: isValidNoFunctions('0.00')", () => {
    expect(isValidNoFunctions('0.00')).toBe(true);
});

test("Case 23.6: isValidNoFunctions('00.00')", () => {
    expect(isValidNoFunctions('00.00')).toBe(true);
});

test("Case 23.7: isValidNoFunctions('0e0')", () => {
    expect(isValidNoFunctions('0e0')).toBe(true);
});

test("Case 23.8: isValidNoFunctions('0e+0')", () => {
    expect(isValidNoFunctions('0e+0')).toBe(true);
});

test("Case 23.9: isValidNoFunctions('0e-0')", () => {
    expect(isValidNoFunctions('0e-0')).toBe(true);
});

test("Case 23.10: isValidNoFunctions('0.0e0')", () => {
    expect(isValidNoFunctions('0.0e0')).toBe(true);
});

test("Case 23.11: isValidNoFunctions('0+0')", () => {
    expect(isValidNoFunctions('0+0')).toBe(true);
});

test("Case 23.12: isValidNoFunctions('0*0')", () => {
    expect(isValidNoFunctions('0*0')).toBe(true);
});

test("Case 23.13: isValidNoFunctions('0/1')", () => {
    expect(isValidNoFunctions('0/1')).toBe(true);
});

test("Case 23.14: isValidNoFunctions('0^0')", () => {
    expect(isValidNoFunctions('0^0')).toBe(true);
});

test("Case 23.15: isValidNoFunctions('(0)')", () => {
    expect(isValidNoFunctions('(0)')).toBe(true);
});

// ============================================================================
// GRUPO 24: Expressões Longas e Complexas (10 testes)
// ============================================================================

test("Case 24.1: isValidNoFunctions('1+2+3+4+5+6+7+8+9+10')", () => {
    expect(isValidNoFunctions('1+2+3+4+5+6+7+8+9+10')).toBe(true);
});

test("Case 24.2: isValidNoFunctions('1*2*3*4*5*6*7*8*9*10')", () => {
    expect(isValidNoFunctions('1*2*3*4*5*6*7*8*9*10')).toBe(true);
});

test("Case 24.3: isValidNoFunctions('2^2^2^2^2')", () => {
    expect(isValidNoFunctions('2^2^2^2^2')).toBe(true);
});

test("Case 24.4: isValidNoFunctions('((((((((((5))))))))))')", () => {
    expect(isValidNoFunctions('((((((((((5))))))))))')).toBe(true);
});

test("Case 24.5: isValidNoFunctions('1e1+2e2+3e3+4e4+5e5')", () => {
    expect(isValidNoFunctions('1e1+2e2+3e3+4e4+5e5')).toBe(true);
});


test("Case 24.6: isValidNoFunctions('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9')", () => {
    expect(isValidNoFunctions('1.1+2.2+3.3+4.4+5.5+6.6+7.7+8.8+9.9')).toBe(true);
});

test("Case 24.7: isValidNoFunctions('(1+2)*(3+4)*(5+6)*(7+8)*(9+10)')", () => {
    expect(isValidNoFunctions('(1+2)*(3+4)*(5+6)*(7+8)*(9+10)')).toBe(true);
});

test("Case 24.8: isValidNoFunctions('[{(1+2)}]*[{(3+4)}]')", () => {
    expect(isValidNoFunctions('[{(1+2)}]*[{(3+4)}]')).toBe(true);
});

test("Case 24.9: isValidNoFunctions('1.23e45+6.78e90+1.11e22+3.33e44')", () => {
    expect(isValidNoFunctions('1.23e45+6.78e90+1.11e22+3.33e44')).toBe(true);
});

test("Case 24.10: isValidNoFunctions('((1+2)*3-4)/5+6^7-8*9/10')", () => {
    expect(isValidNoFunctions('((1+2)*3-4)/5+6^7-8*9/10')).toBe(true);
});

// ============================================================================
// GRUPO 25: Caracteres Inválidos (20 testes)
// ============================================================================

test("Case 25.1: isValidNoFunctions('abc')", () => {
    expect(isValidNoFunctions('abc')).toBe(false);
});

test("Case 25.2: isValidNoFunctions('x+y')", () => {
    expect(isValidNoFunctions('x+y')).toBe(false);
});

test("Case 25.3: isValidNoFunctions('2a')", () => {
    expect(isValidNoFunctions('2a')).toBe(false);
});

test("Case 25.4: isValidNoFunctions('a2')", () => {
    expect(isValidNoFunctions('a2')).toBe(false);
});

test("Case 25.5: isValidNoFunctions('2+a')", () => {
    expect(isValidNoFunctions('2+a')).toBe(false);
});

test("Case 25.6: isValidNoFunctions('a+2')", () => {
    expect(isValidNoFunctions('a+2')).toBe(false);
});

test("Case 25.7: isValidNoFunctions(')", () => {
    expect(isValidNoFunctions(')')).toBe(false);
});

test("Case 25.8: isValidNoFunctions('@')", () => {
    expect(isValidNoFunctions('@')).toBe(false);
});

test("Case 25.9: isValidNoFunctions('#')", () => {
    expect(isValidNoFunctions('#')).toBe(false);
});

test("Case 25.10: isValidNoFunctions('%')", () => {
    expect(isValidNoFunctions('%')).toBe(false);
});

test("Case 25.11: isValidNoFunctions('&')", () => {
    expect(isValidNoFunctions('&')).toBe(false);
});

test("Case 25.12: isValidNoFunctions('!')", () => {
    expect(isValidNoFunctions('!')).toBe(false);
});

test("Case 25.13: isValidNoFunctions('?')", () => {
    expect(isValidNoFunctions('?')).toBe(false);
});

test("Case 25.14: isValidNoFunctions(';')", () => {
    expect(isValidNoFunctions(';')).toBe(false);
});

test("Case 25.15: isValidNoFunctions(':')", () => {
    expect(isValidNoFunctions(':')).toBe(false);
});

test("Case 25.16: isValidNoFunctions('2+3=5')", () => {
    expect(isValidNoFunctions('2+3=5')).toBe(false);
});

test("Case 25.17: isValidNoFunctions('2<3')", () => {
    expect(isValidNoFunctions('2<3')).toBe(false);
});

test("Case 25.18: isValidNoFunctions('2>3')", () => {
    expect(isValidNoFunctions('2>3')).toBe(false);
});

test("Case 25.19: isValidNoFunctions('2|3')", () => {
    expect(isValidNoFunctions('2|3')).toBe(false);
});

test("Case 25.20: isValidNoFunctions('2\\3')", () => {
    expect(isValidNoFunctions('2\\3')).toBe(false);
});

// ============================================================================
// GRUPO 26: Operadores Após Brackets de Abertura (10 testes)
// ============================================================================

test("Case 26.1: isValidNoFunctions('(+2)')", () => {
    expect(isValidNoFunctions('(+2)')).toBe(true);
});

test("Case 26.2: isValidNoFunctions('[+3]')", () => {
    expect(isValidNoFunctions('[+3]')).toBe(true);
});

test("Case 26.3: isValidNoFunctions('{+4}')", () => {
    expect(isValidNoFunctions('{+4}')).toBe(true);
});

test("Case 26.4: isValidNoFunctions('(*2)')", () => {
    expect(isValidNoFunctions('(*2)')).toBe(false);
});

test("Case 26.5: isValidNoFunctions('[*3]')", () => {
    expect(isValidNoFunctions('[*3]')).toBe(false);
});

test("Case 26.6: isValidNoFunctions('{*4}')", () => {
    expect(isValidNoFunctions('{*4}')).toBe(false);
});

test("Case 26.7: isValidNoFunctions('(/2)')", () => {
    expect(isValidNoFunctions('(/2)')).toBe(false);
});

test("Case 26.8: isValidNoFunctions('[/3]')", () => {
    expect(isValidNoFunctions('[/3]')).toBe(false);
});

test("Case 26.9: isValidNoFunctions('{/4}')", () => {
    expect(isValidNoFunctions('{/4}')).toBe(false);
});

test("Case 26.10: isValidNoFunctions('(^2)')", () => {
    expect(isValidNoFunctions('(^2)')).toBe(false);
});

// ============================================================================
// GRUPO 27: Operadores Antes de Brackets de Fechamento (10 testes)
// ============================================================================

test("Case 27.1: isValidNoFunctions('(2+)')", () => {
    expect(isValidNoFunctions('(2+)')).toBe(false);
});

test("Case 27.2: isValidNoFunctions('[3-]')", () => {
    expect(isValidNoFunctions('[3-]')).toBe(false);
});

test("Case 27.3: isValidNoFunctions('{4*}')", () => {
    expect(isValidNoFunctions('{4*}')).toBe(false);
});

test("Case 27.4: isValidNoFunctions('(5/)')", () => {
    expect(isValidNoFunctions('(5/)')).toBe(false);
});

test("Case 27.5: isValidNoFunctions('[6^]')", () => {
    expect(isValidNoFunctions('[6^]')).toBe(false);
});

test("Case 27.6: isValidNoFunctions('(2+3+)')", () => {
    expect(isValidNoFunctions('(2+3+)')).toBe(false);
});

test("Case 27.7: isValidNoFunctions('[5*6*]')", () => {
    expect(isValidNoFunctions('[5*6*]')).toBe(false);
});

test("Case 27.8: isValidNoFunctions('{10/5/}')", () => {
    expect(isValidNoFunctions('{10/5/}')).toBe(false);
});

test("Case 27.9: isValidNoFunctions('(2^3^)')", () => {
    expect(isValidNoFunctions('(2^3^)')).toBe(false);
});

test("Case 27.10: isValidNoFunctions('((5+))')", () => {
    expect(isValidNoFunctions('((5+))')).toBe(false);
});

// ============================================================================
// GRUPO 28: Múltiplos Pontos Decimais (10 testes)
// ============================================================================

test("Case 28.1: isValidNoFunctions('1.2.3')", () => {
    expect(isValidNoFunctions('1.2.3')).toBe(false);
});

test("Case 28.2: isValidNoFunctions('5.5.5.5')", () => {
    expect(isValidNoFunctions('5.5.5.5')).toBe(false);
});

test("Case 28.3: isValidNoFunctions('10..5')", () => {
    expect(isValidNoFunctions('10..5')).toBe(false);
});

test("Case 28.4: isValidNoFunctions('3...14')", () => {
    expect(isValidNoFunctions('3...14')).toBe(false);
});

test("Case 28.5: isValidNoFunctions('..')", () => {
    expect(isValidNoFunctions('..')).toBe(false);
});

test("Case 28.6: isValidNoFunctions('...')", () => {
    expect(isValidNoFunctions('...')).toBe(false);
});

test("Case 28.7: isValidNoFunctions('1.2.3.4.5')", () => {
    expect(isValidNoFunctions('1.2.3.4.5')).toBe(false);
});

test("Case 28.8: isValidNoFunctions('0.0.0')", () => {
    expect(isValidNoFunctions('0.0.0')).toBe(false);
});

test("Case 28.9: isValidNoFunctions('99.99.99.99')", () => {
    expect(isValidNoFunctions('99.99.99.99')).toBe(false);
});

test("Case 28.10: isValidNoFunctions('1.+2.+3.')", () => {
    expect(isValidNoFunctions('1.+2.+3.')).toBe(false);
});

// ============================================================================
// GRUPO 29: Casos Edge com E (Notação Científica) (15 testes)
// ============================================================================

test("Case 29.1: isValidNoFunctions('E5')", () => {
    expect(isValidNoFunctions('E5')).toBe(false);
});

test("Case 29.2: isValidNoFunctions('5E')", () => {
    expect(isValidNoFunctions('5E')).toBe(false);
});

test("Case 29.3: isValidNoFunctions('5E++')", () => {
    expect(isValidNoFunctions('5E++')).toBe(false);
});

test("Case 29.4: isValidNoFunctions('5E--')", () => {
    expect(isValidNoFunctions('5E--')).toBe(false);
});

test("Case 29.5: isValidNoFunctions('eE5')", () => {
    expect(isValidNoFunctions('eE5')).toBe(false);
});

test("Case 29.6: isValidNoFunctions('5eE5')", () => {
    expect(isValidNoFunctions('5eE5')).toBe(false);
});

test("Case 29.7: isValidNoFunctions('5Ee5')", () => {
    expect(isValidNoFunctions('5Ee5')).toBe(false);
});

test("Case 29.8: isValidNoFunctions('5E5e5')", () => {
    expect(isValidNoFunctions('5E5e5')).toBe(false);
});

test("Case 29.9: isValidNoFunctions('5e5E5')", () => {
    expect(isValidNoFunctions('5e5E5')).toBe(false);
});

test("Case 29.10: isValidNoFunctions('E')", () => {
    expect(isValidNoFunctions('E')).toBe(false);
});

test("Case 29.11: isValidNoFunctions('EE')", () => {
    expect(isValidNoFunctions('EE')).toBe(false);
});

test("Case 29.12: isValidNoFunctions('5EE5')", () => {
    expect(isValidNoFunctions('5EE5')).toBe(false);
});

test("Case 29.13: isValidNoFunctions('5e.5')", () => {
    expect(isValidNoFunctions('5e.5')).toBe(false);
});

test("Case 29.14: isValidNoFunctions('5.e5')", () => {
    expect(isValidNoFunctions('5.e5')).toBe(false);
});

test("Case 29.15: isValidNoFunctions('.5e.5')", () => {
    expect(isValidNoFunctions('.5e.5')).toBe(false);
});

// ============================================================================
// GRUPO 30: Números Muito Grandes (10 testes)
// ============================================================================

test("Case 30.1: isValidNoFunctions('123456789012345678901234567890')", () => {
    expect(isValidNoFunctions('123456789012345678901234567890')).toBe(true);
});

test("Case 30.2: isValidNoFunctions('999999999999999999999999999999')", () => {
    expect(isValidNoFunctions('999999999999999999999999999999')).toBe(true);
});

test("Case 30.3: isValidNoFunctions('1000000000000000000000000000000')", () => {
    expect(isValidNoFunctions('1000000000000000000000000000000')).toBe(true);
});

test("Case 30.4: isValidNoFunctions('123456789.987654321')", () => {
    expect(isValidNoFunctions('123456789.987654321')).toBe(true);
});

test("Case 30.5: isValidNoFunctions('0.123456789012345678901234567890')", () => {
    expect(isValidNoFunctions('0.123456789012345678901234567890')).toBe(true);
});

test("Case 30.6: isValidNoFunctions('9e999999999')", () => {
    expect(isValidNoFunctions('9e999999999')).toBe(true);
});

test("Case 30.7: isValidNoFunctions('1e-999999999')", () => {
    expect(isValidNoFunctions('1e-999999999')).toBe(true);
});

test("Case 30.8: isValidNoFunctions('99999999999999999999^2')", () => {
    expect(isValidNoFunctions('99999999999999999999^2')).toBe(true);
});

test("Case 30.9: isValidNoFunctions('1000000000000+1000000000000')", () => {
    expect(isValidNoFunctions('1000000000000+1000000000000')).toBe(true);
});

test("Case 30.10: isValidNoFunctions('(999999999999999999)')", () => {
    expect(isValidNoFunctions('(999999999999999999)')).toBe(true);
});

// ============================================================================
// Total de Novos Testes: 230
// ============================================================================


// ============================================================================
// GRUPO 31: Notação Científica - Operadores Duplos após 'e' (10 testes)
// ============================================================================

test("Case 31.1: isValidNoFunctions('2e+-3')", () => {
    expect(isValidNoFunctions('2e+-3')).toBe(false);
});

test("Case 31.2: isValidNoFunctions('2e-+3')", () => {
    expect(isValidNoFunctions('2e-+3')).toBe(false);
});

test("Case 31.3: isValidNoFunctions('2e++3')", () => {
    expect(isValidNoFunctions('2e++3')).toBe(false);
});

test("Case 31.4: isValidNoFunctions('2e--3')", () => {
    expect(isValidNoFunctions('2e--3')).toBe(false);
});

test("Case 31.5: isValidNoFunctions('5e+++2')", () => {
    expect(isValidNoFunctions('5e+++2')).toBe(false);
});

test("Case 31.6: isValidNoFunctions('5e---2')", () => {
    expect(isValidNoFunctions('5e---2')).toBe(false);
});

test("Case 31.7: isValidNoFunctions('1.5e+-10')", () => {
    expect(isValidNoFunctions('1.5e+-10')).toBe(false);
});

test("Case 31.8: isValidNoFunctions('3.14e-+5')", () => {
    expect(isValidNoFunctions('3.14e-+5')).toBe(false);
});

test("Case 31.9: isValidNoFunctions('2e+*3')", () => {
    expect(isValidNoFunctions('2e+*3')).toBe(false);
});

test("Case 31.10: isValidNoFunctions('2e-/3')", () => {
    expect(isValidNoFunctions('2e-/3')).toBe(false);
});

// ============================================================================
// GRUPO 32: Múltiplos 'e' no Mesmo Número (10 testes)
// ============================================================================

test("Case 32.1: isValidNoFunctions('2e5e3')", () => {
    expect(isValidNoFunctions('2e5e3')).toBe(false);
});

test("Case 32.2: isValidNoFunctions('1e2e1')", () => {
    expect(isValidNoFunctions('1e2e1')).toBe(false);
});

test("Case 32.3: isValidNoFunctions('5e10e5')", () => {
    expect(isValidNoFunctions('5e10e5')).toBe(false);
});

test("Case 32.4: isValidNoFunctions('2.5e3e2')", () => {
    expect(isValidNoFunctions('2.5e3e2')).toBe(false);
});

test("Case 32.5: isValidNoFunctions('1e-5e-3')", () => {
    expect(isValidNoFunctions('1e-5e-3')).toBe(false);
});

test("Case 32.6: isValidNoFunctions('3e+2e+1')", () => {
    expect(isValidNoFunctions('3e+2e+1')).toBe(false);
});

test("Case 32.7: isValidNoFunctions('1.23e45e67')", () => {
    expect(isValidNoFunctions('1.23e45e67')).toBe(false);
});

test("Case 32.8: isValidNoFunctions('5e1e2e3')", () => {
    expect(isValidNoFunctions('5e1e2e3')).toBe(false);
});

test("Case 32.9: isValidNoFunctions('2e5e')", () => {
    expect(isValidNoFunctions('2e5e')).toBe(false);
});

test("Case 32.10: isValidNoFunctions('ee5')", () => {
    expect(isValidNoFunctions('ee5')).toBe(false);
});

// ============================================================================
// GRUPO 33: Múltiplos Pontos Decimais (15 testes)
// ============================================================================

test("Case 33.1: isValidNoFunctions('2.5.3')", () => {
    expect(isValidNoFunctions('2.5.3')).toBe(false);
});

test("Case 33.2: isValidNoFunctions('1.2.3.4')", () => {
    expect(isValidNoFunctions('1.2.3.4')).toBe(false);
});

test("Case 33.3: isValidNoFunctions('10.5.2')", () => {
    expect(isValidNoFunctions('10.5.2')).toBe(false);
});

test("Case 33.4: isValidNoFunctions('3.14.159')", () => {
    expect(isValidNoFunctions('3.14.159')).toBe(false);
});

test("Case 33.5: isValidNoFunctions('0.1.2')", () => {
    expect(isValidNoFunctions('0.1.2')).toBe(false);
});

test("Case 33.6: isValidNoFunctions('99.99.99')", () => {
    expect(isValidNoFunctions('99.99.99')).toBe(false);
});

test("Case 33.7: isValidNoFunctions('1..5')", () => {
    expect(isValidNoFunctions('1..5')).toBe(false);
});

test("Case 33.8: isValidNoFunctions('5...2')", () => {
    expect(isValidNoFunctions('5...2')).toBe(false);
});

test("Case 33.9: isValidNoFunctions('2....3')", () => {
    expect(isValidNoFunctions('2....3')).toBe(false);
});

test("Case 33.10: isValidNoFunctions('1.2.3+4.5.6')", () => {
    expect(isValidNoFunctions('1.2.3+4.5.6')).toBe(false);
});

test("Case 33.11: isValidNoFunctions('(2.5.3)')", () => {
    expect(isValidNoFunctions('(2.5.3)')).toBe(false);
});

test("Case 33.12: isValidNoFunctions('[1.2.3]')", () => {
    expect(isValidNoFunctions('[1.2.3]')).toBe(false);
});

test("Case 33.13: isValidNoFunctions('{10.5.2}')", () => {
    expect(isValidNoFunctions('{10.5.2}')).toBe(false);
});

test("Case 33.14: isValidNoFunctions('2.5.3*4')", () => {
    expect(isValidNoFunctions('2.5.3*4')).toBe(false);
});

test("Case 33.15: isValidNoFunctions('10/2.5.2')", () => {
    expect(isValidNoFunctions('10/2.5.2')).toBe(false);
});

// ============================================================================
// GRUPO 34: Ponto Decimal no Início ou Fim (15 testes)
// ============================================================================

test("Case 34.1: isValidNoFunctions('.5')", () => {
    expect(isValidNoFunctions('.5')).toBe(false);
});

test("Case 34.2: isValidNoFunctions('5.')", () => {
    expect(isValidNoFunctions('5.')).toBe(false);
});

test("Case 34.3: isValidNoFunctions('.123')", () => {
    expect(isValidNoFunctions('.123')).toBe(false);
});

test("Case 34.4: isValidNoFunctions('999.')", () => {
    expect(isValidNoFunctions('999.')).toBe(false);
});

test("Case 34.5: isValidNoFunctions('.5+.3')", () => {
    expect(isValidNoFunctions('.5+.3')).toBe(false);
});

test("Case 34.6: isValidNoFunctions('2.+3.')", () => {
    expect(isValidNoFunctions('2.+3.')).toBe(false);
});

test("Case 34.7: isValidNoFunctions('(.5)')", () => {
    expect(isValidNoFunctions('(.5)')).toBe(false);
});

test("Case 34.8: isValidNoFunctions('(5.)')", () => {
    expect(isValidNoFunctions('(5.)')).toBe(false);
});

test("Case 34.9: isValidNoFunctions('[.25]')", () => {
    expect(isValidNoFunctions('[.25]')).toBe(false);
});

test("Case 34.10: isValidNoFunctions('[10.]')", () => {
    expect(isValidNoFunctions('[10.]')).toBe(false);
});

test("Case 34.11: isValidNoFunctions('{.999}')", () => {
    expect(isValidNoFunctions('{.999}')).toBe(false);
});

test("Case 34.12: isValidNoFunctions('{50.}')", () => {
    expect(isValidNoFunctions('{50.}')).toBe(false);
});

test("Case 34.13: isValidNoFunctions('.5*2')", () => {
    expect(isValidNoFunctions('.5*2')).toBe(false);
});

test("Case 34.14: isValidNoFunctions('10/5.')", () => {
    expect(isValidNoFunctions('10/5.')).toBe(false);
});

test("Case 34.15: isValidNoFunctions('.5e2')", () => {
    expect(isValidNoFunctions('.5e2')).toBe(false);
});

// ============================================================================
// GRUPO 35: Ponto Decimal com Operadores (10 testes)
// ============================================================================

test("Case 35.1: isValidNoFunctions('5.+3')", () => {
    expect(isValidNoFunctions('5.+3')).toBe(false);
});

test("Case 35.2: isValidNoFunctions('5.-3')", () => {
    expect(isValidNoFunctions('5.-3')).toBe(false);
});

test("Case 35.3: isValidNoFunctions('5.*3')", () => {
    expect(isValidNoFunctions('5.*3')).toBe(false);
});

test("Case 35.4: isValidNoFunctions('5./3')", () => {
    expect(isValidNoFunctions('5./3')).toBe(false);
});

test("Case 35.5: isValidNoFunctions('5.^3')", () => {
    expect(isValidNoFunctions('5.^3')).toBe(false);
});

test("Case 35.6: isValidNoFunctions('2+.5')", () => {
    expect(isValidNoFunctions('2+.5')).toBe(false);
});

test("Case 35.7: isValidNoFunctions('3*.2')", () => {
    expect(isValidNoFunctions('3*.2')).toBe(false);
});

test("Case 35.8: isValidNoFunctions('10/.5')", () => {
    expect(isValidNoFunctions('10/.5')).toBe(false);
});

test("Case 35.9: isValidNoFunctions('2^.5')", () => {
    expect(isValidNoFunctions('2^.5')).toBe(false);
});

test("Case 35.10: isValidNoFunctions('-.5')", () => {
    expect(isValidNoFunctions('-.5')).toBe(false);
});

// ============================================================================
// GRUPO 36: Notação Científica - Ponto Decimal Após Expoente (10 testes)
// ============================================================================

test("Case 36.1: isValidNoFunctions('2e5.')", () => {
    expect(isValidNoFunctions('2e5.')).toBe(false);
});

test("Case 36.2: isValidNoFunctions('3e10.5')", () => {
    expect(isValidNoFunctions('3e10.5')).toBe(false);
});

test("Case 36.3: isValidNoFunctions('1e2.3')", () => {
    expect(isValidNoFunctions('1e2.3')).toBe(false);
});

test("Case 36.4: isValidNoFunctions('5e-3.')", () => {
    expect(isValidNoFunctions('5e-3.')).toBe(false);
});

test("Case 36.5: isValidNoFunctions('2e+5.2')", () => {
    expect(isValidNoFunctions('2e+5.2')).toBe(false);
});

test("Case 36.6: isValidNoFunctions('1.5e10.')", () => {
    expect(isValidNoFunctions('1.5e10.')).toBe(false);
});

test("Case 36.7: isValidNoFunctions('2.5e3.5')", () => {
    expect(isValidNoFunctions('2.5e3.5')).toBe(false);
});

test("Case 36.8: isValidNoFunctions('3e-5.1')", () => {
    expect(isValidNoFunctions('3e-5.1')).toBe(false);
});

test("Case 36.9: isValidNoFunctions('10e+2.9')", () => {
    expect(isValidNoFunctions('10e+2.9')).toBe(false);
});

test("Case 36.10: isValidNoFunctions('5e100.')", () => {
    expect(isValidNoFunctions('5e100.')).toBe(false);
});

// ============================================================================
// GRUPO 37: Plus (+) Unário Após Bracket de Abertura (10 testes)
// ============================================================================

test("Case 37.1: isValidNoFunctions('(+5)')", () => {
    expect(isValidNoFunctions('(+5)')).toBe(true);
});

test("Case 37.2: isValidNoFunctions('[+10]')", () => {
    expect(isValidNoFunctions('[+10]')).toBe(true);
});

test("Case 37.3: isValidNoFunctions('{+3}')", () => {
    expect(isValidNoFunctions('{+3}')).toBe(true);
});

test("Case 37.4: isValidNoFunctions('2*(+3)')", () => {
    expect(isValidNoFunctions('2*(+3)')).toBe(true);
});

test("Case 37.5: isValidNoFunctions('5+[+2]')", () => {
    expect(isValidNoFunctions('5+[+2]')).toBe(true);
});

test("Case 37.6: isValidNoFunctions('10/{+5}')", () => {
    expect(isValidNoFunctions('10/{+5}')).toBe(true);
});

test("Case 37.7: isValidNoFunctions('(+2.5)')", () => {
    expect(isValidNoFunctions('(+2.5)')).toBe(true);
});

test("Case 37.8: isValidNoFunctions('[+1e5]')", () => {
    expect(isValidNoFunctions('[+1e5]')).toBe(true);
});

test("Case 37.9: isValidNoFunctions('((+5))')", () => {
    expect(isValidNoFunctions('((+5))')).toBe(true);
});

test("Case 37.10: isValidNoFunctions('{[(+3)]}')", () => {
    expect(isValidNoFunctions('{[(+3)]}')).toBe(true);
});

// ============================================================================
// GRUPO 38: Casos Mistos Complexos (10 testes)
// ============================================================================

test("Case 38.1: isValidNoFunctions('2.5.3e5')", () => {
    expect(isValidNoFunctions('2.5.3e5')).toBe(false);
});

test("Case 38.2: isValidNoFunctions('.5e.3')", () => {
    expect(isValidNoFunctions('.5e.3')).toBe(false);
});

test("Case 38.3: isValidNoFunctions('5.e5e3')", () => {
    expect(isValidNoFunctions('5.e5e3')).toBe(false);
});

test("Case 38.4: isValidNoFunctions('2e++5.3')", () => {
    expect(isValidNoFunctions('2e++5.3')).toBe(false);
});

test("Case 38.5: isValidNoFunctions('(.5.3)')", () => {
    expect(isValidNoFunctions('(.5.3)')).toBe(false);
});

test("Case 38.6: isValidNoFunctions('[2.e5.]')", () => {
    expect(isValidNoFunctions('[2.e5.]')).toBe(false);
});

test("Case 38.7: isValidNoFunctions('{.5e+-3}')", () => {
    expect(isValidNoFunctions('{.5e+-3}')).toBe(false);
});

test("Case 38.8: isValidNoFunctions('2.5.+3e5e2')", () => {
    expect(isValidNoFunctions('2.5.+3e5e2')).toBe(false);
});

test("Case 38.9: isValidNoFunctions('(+.5)')", () => {
    expect(isValidNoFunctions('(+.5)')).toBe(false);
});

test("Case 38.10: isValidNoFunctions('5.e++2.')", () => {
    expect(isValidNoFunctions('5.e++2.')).toBe(false);
});

// ============================================================================
// Total de Novos Testes Edge Cases: 100
// ============================================================================

test(` Case "2+3e+2" `, () => {
    expect(isValidNoFunctions('2+3e+2')).toBe(true);
})

test("Fail A1: isValidNoFunctions('5*-+3') // mixed triple operators", () => {
    expect(isValidNoFunctions('5*-+3')).toBe(false);
});

test("Fail A2: isValidNoFunctions('2---3') // triple minus", () => {
    expect(isValidNoFunctions('2---3')).toBe(false);
});

test("Fail A3: isValidNoFunctions('4*--+2') // double minus plus", () => {
    expect(isValidNoFunctions('4*--+2')).toBe(false);
});

test("Fail A4: isValidNoFunctions('6+-+7') // alternating operators", () => {
    expect(isValidNoFunctions('6+-+7')).toBe(false);
});

test("Fail B1: isValidNoFunctions('2(3+4)') // implicit multiplication", () => {
    expect(isValidNoFunctions('2(3+4)')).toBe(true);
});

test("Fail B2: isValidNoFunctions('5{2+1}') // implicit multiplication with {}", () => {
    expect(isValidNoFunctions('5{2+1}')).toBe(true);
});

test("Fail B3: isValidNoFunctions('3[4+5]') // implicit multiplication with []", () => {
    expect(isValidNoFunctions('3[4+5]')).toBe(true);
});

test("Fail C1: isValidNoFunctions('(2+3)4') // bracket then number", () => {
    expect(isValidNoFunctions('(2+3)4')).toBe(true);
});

test("Fail C2: isValidNoFunctions('[1+2]3') // bracket then number", () => {
    expect(isValidNoFunctions('[1+2]3')).toBe(true);
});

test("Fail C3: isValidNoFunctions('(2+3).5') // bracket then decimal", () => {
    expect(isValidNoFunctions('(2+3).5')).toBe(false);
});

test("Fail D1: isValidNoFunctions('()()') // adjacent parentheses", () => {
    expect(isValidNoFunctions('()()')).toBe(false);
});

test("Fail D2: isValidNoFunctions('[]{}') // adjacent different brackets", () => {
    expect(isValidNoFunctions('[]{}')).toBe(false);
});

test("Fail D3: isValidNoFunctions('(2+3)(4+5)') // implicit multiplication", () => {
    expect(isValidNoFunctions('(2+3)(4+5)')).toBe(true);
});
test("Fail E1: isValidNoFunctions('2e3e4') // chained scientific notation", () => {
    expect(isValidNoFunctions('2e3e4')).toBe(false);
});

test("Fail E2: isValidNoFunctions('1e2e+3') // chained with sign", () => {
    expect(isValidNoFunctions('1e2e+3')).toBe(false);
});
test("Fail F1: isValidNoFunctions('1.e2') // dot before exponent without decimal part", () => {
    expect(isValidNoFunctions('1.e2')).toBe(false);
});

test("Fail F2: isValidNoFunctions('1.e+3') // dot + signed exponent", () => {
    expect(isValidNoFunctions('1.e+3')).toBe(false);
});
test("Fail G1: isValidNoFunctions('+2') // unary plus", () => {
    expect(isValidNoFunctions('+2')).toBe(true);
});

test("Fail G2: isValidNoFunctions('+(3+4)') // unary plus with brackets", () => {
    expect(isValidNoFunctions('+(3+4)')).toBe(true);
});
