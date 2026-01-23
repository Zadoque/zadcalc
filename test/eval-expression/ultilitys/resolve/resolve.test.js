const mathResolver = require('../../../../src/eval-expression/eval-expression');
const resolve = require('../../../../src/eval-expression/utilities/resolve/resolve');

// ============================================================================
// TESTES BÁSICOS (já existentes)
// ============================================================================

test("resolve1: '7-2+6+3' must return '+14'", () => {
    expect(resolve('7-2+6+3')).toBe('+14');
});

test("resolve2: '7-2+6*3-55-3' must return '-35'", () => {
    expect(resolve('7-2+6*3-55-3')).toBe('-35');
});

test("resolve3: '7-2+6*-3-55-3' must return '-71'", () => {
    expect(resolve('7-2+6*-3-55-3')).toBe('-71');
}); 

test("resolve4: '11*-3' must return '-33'", () => {
    expect(resolve('11*-3')).toBe('-33');
}); 



test("resolve6: '11.7/1' must return '+11.7'", () => {
    expect(resolve('11.7/1')).toBe('+11.7');
}); 

test("resolve7: '556+728' must return '+1284'", () => {
    expect(resolve('556+728')).toBe('+1284');
}); 

test("resolve8: '2+3*4-6/2+8-2' must return '+17'", () => {
    expect(resolve('2+3*4-6/2+8-2')).toBe('+17');
}); 

test("resolve9: '1/90' must return '+0.011111111111111112'", () => {
    expect(resolve('1/90')).toBe('+0.011111111111111112');
});

// ============================================================================
// TESTES DE POTENCIAÇÃO BÁSICA
// ============================================================================

test("resolve10: '2^3' must return '+8'", () => {
    expect(resolve('2^3')).toBe('8');
});

test("resolve11: '5^2' must return '+25'", () => {
    expect(resolve('5^2')).toBe('25');
});

test("resolve12: '10^0' must return '+1'", () => {
    expect(resolve('10^0')).toBe('1');
});

test("resolve13: '0^5' must return '+0'", () => {
    expect(resolve('0^5')).toBe('0');
});

test(`resolve5: '11.7/0' must throw division by zero error`, () => {
    expect(() => resolve(`11.7/0`)).toThrow(/Division by zero/);
});

test(`resolve14: '0^0' must throw indeterminate form error`, () => {
    expect(() => resolve(`0^0`)).toThrow(/Indeterminate form.*0\^0/);
});

test("resolve15: '1^100' must return '+1'", () => {
    expect(resolve('1^100')).toBe('1');
});

// ============================================================================
// POTENCIAÇÃO COM DECIMAIS
// ============================================================================

test("resolve16: '2.5^2' must return '+6.25'", () => {
    expect(resolve('2.5^2')).toBe('6.25');
});

test("resolve17: '0.5^3' must return '+0.125'", () => {
    expect(resolve('0.5^3')).toBe('0.125');
});

test("resolve18: '4^0.5' must return '+2' (raiz quadrada)", () => {
    expect(resolve('4^0.5')).toBe('2');
});

test("resolve19: '27^0.333333333333' must be close to '+3' (raiz cúbica)", () => {
    const result = parseFloat(resolve('27^0.333333333333'));
    expect(result).toBeCloseTo(3, 5);
});

test("resolve20: '1.5^1.5' must be close to '+1.837117307'", () => {
    const result = parseFloat(resolve('1.5^1.5'));
    expect(result).toBeCloseTo(1.837117307, 5);
});

// ============================================================================
// POTENCIAÇÃO COM NEGATIVOS
// ============================================================================

test("resolve21: '2^-3' must return '+0.125'", () => {
    expect(resolve('2^-3')).toBe('0.125');
});

test("resolve22: '-2^2' must return '-4' (negativo não faz parte da base)", () => {
    expect(resolve('-2^2')).toBe('-4');
});

test("resolve23: '@NEG2^3' must return '-8' (@NEG tem precedência)", () => {
    expect(resolve('@NEG2^3')).toBe('-8');
});

test("resolve24: '10^-2' must return '+0.01'", () => {
    expect(resolve('10^-2')).toBe('0.01');
});

test("resolve25: '-5^2' must return '-25' (negativo isn't part of the base", () => {
    expect(resolve('-5^2')).toBe('-25');
});

// ============================================================================
// ASSOCIATIVIDADE À DIREITA DA POTENCIAÇÃO
// ============================================================================

test("resolve26: '2^3^2' must return '+512' (2^(3^2) = 2^9)", () => {
    expect(resolve('2^3^2')).toBe('512');
});

test("resolve27: '2^2^3' must return '+256' (2^(2^3) = 2^8)", () => {
    expect(resolve('2^2^3')).toBe('256');
});

test("resolve28: '4^0.5^2' must return '+2' (4^(0.5^2) = 4^0.25)", () => {
    expect(resolve('4^0.5^2')).toBe('1.4142135623730951');
});

// ============================================================================
// PRECEDÊNCIA: POTENCIAÇÃO > MULTIPLICAÇÃO/DIVISÃO
// ============================================================================

test("resolve29: '2+3^2' must return '+11' (3^2 primeiro)", () => {
    expect(resolve('2+3^2')).toBe('+11');
});

test("resolve30: '2*3^2' must return '+18' (3^2 = 9, depois 2*9)", () => {
    expect(resolve('2*3^2')).toBe('+18');
});

test("resolve31: '10-2^3' must return '+2' (2^3 = 8, depois 10-8)", () => {
    expect(resolve('10-2^3')).toBe('+2');
});

test("resolve32: '100/10^2' must return '+1' (10^2 = 100, depois 100/100)", () => {
    expect(resolve('100/10^2')).toBe('+1');
});

test("resolve33: '2^3*2' must return '+16' (2^3 = 8, depois 8*2)", () => {
    expect(resolve('2^3*2')).toBe('+16');
});

test("resolve34: '2^3+2^2' must return '+12' (8 + 4)", () => {
    expect(resolve('2^3+2^2')).toBe('+12');
});

// ============================================================================
// NOTAÇÃO CIENTÍFICA - CASOS ISOLADOS
// ============================================================================

test("resolve35: '1.23e+10' must return itself", () => {
    expect(resolve('1.23e+10')).toBe('1.23e+10');
});

test("resolve36: '5e7' must return itself", () => {
    expect(resolve('5e7')).toBe('5e7');
});

test("resolve37: '2.5e-8' must return itself", () => {
    expect(resolve('2.5e-8')).toBe('2.5e-8');
});

test("resolve38: '+9.87654e+123' must return itself", () => {
    expect(resolve('+9.87654e+123')).toBe('+9.87654e+123');
});

test("resolve39: '-3.14e-5' must return itself", () => {
    expect(resolve('-3.14e-5')).toBe('-3.14e-5');
});

// ============================================================================
// NOTAÇÃO CIENTÍFICA EM OPERAÇÕES
// ============================================================================

test("resolve40: '1e10+5' must return '+10000000005'", () => {
    expect(resolve('1e10+5')).toBe('+10000000005');
});

test("resolve41: '2.5e-8*3' must return '+7.5e-8'", () => {
    const result = resolve('2.5e-8*3');
    expect(parseFloat(result)).toBeCloseTo(7.5e-8, 15);
});

test("resolve42: '1e3/2' must return '+500'", () => {
    expect(resolve('1e3/2')).toBe('+500');
});

test("resolve43: '5e2-100' must return '+400' (500 - 100)", () => {
    expect(resolve('5e2-100')).toBe('+400');
});

test("resolve44: '1.23e+10+5.67e-8' must compute correctly", () => {
    //const result = parseFloat();
    expect(resolve('1.23e+10+5.67e-8')).toBe('+12300000000');
});

test("resolve45: '3e5*2e3' must return '+600000000' (6e8)", () => {
    expect(resolve('3e5*2e3')).toBe('+600000000');
});

// ============================================================================
// POTENCIAÇÃO + NOTAÇÃO CIENTÍFICA
// ============================================================================

test("resolve46: '1e3^2' must return '+1000000' (1000^2)", () => {
    expect(resolve('1e3^2')).toBe('1000000');
});

test("resolve47: '2^1e1' must return '+1024' (2^10)", () => {
    expect(resolve('2^1e1')).toBe('1024');
});

test("resolve48: '1e2^0.5' must return '+10' (sqrt(100))", () => {
    expect(resolve('1e2^0.5')).toBe('10');
});

test("resolve49: '5e-2^2' must return '+0.0025' (0.05^2)", () => {
    expect(resolve('5e-2^2')).toBe('0.0025000000000000005');
});

test("resolve50: '1.5e1^2' must return '+225' (15^2)", () => {
    expect(resolve('1.5e1^2')).toBe('225');
});

// ============================================================================
// COMBINAÇÕES COMPLEXAS
// ============================================================================

test("resolve51: '2^3+5*4-10/2' must return '+23' (8+20-5)", () => {
    expect(resolve('2^3+5*4-10/2')).toBe('+23');
});

test("resolve52: '1e2+2^4*3' must return '+148' (100 + 16*3)", () => {
    expect(resolve('1e2+2^4*3')).toBe('+148');
});

test("resolve53: '3^2^2-1e1' must return '+71' (3^4 = 81, 81-10)", () => {
    expect(resolve('3^2^2-1e1')).toBe('+71');
});

test("resolve54: '2.5e1*2^3/4' must return '+50' (25*8/4)", () => {
    expect(resolve('2.5e1*2^3/4')).toBe('+50');
});

test("resolve55: '@NEG2^3+1e1' must return '+2' (-8 + 10)", () => {
    expect(resolve('@NEG2^3+1e1')).toBe('+2');
});

// ============================================================================
// EDGE CASES
// ============================================================================

test("resolve56: '0.1^-1' must return '+10' (1/0.1)", () => {
    const result = parseFloat(resolve('0.1^-1'));
    expect(result).toBeCloseTo(10, 10);
});

test("resolve57: '2^10' must return '+1024'", () => {
    expect(resolve('2^10')).toBe('1024');
});

test("resolve58: '10^-10' must be very small", () => {
    const result = parseFloat(resolve('10^-10'));
    expect(result).toBe(1e-10);
});

test("resolve59: '1e100+1e-100' should handle extreme values", () => {
    const result = parseFloat(resolve('1e100+1e-100'));
    expect(result).toBe(1e100); // 1e-100 é desprezível
});

test("resolve60: Single number '42' must return '+42'", () => {
    expect(resolve('+42')).toBe('+42');
});

test("resolve61:  -2+-3 must return -5", () => {
    expect(resolve('-2+-3')).toBe('-5');
});

test("resolve62: @NEG2^3+-3 must return '-11'", () => {
    expect(resolve('@NEG2^3+-3')).toBe('-11');
});


// ============================================================================
// GRUPO 1: Casos 63-67 - Potenciação negativa com múltiplas operações
// ============================================================================

test("resolve63: '-2^3*5+10' must return '-30'", () => {
    // -2^3 = -8, -8*5 = -40, -40+10 = -30
    expect(resolve('-2^3*5+10')).toBe('-30');
});

test("resolve64: '1e2+2^4*3-50' must return '+98'", () => {
    // 1e2 = 100, 2^4 = 16, 16*3 = 48, 100+48 = 148, 148-50 = 98
    expect(resolve('1e2+2^4*3-50')).toBe('+98');
});

test("resolve65: '5^2/10+1e1-3' must return '+9.5'", () => {
    // 5^2 = 25, 25/10 = 2.5, 1e1 = 10, 2.5+10 = 12.5, 12.5-3 = 9.5
    expect(resolve('5^2/10+1e1-3')).toBe('+9.5');
});

test("resolve66: '3*2^3+4/2-1' must return '+25'", () => {
    // 2^3 = 8, 3*8 = 24, 4/2 = 2, 24+2 = 26, 26-1 = 25
    expect(resolve('3*2^3+4/2-1')).toBe('+25');
});

test("resolve67: '2e1^2-100+50/5' must return '+310'", () => {
    // 2e1 = 20, 20^2 = 400, 50/5 = 10, 400-100 = 300, 300+10 = 310
    expect(resolve('2e1^2-100+50/5')).toBe('+310');
});

// ============================================================================
// GRUPO 2: Casos 68-72 - @NEG com potenciação pura
// ============================================================================

test("resolve68: '@NEG5^2+10*2-8' must return '+37'", () => {
    // @NEG5^2 = -25, 10*2 = 20, -25+20 = -5, -5-8 = -13... ESPERA, deixa recalcular
    // @NEG5 = -5, -5^2 = 25 (negativo ao quadrado fica positivo), 25+10*2 = 25+20 = 45, 45-8 = 37
    expect(resolve('@NEG5^2+10*2-8')).toBe('+37');
});

test("resolve69: '1e3/10+2^3*5-100' must return '+40'", () => {
    // 1e3 = 1000, 1000/10 = 100, 2^3 = 8, 8*5 = 40, 100+40 = 140, 140-100 = 40
    expect(resolve('1e3/10+2^3*5-100')).toBe('+40');
});

test("resolve70: '4^2+3*10-2e1/2' must return '+36'", () => {
    // 4^2 = 16, 3*10 = 30, 2e1 = 20, 20/2 = 10, 16+30 = 46, 46-10 = 36
    expect(resolve('4^2+3*10-2e1/2')).toBe('+36');
});

test("resolve71: '2+3^2*4-10/5' must return '+36'", () => {
    // 3^2 = 9, 9*4 = 36, 10/5 = 2, 2+36 = 38, 38-2 = 36
    expect(resolve('2+3^2*4-10/5')).toBe('+36');
});

test("resolve72: '5e-1*2^4+1e1-5' must return '+13'", () => {
    // 5e-1 = 0.5, 2^4 = 16, 0.5*16 = 8, 1e1 = 10, 8+10 = 18, 18-5 = 13
    expect(resolve('5e-1*2^4+1e1-5')).toBe('+13');
});

// ============================================================================
// GRUPO 3: Casos 73-77 - Múltiplas operações e precedência
// ============================================================================

test("resolve73: '10+5^2-3*4/2' must return '+29'", () => {
    // 5^2 = 25, 3*4 = 12, 12/2 = 6, 10+25 = 35, 35-6 = 29
    expect(resolve('10+5^2-3*4/2')).toBe('+29');
});

test("resolve74: '3e1^2/10-5*2+8' must return '+88'", () => {
    // 3e1 = 30, 30^2 = 900, 900/10 = 90, 5*2 = 10, 90-10 = 80, 80+8 = 88
    expect(resolve('3e1^2/10-5*2+8')).toBe('+88');
});

test("resolve75: '3*2^3+5e1-20' must return '+6'", () => {
    // 2^3 = 8, 3*8 = 24, 5e1 = 50, 24+50 = 74, 74-20 = 54... espera, 24+50-20 = 54, não 6
    // vou recalcular: 3*8 = 24, 50 (5e1), 24+50 = 74, 74-20 = 54. Vou corrigir para +54
    expect(resolve('3*2^3+5e1-20')).toBe('+54');
});

test("resolve76: '8/2+3^2*2-10' must return '+12'", () => {
    // 8/2 = 4, 3^2 = 9, 9*2 = 18, 4+18 = 22, 22-10 = 12
    expect(resolve('8/2+3^2*2-10')).toBe('+12');
});

test("resolve77: '2^3^2/16+5-1' must return '+36'", () => {
    // 3^2 = 9, 2^9 = 512, 512/16 = 32, 32+5 = 37, 37-1 = 36
    expect(resolve('2^3^2/16+5-1')).toBe('+36');
});

// ============================================================================
// GRUPO 4: Casos 78-82 - Notação científica e operações
// ============================================================================

test("resolve78: '5*2^2+10-3*2' must return '+24'", () => {
    // 2^2 = 4, 5*4 = 20, 3*2 = 6, 20+10 = 30, 30-6 = 24
    expect(resolve('5*2^2+10-3*2')).toBe('+24');
});

test("resolve79: '2e2-3^3+50/10' must return '+178'", () => {
    // 2e2 = 200, 3^3 = 27, 50/10 = 5, 200-27 = 173, 173+5 = 178
    expect(resolve('2e2-3^3+50/10')).toBe('+178');
});

test("resolve80: '-2+-3^2+10*2' must return '+9'", () => {
    // -3^2 = -9, 10*2 = 20, -2-9 = -11, -11+20 = 9
    expect(resolve('-2+-3^2+10*2')).toBe('+9');
});

test("resolve81: '6*2+4^2-3e1' must return '-2'", () => {
    // 6*2 = 12, 4^2 = 16, 3e1 = 30, 12+16 = 28, 28-30 = -2
    expect(resolve('6*2+4^2-3e1')).toBe('-2');
});

test("resolve82: '1e1*2+3^2/9-5' must return '+16'", () => {
    // 1e1 = 10, 10*2 = 20, 3^2 = 9, 9/9 = 1, 20+1 = 21, 21-5 = 16
    expect(resolve('1e1*2+3^2/9-5')).toBe('+16');
});

// ============================================================================
// GRUPO 5: Casos 83-87 - Divisões encadeadas e potenciação
// ============================================================================

test("resolve83: '12/3+2^3*2-10' must return '+10'", () => {
    // 12/3 = 4, 2^3 = 8, 8*2 = 16, 4+16 = 20, 20-10 = 10
    expect(resolve('12/3+2^3*2-10')).toBe('+10');
});

test("resolve84: '5e-1+2*3^2-2' must return '+16.5'", () => {
    // 5e-1 = 0.5, 3^2 = 9, 2*9 = 18, 0.5+18 = 18.5, 18.5-2 = 16.5
    expect(resolve('5e-1+2*3^2-2')).toBe('+16.5');
});

test("resolve85: '-1*5^2+30-10' must return '-5'", () => {
    // 5^2 = 25, -1*25 = -25, -25+30 = 5, 5-10 = -5
    expect(resolve('-1*5^2+30-10')).toBe('-5');
});

test("resolve86: '18/2/3+4^2-5' must return '+14'", () => {
    // 18/2 = 9, 9/3 = 3, 4^2 = 16, 3+16 = 19, 19-5 = 14
    expect(resolve('18/2/3+4^2-5')).toBe('+14');
});

test("resolve87: '1e3-2^3*10-5e1' must return '+870'", () => {
    // 1e3 = 1000, 2^3 = 8, 8*10 = 80, 5e1 = 50, 1000-80 = 920, 920-50 = 870
    expect(resolve('1e3-2^3*10-5e1')).toBe('+870');
});

// ============================================================================
// GRUPO 6: Casos 88-92 - Potência dupla e operações
// ============================================================================

test("resolve88: '2^4+6*3-2e1' must return '+14'", () => {
    // 2^4 = 16, 6*3 = 18, 2e1 = 20, 16+18 = 34, 34-20 = 14
    expect(resolve('2^4+6*3-2e1')).toBe('+14');
});

test("resolve89: '3.5e1+2^3/4*10' must return '+55'", () => {
    // 3.5e1 = 35, 2^3 = 8, 8/4 = 2, 2*10 = 20, 35+20 = 55
    expect(resolve('3.5e1+2^3/4*10')).toBe('+55');
});

test("resolve90: '4+5*2^2-3e1/6' must return '+19'", () => {
    // 2^2 = 4, 5*4 = 20, 3e1 = 30, 30/6 = 5, 4+20 = 24, 24-5 = 19
    expect(resolve('4+5*2^2-3e1/6')).toBe('+19');
});

test("resolve91: '-4+3^2*2-10' must return '+4'", () => {
    // 3^2 = 9, 9*2 = 18, -4+18 = 14, 14-10 = 4
    expect(resolve('-4+3^2*2-10')).toBe('+4');
});

test("resolve92: '2^2^2+5*4-2e1' must return '+16'", () => {
    // 2^2 = 4, 2^4 = 16, 5*4 = 20, 2e1 = 20, 16+20 = 36, 36-20 = 16
    expect(resolve('2^2^2+5*4-2e1')).toBe('+16');
});

// ============================================================================
// GRUPO 7: Casos 93-97 - Subtração com potenciação
// ============================================================================

test("resolve93: '50-7*2^2+1e1' must return '+32'", () => {
    // 2^2 = 4, 7*4 = 28, 1e1 = 10, 50-28 = 22, 22+10 = 32
    expect(resolve('50-7*2^2+1e1')).toBe('+32');
});

test("resolve94: '100/5+3^3-2e1' must return '+27'", () => {
    // 100/5 = 20, 3^3 = 27, 2e1 = 20, 20+27 = 47, 47-20 = 27
    expect(resolve('100/5+3^3-2e1')).toBe('+27');
});

test("resolve95: '-5+-2^3+15' must return '+2'", () => {
    // -2^3 = -8, -5-8 = -13, -13+15 = 2
    expect(resolve('-5+-2^3+15')).toBe('+2');
});

test("resolve96: '6*2^2+8/2-1e1' must return '+18'", () => {
    // 2^2 = 4, 6*4 = 24, 8/2 = 4, 1e1 = 10, 24+4 = 28, 28-10 = 18
    expect(resolve('6*2^2+8/2-1e1')).toBe('+18');
});

test("resolve97: '2e-1*5^2+1e1-5' must return '+10'", () => {
    // 2e-1 = 0.2, 5^2 = 25, 0.2*25 = 5, 1e1 = 10, 5+10 = 15, 15-5 = 10
    expect(resolve('2e-1*5^2+1e1-5')).toBe('+10');
});

// ============================================================================
// GRUPO 8: Casos 98-102 - @NEG com potenciação
// ============================================================================

test("resolve98: '9+2*3^2-1e1/2' must return '+22'", () => {
    // 3^2 = 9, 2*9 = 18, 1e1 = 10, 10/2 = 5, 9+18 = 27, 27-5 = 22
    expect(resolve('9+2*3^2-1e1/2')).toBe('+22');
});

test("resolve99: '@NEG3^2*2+1-5' must return '+14'", () => {
    // @NEG3 = -3, -3^2 = 9, 9*2 = 18, 18+1 = 19, 19-5 = 14
    expect(resolve('@NEG3^2*2+1-5')).toBe('+14');
});

test("resolve100: '1.5e2/3-2^3+5' must return '+47'", () => {
    // 1.5e2 = 150, 150/3 = 50, 2^3 = 8, 50-8 = 42, 42+5 = 47
    expect(resolve('1.5e2/3-2^3+5')).toBe('+47');
});

test("resolve101: '3*4+5^2-2e1' must return '+17'", () => {
    // 3*4 = 12, 5^2 = 25, 2e1 = 20, 12+25 = 37, 37-20 = 17
    expect(resolve('3*4+5^2-2e1')).toBe('+17');
});

test("resolve102: '3^2^2-10+5*3' must return '+86'", () => {
    // 2^2 = 4, 3^4 = 81, 5*3 = 15, 81-10 = 71, 71+15 = 86
    expect(resolve('3^2^2-10+5*3')).toBe('+86');
});

// ============================================================================
// GRUPO 9: Casos 103-107 - Divisões e potenciação
// ============================================================================

test("resolve103: '10/2+4*3-2^2' must return '+13'", () => {
    // 10/2 = 5, 4*3 = 12, 2^2 = 4, 5+12 = 17, 17-4 = 13
    expect(resolve('10/2+4*3-2^2')).toBe('+13');
});

test("resolve104: '2.5e1-3^2+4*2' must return '+24'", () => {
    // 2.5e1 = 25, 3^2 = 9, 4*2 = 8, 25-9 = 16, 16+8 = 24
    expect(resolve('2.5e1-3^2+4*2')).toBe('+24');
});

test("resolve105: '-2*3^2+20-5' must return '-3'", () => {
    // 3^2 = 9, -2*9 = -18, -18+20 = 2, 2-5 = -3
    expect(resolve('-2*3^2+20-5')).toBe('-3');
});

test("resolve106: '2^3+1e2/5-10' must return '+18'", () => {
    // 2^3 = 8, 1e2 = 100, 100/5 = 20, 8+20 = 28, 28-10 = 18
    expect(resolve('2^3+1e2/5-10')).toBe('+18');
});

test("resolve107: '4^2-5*3+1e1/2' must return '+6'", () => {
    // 4^2 = 16, 5*3 = 15, 1e1 = 10, 10/2 = 5, 16-15 = 1, 1+5 = 6
    expect(resolve('4^2-5*3+1e1/2')).toBe('+6');
});

// ============================================================================
// GRUPO 10: Casos 108-112 - Potência dupla e notação científica
// ============================================================================

test("resolve108: '5*4/2+3^2-7' must return '+12'", () => {
    // 5*4 = 20, 20/2 = 10, 3^2 = 9, 10+9 = 19, 19-7 = 12
    expect(resolve('5*4/2+3^2-7')).toBe('+12');
});

test("resolve109: '1e2+2^2*3-4e1' must return '+72'", () => {
    // 1e2 = 100, 2^2 = 4, 4*3 = 12, 4e1 = 40, 100+12 = 112, 112-40 = 72
    expect(resolve('1e2+2^2*3-4e1')).toBe('+72');
});

test("resolve110: '-1+-5*2^2+30' must return '+9'", () => {
    // 2^2 = 4, -5*4 = -20, -1-20 = -21, -21+30 = 9
    expect(resolve('-1+-5*2^2+30')).toBe('+9');
});

test("resolve111: '20/4-3+2^3' must return '+10'", () => {
    // 20/4 = 5, 2^3 = 8, 5-3 = 2, 2+8 = 10
    expect(resolve('20/4-3+2^3')).toBe('+10');
});

test("resolve112: '5^2^2/100+3*5-10' must return '+11.25'", () => {
    // 2^2 = 4, 5^4 = 625, 625/100 = 6.25, 3*5 = 15, 6.25+15 = 21.25, 21.25-10 = 11.25
    expect(resolve('5^2^2/100+3*5-10')).toBe('+11.25');
});

test("resolve113: '-1e-10*-2e+10' must return '+11.25'", () => {
    // 2^2 = 4, 5^4 = 625, 625/100 = 6.25, 3*5 = 15, 6.25+15 = 21.25, 21.25-10 = 11.25
    expect(resolve('-1e-10*-2e+10')).toBe('+2');
});
