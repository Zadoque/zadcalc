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

test("resolve5: '11.7/0' must return 'Error! division by zero'", () => {
    expect(resolve('11.7/0')).toBe('Error! division by zero');
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
    expect(resolve('2^3')).toBe('+8');
});

test("resolve11: '5^2' must return '+25'", () => {
    expect(resolve('5^2')).toBe('+25');
});

test("resolve12: '10^0' must return '+1'", () => {
    expect(resolve('10^0')).toBe('+1');
});

test("resolve13: '0^5' must return '+0'", () => {
    expect(resolve('0^5')).toBe('+0');
});

test("resolve14: '0^0' must return 'Error! 0 in potation of 0'", () => {
    expect(resolve('0^0')).toBe('Error! 0 in potation of 0');
});

test("resolve15: '1^100' must return '+1'", () => {
    expect(resolve('1^100')).toBe('+1');
});

// ============================================================================
// POTENCIAÇÃO COM DECIMAIS
// ============================================================================

test("resolve16: '2.5^2' must return '+6.25'", () => {
    expect(resolve('2.5^2')).toBe('+6.25');
});

test("resolve17: '0.5^3' must return '+0.125'", () => {
    expect(resolve('0.5^3')).toBe('+0.125');
});

test("resolve18: '4^0.5' must return '+2' (raiz quadrada)", () => {
    expect(resolve('4^0.5')).toBe('+2');
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
    expect(resolve('2^-3')).toBe('+0.125');
});

test("resolve22: '-2^2' must return '+4' (negativo na base)", () => {
    expect(resolve('-2^2')).toBe('+4');
});

test("resolve23: '@NEG2^3' must return '-8' (@NEG tem precedência)", () => {
    expect(resolve('@NEG2^3')).toBe('-8');
});

test("resolve24: '10^-2' must return '+0.01'", () => {
    expect(resolve('10^-2')).toBe('+0.01');
});

test("resolve25: '-5^2' must return '+25'", () => {
    expect(resolve('-5^2')).toBe('+25');
});

// ============================================================================
// ASSOCIATIVIDADE À DIREITA DA POTENCIAÇÃO
// ============================================================================

test("resolve26: '2^3^2' must return '+512' (2^(3^2) = 2^9)", () => {
    expect(resolve('2^3^2')).toBe('+512');
});

test("resolve27: '2^2^3' must return '+256' (2^(2^3) = 2^8)", () => {
    expect(resolve('2^2^3')).toBe('+256');
});

test("resolve28: '4^0.5^2' must return '+2' (4^(0.5^2) = 4^0.25)", () => {
    expect(resolve('4^0.5^2')).toBe('+2');
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
    const result = parseFloat(resolve('1.23e+10+5.67e-8'));
    expect(result).toBeCloseTo(1.23e10 + 5.67e-8, 5);
});

test("resolve45: '3e5*2e3' must return '+600000000' (6e8)", () => {
    expect(resolve('3e5*2e3')).toBe('+600000000');
});

// ============================================================================
// POTENCIAÇÃO + NOTAÇÃO CIENTÍFICA
// ============================================================================

test("resolve46: '1e3^2' must return '+1000000' (1000^2)", () => {
    expect(resolve('1e3^2')).toBe('+1000000');
});

test("resolve47: '2^1e1' must return '+1024' (2^10)", () => {
    expect(resolve('2^1e1')).toBe('+1024');
});

test("resolve48: '1e2^0.5' must return '+10' (sqrt(100))", () => {
    expect(resolve('1e2^0.5')).toBe('+10');
});

test("resolve49: '5e-2^2' must return '+0.0025' (0.05^2)", () => {
    expect(resolve('5e-2^2')).toBe('+0.0025');
});

test("resolve50: '1.5e1^2' must return '+225' (15^2)", () => {
    expect(resolve('1.5e1^2')).toBe('+225');
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
    expect(resolve('2^10')).toBe('+1024');
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
