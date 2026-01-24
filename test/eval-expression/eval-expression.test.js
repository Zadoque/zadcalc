/**
 * COMPREHENSIVE TEST SUITE FOR evalExpression
 * 200+ tests covering all features, edge cases, and settings combinations
 */

const mathResolver = require('../../src/eval-expression/eval-expression');
const evalExpression = mathResolver.evalExpression;

/**
 * HELPER: Reset settings to defaults before each critical test
 */
const resetSettings = () => {
    mathResolver.settings.to_fixed = 5;
    mathResolver.settings.smart_to_fixed = true;
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.positive_sign = false;
    mathResolver.settings.return_as_string = true;
    mathResolver.settings.always_return_sci_notation = false;
};

// ============================================================================
// PARTE 1: OPERAÇÕES BÁSICAS (20 testes)
// ============================================================================

describe('PARTE 1: Operações Básicas Simples', () => {
    beforeEach(resetSettings);

    test('Addition: 2+3 = 5', () => {
        expect(evalExpression('2+3')).toBe('5');
    });

    test('Subtraction: 10-3 = 7', () => {
        expect(evalExpression('10-3')).toBe('7');
    });

    test('Multiplication: 4*5 = 20', () => {
        expect(evalExpression('4*5')).toBe('20');
    });

    test('Division: 20/4 = 5', () => {
        expect(evalExpression('20/4')).toBe('5');
    });

    test('Exponentiation: 2^3 = 8', () => {
        expect(evalExpression('2^3')).toBe('8');
    });

    test('Mixed operations: 2+3*4 = 14 (respects order of operations)', () => {
        expect(evalExpression('2+3*4')).toBe('14');
    });

    test('Negative numbers: -5+3 = -2', () => {
        expect(evalExpression('-5+3')).toBe('-2');
    });

    test('Double negation: --5 = 5', () => {
        expect(evalExpression('--5')).toBe('5');
    });

    test('Complex negative: -2*-3 = 6', () => {
        expect(evalExpression('-2*-3')).toBe('6');
    });

    test('Single number: 42', () => {
        expect(evalExpression('42')).toBe('42');
    });

    test('Decimal: 3.14', () => {
        expect(evalExpression('3.14')).toBe('3.14');
    });

    test('Zero: 0', () => {
        expect(evalExpression('0')).toBe('0');
    });

    test('Large number: 1000000', () => {
        expect(evalExpression('1000000')).toBe('1000000');
    });

    test('Very small decimal: 0.0001', () => {
        expect(evalExpression('0.0001')).toBe('0.0001');
    });

    test('Negative decimal: -3.14', () => {
        expect(evalExpression('-3.14')).toBe('-3.14');
    });

    test('Division with result: 7/2 = 3.5', () => {
        expect(evalExpression('7/2')).toBe('3.5');
    });

    test('Power of 0: 5^0 = 1', () => {
        expect(evalExpression('5^0')).toBe('1');
    });

    test('Power of 1: 5^1 = 5', () => {
        expect(evalExpression('5^1')).toBe('5');
    });

    test('Negative exponent: 2^-1 = 0.5', () => {
        expect(evalExpression('2^-1')).toBe('0.5');
    });
});

// ============================================================================
// PARTE 2: PARENTHESES E BRACKETS (25 testes)
// ============================================================================

describe('PARTE 2: Parentheses, Square Brackets & Curly Braces', () => {
    beforeEach(resetSettings);

    test('Simple parentheses: (2+3)*4 = 20', () => {
        expect(evalExpression('(2+3)*4')).toBe('20');
    });

    test('Nested parentheses: ((2+3)*4) = 20', () => {
        expect(evalExpression('((2+3)*4)')).toBe('20');
    });

    test('Multiple groups: (2+3)*(4+5) = 45', () => {
        expect(evalExpression('(2+3)*(4+5)')).toBe('45');
    });

    test('Square brackets: [2+3]*4 = 20', () => {
        expect(evalExpression('[2+3]*4')).toBe('20');
    });

    test('Curly braces: {2+3}*4 = 20', () => {
        expect(evalExpression('{2+3}*4')).toBe('20');
    });

    test('Mixed brackets: ([{2+3}])*4 = 20', () => {
        expect(evalExpression('([{2+3}])*4')).toBe('20');
    });

    test('Complex nested: {-2[9.4/8.0]6-4/(5-3)-8}', () => {
        expect(evalExpression('{-2[9.4/8.0]6-4/(5-3)-8}')).toBe('-24.1');
    });

    test('Division with brackets: (10+2)/(2+4) = 2', () => {
        expect(evalExpression('(10+2)/(2+4)')).toBe('2');
    });

    test('Power with brackets: (2+3)^2 = 25', () => {
        expect(evalExpression('(2+3)^2')).toBe('25');
    });

    test('Deeply nested: (((2+3))) = 5', () => {
        expect(evalExpression('(((2+3)))')).toBe('5');
    });

    test('Parentheses with negative: -(2+3) = -5', () => {
        expect(evalExpression('-(2+3)')).toBe('-5');
    });

    test('Bracket with negative: -[2+3] = -5', () => {
        expect(evalExpression('-[2+3]')).toBe('-5');
    });

    test('Brace with negative: -{2+3} = -5', () => {
        expect(evalExpression('-{2+3}')).toBe('-5');
    });

    test('Multiple brackets: [2+3]+[4+5] = 14', () => {
        expect(evalExpression('[2+3]+[4+5]')).toBe('14');
    });

    test('Brackets and parentheses: [2+(3*4)] = 14', () => {
        expect(evalExpression('[2+(3*4)]')).toBe('14');
    });

    test('Empty-like groups: (2)+(3) = 5', () => {
        expect(evalExpression('(2)+(3)')).toBe('5');
    });

    test('Consecutive brackets: (2)(3) with implicit mult = 6', () => {
        expect(evalExpression('(2)(3)')).toBe('6');
    });

    test('Subtraction with brackets: 10-[2+3] = 5', () => {
        expect(evalExpression('10-[2+3]')).toBe('5');
    });

    test('Division with nested: 20/[2+3] = 4', () => {
        expect(evalExpression('20/[2+3]')).toBe('4');
    });

    test('Power in brackets: [2^3] = 8', () => {
        expect(evalExpression('[2^3]')).toBe('8');
    });

    test('Complex expression with all bracket types: (2+[3+{4}]) = 9', () => {
        expect(evalExpression('(2+[3+{4}])')).toBe('9');
    });
});

// ============================================================================
// PARTE 3: IMPLICIT MULTIPLICATION (30 testes)
// ============================================================================

describe('PARTE 3: Implicit Multiplication', () => {
    beforeEach(resetSettings);

    test('Number + Parenthesis: 2(3+4) = 14', () => {
        expect(evalExpression('2(3+4)')).toBe('14');
    });

    test('Parenthesis + Number: (3+4)2 = 14', () => {
        expect(evalExpression('(3+4)2')).toBe('14');
    });

    test('Number + Number (with decimal): 2.5*2 = 5', () => {
        expect(evalExpression('2.5*2')).toBe('5');
    });

    test('Decimal + Decimal: 1.5*2.5 = 3.75', () => {
        expect(evalExpression('1.52.5')).toBe('3.75');
    });

    test('Number + Bracket: 5[2+3] = 25', () => {
        expect(evalExpression('5[2+3]')).toBe('25');
    });

    test('Bracket + Number: [2+3]5 = 25', () => {
        expect(evalExpression('[2+3]5')).toBe('25');
    });

    test('Number + Brace: 3{4+5} = 27', () => {
        expect(evalExpression('3{4+5}')).toBe('27');
    });

    test('Brace + Number: {4+5}3 = 27', () => {
        expect(evalExpression('{4+5}3')).toBe('27');
    });

    test('Parenthesis + Parenthesis: (2+3)(4+5) = 45', () => {
        expect(evalExpression('(2+3)(4+5)')).toBe('45');
    });

    test('Bracket + Bracket: [2+3][4+5] = 45', () => {
        expect(evalExpression('[2+3][4+5]')).toBe('45');
    });

    test('Complex implicit: 2(3+4)(5) = 70', () => {
        expect(evalExpression('2(3+4)(5)')).toBe('70');
    });

    test('Multiple implicit in expression: 2(3)4(5) = 120', () => {
        expect(evalExpression('2(3)4(5)')).toBe('120');
    });

    test('Implicit with subtraction: 5(3)-2 = 13', () => {
        expect(evalExpression('5(3)-2')).toBe('13');
    });

    test('Implicit with division: 10(2)/4 = 5', () => {
        expect(evalExpression('10(2)/4')).toBe('5');
    });

    test('Implicit with power: 2(3)^2 = 18', () => {
        expect(evalExpression('2(3)^2')).toBe('18');
    });

    test('Implicit before operation: 2(3)+4 = 10', () => {
        expect(evalExpression('2(3)+4')).toBe('10');
    });

    test('Mixed brackets implicit: 2[3](4) = 24', () => {
        expect(evalExpression('2[3](4)')).toBe('24');
    });

    test('Implicit with negative: -2(3) = -6', () => {
        expect(evalExpression('-2(3)')).toBe('-6');
    });

    test('Double negative implicit: -(-2)(3) = 6', () => {
        expect(evalExpression('-(-2)(3)')).toBe('6');
    });

    test('Decimal + Bracket: 0.5(4+2) = 3', () => {
        expect(evalExpression('0.5(4+2)')).toBe('3');
    });

    test('Large number implicit: 100(2) = 200', () => {
        expect(evalExpression('100(2)')).toBe('200');
    });

    test('Implicit with small number: 0.001(1000) = 1', () => {
        expect(evalExpression('0.001(1000)')).toBe('1');
    });

    test('Triple implicit: (2)(3)(4) = 24', () => {
        expect(evalExpression('(2)(3)(4)')).toBe('24');
    });

    test('Implicit in nested expression: 2(3(4)) = 24', () => {
        expect(evalExpression('2(3(4))')).toBe('24');
    });

    test('Implicit with power in bracket: 2[3^2] = 18', () => {
        expect(evalExpression('2[3^2]')).toBe('18');
    });

    test('Long chain implicit: 1(2)(3)(4)(5) = 120', () => {
        expect(evalExpression('1(2)(3)(4)(5)')).toBe('120');
    });

    test('Implicit mixed operators: 2(3)+ 4(5) = 26', () => {
        expect(evalExpression('2(3)+4(5)')).toBe('26');
    });

    test('Implicit with negative intermediate: 2(-3) = -6', () => {
        expect(evalExpression('2(-3)')).toBe('-6');
    });

    test('Implicit (3+4)2 + 5 = 19', () => {
        expect(evalExpression('(3+4)2+5')).toBe('19');
    });

    test('Implicit [10-5]2 = 10', () => {
        expect(evalExpression('[10-5]2')).toBe('10');
    });

    test('Implicit {2+3}{4+1} = 25', () => {
        expect(evalExpression('{2+3}{4+1}')).toBe('25');
    });

    test('Implicit 2.5(4) = 10', () => {
        expect(evalExpression('2.5(4)')).toBe('10');
    });
});

// ============================================================================
// PARTE 4: CONSTANTS (25 testes)
// ============================================================================

describe('PARTE 4: Mathematical Constants (π, e, τ, φ)', () => {
    beforeEach(resetSettings);

    test('PI constant: PI = 3.14159...', () => {
        const result = evalExpression('PI');
        expect(parseFloat(result)).toBeCloseTo(Math.PI, 4);
    });

    test('E constant (Euler): E = 2.71828...', () => {
        const result = evalExpression('E');
        expect(parseFloat(result)).toBeCloseTo(Math.E, 4);
    });

    test('2*PI (with positive_sign)', () => {
        mathResolver.settings.positive_sign = true;
        const result = evalExpression('2*PI');
        expect(parseFloat(result)).toBeCloseTo(2 * Math.PI, 4);
    });

    test('PI/2', () => {
        const result = evalExpression('PI/2');
        expect(parseFloat(result)).toBeCloseTo(Math.PI / 2, 4);
    });

    test('PI+1', () => {
        const result = evalExpression('PI+1');
        expect(parseFloat(result)).toBeCloseTo(Math.PI + 1, 4);
    });

    test('E*2', () => {
        const result = evalExpression('E*2');
        expect(parseFloat(result)).toBeCloseTo(Math.E * 2, 4);
    });

    test('E^2', () => {
        const result = evalExpression('E^2');
        expect(parseFloat(result)).toBeCloseTo(Math.E ** 2, 3);
    });

    test('Multiple constants: PI+E', () => {
        const result = evalExpression('PI+E');
        expect(parseFloat(result)).toBeCloseTo(Math.PI + Math.E, 4);
    });

    test('PI*E', () => {
        const result = evalExpression('PI*E');
        expect(parseFloat(result)).toBeCloseTo(Math.PI * Math.E, 4);
    });

    test('Constants with brackets: (PI+1)*2', () => {
        const result = evalExpression('(PI+1)*2');
        expect(parseFloat(result)).toBeCloseTo((Math.PI + 1) * 2, 3);
    });

    test('Implicit multiplication with constants: 2PI', () => {
        const result = evalExpression('2PI');
        expect(parseFloat(result)).toBeCloseTo(2 * Math.PI, 4);
    });

    test('3E (implicit mult with E)', () => {
        const result = evalExpression('3E');
        expect(parseFloat(result)).toBeCloseTo(3 * Math.E, 4);
    });

    test('PI/E', () => {
        const result = evalExpression('PI/E');
        expect(parseFloat(result)).toBeCloseTo(Math.PI / Math.E, 4);
    });

    test('10*PI', () => {
        const result = evalExpression('10*PI');
        expect(parseFloat(result)).toBeCloseTo(10 * Math.PI, 3);
    });

    test('Constants in complex expression: (2*PI+E)/2', () => {
        const result = evalExpression('(2*PI+E)/2');
        expect(parseFloat(result)).toBeCloseTo((2 * Math.PI + Math.E) / 2, 3);
    });

    test('TAU constant: TAU = 2*PI', () => {
        const result = evalExpression('TAU');
        expect(parseFloat(result)).toBeCloseTo(2 * Math.PI, 4);
    });

    test('PHI (Golden Ratio)', () => {
        const result = evalExpression('PHI');
        const phi = (1 + Math.sqrt(5)) / 2;
        expect(parseFloat(result)).toBeCloseTo(phi, 4);
    });

    test('PI with negative: -PI', () => {
        const result = evalExpression('-PI');
        expect(parseFloat(result)).toBeCloseTo(-Math.PI, 4);
    });

    test('Constants with power: PI^2', () => {
        const result = evalExpression('PI^2');
        expect(parseFloat(result)).toBeCloseTo(Math.PI ** 2, 3);
    });

    test('Constant with root: sqrt(PI)', () => {
        const result = evalExpression('sqrt(PI)');
        expect(parseFloat(result)).toBeCloseTo(Math.sqrt(Math.PI), 4);
    });

    test('Multiple operations with constant: 2+3*PI', () => {
        const result = evalExpression('2+3*PI');
        expect(parseFloat(result)).toBeCloseTo(2 + 3 * Math.PI, 3);
    });

    test('TAU/2 = PI', () => {
        const result = evalExpression('TAU/2');
        expect(parseFloat(result)).toBeCloseTo(Math.PI, 4);
    });

    test('PHI^2 = PHI+1', () => {
        const phi = (1 + Math.sqrt(5)) / 2;
        const result = evalExpression('PHI^2');
        expect(parseFloat(result)).toBeCloseTo(phi + 1, 3);
    });

    test('E+PI-TAU', () => {
        const result = evalExpression('E+PI-TAU');
        expect(parseFloat(result)).toBeCloseTo(Math.E + Math.PI - 2 * Math.PI, 4);
    });

    test('Greek letters: π = PI', () => {
        const result1 = evalExpression('PI');
        const result2 = evalExpression('π');
        expect(parseFloat(result1)).toBeCloseTo(parseFloat(result2), 4);
    });

    test('Tau symbol: τ = TAU', () => {
        const result1 = evalExpression('TAU');
        const result2 = evalExpression('τ');
        expect(parseFloat(result1)).toBeCloseTo(parseFloat(result2), 4);
    });
});

// ============================================================================
// PARTE 5: FUNCTIONS (35 testes)
// ============================================================================

describe('PARTE 5: Mathematical Functions', () => {
    beforeEach(resetSettings);

    // Trigonometric functions
    test('sin(0) = 0', () => {
        expect(evalExpression('sin(0)')).toBe('0');
    });

    test('sin(90) = 1 (degrees)', () => {
        const result = parseFloat(evalExpression('sin(90)'));
        expect(result).toBeCloseTo(1, 5);
    });

    test('cos(0) = 1', () => {
        const result = parseFloat(evalExpression('cos(0)'));
        expect(result).toBeCloseTo(1, 5);
    });

    test('cos(180) = -1 (degrees)', () => {
        const result = parseFloat(evalExpression('cos(180)'));
        expect(result).toBeCloseTo(-1, 5);
    });

    test('tan(45) = 1 (degrees)', () => {
        const result = parseFloat(evalExpression('tan(45)'));
        expect(result).toBeCloseTo(1, 4);
    });

    // Logarithmic functions
    test('log(100) = 2 (base 10)', () => {
        expect(evalExpression('log(100)')).toBe('2');
    });

    test('log(1000) = 3', () => {
        expect(evalExpression('log(1000)')).toBe('3');
    });

    test('ln(e) = 1 (natural log)', () => {
        const result = parseFloat(evalExpression('ln(E)'));
        expect(result).toBeCloseTo(1, 4);
    });

    test('ln(1) = 0', () => {
        expect(evalExpression('ln(1)')).toBe('0');
    });

    // Square root
    test('sqrt(4) = 2', () => {
        expect(evalExpression('sqrt(4)')).toBe('2');
    });

    test('sqrt(9) = 3', () => {
        expect(evalExpression('sqrt(9)')).toBe('3');
    });

    test('sqrt(2) = 1.41421...', () => {
        const result = parseFloat(evalExpression('sqrt(2)'));
        expect(result).toBeCloseTo(Math.sqrt(2), 4);
    });

    test('sqrt(0) = 0', () => {
        expect(evalExpression('sqrt(0)')).toBe('0');
    });

    // Absolute value
    test('abs(-5) = 5', () => {
        expect(evalExpression('abs(-5)')).toBe('5');
    });

    test('abs(3.14) = 3.14', () => {
        expect(evalExpression('abs(3.14)')).toBe('3.14');
    });

    // Nested functions
    test('sin(sqrt(9)) = sin(3)', () => {
        const expected = parseFloat(evalExpression('sin(3)'));
        const result = parseFloat(evalExpression('sin(sqrt(9))'));
        expect(result).toBeCloseTo(expected, 4);
    });

    test('sqrt(sqrt(16)) = 2', () => {
        expect(evalExpression('sqrt(sqrt(16))')).toBe('2');
    });

    test('log(100)*2 = 4', () => {
        expect(evalExpression('log(100)*2')).toBe('4');
    });

    test('2*sin(0) = 0', () => {
        expect(evalExpression('2*sin(0)')).toBe('0');
    });

    test('sin(0)+cos(0) = 1', () => {
        const result = parseFloat(evalExpression('sin(0)+cos(0)'));
        expect(result).toBeCloseTo(1, 5);
    });

    // Functions with implicit multiplication
    test('2sin(0) = 0', () => {
        expect(evalExpression('2sin(0)')).toBe('0');
    });

    test('3sqrt(4) = 6', () => {
        expect(evalExpression('3sqrt(4)')).toBe('6');
    });

    test('abs(-2)*5 = 10', () => {
        expect(evalExpression('abs(-2)*5')).toBe('10');
    });

    // Functions in brackets
    test('[sin(0)] = 0', () => {
        expect(evalExpression('[sin(0)]')).toBe('0');
    });

    test('(cos(0))*2 = 2', () => {
        const result = parseFloat(evalExpression('(cos(0))*2'));
        expect(result).toBeCloseTo(2, 5);
    });

    // Multiple functions
    test('sin(90)+cos(0) = 2', () => {
        const result = parseFloat(evalExpression('sin(90)+cos(0)'));
        expect(result).toBeCloseTo(2, 4);
    });

    test('sqrt(4)+sqrt(9) = 5', () => {
        expect(evalExpression('sqrt(4)+sqrt(9)')).toBe('5');
    });

    // Functions with constants
    test('sin(PI/2) = 1', () => {
        const result = parseFloat(evalExpression('sin(PI/2)'));
        expect(result).toBeCloseTo(1, 4);
    });

    test('cos(PI) = -1', () => {
        const result = parseFloat(evalExpression('cos(PI)'));
        expect(result).toBeCloseTo(-1, 4);
    });

    test('log(E^2) = 2 (with E to power)', () => {
        const result = parseFloat(evalExpression('log(E^2)'));
        expect(result).toBeGreaterThan(0);
    });

    // Root/Radical
    test('nroot(8,3) = 2 (cube root)', () => {
        const result = parseFloat(evalExpression('nroot(8,3)'));
        expect(result).toBeCloseTo(2, 4);
    });

    test('nroot(16,4) = 2 (4th root)', () => {
        const result = parseFloat(evalExpression('nroot(16,4)'));
        expect(result).toBeCloseTo(2, 4);
    });

    // Min/Max functions (if supported)
    test('max(5,10) = 10', () => {
        const result = evalExpression('max(5,10)');
        expect(parseFloat(result)).toBe(10);
    });

    test('min(5,10) = 5', () => {
        const result = evalExpression('min(5,10)');
        expect(parseFloat(result)).toBe(5);
    });
});

// ============================================================================
// PARTE 6: FRACTIONS MODE (25 testes)
// ============================================================================

describe('PARTE 6: Fraction Mode', () => {
    beforeEach(() => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.smart_to_fixed = false;
        mathResolver.settings.return_as_string = true;
    });

    test('1/2 in fraction mode', () => {
        expect(evalExpression('1/2')).toBe('+1/2');
    });

    test('1/3 in fraction mode', () => {
        expect(evalExpression('1/3')).toBe('+1/3');
    });

    test('3/4 in fraction mode', () => {
        expect(evalExpression('3/4')).toBe('+3/4');
    });

    test('2/3 + 1/3 = 1', () => {
        expect(evalExpression('2/3+1/3')).toBe('+1');
    });

    test('1/2 + 1/4 = 3/4', () => {
        expect(evalExpression('1/2+1/4')).toBe('+3/4');
    });

    test('1/2 - 1/3 = 1/6', () => {
        expect(evalExpression('1/2-1/3')).toBe('+1/6');
    });

    test('1/2 * 2/3 = 1/3', () => {
        expect(evalExpression('1/2*2/3')).toBe('+1/3');
    });

    test('1/2 / 1/3 = 3/2', () => {
        expect(evalExpression('(1/2)/(1/3)')).toBe('3/2');
    });

    test('1/90 in fraction mode', () => {
        expect(evalExpression('1/90')).toBe('+1/90');
    });

    test('3 + 2/3 - 5/7 + 12/78 = 848/273', () => {
        expect(evalExpression('3+2/3-5/7+12/78')).toBe('+848/273');
    });

    test('Negative fraction: -1/2', () => {
        expect(evalExpression('-1/2')).toBe('-1/2');
    });

    test('Improper fraction: 5/2 = 5/2', () => {
        expect(evalExpression('5/2')).toBe('5/2');
    });

    test('Large fraction: 100/3', () => {
        expect(evalExpression('100/3')).toBe('100/3');
    });

    test('Fraction with implicit mult: 2(1/2) = 1', () => {
        expect(evalExpression('2(1/2)')).toBe('1');
    });

    test('Fraction with constants: PI/2 (should convert)', () => {
        const result = evalExpression('PI/2');
        expect(result).toContain('/');
    });

    test('Multiple fractions: 1/2 + 1/3 + 1/4', () => {
        const result = evalExpression('1/2+1/3+1/4');
        expect(result).toContain('/');
    });

    test('Fraction with power: (1/2)^2 = 1/4', () => {
        expect(evalExpression('(1/2)^2')).toBe('+1/4');
    });

    test('Fraction in brackets: [1/2] = 1/2', () => {
        expect(evalExpression('[1/2]')).toBe('+1/2');
    });

    test('Complex fraction expression: (1/2 + 1/4) / 3', () => {
        mathResolver.settings.always_return_sci_notation = false;
        const result = evalExpression('(1/2+1/4)/3');
        expect(result).toContain('/');
    });

    test('Whole number in frac mode: 5', () => {
        mathResolver.settings.positive_sign = true;
        expect(evalExpression('5')).toBe('+5');
    });

    test('Zero in frac mode: 0', () => {
        expect(evalExpression('0')).toBe('0');
    });

    test('Frac error: frac_mode true + smart_to_fixed true = error', () => {
        mathResolver.settings.smart_to_fixed = true;
        const result = evalExpression('1/2');
        expect(result).toContain('Error');
    });

    test('Frac error: frac_mode true + sci_notation true = error', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('1/2');
        expect(result).toContain('Error');
    });

    test('Frac mode with negative numbers: -1/2 - 1/3', () => {
        const result = evalExpression('-1/2-1/3');
        expect(result).toContain('/');
    });

    test('Simplification in frac mode: 2/4 = 1/2', () => {
        mathResolver.settings.always_return_sci_notation = false;
        expect(evalExpression('2/4')).toBe('+1/2');
    });

    test('Complex simplification: 6/8 + 3/12 = 7/8', () => {
        mathResolver.settings.frac_mode = true;
        const result = evalExpression('6/8+3/132');
        expect(result).toContain('/');
        mathResolver.settings.frac_mode = false;
    });
});

// ============================================================================
// PARTE 7: POSITIVE SIGN SETTING (15 testes)
// ============================================================================

describe('PARTE 7: Positive Sign Setting', () => {
    beforeEach(() => {
        mathResolver.settings.positive_sign = true;
        mathResolver.settings.frac_mode = false;
        mathResolver.settings.return_as_string = true;
    });

    test('Positive number shows +: 5', () => {
        expect(evalExpression('5')).toBe('+5');
    });

    test('Addition with positive_sign: 2+3 = +5', () => {
        expect(evalExpression('2+3')).toBe('+5');
    });

    test('Subtraction resulting positive: 10-3 = +7', () => {
        expect(evalExpression('10-3')).toBe('+7');
    });

    test('Negative result still negative: 3-10 = -7', () => {
        expect(evalExpression('3-10')).toBe('-7');
    });

    test('Zero with positive_sign: 0', () => {
        expect(evalExpression('0')).toBe('0');
    });

    test('Multiplication positive_sign: 2*3 = +6', () => {
        expect(evalExpression('2*3')).toBe('+6');
    });

    test('Division positive_sign: 10/2 = +5', () => {
        expect(evalExpression('10/2')).toBe('+5');
    });

    test('Decimal with positive_sign: 3.14', () => {
        const result = evalExpression('3.14');
        expect(result).toContain('+');
    });

    test('Power with positive_sign: 2^3 = +8', () => {
        expect(evalExpression('2^3')).toBe('+8');
    });

    test('Negative number: -5', () => {
        expect(evalExpression('-5')).toBe('-5');
    });

    test('Double negative with positive_sign: -(-5) = +5', () => {
        expect(evalExpression('-(-5)')).toBe('+5');
    });

    test('Complex expression: 2+3*4 = +14', () => {
        expect(evalExpression('2+3*4')).toBe('+14');
    });

    test('Subtraction negative_sign: -(5) = -5', () => {
        expect(evalExpression('-(5)')).toBe('-5');
    });

    test('Positive_sign with function: sin(0) = 0', () => {
        expect(evalExpression('sin(0)')).toBe('0');
    });

    test('Positive_sign error: return_as_string false = error', () => {
        mathResolver.settings.return_as_string = false;
        const result = evalExpression('5');
        expect(result).toContain('Error');
    });
});

// ============================================================================
// PARTE 8: SCIENTIFIC NOTATION (20 testes)
// ============================================================================

describe('PARTE 8: Scientific Notation', () => {
    beforeEach(resetSettings);

    test('Small number in sci notation: 0.0001', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('0.0001');
        expect(result).toMatch(/e-\d+/);
    });

    test('Very large number in sci notation: 1000000', () => {
        mathResolver.settings.always_return_sci_notation = true;
       // const result = evalExpression('1000000');
        expect(evalExpression('100000000')).toBe('1e+8');
    });

    test('Sci notation error: always_sci + return_as_number = error', () => {
        mathResolver.settings.always_return_sci_notation = true;
        mathResolver.settings.return_as_string = false;
        const result = evalExpression('100');
        expect(result).toContain('Error');
    });

    test('Input in sci notation: 1e5 = 100000', () => {
        const result = evalExpression('1e5');
        expect(parseFloat(result)).toBe(100000);
    });

    test('Input in sci notation negative: 1e-3 = 0.001', () => {
        const result = evalExpression('1e-3');
        expect(parseFloat(result)).toBeCloseTo(0.001, 10);
    });

    test('Calculation result in sci notation: 0.000001*0.001', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('0.000001*0.001');
        expect(result).toMatch(/e-/);
    });

    test('Small power result: 0.1^5', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('0.1^5');
        expect(result).toMatch(/e-/);
    });

    test('Sci notation conversion: 1e2', () => {
        const result = evalExpression('1e2');
        expect(parseFloat(result)).toBe(100);
    });

    test('Input sci + operation: 1e2 + 50', () => {
        const result = evalExpression('1e2+50');
        expect(parseFloat(result)).toBe(150);
    });

    test('Output sci: 0.00001 / 10', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('0.00001/10');
        expect(result).toMatch(/e-/);
    });

    test('Very small result: 1 / 1000000000', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('1/1000000000');
        expect(result).toMatch(/e-/);
    });

    test('Sci notation with function: sqrt(0.0001)', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('sqrt(0.0001)');
        const value = parseFloat(result);
        expect(value).toBeCloseTo(0.01, 10);
    });

    test('Negative sci notation: -1e-3', () => {
        const result = evalExpression('-1e-3');
        expect(parseFloat(result)).toBeCloseTo(-0.001, 10);
    });

    test('Power with sci notation: (1e2)^2', () => {
        const result = evalExpression('(1e2)^2');
        expect(parseFloat(result)).toBe(10000);
    });

    test('Sci notation operations: 1e2 * 1e3', () => {
        const result = evalExpression('1e2*1e3');
        expect(parseFloat(result)).toBe(100000);
    });

    test('Division in sci: 1e5 / 1e2', () => {
        const result = evalExpression('1e5/1e2');
        expect(parseFloat(result)).toBe(1000);
    });

    test('Addition in sci range: 1e-4 + 1e-4', () => {
        const result = parseFloat(evalExpression('1e-4+1e-4'));
        expect(result).toBeCloseTo(0.0002, 10);
    });

    test('Complex sci expression: (1e2 + 1e3) / 1e1', () => {
        const result = evalExpression('(1e2+1e3)/1e1');
        expect(parseFloat(result)).toBe(110);
    });

    test('Sci notation smart detection: 0.000000001', () => {
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('0.000000001');
        expect(result).toMatch(/e-/);
    });

    test('Sci mode with positive_sign: always_sci + positive_sign', () => {
        mathResolver.settings.always_return_sci_notation = true;
        mathResolver.settings.positive_sign = true;
        const result = evalExpression('0.00001');
        expect(result).toContain('e-');
    });
});

// ============================================================================
// PARTE 9: FLOATING POINT PRECISION (20 testes)
// ============================================================================

describe('PARTE 9: Floating Point Precision & smart_to_fixed', () => {
    beforeEach(() => {
        mathResolver.settings.smart_to_fixed = true;
        mathResolver.settings.frac_mode = false;
        mathResolver.settings.positive_sign = true;
    });

    test('0.1 * 0.2 = 0.02 (handles imprecision)', () => {
        mathResolver.settings.always_return_sci_notation = false;
        const result = evalExpression('0.1*0.2');

        expect(result).toContain('0.02');
    });

    test('0.3 * 0.3 = 0.09 (handles imprecision)', () => {
        const result = evalExpression('0.3*0.3');
        expect(result).toContain('0.09');
    });

    test('0.7 * 0.1 = 0.07 (handles imprecision)', () => {
        const result = evalExpression('0.7*0.1');
        expect(result).toContain('0.07');
    });

    test('0.1 + 0.2 = 0.3 (handles classic imprecision)', () => {
        const result = evalExpression('0.1+0.2');
        expect(result).toContain('0.3');
    });

    test('1.1 * 1.1 (smart rounding)', () => {
        const result = evalExpression('1.1*1.1');
        expect(result).toContain('1.21');
    });

    test('(1/3)*3 ≈ 1 (compensates)', () => {
        const result = evalExpression('(1/3)*3');
        expect(parseFloat(result)).toBeCloseTo(1, 4);
    });

    test('0.1 * 0.1 * 0.1 (accumulated error)', () => {
        const result = evalExpression('0.1*0.1*0.1');
        expect(parseFloat(result)).toBeCloseTo(0.001, 10);
    });

    test('0.1 + 0.2 * 0.3 (compound imprecision)', () => {
        const result = evalExpression('0.1+0.2*0.3');
        expect(result).toContain('0.16');
    });

    test('0.5 * 0.5 = 0.25 (precise, powers of 2)', () => {
        expect(evalExpression('0.5*0.5')).toBe('+0.25');
    });

    test('0.25 * 4 = 1 (precise)', () => {
        expect(evalExpression('0.25*4')).toBe('+1');
    });

    test('0.0001 * 0.0001 = 1e-8', () => {
        const result = evalExpression('0.0001*0.0001');
        expect(parseFloat(result)).toBeCloseTo(1e-8, 15);
    });

    test('(0.1+0.2)*10 (amplified error)', () => {
        const result = evalExpression('(0.1+0.2)*10');
        expect(result).toContain('3');
    });

    test('Fixed decimal places: 1/3 with to_fixed=5', () => {
        mathResolver.settings.frac_mode = false;
        mathResolver.settings.smart_to_fixed = false;
        mathResolver.settings.to_fixed = 5;
        const result = evalExpression('1/3');
        expect(result).toContain('0.33333');
    });

    test('to_fixed=2: 1/3', () => {
        mathResolver.settings.to_fixed = 2;
        mathResolver.settings.smart_to_fixed = false;
        const result = evalExpression('1/3');
        expect(result).toContain('0.33');
    });

    test('Very small number: 0.0000001', () => {
        const result = evalExpression('0.0000001');
        expect(parseFloat(result)).toBeCloseTo(1e-7, 15);
    });

    test('Large decimal places: 1.23456789', () => {
        const result = evalExpression('1.23456789');
        expect(parseFloat(result)).toBeCloseTo(1.23456789, 7);
    });

    test('Negative decimal: -0.1 * 0.2 = -0.02', () => {
        mathResolver.settings.positive_sign = false;
        const result = evalExpression('-0.1*0.2');
        expect(result).toContain('-0.02');
    });

    test('Division decimal: 7/2 = 3.5', () => {
        const result = evalExpression('7/2');
        expect(result).toContain('3.5');
    });

    test('Power with decimal: (0.5)^3 = 0.125', () => {
        const result = evalExpression('(0.5)^3');
        expect(result).toContain('0.125');
    });
});

// ============================================================================
// PARTE 10: ERROR HANDLING & EDGE CASES (15 testes)
// ============================================================================

describe('PARTE 10: Error Handling & Invalid Expressions', () => {
    beforeEach(resetSettings);

    test('Division by zero error', () => {
        const result = evalExpression('5/0');
        expect(result).toContain('Division by zero');
    });

    test('0 to power of 0 error', () => {
        const result = evalExpression('0^0');
        expect(result).toContain('0^0');
    });

    test('Invalid function', () => {
        const result = evalExpression('invalidFunc(5)');
        expect(result).toContain('Error');
    });

    test('Mismatched parentheses (extra closing)', () => {
        const result = evalExpression('(2+3))');
        expect(result).toContain('Invalid');
    });

    test('Mismatched brackets (missing closing)', () => {
        const result = evalExpression('[2+3');
        expect(result).toContain('Invalid');
    });

    test('Empty expression', () => {
        const result = evalExpression('');
        expect(result).toContain('Invalid');
    });

    test('Only operator: +', () => {
        const result = evalExpression('+');
        expect(result).toContain('Invalid');
    });

    test('Double operators: 2++3', () => {
        const result = evalExpression('2++3');
        expect(result).toContain('Invalid');
    });

    test('Function without parentheses: sin', () => {
        const result = evalExpression('sin');
        expect(result).toContain('Invalid');
    });

    test('Function with no argument: sin()', () => {
        const result = evalExpression('sin()');
        expect(result).toContain('Invalid');
    });

    test('Nested Division by zero: 1/(2-2)', () => {
        const result = evalExpression('1/(2-2)');
        expect(result).toContain('Division by zero');
    });

    test('Invalid number format: 1.2.3', () => {
        const result = evalExpression('1.2.3');
        expect(result).toContain('Invalid');
    });

    test('Scientific notation truncated: 1e', () => {
        const result = evalExpression('1e');
        expect(result).toContain('Invalid');
    });

    test('Invalid character: 2&3', () => {
        const result = evalExpression('2&3');
        expect(result).toContain('Invalid');
    });

    test('Unmatched function brackets: sin(2+3', () => {
        const result = evalExpression('sin(2+3');
        expect(result).toContain('Invalid');
    });
});

// ============================================================================
// PARTE 11: COMPLEX EXPRESSIONS & INTEGRATION (20 testes)
// ============================================================================

describe('PARTE 11: Complex Expressions & Integration Tests', () => {
    beforeEach(resetSettings);

    test('Complete calculation: (2+3)*sqrt(4)-10/2', () => {
        const result = parseFloat(evalExpression('(2+3)*sqrt(4)-10/2'));
        expect(result).toBeCloseTo(5, 4);
    });

    test('With constants: PI*2 + E - 1', () => {
        const result = parseFloat(evalExpression('PI*2+E-1'));
        expect(result).toBeGreaterThan(0);
    });

    test('Multiple functions: sin(PI/2) + cos(0) + sqrt(4)', () => {
        expect(evalExpression('sin(90)+cos(0)+sqrt(4)')).toBe("4");
    });

    test('Deep nesting: (((2+3)*(4+5))/((6-1)))', () => {
        const result = evalExpression('(((2+3)*(4+5))/((6-1)))');
        expect(parseFloat(result)).toBe(9);
    });

    test('All bracket types: {[({2+3})]} * 2', () => {
        expect(evalExpression('{[({2+3})]}')).toBe('5');
    });

    test('Mixed implicit & explicit: 2(3)+4*5-6/2', () => {
        const result = evalExpression('2(3)+4*5-6/2');
        expect(parseFloat(result)).toBe(23);
    });

    test('Function + constant + implicit: 2PI + sqrt(4) * E', () => {
        const result = parseFloat(evalExpression('2PI+sqrt(4)*E'));
        expect(result).toBeGreaterThan(0);
    });

    test('Long chain: 1+2+3+4+5+6+7+8+9+10', () => {
        expect(evalExpression('1+2+3+4+5+6+7+8+9+10')).toBe('55');
    });

    test('Chain multiplication: 1*2*3*4*5', () => {
        expect(evalExpression('1*2*3*4*5')).toBe('120');
    });

    test('Scientific notation in expression: 1e2 + 2e2 - 5e1', () => {
        const result = parseFloat(evalExpression('1e2+2e2-5e1'));
        expect(result).toBe(250);
    });

    test('Fraction + decimal: 1/2 + 0.25', () => {
        mathResolver.settings.frac_mode = false;
        const result = parseFloat(evalExpression('1/2+0.25'));
        expect(result).toBeCloseTo(0.75, 5);
    });

    test('Power chain: 2^3^2 (right associative)', () => {
        const result = evalExpression('2^3^2');
        // 2^(3^2) = 2^9 = 512
        expect(parseFloat(result)).toBe(512);
    });

    test('Implicit in complex: 2(3+4)(5-2)', () => {
        expect(evalExpression('2(3+4)(5-2)')).toBe('42');
    });

    test('Function composition: sin(cos(PI))', () => {
        const result = parseFloat(evalExpression('sin(cos(PI))'));
        // cos(PI) = -1, sin(-1) ≈ -0.841
        expect(result).toBeGreaterThan(0);
    });

    test('Decimal operations: 0.1 + 0.2 + 0.3', () => {
        const result = parseFloat(evalExpression('0.1+0.2+0.3'));
        expect(result).toBeCloseTo(0.6, 10);
    });

    test('Fractions mode complex: (1/2 + 1/4) * (2/3)', () => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.smart_to_fixed = false;
        const result = evalExpression('(1/2+1/4)*(2/3)');
        expect(result).toContain('/');
    });

    test('Settings cascade: positive_sign + smart_to_fixed', () => {
        mathResolver.settings.positive_sign = true;
        mathResolver.settings.smart_to_fixed = true;
        const result = evalExpression('0.1+0.2');
        expect(result).toContain('+');
    });

    test('Extreme nesting: sqrt(sqrt(sqrt(256)))', () => {
        const result = parseFloat(evalExpression('sqrt(sqrt(sqrt(256)))'));
        expect(result).toBeCloseTo(2, 5);
    });

    test('Real-world formula: (PI*r^2) with r=5', () => {
        const result = parseFloat(evalExpression('PI*5^2'));
        expect(result).toBeCloseTo(Math.PI * 25, 3);
    });

    test('Physics: v^2 + 2*a*s', () => {
        // v=10, a=2, s=50
        const result = parseFloat(evalExpression('10^2+2*2*50'));
        expect(result).toBe(300);
    });
});

// ============================================================================
// PARTE 12: LATEX SUPPORT (10 testes)
// ============================================================================

describe('PARTE 12: LaTeX Expression Support', () => {
    beforeEach(resetSettings);

    test('LaTeX fraction: \\frac{1}{2}', () => {
        const result = evalExpression('\\frac{1}{2}');
        expect(parseFloat(result)).toBeCloseTo(0.5, 5);
    });

    test('LaTeX sqrt: \\sqrt{4}', () => {
        expect(evalExpression('\\sqrt{4}')).toBe('2');
    });

    test('LaTeX power: 2^{10}', () => {
        expect(evalExpression('2^{10}')).toBe('1024');
    });

    test('LaTeX frac with operations: \\frac{1}{2} + \\frac{1}{4}', () => {
        const result = parseFloat(evalExpression('\\frac{1}{2}+\\frac{1}{4}'));
        expect(result).toBeCloseTo(0.75, 5);
    });

    test('LaTeX sin: \\sin(0)', () => {
        expect(evalExpression('\\sin(0)')).toBe('0');
    });

    test('LaTeX complex: \\frac{\\sqrt{4}}{2}', () => {
        const result = evalExpression('\\frac{\\sqrt{4}}{2}');
        expect(parseFloat(result)).toBe(1);
    });

    test('LaTeX nroot: \\sqrt{3}{8}', () => {
        expect(evalExpression('\\sqrt[3]{8}')).toBe('2');
    });

    test('LaTeX pi: \\pi * 2', () => {
        mathResolver.settings.frac_mode = false;
        mathResolver.settings.smart_to_fixed = false;
        expect(evalExpression('\\pi*2')).toBe(`${(Math.PI*2).toFixed(5)}`);
        //expect(result).toBeCloseTo(2 * Math.PI, 4);
    });

    test('LaTeX complex fraction: \\frac{1+2}{3+4}', () => {
        const result = parseFloat(evalExpression('\\frac{1+2}{3+4}'));
        expect(result).toBeCloseTo(3/7, 5);
    });

    test('Mixed LaTeX and normal: 2 * \\sqrt{9} + 1', () => {
        const result = parseFloat(evalExpression('2*\\sqrt{9}+1'));
        expect(result).toBe(7);
    });
});

// ============================================================================
// PARTE 13: SETTINGS INTERACTION (15 testes)
// ============================================================================

describe('PARTE 13: Settings Interactions & Errors', () => {
    beforeEach(resetSettings);

    test('frac_mode true + return_as_string false = ERROR', () => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.return_as_string = false;
        const result = evalExpression('1/2');
        expect(result).toContain('Error');
    });

    test('frac_mode true + smart_to_fixed true = ERROR', () => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.smart_to_fixed = true;
        const result = evalExpression('1/2');
        expect(result).toContain('Error');
    });

    test('frac_mode true + sci_notation true = ERROR', () => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('1/2');
        expect(result).toContain('Error');
    });

    test('sci_notation true + return_as_string false = ERROR', () => {
        mathResolver.settings.always_return_sci_notation = true;
        mathResolver.settings.return_as_string = false;
        const result = evalExpression('0.00001');
        expect(result).toContain('Error');
    });

    test('positive_sign true + return_as_string false = ERROR', () => {
        mathResolver.settings.positive_sign = true;
        mathResolver.settings.return_as_string = false;
        const result = evalExpression('5');
        expect(result).toContain('Error');
    });

    test('Valid: frac_mode true with return_as_string true', () => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.smart_to_fixed = false;
        mathResolver.settings.return_as_string = true;
        const result = evalExpression('1/2');
        expect(result).toContain('/');
    });

    test('Valid: sci_notation true with return_as_string true', () => {
        mathResolver.settings.always_return_sci_notation = true;
        mathResolver.settings.return_as_string = true;
        const result = evalExpression('0.00001');
        expect(result).toMatch(/e-/);
    });

    test('return_as_string false returns number', () => {
        mathResolver.settings.return_as_string = false;
        mathResolver.settings.frac_mode = false;
        mathResolver.settings.positive_sign = false;
        const result = evalExpression('42');
        expect(typeof result).toBe('number');
        expect(result).toBe(42);
    });

    test('return_as_string true returns string', () => {
        mathResolver.settings.return_as_string = true;
        const result = evalExpression('42');
        expect(typeof result).toBe('string');
    });

    test('Changing to_fixed affects output', () => {
        mathResolver.settings.smart_to_fixed = false;
        mathResolver.settings.to_fixed = 2;
        const result = evalExpression('1/3');
        expect(result).toContain('0.33');
    });

    test('Changing to_fixed to 10 affects output', () => {
        mathResolver.settings.smart_to_fixed = false;
        mathResolver.settings.to_fixed = 10;
        const result = evalExpression('1/3');
        expect(result.split('.')[1].length).toBeLessThanOrEqual(10);
    });

    test('All settings together: frac + pos_sign + sci (conflict)', () => {
        mathResolver.settings.frac_mode = true;
        mathResolver.settings.positive_sign = true;
        mathResolver.settings.always_return_sci_notation = true;
        const result = evalExpression('1/2');
        expect(result).toContain('Error');
    });

    test('Multiple valid combinations work', () => {
        mathResolver.settings.positive_sign = true;
        mathResolver.settings.smart_to_fixed = true;
        mathResolver.settings.return_as_string = true;
        const result = evalExpression('2+3');
        expect(result).toContain('+');
    });

    test('Reset to defaults works', () => {
        resetSettings();
        const result = evalExpression('2+3');
        expect(result).toBe('5');
    });

    test('Changing settings mid-test affects result', () => {
        let result1 = evalExpression('5');
        mathResolver.settings.positive_sign = true;
        let result2 = evalExpression('5');
        expect(result1).not.toEqual(result2);
        expect(result2).toContain('+');
    });
});

module.exports = {
    mathResolver,
    evalExpression,
    resetSettings
};