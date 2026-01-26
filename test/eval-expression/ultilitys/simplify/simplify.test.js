// ============================================================================
// SIMPLIFY - TESTES COMPLEXOS COM PARÊNTESES, COLCHETES, CHAVES E EXPONENCIAÇÃO
// 15 Grupos com 5+ testes cada = 80+ casos
// ============================================================================

const simplify = require('../../../../src/eval-expression/utilities/simplify/simplify');

// ============================================================================
// GRUPO 1: Casos 1-6 - Simplificação básica de parênteses
// ============================================================================

test("simplify1: '(2+4)*8' must return '+6*8'", () => {
    expect(simplify('(2+4)*8')).toBe('+6*8');
});

test("simplify2: '(10-3)+5' must return '+7+5'", () => {
    expect(simplify('(10-3)+5')).toBe('+7+5');
});

test("simplify3: '(3*4)-2' must return '+12-2'", () => {
    expect(simplify('(3*4)-2')).toBe('+12-2');
});

test("simplify4: '(20/4)+1' must return '+5+1'", () => {
    expect(simplify('(20/4)+1')).toBe('+5+1');
});

test("simplify5: '(1+1)+(2+2)' must return '+2+4'", () => {
    expect(simplify('(1+1)+(2+2)')).toBe('+2+4');
});

test("simplify6: '(5-5)*10' must return '+0*10'", () => {
    expect(simplify('(5-5)*10')).toBe('+0*10');
});

// ============================================================================
// GRUPO 2: Casos 7-12 - Simplificação de colchetes
// ============================================================================

test("simplify7: '[3+2]*4' must return '+5*4'", () => {
    expect(simplify('[3+2]*4')).toBe('+5*4');
});

test("simplify8: '2+[6/2]+8' must return '2+3+8'", () => {
    expect(simplify('2+[6/2]+8')).toBe('2+3+8');
});

test("simplify9: '[10-5]^2' must return '+5^2'", () => {
    expect(simplify('[10-5]^2')).toBe('+5^2');
});

test("simplify10: '5*[2+3]' must return '5*+5'", () => {
    expect(simplify('5*[2+3]')).toBe('5*+5');
});

test("simplify11: '[15/3]-2' must return '+5-2'", () => {
    expect(simplify('[15/3]-2')).toBe('+5-2');
});

test("simplify12: '[8-3]+[4-1]' must return '+5+3'", () => {
    expect(simplify('[8-3]+[4-1]')).toBe('+5+3');
});

// ============================================================================
// GRUPO 3: Casos 13-18 - Simplificação de chaves
// ============================================================================

test("simplify13: '{2+3}*4' must return '+5*4'", () => {
    expect(simplify('{2+3}*4')).toBe('+5*4');
});

test("simplify14: '10-{6-2}' must return '10-4'", () => {
    expect(simplify('10-{6-2}')).toBe('10-4');
});

test("simplify15: '{12/3}+5' must return '+4+5'", () => {
    expect(simplify('{12/3}+5')).toBe('+4+5');
});

test("simplify16: '3*{2+1}' must return '3*+3'", () => {
    expect(simplify('3*{2+1}')).toBe('3*+3');
});

test("simplify17: '{9-4}^2' must return '+5^2'", () => {
    expect(simplify('{9-4}^2')).toBe('+5^2');
});

test("simplify18: '{20/4}-{3-1}' must return '+5-2'", () => {
    expect(simplify('{20/4}-{3-1}')).toBe('+5-2');
});

// ============================================================================
// GRUPO 4: Casos 19-25 - Aninhamento múltiplo (parênteses, colchetes, chaves)
// ============================================================================

test("simplify19: '{(3-1)(2+4)}*8' must return '+12*8'", () => {
    expect(simplify('{(3-1)(2+4)}*8')).toBe('+12*8');
});

test("simplify20: '{[2+3]}*4' must return '+5*4'", () => {
    expect(simplify('{[2+3]}*4')).toBe('+5*4');
});

test("simplify21: '[(2+3)]*4' must return '+5*4'", () => {
    expect(simplify('[(2+3)]*4')).toBe('+5*4');
});

test("simplify22: '{(10-3)}+2' must return '+7+2'", () => {
    expect(simplify('{(10-3)}+2')).toBe('+7+2');
});

test("simplify23: '((2+2))*3' must return '+4*3'", () => {
    expect(simplify('((2+2))*3')).toBe('+4*3');
});

test("simplify24: '{[(4+1)]}^2' must return '+5^2'", () => {
    expect(simplify('{[(4+1)]}^2')).toBe('+5^2');
});

test("simplify25: '[{(6-1)}]*2' must return '+5*2'", () => {
    expect(simplify('[{(6-1)}]*2')).toBe('+5*2');
});

// ============================================================================
// GRUPO 5: Casos 26-31 - Expressões complexas com múltiplas operações
// ============================================================================

test("simplify26: '{-2*[9.4/8.0]*6-4/(5-3)-8}' must return '-24.1'", () => {
    expect(simplify('{-2*[9.4/8.0]*6-4/(5-3)-8}')).toBe('-24.1');
});

test("simplify27: '2+3*4-[6/2]+8-2' must return '2+3*4-3+8-2'", () => {
    expect(simplify('2+3*4-[6/2]+8-2')).toBe('2+3*4-3+8-2');
});

test("simplify28: '(2*3)*4-[6/2]+8-2' must return '+6*4-3+8-2'", () => {
    expect(simplify('(2*3)*4-[6/2]+8-2')).toBe('+6*4-3+8-2');
});

test("simplify29: '5*[2+3]-[4-1]' must return '5*+5-3'", () => {
    expect(simplify('5*[2+3]-[4-1]')).toBe('5*+5-3');
});

test("simplify30: '{10+5}*[3-1]' must return '+15*2'", () => {
    expect(simplify('{10+5}*[3-1]')).toBe('+15*+2');
});

test("simplify31: '(1+2)*(3+4)-(5-2)' must return '+3*+7-3'", () => {
    expect(simplify('(1+2)*(3+4)-(5-2)')).toBe('+3*+7-3');
});

// ============================================================================
// GRUPO 6: Casos 32-37 - Exponenciação simples (sem aninhamento)
// ============================================================================

test("simplify32: '2^(3)+5' must return '2^3+5'", () => {
    expect(simplify('2^(3)+5')).toBe('2^3+5');
});

test("simplify33: '(2)^(3)+5' must return '2^3+5'", () => {
    expect(simplify('(2)^(3)+5')).toBe('2^3+5');
});

test("simplify34: '10^(2)' must return '10^2'", () => {
    expect(simplify('10^(2)')).toBe('10^2');
});

test("simplify35: '5^(3)*2' must return '5^3*2'", () => {
    expect(simplify('5^(3)*2')).toBe('5^3*2');
});

test("simplify36: '100^(0.5)' must return '100^0.5'", () => {
    expect(simplify('100^(0.5)')).toBe('100^0.5');
});

test("simplify37: '3^(2)+4^(2)' must return '3^2+4^2'", () => {
    expect(simplify('3^(2)+4^(2)')).toBe('3^2+4^2');
});

// ============================================================================
// GRUPO 7: Casos 38-43 - Base negativa (números negativos)
// ============================================================================

test("simplify38: '(-2)^(3)+5' must return '@NEG2^3+5'", () => {
    expect(simplify('(-2)^(3)+5')).toBe('@NEG2^3+5');
});

test("simplify39: '(-3)^(2)' must return '@NEG3^2'", () => {
    expect(simplify('(-3)^(2)')).toBe('@NEG3^2');
});

test("simplify40: '(-5)^4' must return '@NEG5^4'", () => {
    expect(simplify('(-5)^4')).toBe('@NEG5^4');
});

test("simplify41: '(-10)^(3)*2' must return '@NEG10^3*2'", () => {
    expect(simplify('(-10)^(3)*2')).toBe('@NEG10^3*2');
});

test("simplify42: '(-1)^(100)' must return '@NEG1^100'", () => {
    expect(simplify('(-1)^(100)')).toBe('@NEG1^100');
});

test("simplify43: '5+(-7)^(2)' must return '5+@NEG7^2'", () => {
    expect(simplify('5+(-7)^(2)')).toBe('5+@NEG7^2');
});

// ============================================================================
// GRUPO 8: Casos 44-49 - Base é expressão (resultado NEGATIVO)
// ============================================================================

test("simplify44: '(-2+1)^(3)+5' must return '@NEG1^3+5'", () => {
    expect(simplify('(-2+1)^(3)+5')).toBe('@NEG1^3+5');
});

test("simplify45: '(1-3)^(2)' must return '@NEG2^2'", () => {
    expect(simplify('(1-3)^(2)')).toBe('@NEG2^2');
});

test("simplify46: '(5-10)^(3)' must return '@NEG5^3'", () => {
    expect(simplify('(5-10)^(3)')).toBe('@NEG5^3');
});

test("simplify47: '(-1*3)^(4)' must return '@NEG3^4'", () => {
    expect(simplify('(-1*3)^(4)')).toBe('@NEG3^4');
});

test("simplify48: '(2-8)^(2)*3' must return '@NEG6^2*3'", () => {
    expect(simplify('(2-8)^(2)*3')).toBe('@NEG6^2*3');
});

test("simplify49: '[3-9]^(3)' must return '@NEG6^3'", () => {
    expect(simplify('[3-9]^(3)')).toBe('@NEG6^3');
});

// ============================================================================
// GRUPO 9: Casos 50-55 - Base é expressão (resultado POSITIVO)
// ============================================================================

test("simplify50: '(-2{3-5})^(3)+5' must return '+4^3+5'", () => {
    expect(simplify('(-2{3-5})^(3)+5')).toBe('+4^3+5');
});

test("simplify51: '(2+3)^(2)' must return '+5^2'", () => {
    expect(simplify('(2+3)^(2)')).toBe('+5^2');
});

test("simplify52: '(10-3)^(3)' must return '+7^3'", () => {
    expect(simplify('(10-3)^(3)')).toBe('+7^3');
});

test("simplify53: '(2*4)^(2)+1' must return '+8^2+1'", () => {
    expect(simplify('(2*4)^(2)+1')).toBe('+8^2+1');
});

test("simplify54: '(15/3)^(4)' must return '+5^4'", () => {
    expect(simplify('(15/3)^(4)')).toBe('+5^4');
});

test("simplify55: '(1+1+1)^(2)*3' must return '+3^2*3'", () => {
    expect(simplify('(1+1+1)^(2)*3')).toBe('+3^2*3');
});

// ============================================================================
// GRUPO 10: Casos 56-61 - Expoente é expressão
// ============================================================================

test("simplify56: '2^(1+2)' must return '2^+3'", () => {
    expect(simplify('2^(1+2)')).toBe('2^+3');
});

test("simplify57: '3^(4-1)+5' must return '3^+3+5'", () => {
    expect(simplify('3^(4-1)+5')).toBe('3^+3+5');
});

test("simplify58: '10^(2*2)' must return '10^+4'", () => {
    expect(simplify('10^(2*2)')).toBe('10^+4');
});

test("simplify59: '5^(6/2)' must return '5^+3'", () => {
    expect(simplify('5^(6/2)')).toBe('5^+3');
});

test("simplify60: '2^(2+2+1)*3' must return '2^+5*3'", () => {
    expect(simplify('2^(2+2+1)*3')).toBe('2^+5*3');
});

test("simplify61: '4^(3*1)' must return '4^+3'", () => {
    expect(simplify('4^(3*1)')).toBe('4^+3');
});

// ============================================================================
// GRUPO 11: Casos 62-67 - Ambos (base E expoente) são expressões
// ============================================================================

test("simplify62: '(1+1)^(2+1)' must return '+2^+3'", () => {
    expect(simplify('(1+1)^(2+1)')).toBe('+2^+3');
});

test("simplify63: '(10/2)^(3-1)+7' must return '+5^+2+7'", () => {
    expect(simplify('(10/2)^(3-1)+7')).toBe('+5^+2+7');
});

test("simplify64: '(2*2)^(1+1)' must return '+4^+2'", () => {
    expect(simplify('(2*2)^(1+1)')).toBe('+4^+2');
});

test("simplify65: '(5-2)^(2*2)*5' must return '+3^+4*5'", () => {
    expect(simplify('(5-2)^(2*2)*5')).toBe('+3^+4*5');
});

test("simplify66: '(3+2)^(10-8)' must return '+5^+2'", () => {
    expect(simplify('(3+2)^(10-8)')).toBe('+5^+2');
});

test("simplify67: '(-2+3)^(1+2)+4' must return '+1^+3+4'", () => {
    expect(simplify('(-2+3)^(1+2)+4')).toBe('+1^+3+4');
});

// ============================================================================
// GRUPO 12: Casos 68-73 - Colchetes e chaves com exponenciação
// ============================================================================

test("simplify68: '[2]^{3}' must return '2^3'", () => {
    expect(simplify('[2]^{3}')).toBe('2^3');
});

test("simplify69: '{2+3}^[2]' must return '+5^2'", () => {
    expect(simplify('{2+3}^[2]')).toBe('+5^2');
});

test("simplify70: '[-5]^{2}+1' must return '@NEG5^2+1'", () => {
    expect(simplify('[-5]^{2}+1')).toBe('@NEG5^2+1');
});

test("simplify71: '{10-3}^{2}' must return '+7^2'", () => {
    expect(simplify('{10-3}^{2}')).toBe('+7^2');
});

test("simplify72: '[1+1]^(2+1)' must return '+2^+3'", () => {
    expect(simplify('[1+1]^(2+1)')).toBe('+2^+3');
});

test("simplify73: '{-3}^[2]+5' must return '@NEG3^2+5'", () => {
    expect(simplify('{-3}^[2]+5')).toBe('@NEG3^2+5');
});

// ============================================================================
// GRUPO 13: Casos 74-79 - Casos complexos com múltiplas operações e exponenciação
// ============================================================================

test("simplify74: '(2+3)^(2)+5^(2)' must return '+5^2+5^2'", () => {
    expect(simplify('(2+3)^(2)+5^(2)')).toBe('+5^2+5^2');
});

test("simplify75: '(-1)^(2)+(-2)^(3)' must return '@NEG1^2+@NEG2^3'", () => {
    expect(simplify('(-1)^(2)+(-2)^(3)')).toBe('@NEG1^2+@NEG2^3');
});

test("simplify76: '2^(3)+3^(2)' must return '2^3+3^2'", () => {
    expect(simplify('2^(3)+3^(2)')).toBe('2^3+3^2');
});

test("simplify77: '(2+1)^(3)*(4-1)^(2)' must return '+3^3*+3^2'", () => {
    expect(simplify('(2+1)^(3)*(4-1)^(2)')).toBe('+3^3*+3^2');
});

test("simplify78: '[(3+2)]^{1+1}' must return '+5^+2'", () => {
    expect(simplify('[(3+2)]^{1+1}')).toBe('+5^+2');
});

test("simplify79: '{(1+1)^(2)}*[3+2]' must return '+2^+2*+5'", () => {
    expect(simplify('{(1+1)^(2)}*[3+2]')).toBe('+2^2*+5');
});

// ============================================================================
// GRUPO 14: Casos 80-86 - Notação científica com exponenciação
// ============================================================================

test("simplify80: '(1e2)^(2)' must return '1e2^2'", () => {
    expect(simplify('(1e2)^(2)')).toBe('1e2^2');
});

test("simplify81: '(2e1)^(3)' must return '2e1^3'", () => {
    expect(simplify('(2e1)^(3)')).toBe('2e1^3');
});

test("simplify82: '2^(1e1)' must return '2^1e1'", () => {
    expect(simplify('2^(1e1)')).toBe('2^1e1');
});

test("simplify83: '(5e-1)^(2)' must return '5e-1^2'", () => {
    expect(simplify('(5e-1)^(2)')).toBe('5e-1^2');
});

test("simplify84: '(3.5e1)^(2)+5' must return '3.5e1^2+5'", () => {
    expect(simplify('(3.5e1)^(2)+5')).toBe('3.5e1^2+5');
});

test("simplify85: '2^(1e2)' must return '2^1e2'", () => {
    expect(simplify('2^(1e2)')).toBe('2^1e2');
});

test("simplify86: '(1.5e2)^(2)*(2e1)' must return '1.5e2^2*2e1'", () => {
    expect(simplify('(1.5e2)^(2)*(2e1)')).toBe('1.5e2^2*2e1');
});

// ============================================================================
// GRUPO 15: Casos 87-92 - Casos extremos e edge cases
// ============================================================================

test("simplify87: '{(2)}' must return '2'", () => {
    expect(simplify('{(2)}')).toBe('2');
});

test("simplify88: '[{[(2+3)]}]' must return '+5'", () => {
    expect(simplify('[{[(2+3)]}]')).toBe('+5');
});

test("simplify89: '((((1+1))))' must return '+2'", () => {
    expect(simplify('((((1+1))))')).toBe('+2');
});

test("simplify90: '(0)^(5)' must return '0^5'", () => {
    expect(simplify('(0)^(5)')).toBe('0^5');
});

test("simplify91: '(-0)^(2)' must return '@NEG0^2'", () => {
    expect(simplify('3-(-0)^(2)')).toBe('3-0^2');
});

test("simplify92: '(1)^(1)^(1)' must return '1^1^1'", () => {
    expect(simplify('(1)^(1)^(1)')).toBe('1^1^1');
});

// ============================================================================
// GRUPO 16: Casos 93-97 - Potências encadeadas
// ============================================================================

test("simplify93: '2^3^2' must return '2^3^2'", () => {
    expect(simplify('2^3^2')).toBe('2^3^2');
});

test("simplify94: '(2^3)^2' must return '8^2'", () => {
    expect(simplify('(2^3)^2')).toBe('8^2');
});

test("simplify95: '3^(2^2)' must return '3^4'", () => {
    expect(simplify('3^(2^2)')).toBe('3^4');
});

test("simplify96: '(2^2)^(2^2)' must return '4^4'", () => {
    expect(simplify('(2^2)^(2^2)')).toBe('4^4');
});

test("simplify97: '2^2^2^2' must return '2^2^2^2'", () => {
    expect(simplify('2^2^2^2')).toBe('2^2^2^2');
});

// ============================================================================
// GRUPO 17: Casos 98-102 - Notação científica negativa
// ============================================================================

test("simplify98: '(-1e2)^2' must return '@NEG1e2^2'", () => {
    expect(simplify('(-1e2)^2')).toBe('@NEG1e2^2');
});

test("simplify99: '(-2.5e1)^(3)' must return '@NEG2.5e1^3'", () => {
    expect(simplify('(-2.5e1)^(3)')).toBe('@NEG2.5e1^3');
});

test("simplify100: '(-1e-2)^(2)' must return '@NEG1e-2^2'", () => {
    expect(simplify('(-1e-2)^(2)')).toBe('@NEG1e-2^2');
});

test("simplify101: '(1e2+-1e1)^2' must return '+90^2'", () => {
    expect(simplify('(1e2+-1e1)^2')).toBe('+90^2');
});

test("simplify102: '[-3e1]^{2}' must return '@NEG3e1^2'", () => {
    expect(simplify('[-3e1]^{2}')).toBe('@NEG3e1^2');
});

// ============================================================================
// GRUPO 18: Casos 103-107 - Decimais longos e precisão
// ============================================================================

test("simplify103: '(3.14159)^(2)' must return '3.14159^2'", () => {
    expect(simplify('(3.14159)^(2)')).toBe('3.14159^2');
});

test("simplify104: '(2.718)^(3.14)' must return '2.718^3.14'", () => {
    expect(simplify('(2.718)^(3.14)')).toBe('2.718^3.14');
});

test("simplify105: '(0.123456789)^(2)' must return '0.123456789^2'", () => {
    expect(simplify('(0.123456789)^(2)')).toBe('0.123456789^2');
});

test("simplify106: '(10.5+2.3)^(1.5)' must return '+12.8^1.5'", () => {
    expect(simplify('(10.5+2.3)^(1.5)')).toBe('+12.8^1.5');
});

test("simplify107: '{3.333}^[2.5]' must return '3.333^2.5'", () => {
    expect(simplify('{3.333}^[2.5]')).toBe('3.333^2.5');
});

// ============================================================================
// GRUPO 19: Casos 108-112 - Casos especiais com zero
// ============================================================================

test("simplify108: '(0+0)^(0)' must return '0^0'", () => {
    expect(simplify('(0+0)^(0)')).toBe('0^0');
});

test("simplify109: '(5-5)^(10)' must return '0^10'", () => {
    expect(simplify('(5-5)^(10)')).toBe('0^10');
});

test("simplify110: '0^(2+3)' must return '0^+5'", () => {
    expect(simplify('0^(2+3)')).toBe('0^+5');
});

test("simplify111: '(0)^(0)' must return '0^0'", () => {
    expect(simplify('(0)^(0)')).toBe('0^0');
});

test("simplify112: '[0*5]^{3}' must return '0^3'", () => {
    expect(simplify('[0*5]^{3}')).toBe('0^3');
});

// ============================================================================
// GRUPO 20: Casos 113-117 - Expressões mistas complexas
// ============================================================================

test("simplify113: '(2e1+3)^(2)+(5-2)^(3)' must return '+23^2++3^3'", () => {
    expect(simplify('(2e1+3)^(2)+(5-2)^(3)')).toBe('+23^2++3^3');
});

test("simplify114: '{[(1e2/2)]}^(2)' must return '+50^2'", () => {
    expect(simplify('{[(1e2/2)]}^(2)')).toBe('+50^2');
});

test("simplify115: '(-1e1+5)^(2)*[3-1]' must return '@NEG5^2*+2'", () => {
    expect(simplify('(-1e1+5)^(2)*[3-1]')).toBe('@NEG5^2*+2');
});

test("simplify116: '2^(1+1)^(1+1)' must return '2^+2^+2'", () => {
    expect(simplify('2^(1+1)^(1+1)')).toBe('2^+2^+2');
});

test("simplify117: '((3.5e1-5)/2)^{3}' must return '+15^3'", () => {
    expect(simplify('((3.5e1-5)/2)^{3}')).toBe('+15^3');
});

test("simplify118: -(-5) must return +5", ()=> {
    expect(simplify('-(-5)')).toBe('5');
})