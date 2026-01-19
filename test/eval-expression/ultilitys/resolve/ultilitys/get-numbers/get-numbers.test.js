const getNumbers = require('../../../../../../src/eval-expression/utilities/resolve/utilities/get-numbers/get-numbers');

// ===== TESTES EXISTENTES (MANTIDOS) =====

let numbers = [+6, +3];
let numbers2 = [+11.7, +1];
let numbers3 = [+556, +728];
let numbers4 = [4, 5];
let numbers5 = [-2, 8];

test(`getNumbers +6*3 must return ${numbers}`, () => {
    expect(getNumbers('+6*3', 2)).toStrictEqual(numbers);
});

test(`getNumbers 11.7/1 must return ${numbers2}`, () => {
    expect(getNumbers('11.7/1', 4)).toStrictEqual(numbers2);
});

test(`getNumbers 556+728 must return ${numbers3}`, () => {
    expect(getNumbers('556++728', 3)).toStrictEqual(numbers3);
});

test(`getNumbers('4^5+3-2) must return ${numbers4}`, () => {
    expect(getNumbers('4^5+3-2', 1)).toStrictEqual(numbers4);
});

test(`getNumbers('2*3-4*@NEG2^+8', 11) must return ${numbers5}`, () => {
    expect(getNumbers('2*3-4*@NEG2^+8', 11)).toStrictEqual(numbers5);
});

// ===== ADIÇÃO - AMBOS POSITIVOS =====

test(`getNumbers('2+3', 1) must return [2, 3]`, () => {
    // '2+3' → índice 1 é '+'
    expect(getNumbers('2+3', 1)).toStrictEqual([2, 3]);
});

test(`getNumbers('10+20', 2) must return [10, 20]`, () => {
    // '10+20' → índice 2 é '+'
    expect(getNumbers('10+20', 2)).toStrictEqual([10, 20]);
});

test(`getNumbers('100+500', 3) must return [100, 500]`, () => {
    // '100+500' → índice 3 é '+'
    expect(getNumbers('100+500', 3)).toStrictEqual([100, 500]);
});

test(`getNumbers('5.5+10.2', 3) must return [5.5, 10.2]`, () => {
    // '5.5+10.2' → índice 3 é '+'
    expect(getNumbers('5.5+10.2', 3)).toStrictEqual([5.5, 10.2]);
});

// ===== ADIÇÃO - PRIMEIRO NEGATIVO =====

test(`getNumbers('-5+10', 2) must return [-5, 10]`, () => {
    // '-5+10' → índice 2 é '+'
    expect(getNumbers('-5+10', 2)).toStrictEqual([-5, 10]);
});

test(`getNumbers('-10+20', 3) must return [-10, 20]`, () => {
    // '-10+20' → índice 3 é '+'
    expect(getNumbers('-10+20', 3)).toStrictEqual([-10, 20]);
});

test(`getNumbers('-5.5+10.2', 4) must return [-5.5, 10.2]`, () => {
    // '-5.5+10.2' → índice 4 é '+'
    expect(getNumbers('-5.5+10.2', 4)).toStrictEqual([-5.5, 10.2]);
});

// ===== ADIÇÃO - SEGUNDO NEGATIVO =====

test(`getNumbers('5+-10', 1) must return [5, -10]`, () => {
    // '5+-10' → índice 1 é '+'
    expect(getNumbers('5+-10', 1)).toStrictEqual([5, -10]);
});

test(`getNumbers('10+-20', 2) must return [10, -20]`, () => {
    // '10+-20' → índice 2 é '+'
    expect(getNumbers('10+-20', 2)).toStrictEqual([10, -20]);
});

test(`getNumbers('5.5+-10.2', 3) must return [5.5, -10.2]`, () => {
    // '5.5+-10.2' → índice 3 é '+'
    expect(getNumbers('5.5+-10.2', 3)).toStrictEqual([5.5, -10.2]);
});

// ===== ADIÇÃO - AMBOS NEGATIVOS =====

test(`getNumbers('-5+-10', 2) must return [-5, -10]`, () => {
    // '-5+-10' → índice 2 é '+'
    expect(getNumbers('-5+-10', 2)).toStrictEqual([-5, -10]);
});

test(`getNumbers('-10+-20', 3) must return [-10, -20]`, () => {
    // '-10+-20' → índice 3 é '+'
    expect(getNumbers('-10+-20', 3)).toStrictEqual([-10, -20]);
});

test(`getNumbers('-7.5+-2.5', 4) must return [-7.5, -2.5]`, () => {
    // '-7.5+-2.5' → índice 4 é '+'
    expect(getNumbers('-7.5+-2.5', 4)).toStrictEqual([-7.5, -2.5]);
});

// ===== SUBTRAÇÃO - AMBOS POSITIVOS =====

test(`getNumbers('10-5', 2) must return [10, 5]`, () => {
    // '10-5' → índice 2 é '-'
    expect(getNumbers('10-5', 2)).toStrictEqual([10, 5]);
});

test(`getNumbers('100-50', 3) must return [100, 50]`, () => {
    // '100-50' → índice 3 é '-'
    expect(getNumbers('100-50', 3)).toStrictEqual([100, 50]);
});

test(`getNumbers('10.5-5.2', 4) must return [10.5, 5.2]`, () => {
    // '10.5-5.2' → índice 4 é '-'
    expect(getNumbers('10.5-5.2', 4)).toStrictEqual([10.5, 5.2]);
});

// ===== SUBTRAÇÃO - PRIMEIRO NEGATIVO =====

test(`getNumbers('-10-5', 3) must return [-10, 5]`, () => {
    // '-10-5' → índice 3 é '-'
    expect(getNumbers('-10-5', 3)).toStrictEqual([-10, 5]);
});

test(`getNumbers('-20-10', 3) must return [-20, 10]`, () => {
    // '-20-10' → índice 3 é '-'
    expect(getNumbers('-20-10', 3)).toStrictEqual([-20, 10]);
});

test(`getNumbers('-10.5-5.2', 5) must return [-10.5, 5.2]`, () => {
    // '-10.5-5.2' → índice 5 é '-'
    expect(getNumbers('-10.5-5.2', 5)).toStrictEqual([-10.5, 5.2]);
});

// ===== SUBTRAÇÃO - DUPLO MENOS (SEGUNDO NEGATIVO) =====

test(`getNumbers('10--5', 2) must return [10, -5]`, () => {
    // '10--5' → índice 2 é '-'
    expect(getNumbers('10--5', 2)).toStrictEqual([10, -5]);
});

test(`getNumbers('100--50', 3) must return [100, -50]`, () => {
    // '100--50' → índice 3 é '-'
    expect(getNumbers('100--50', 3)).toStrictEqual([100, -50]);
});

test(`getNumbers('10.5--5.2', 4) must return [10.5, -5.2]`, () => {
    // '10.5--5.2' → índice 4 é '-'
    expect(getNumbers('10.5--5.2', 4)).toStrictEqual([10.5, -5.2]);
});

// ===== SUBTRAÇÃO - AMBOS NEGATIVOS =====

test(`getNumbers('-10--5', 3) must return [-10, -5]`, () => {
    // '-10--5' → índice 3 é '-'
    expect(getNumbers('-10--5', 3)).toStrictEqual([-10, -5]);
});

test(`getNumbers('-100--50', 4) must return [-100, -50]`, () => {
    // '-100--50' → índice 4 é '-'
    expect(getNumbers('-100--50', 4)).toStrictEqual([-100, -50]);
});

test(`getNumbers('-10.5--5.2', 5) must return [-10.5, -5.2]`, () => {
    // '-10.5--5.2' → índice 5 é '-'
    expect(getNumbers('-10.5--5.2', 5)).toStrictEqual([-10.5, -5.2]);
});

// ===== MULTIPLICAÇÃO - AMBOS POSITIVOS =====

test(`getNumbers('5*3', 1) must return [5, 3]`, () => {
    // '5*3' → índice 1 é '*'
    expect(getNumbers('5*3', 1)).toStrictEqual([5, 3]);
});

test(`getNumbers('10*20', 2) must return [10, 20]`, () => {
    // '10*20' → índice 2 é '*'
    expect(getNumbers('10*20', 2)).toStrictEqual([10, 20]);
});

test(`getNumbers('3.14*2.71', 4) must return [3.14, 2.71]`, () => {
    // '3.14*2.71' → índice 4 é '*'
    expect(getNumbers('3.14*2.71', 4)).toStrictEqual([3.14, 2.71]);
});

// ===== MULTIPLICAÇÃO - PRIMEIRO NEGATIVO =====

test(`getNumbers('-5*3', 2) must return [-5, 3]`, () => {
    // '-5*3' → índice 2 é '*'
    expect(getNumbers('-5*3', 2)).toStrictEqual([-5, 3]);
});

test(`getNumbers('-10*20', 3) must return [-10, 20]`, () => {
    // '-10*20' → índice 3 é '*'
    expect(getNumbers('-10*20', 3)).toStrictEqual([-10, 20]);
});

test(`getNumbers('-5.5*3.2', 4) must return [-5.5, 3.2]`, () => {
    // '-5.5*3.2' → índice 4 é '*'
    expect(getNumbers('-5.5*3.2', 4)).toStrictEqual([-5.5, 3.2]);
});

// ===== MULTIPLICAÇÃO - SEGUNDO NEGATIVO =====

test(`getNumbers('5*-3', 1) must return [5, -3]`, () => {
    // '5*-3' → índice 1 é '*'
    expect(getNumbers('5*-3', 1)).toStrictEqual([5, -3]);
});

test(`getNumbers('10*-20', 2) must return [10, -20]`, () => {
    // '10*-20' → índice 2 é '*'
    expect(getNumbers('10*-20', 2)).toStrictEqual([10, -20]);
});

test(`getNumbers('5.5*-3.2', 3) must return [5.5, -3.2]`, () => {
    // '5.5*-3.2' → índice 3 é '*'
    expect(getNumbers('5.5*-3.2', 3)).toStrictEqual([5.5, -3.2]);
});

// ===== MULTIPLICAÇÃO - AMBOS NEGATIVOS =====

test(`getNumbers('-5*-3', 2) must return [-5, -3]`, () => {
    // '-5*-3' → índice 2 é '*'
    expect(getNumbers('-5*-3', 2)).toStrictEqual([-5, -3]);
});

test(`getNumbers('-10*-20', 3) must return [-10, -20]`, () => {
    // '-10*-20' → índice 3 é '*'
    expect(getNumbers('-10*-20', 3)).toStrictEqual([-10, -20]);
});

test(`getNumbers('-7.7*-2.2', 4) must return [-7.7, -2.2]`, () => {
    // '-7.7*-2.2' → índice 4 é '*'
    expect(getNumbers('-7.7*-2.2', 4)).toStrictEqual([-7.7, -2.2]);
});

// ===== DIVISÃO - AMBOS POSITIVOS =====

test(`getNumbers('10/2', 2) must return [10, 2]`, () => {
    // '10/2' → índice 2 é '/'
    expect(getNumbers('10/2', 2)).toStrictEqual([10, 2]);
});

test(`getNumbers('100/25', 3) must return [100, 25]`, () => {
    // '100/25' → índice 3 é '/'
    expect(getNumbers('100/25', 3)).toStrictEqual([100, 25]);
});

test(`getNumbers('9.9/3.3', 3) must return [9.9, 3.3]`, () => {
    // '9.9/3.3' → índice 3 é '/'
    expect(getNumbers('9.9/3.3', 3)).toStrictEqual([9.9, 3.3]);
});

// ===== DIVISÃO - PRIMEIRO NEGATIVO =====

test(`getNumbers('-10/2', 3) must return [-10, 2]`, () => {
    // '-10/2' → índice 3 é '/'
    expect(getNumbers('-10/2', 3)).toStrictEqual([-10, 2]);
});

test(`getNumbers('-100/25', 4) must return [-100, 25]`, () => {
    // '-100/25' → índice 4 é '/'
    expect(getNumbers('-100/25', 4)).toStrictEqual([-100, 25]);
});

test(`getNumbers('-10.5/2.5', 5) must return [-10.5, 2.5]`, () => {
    // '-10.5/2.5' → índice 5 é '/'
    expect(getNumbers('-10.5/2.5', 5)).toStrictEqual([-10.5, 2.5]);
});

// ===== DIVISÃO - SEGUNDO NEGATIVO =====

test(`getNumbers('10/-2', 2) must return [10, -2]`, () => {
    // '10/-2' → índice 2 é '/'
    expect(getNumbers('10/-2', 2)).toStrictEqual([10, -2]);
});

test(`getNumbers('100/-25', 3) must return [100, -25]`, () => {
    // '100/-25' → índice 3 é '/'
    expect(getNumbers('100/-25', 3)).toStrictEqual([100, -25]);
});

test(`getNumbers('10.5/-2.5', 4) must return [10.5, -2.5]`, () => {
    // '10.5/-2.5' → índice 4 é '/'
    expect(getNumbers('10.5/-2.5', 4)).toStrictEqual([10.5, -2.5]);
});

// ===== DIVISÃO - AMBOS NEGATIVOS =====

test(`getNumbers('-10/-2', 3) must return [-10, -2]`, () => {
    // '-10/-2' → índice 3 é '/'
    expect(getNumbers('-10/-2', 3)).toStrictEqual([-10, -2]);
});

test(`getNumbers('-100/-25', 4) must return [-100, -25]`, () => {
    // '-100/-25' → índice 4 é '/'
    expect(getNumbers('-100/-25', 4)).toStrictEqual([-100, -25]);
});

test(`getNumbers('-10.5/-2.5', 5) must return [-10.5, -2.5]`, () => {
    // '-10.5/-2.5' → índice 5 é '/'
    expect(getNumbers('-10.5/-2.5', 5)).toStrictEqual([-10.5, -2.5]);
});

// ===== EXPONENCIAÇÃO - AMBOS POSITIVOS =====

test(`getNumbers('2^3', 1) must return [2, 3]`, () => {
    // '2^3' → índice 1 é '^'
    expect(getNumbers('2^3', 1)).toStrictEqual([2, 3]);
});

test(`getNumbers('10^5', 2) must return [10, 5]`, () => {
    // '10^5' → índice 2 é '^'
    expect(getNumbers('10^5', 2)).toStrictEqual([10, 5]);
});

test(`getNumbers('100^10', 3) must return [100, 10]`, () => {
    // '100^10' → índice 3 é '^'
    expect(getNumbers('100^10', 3)).toStrictEqual([100, 10]);
});

test(`getNumbers('2.5^1.5', 3) must return [2.5, 1.5]`, () => {
    // '2.5^1.5' → índice 3 é '^'
    expect(getNumbers('2.5^1.5', 3)).toStrictEqual([2.5, 1.5]);
});

// ===== EXPONENCIAÇÃO - COM '-' ANTES (NÃO É BASE NEGATIVA) =====

test(`getNumbers('-2^3', 2) must return [2, 3]`, () => {
    // '-2^3' = -(2^3), então base é positiva
    // '-2^3' → índice 2 é '^'
    expect(getNumbers('-2^3', 2)).toStrictEqual([2, 3]);
});

test(`getNumbers('-10^5', 3) must return [10, 5]`, () => {
    // '-10^5' = -(10^5)
    // '-10^5' → índice 3 é '^'
    expect(getNumbers('-10^5', 3)).toStrictEqual([10, 5]);
});

test(`getNumbers('-5.5^2.5', 4) must return [5.5, 2.5]`, () => {
    // '-5.5^2.5' = -(5.5^2.5)
    // '-5.5^2.5' → índice 4 é '^'
    expect(getNumbers('-5.5^2.5', 4)).toStrictEqual([5.5, 2.5]);
});

// ===== EXPONENCIAÇÃO - EXPOENTE NEGATIVO =====

test(`getNumbers('2^-3', 1) must return [2, -3]`, () => {
    // '2^-3' → índice 1 é '^'
    expect(getNumbers('2^-3', 1)).toStrictEqual([2, -3]);
});

test(`getNumbers('10^-2', 2) must return [10, -2]`, () => {
    // '10^-2' → índice 2 é '^'
    expect(getNumbers('10^-2', 2)).toStrictEqual([10, -2]);
});

test(`getNumbers('100^-10', 3) must return [100, -10]`, () => {
    // '100^-10' → índice 3 é '^'
    expect(getNumbers('100^-10', 3)).toStrictEqual([100, -10]);
});

test(`getNumbers('10.5^-2.5', 4) must return [10.5, -2.5]`, () => {
    // '10.5^-2.5' → índice 4 é '^'
    expect(getNumbers('10.5^-2.5', 4)).toStrictEqual([10.5, -2.5]);
});

// ===== EXPONENCIAÇÃO - COM '-' E EXPOENTE NEGATIVO =====

test(`getNumbers('-2^-3', 2) must return [2, -3]`, () => {
    // '-2^-3' = -(2^-3)
    // '-2^-3' → índice 2 é '^'
    expect(getNumbers('-2^-3', 2)).toStrictEqual([2, -3]);
});

test(`getNumbers('-10^-5', 3) must return [10, -5]`, () => {
    // '-10^-5' = -(10^-5)
    // '-10^-5' → índice 3 é '^'
    expect(getNumbers('-10^-5', 3)).toStrictEqual([10, -5]);
});

test(`getNumbers('-10.5^-2.5', 5) must return [10.5, -2.5]`, () => {
    // '-10.5^-2.5' = -(10.5^-2.5)
    // '-10.5^-2.5' → índice 5 é '^'
    expect(getNumbers('-10.5^-2.5', 5)).toStrictEqual([10.5, -2.5]);
});

// ===== EXPONENCIAÇÃO - EXPOENTE POSITIVO EXPLÍCITO =====

test(`getNumbers('2^+3', 1) must return [2, 3]`, () => {
    // '2^+3' → índice 1 é '^'
    expect(getNumbers('2^+3', 1)).toStrictEqual([2, 3]);
});

test(`getNumbers('10^+5', 2) must return [10, 5]`, () => {
    // '10^+5' → índice 2 é '^'
    expect(getNumbers('10^+5', 2)).toStrictEqual([10, 5]);
});

test(`getNumbers('5.5^+2.5', 3) must return [5.5, 2.5]`, () => {
    // '5.5^+2.5' → índice 3 é '^'
    expect(getNumbers('5.5^+2.5', 3)).toStrictEqual([5.5, 2.5]);
});

test(`getNumbers('-5^+2', 2) must return [5, 2]`, () => {
    // '-5^+2' = -(5^+2)
    // '-5^+2' → índice 2 é '^'
    expect(getNumbers('-5^+2', 2)).toStrictEqual([5, 2]);
});

// ===== @NEG COM EXPONENCIAÇÃO - BASE NEGATIVA =====

test(`getNumbers('@NEG2^3', 5) must return [-2, 3]`, () => {
    // '@NEG2^3' = (-2)^3
    // '@NEG2^3' → índice 5 é '^'
    expect(getNumbers('@NEG2^3', 5)).toStrictEqual([-2, 3]);
});

test(`getNumbers('@NEG10^5', 6) must return [-10, 5]`, () => {
    // '@NEG10^5' = (-10)^5
    // '@NEG10^5' → índice 6 é '^'
    expect(getNumbers('@NEG10^5', 6)).toStrictEqual([-10, 5]);
});

test(`getNumbers('@NEG100^10', 7) must return [-100, 10]`, () => {
    // '@NEG100^10' = (-100)^10
    // '@NEG100^10' → índice 7 é '^'
    expect(getNumbers('@NEG100^10', 7)).toStrictEqual([-100, 10]);
});

test(`getNumbers('@NEG2.5^3.5', 7) must return [-2.5, 3.5]`, () => {
    // '@NEG2.5^3.5' = (-2.5)^3.5
    // '@NEG2.5^3.5' → índice 7 é '^'
    expect(getNumbers('@NEG2.5^3.5', 7)).toStrictEqual([-2.5, 3.5]);
});

// ===== @NEG COM EXPONENCIAÇÃO - BASE E EXPOENTE NEGATIVOS =====

test(`getNumbers('@NEG2^-3', 5) must return [-2, -3]`, () => {
    // '@NEG2^-3' = (-2)^-3
    // '@NEG2^-3' → índice 5 é '^'
    expect(getNumbers('@NEG2^-3', 5)).toStrictEqual([-2, -3]);
});

test(`getNumbers('@NEG10^-5', 6) must return [-10, -5]`, () => {
    // '@NEG10^-5' = (-10)^-5
    // '@NEG10^-5' → índice 6 é '^'
    expect(getNumbers('@NEG10^-5', 6)).toStrictEqual([-10, -5]);
});

test(`getNumbers('@NEG10.5^-2.5', 8) must return [-10.5, -2.5]`, () => {
    // '@NEG10.5^-2.5' = (-10.5)^-2.5
    // '@NEG10.5^-2.5' → índice 8 é '^'
    expect(getNumbers('@NEG10.5^-2.5', 8)).toStrictEqual([-10.5, -2.5]);
});

test(`getNumbers('@NEG5^+10', 5) must return [-5, 10]`, () => {
    // '@NEG5^+10' = (-5)^+10
    // '@NEG5^+10' → índice 5 é '^'
    expect(getNumbers('@NEG5^+10', 5)).toStrictEqual([-5, 10]);
});

test(`getNumbers('@NEG3.14^+2.71', 8) must return [-3.14, 2.71]`, () => {
    // '@NEG3.14^+2.71' = (-3.14)^+2.71
    // '@NEG3.14^+2.71' → índice 8 é '^'
    expect(getNumbers('@NEG3.14^+2.71', 8)).toStrictEqual([-3.14, 2.71]);
});

// ===== ZERO =====

test(`getNumbers('0+5', 1) must return [0, 5]`, () => {
    // '0+5' → índice 1 é '+'
    expect(getNumbers('0+5', 1)).toStrictEqual([0, 5]);
});

test(`getNumbers('10-0', 2) must return [10, 0]`, () => {
    // '10-0' → índice 2 é '-'
    expect(getNumbers('10-0', 2)).toStrictEqual([10, 0]);
});

test(`getNumbers('-0+5', 2) must return [0, 5]`, () => {
    // '-0+5' → índice 2 é '+'
    // -0 = 0
    expect(getNumbers('-0+5', 2)).toStrictEqual([-0, 5]);
});

test(`getNumbers('0*-1', 1) must return [0, -1]`, () => {
    // '0*-1' → índice 1 é '*'
    expect(getNumbers('0*-1', 1)).toStrictEqual([0, -1]);
});

test(`getNumbers('0/10', 1) must return [0, 10]`, () => {
    // '0/10' → índice 1 é '/'
    expect(getNumbers('0/10', 1)).toStrictEqual([0, 10]);
});

test(`getNumbers('0^5', 1) must return [0, 5]`, () => {
    // '0^5' → índice 1 é '^'
    expect(getNumbers('0^5', 1)).toStrictEqual([0, 5]);
});

test(`getNumbers('5^0', 1) must return [5, 0]`, () => {
    // '5^0' → índice 1 é '^'
    expect(getNumbers('5^0', 1)).toStrictEqual([5, 0]);
});

test(`getNumbers('0.0+1.0', 3) must return [0, 1]`, () => {
    // '0.0+1.0' → índice 3 é '+'
    expect(getNumbers('0.0+1.0', 3)).toStrictEqual([0, 1]);
});

// ===== NÚMEROS GRANDES =====

test(`getNumbers('1000+2000', 4) must return [1000, 2000]`, () => {
    // '1000+2000' → índice 4 é '+'
    expect(getNumbers('1000+2000', 4)).toStrictEqual([1000, 2000]);
});

test(`getNumbers('9999-8888', 4) must return [9999, 8888]`, () => {
    // '9999-8888' → índice 4 é '-'
    expect(getNumbers('9999-8888', 4)).toStrictEqual([9999, 8888]);
});

test(`getNumbers('-12345*-6789', 6) must return [-12345, -6789]`, () => {
    // '-12345*-6789' → índice 6 é '*'
    expect(getNumbers('-12345*-6789', 6)).toStrictEqual([-12345, -6789]);
});

test(`getNumbers('123456/789', 6) must return [123456, 789]`, () => {
    // '123456/789' → índice 6 é '/'
    expect(getNumbers('123456/789', 6)).toStrictEqual([123456, 789]);
});

test(`getNumbers('999999^10', 6) must return [999999, 10]`, () => {
    // '999999^10' → índice 6 é '^'
    expect(getNumbers('999999^10', 6)).toStrictEqual([999999, 10]);
});

// ===== DECIMAIS LONGOS =====

test(`getNumbers('0.123+0.456', 5) must return [0.123, 0.456]`, () => {
    // '0.123+0.456' → índice 5 é '+'
    expect(getNumbers('0.123+0.456', 5)).toStrictEqual([0.123, 0.456]);
});

test(`getNumbers('3.14159*2.71828', 7) must return [3.14159, 2.71828]`, () => {
    // '3.14159*2.71828' → índice 7 é '*'
    expect(getNumbers('3.14159*2.71828', 7)).toStrictEqual([3.14159, 2.71828]);
});

test(`getNumbers('100.99-50.01', 6) must return [100.99, 50.01]`, () => {
    // '100.99-50.01' → índice 6 é '-'
    expect(getNumbers('100.99-50.01', 6)).toStrictEqual([100.99, 50.01]);
});

test(`getNumbers('0.001^0.999', 5) must return [0.001, 0.999]`, () => {
    // '0.001^0.999' → índice 5 é '^'
    expect(getNumbers('0.001^0.999', 5)).toStrictEqual([0.001, 0.999]);
});
