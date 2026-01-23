const resolveFunctions = require("../../../../src/eval-expression/utilities/resolve-functions/resolve-functions");

// Helper para comparar números com tolerância
function expectClose(actual, expected, tolerance = 1e-10) {
    const actualNum = parseFloat(actual);
    const expectedNum = parseFloat(expected);
    expect(Math.abs(actualNum - expectedNum)).toBeLessThan(tolerance);
}

// ======================================================================
// FUNÇÕES TRIGONOMÉTRICAS
// ======================================================================

test("resolveFunctions test 1: sin(0)", () => {
    expect(resolveFunctions("sin(0)")).toBe("0");
});

test("resolveFunctions test 2: sin(30)", () => {
    const result = resolveFunctions("sin(30)");
    expectClose(result, 0.49999999999999994);
});

test("resolveFunctions test 3: sin(90)", () => {
    expect(resolveFunctions("sin(90)")).toBe("1");
});

test("resolveFunctions test 4: cos(0)", () => {
    expect(resolveFunctions("cos(0)")).toBe("1");
});

test("resolveFunctions test 5: cos(60)", () => {
    const result = resolveFunctions("cos(60)");
    expectClose(result, 0.5000000000000001);
});

test("resolveFunctions test 6: cos(90)", () => {
    const result = resolveFunctions("cos(90)");
    expectClose(result, 6.123233995736766e-17);
});

test("resolveFunctions test 7: tan(0)", () => {
    expect(resolveFunctions("tan(0)")).toBe("0");
});

test("resolveFunctions test 8: tan(45)", () => {
    const result = resolveFunctions("tan(45)");
    expectClose(result, 0.9999999999999999);
});

test("resolveFunctions test 9: sen(30)", () => {
    const result = resolveFunctions("sen(30)");
    expectClose(result, 0.49999999999999994);
});

test("resolveFunctions test 10: tg(45)", () => {
    const result = resolveFunctions("tg(45)");
    expectClose(result, 0.9999999999999999);
});

test("resolveFunctions test 11: sin(180)", () => {
    const result = resolveFunctions("sin(180)");
    expectClose(result, 1.2246467991473532e-16);
});

test("resolveFunctions test 12: cos(180)", () => {
    expect(resolveFunctions("cos(180)")).toBe("-1");
});

test("resolveFunctions test 13: sin(270)", () => {
    expect(resolveFunctions("sin(270)")).toBe("-1");
});

test("resolveFunctions test 14: cos(270)", () => {
    const result = resolveFunctions("cos(270)");
    expectClose(result, -1.8369701987210297e-16);
});

test("resolveFunctions test 15: tan(30)", () => {
    const result = resolveFunctions("tan(30)");
    expectClose(result, 0.5773502691896257);
});

// ======================================================================
// RAÍZES
// ======================================================================

test("resolveFunctions test 16: sqrt(0)", () => {
    expect(resolveFunctions("sqrt(0)")).toBe("0");
});

test("resolveFunctions test 17: sqrt(1)", () => {
    expect(resolveFunctions("sqrt(1)")).toBe("1");
});

test("resolveFunctions test 18: sqrt(4)", () => {
    expect(resolveFunctions("sqrt(4)")).toBe("2");
});

test("resolveFunctions test 19: sqrt(16)", () => {
    expect(resolveFunctions("sqrt(16)")).toBe("4");
});

test("resolveFunctions test 20: sqrt(2)", () => {
    const result = resolveFunctions("sqrt(2)");
    expectClose(result, 1.4142135623730951);
});

test("resolveFunctions test 21: cbrt(0)", () => {
    expect(resolveFunctions("cbrt(0)")).toBe("0");
});

test("resolveFunctions test 22: cbrt(1)", () => {
    expect(resolveFunctions("cbrt(1)")).toBe("1");
});

test("resolveFunctions test 23: cbrt(8)", () => {
    expect(resolveFunctions("cbrt(8)")).toBe("2");
});

test("resolveFunctions test 24: cbrt(27)", () => {
    expect(resolveFunctions("cbrt(27)")).toBe("3");
});

test("resolveFunctions test 25: cbrt(-8)", () => {
    expect(resolveFunctions("cbrt(-8)")).toBe("-2");
});

// ======================================================================
// LOGARITMOS E EXPONENCIAIS
// ======================================================================

test("resolveFunctions test 26: ln(1)", () => {
    expect(resolveFunctions("ln(1)")).toBe("0");
});

test("resolveFunctions test 27: ln(2.718281828459045)", () => {
    expect(resolveFunctions("ln(2.718281828459045)")).toBe("1");
});

test("resolveFunctions test 28: exp(0)", () => {
    expect(resolveFunctions("exp(0)")).toBe("1");
});

test("resolveFunctions test 29: exp(1)", () => {
    const result = resolveFunctions("exp(1)");
    expectClose(result, 2.718281828459045);
});

test("resolveFunctions test 30: exp(2)", () => {
    const result = resolveFunctions("exp(2)");
    expectClose(result, 7.38905609893065);
});

test("resolveFunctions test 31: log(10)", () => {
    expect(resolveFunctions("log(10)")).toBe("1");
});

test("resolveFunctions test 32: log(100)", () => {
    expect(resolveFunctions("log(100)")).toBe("2");
});

test("resolveFunctions test 33: log(1000)", () => {
    expect(resolveFunctions("log(1000)")).toBe("3");
});

test("resolveFunctions test 34: log(8,2)", () => {
    expect(resolveFunctions("log(8,2)")).toBe("3");
});

test("resolveFunctions test 35: log(64,2)", () => {
    expect(resolveFunctions("log(64,2)")).toBe("6");
});

test("resolveFunctions test 36: log(100,10)", () => {
    expect(resolveFunctions("log(100,10)")).toBe("2");
});

test("resolveFunctions test 37: log(1,10)", () => {
    expect(resolveFunctions("log(1,10)")).toBe("0");
});

// ======================================================================
// FUNÇÕES DE 2 PARÂMETROS
// ======================================================================

test("resolveFunctions test 38: pow(2,3)", () => {
    expect(resolveFunctions("pow(2,3)")).toBe("8");
});

test("resolveFunctions test 39: pow(3,2)", () => {
    expect(resolveFunctions("pow(3,2)")).toBe("9");
});

test("resolveFunctions test 40: pow(10,2)", () => {
    expect(resolveFunctions("pow(10,2)")).toBe("100");
});

test("resolveFunctions test 41: pow(2,0)", () => {
    expect(resolveFunctions("pow(2,0)")).toBe("1");
});

test("resolveFunctions test 42: pow(5,3)", () => {
    expect(resolveFunctions("pow(5,3)")).toBe("125");
});

test("resolveFunctions test 43: nroot(8,3)", () => {
    expect(resolveFunctions("nroot(8,3)")).toBe("2");
});

test("resolveFunctions test 44: nroot(16,4)", () => {
    expect(resolveFunctions("nroot(16,4)")).toBe("2");
});

test("resolveFunctions test 45: nroot(27,3)", () => {
    expect(resolveFunctions("nroot(27,3)")).toBe("3");
});

test("resolveFunctions test 46: max(3,7)", () => {
    expect(resolveFunctions("max(3,7)")).toBe("7");
});

test("resolveFunctions test 47: max(10,5)", () => {
    expect(resolveFunctions("max(10,5)")).toBe("10");
});

test("resolveFunctions test 48: max(-3,2)", () => {
    expect(resolveFunctions("max(-3,2)")).toBe("2");
});

test("resolveFunctions test 49: min(3,7)", () => {
    expect(resolveFunctions("min(3,7)")).toBe("3");
});

test("resolveFunctions test 50: min(10,5)", () => {
    expect(resolveFunctions("min(10,5)")).toBe("5");
});

test("resolveFunctions test 51: min(-3,2)", () => {
    expect(resolveFunctions("min(-3,2)")).toBe("-3");
});

test("resolveFunctions test 52: pow(2,10)", () => {
    expect(resolveFunctions("pow(2,10)")).toBe("1024");
});

// ======================================================================
// VALOR ABSOLUTO E FATORIAL
// ======================================================================

test("resolveFunctions test 53: abs(0)", () => {
    expect(resolveFunctions("abs(0)")).toBe("0");
});

test("resolveFunctions test 54: abs(5)", () => {
    expect(resolveFunctions("abs(5)")).toBe("5");
});

test("resolveFunctions test 55: abs(-5)", () => {
    expect(resolveFunctions("abs(-5)")).toBe("5");
});

test("resolveFunctions test 56: abs(-10.5)", () => {
    const result = resolveFunctions("abs(-10.5)");
    expectClose(result, 10.5);
});

test("resolveFunctions test 57: factorial(0)", () => {
    expect(resolveFunctions("factorial(0)")).toBe("1");
});

test("resolveFunctions test 58: factorial(1)", () => {
    expect(resolveFunctions("factorial(1)")).toBe("1");
});

test("resolveFunctions test 59: factorial(5)", () => {
    expect(resolveFunctions("factorial(5)")).toBe("120");
});

test("resolveFunctions test 60: fact(4)", () => {
    expect(resolveFunctions("fact(4)")).toBe("24");
});

test("resolveFunctions test 61: factorial(10)", () => {
    expect(resolveFunctions("factorial(10)")).toBe("3628800");
});

test("resolveFunctions test 62: abs(-100)", () => {
    expect(resolveFunctions("abs(-100)")).toBe("100");
});

// ======================================================================
// FUNÇÕES ANINHADAS
// ======================================================================

test("resolveFunctions test 63: sin(cos(0))", () => {
    const result = resolveFunctions("sin(cos(0))");
    expectClose(result, 0.01745240643728351);
});

test("resolveFunctions test 64: sqrt(sqrt(16))", () => {
    expect(resolveFunctions("sqrt(sqrt(16))")).toBe("2");
});

test("resolveFunctions test 65: ln(exp(2))", () => {
    expect(resolveFunctions("ln(exp(2))")).toBe("2");
});

test("resolveFunctions test 66: exp(ln(10))", () => {
    expect(resolveFunctions("exp(ln(10))")).toBe("10");
});

test("resolveFunctions test 67: pow(sqrt(16),2)", () => {
    expect(resolveFunctions("pow(sqrt(16),2)")).toBe("16");
});

test("resolveFunctions test 68: sqrt(pow(3,2))", () => {
    expect(resolveFunctions("sqrt(pow(3,2))")).toBe("3");
});

test("resolveFunctions test 69: abs(sin(270))", () => {
    expect(resolveFunctions("abs(sin(270))")).toBe("1");
});

test("resolveFunctions test 70: max(abs(-5),abs(-3))", () => {
    expect(resolveFunctions("max(abs(-5),abs(-3))")).toBe("5");
});

test("resolveFunctions test 71: min(sqrt(16),cbrt(27))", () => {
    expect(resolveFunctions("min(sqrt(16),cbrt(27))")).toBe("3");
});

test("resolveFunctions test 72: log(pow(10,3),10)", () => {
    expect(resolveFunctions("log(pow(10,3),10)")).toBe("3");
});

test("resolveFunctions test 73: pow(2,log(8,2))", () => {
    expect(resolveFunctions("pow(2,log(8,2))")).toBe("8");
});

test("resolveFunctions test 74: sqrt(abs(-16))", () => {
    expect(resolveFunctions("sqrt(abs(-16))")).toBe("4");
});

test("resolveFunctions test 75: factorial(abs(-5))", () => {
    expect(resolveFunctions("factorial(abs(-5))")).toBe("120");
});

test("resolveFunctions test 76: cbrt(pow(2,6))", () => {
    expect(resolveFunctions("cbrt(pow(2,6))")).toBe("4");
});

test("resolveFunctions test 77: sin(abs(-30))", () => {
    const result = resolveFunctions("sin(abs(-30))");
    expectClose(result, 0.49999999999999994);
});

// ======================================================================
// EXPRESSÕES COMPLEXAS
// ======================================================================

test("resolveFunctions test 78: sin(30)+cos(60)", () => {
    expect(resolveFunctions("sin(30)+cos(60)")).toBe("1");
});

test("resolveFunctions test 79: sqrt(16)+cbrt(8)", () => {
    expect(resolveFunctions("sqrt(16)+cbrt(8)")).toBe("6");
});

test("resolveFunctions test 80: pow(2,3)*pow(3,2)", () => {
    expect(resolveFunctions("pow(2,3)*pow(3,2)")).toBe("72");
});

test("resolveFunctions test 81: max(5,10)+min(3,7)", () => {
    expect(resolveFunctions("max(5,10)+min(3,7)")).toBe("13");
});

test("resolveFunctions test 82: abs(-5)+abs(-3)", () => {
    expect(resolveFunctions("abs(-5)+abs(-3)")).toBe("8");
});

test("resolveFunctions test 83: ln(10)+exp(0)", () => {
    const result = resolveFunctions("ln(10)+exp(0)");
    expectClose(result, 3.302585092994046);
});

test("resolveFunctions test 84: sqrt(9)*cbrt(27)", () => {
    expect(resolveFunctions("sqrt(9)*cbrt(27)")).toBe("3*3");
});

test("resolveFunctions test 85: pow(2,4)/sqrt(16)", () => {
    expect(resolveFunctions("pow(2,4)/sqrt(16)")).toBe("16/4");
});

test("resolveFunctions test 86: factorial(3)+factorial(4)", () => {
    expect(resolveFunctions("factorial(3)+factorial(4)")).toBe("36+24");
});

test("resolveFunctions test 87: max(sqrt(16),cbrt(27))", () => {
    expect(resolveFunctions("max(sqrt(16),cbrt(27))")).toBe("4");
});

// ======================================================================
// TRIGONOMÉTRICAS INVERSAS
// ======================================================================

test("resolveFunctions test 88: asin(0)", () => {
    expect(resolveFunctions("asin(0)")).toBe("0");
});

test("resolveFunctions test 89: asin(1)", () => {
    expect(resolveFunctions("asin(1)")).toBe("90");
});

test("resolveFunctions test 90: acos(1)", () => {
    expect(resolveFunctions("acos(1)")).toBe("0");
});

test("resolveFunctions test 91: acos(0)", () => {
    expect(resolveFunctions("acos(0)")).toBe("90");
});

test("resolveFunctions test 92: atan(1)", () => {
    expect(resolveFunctions("atan(1)")).toBe("45");
});

// ======================================================================
// FUNÇÕES HIPERBÓLICAS
// ======================================================================

test("resolveFunctions test 93: sinh(0)", () => {
    expect(resolveFunctions("sinh(0)")).toBe("0");
});

test("resolveFunctions test 94: cosh(0)", () => {
    expect(resolveFunctions("cosh(0)")).toBe("1");
});

test("resolveFunctions test 95: tanh(0)", () => {
    expect(resolveFunctions("tanh(0)")).toBe("0");
});

test("resolveFunctions test 96: sinh(1)", () => {
    const result = resolveFunctions("sinh(1)");
    expectClose(result, 1.1752011936438014);
});

test("resolveFunctions test 97: cosh(1)", () => {
    const result = resolveFunctions("cosh(1)");
    expectClose(result, 1.5430806348152437);
});

test("resolveFunctions test 98: asinh(0)", () => {
    expect(resolveFunctions("asinh(0)")).toBe("0");
});

test("resolveFunctions test 99: acosh(1)", () => {
    expect(resolveFunctions("acosh(1)")).toBe("0");
});

test("resolveFunctions test 100: atanh(0)", () => {
    expect(resolveFunctions("atanh(0)")).toBe("0");
});
