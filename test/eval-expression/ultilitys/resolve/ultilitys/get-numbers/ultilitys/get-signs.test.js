const getSigns = require('../../../../../../../src/eval-expression/utilities/resolve/utilities/get-numbers/utilities/get-signs');

// ===== VARIÁVEIS DE RESULTADO =====
let test1 = ['+', '-'];
let test2 = ['+', '+'];
let test3 = ['-', '-'];
let test4 = ['-', '+'];

// ===== TESTES EXISTENTES =====
test(`Get signs(+2*-6, 1, 2) must return ${test1}`, () => {
    expect(getSigns('+2*-6', 1, 2)).toStrictEqual(test1);
});

test(`Get signs(5-5+13+2*-6, 8, 9) must return ${test1}`, () => {
    expect(getSigns('+5-5+13+2*-6', 8, 9)).toStrictEqual(test1);
});

test(`Get signs(7-2+6*3, 4, 5) must return ${test2}`, () => {
    expect(getSigns('7-2+6*3', 4, 5)).toStrictEqual(test2);
});

test(`Get signs('7-2+6*-3-55-3', 4, 5) must return ${test1}`, () => {
    expect(getSigns('7-2+6*-3-55-3', 4, 5)).toStrictEqual(test1);
});

test(`Get signs('11.7/1', 0, 4) must return ${test2}`, () => {
    expect(getSigns('11.7/1', 0, 4)).toStrictEqual(test2);
});

test(`GetSigns('2+3^5', 2, 3) must return ${test2}`, () => {
    expect(getSigns('2+3^5', 2, 3)).toStrictEqual(test2);
});

// ===== NOVOS TESTES - CASOS BÁSICOS =====

test(`getSigns('2+3', 0, 1) must return ${test2}`, () => {
    expect(getSigns('2+3', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('2-3', 0, 1) must return ${test2}`, () => {
    expect(getSigns('2-3', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('2*3', 0, 1) must return ${test2}`, () => {
    expect(getSigns('2*3', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('2/3', 0, 1) must return ${test2}`, () => {
    expect(getSigns('2/3', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('2^3', 0, 1) must return ${test2}`, () => {
    expect(getSigns('2^3', 0, 1)).toStrictEqual(test2);
});

// ===== PRIMEIRO NÚMERO NEGATIVO =====

test(`getSigns('-2+3', 1, 2) must return ${test4}`, () => {
    expect(getSigns('-2+3', 1, 2)).toStrictEqual(test4);
});

test(`getSigns('-2-3', 1, 2) must return ${test4}`, () => {
    expect(getSigns('-2-3', 1, 2)).toStrictEqual(test4);
});

test(`getSigns('-2*3', 1, 2) must return ${test4}`, () => {
    expect(getSigns('-2*3', 1, 2)).toStrictEqual(test4);
});

test(`getSigns('-2/3', 1, 2) must return ${test4}`, () => {
    expect(getSigns('-2/3', 1, 2)).toStrictEqual(test4);
});

test(`getSigns('-2^3', 1, 2) must return ${test2}`, () => {
    expect(getSigns('-2^3', 1, 2)).toStrictEqual(test2);
});

// ===== SEGUNDO NÚMERO NEGATIVO =====

test(`getSigns('5+-3', 0, 1) must return ${test1}`, () => {
    expect(getSigns('5+-3', 0, 1)).toStrictEqual(test1);
});

test(`getSigns('5--3', 0, 1) must return ${test1}`, () => {
    expect(getSigns('5--3', 0, 1)).toStrictEqual(test1);
});

test(`getSigns('5*-3', 0, 1) must return ${test1}`, () => {
    expect(getSigns('5*-3', 0, 1)).toStrictEqual(test1);
});

test(`getSigns('5/-3', 0, 1) must return ${test1}`, () => {
    expect(getSigns('5/-3', 0, 1)).toStrictEqual(test1);
});

test(`getSigns('5^-3', 0, 1) must return ${test1}`, () => {
    expect(getSigns('5^-3', 0, 1)).toStrictEqual(test1);
});

// ===== AMBOS NEGATIVOS =====

test(`getSigns('-5+-3', 1, 2) must return ${test3}`, () => {
    expect(getSigns('-5+-3', 1, 2)).toStrictEqual(test3);
});

test(`getSigns('-5--3', 1, 2) must return ${test3}`, () => {
    expect(getSigns('-5--3', 1, 2)).toStrictEqual(test3);
});

test(`getSigns('-5*-3', 1, 2) must return ${test3}`, () => {
    expect(getSigns('-5*-3', 1, 2)).toStrictEqual(test3);
});

test(`getSigns('-5/-3', 1, 2) must return ${test3}`, () => {
    expect(getSigns('-5/-3', 1, 2)).toStrictEqual(test3);
});

test(`getSigns('-5^-3', 1, 2) must return ${test1}`, () => {
    expect(getSigns('-5^-3', 1, 2)).toStrictEqual(test1);
});

// ===== COM @NEG (APENAS EXPONENCIAÇÃO) =====

test(`getSigns('@NEG2^3', 4, 5) must return ${test4}`, () => {
    expect(getSigns('@NEG2^3', 4, 5)).toStrictEqual(test4);
});

test(`getSigns('@NEG32^36', 5, 7) must return ${test4}`, () => {
    expect(getSigns('@NEG32^36', 4, 6)).toStrictEqual(test4);
});

test(`getSigns('@NEG5^-3', 4, 5) must return ${test3}`, () => {
    expect(getSigns('@NEG5^-3', 4, 5)).toStrictEqual(test3);
});

test(`getSigns('@NEG10^+5', 5, 7) must return ${test4}`, () => {
    expect(getSigns('@NEG10^+5', 4, 6)).toStrictEqual(test4);
});

test(`getSigns('@NEG2^-10', 4, 5) must return ${test3}`, () => {
    expect(getSigns('@NEG2^-10', 4, 5)).toStrictEqual(test3);
});

// ===== EXPONENCIAÇÃO COM SINAIS NO EXPOENTE =====

test(`getSigns('2^+3', 0, 1) must return ${test2}`, () => {
    expect(getSigns('2^+3', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('10^-2', 0, 2) must return ${test1}`, () => {
    expect(getSigns('10^-2', 0, 2)).toStrictEqual(test1);
});

test(`getSigns('5^+10', 0, 1) must return ${test2}`, () => {
    expect(getSigns('5^+10', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('100^-3', 0, 3) must return ${test1}`, () => {
    expect(getSigns('100^-3', 0, 3)).toStrictEqual(test1);
});

// ===== DECIMAIS =====

test(`getSigns('2.5+3.7', 0, 3) must return ${test2}`, () => {
    expect(getSigns('2.5+3.7', 0, 3)).toStrictEqual(test2);
});

test(`getSigns('10.25-5.5', 0, 5) must return ${test2}`, () => {
    expect(getSigns('10.25-5.5', 0, 5)).toStrictEqual(test2);
});

test(`getSigns('3.14*2.71', 0, 4) must return ${test2}`, () => {
    expect(getSigns('3.14*2.71', 0, 4)).toStrictEqual(test2);
});

test(`getSigns('9.9/3.3', 0, 3) must return ${test2}`, () => {
    expect(getSigns('9.9/3.3', 0, 3)).toStrictEqual(test2);
});

test(`getSigns('2.5^3.5', 0, 3) must return ${test2}`, () => {
    expect(getSigns('2.5^3.5', 0, 3)).toStrictEqual(test2);
});

// ===== DECIMAIS COM NEGATIVOS =====

test(`getSigns('-2.5+3.7', 1, 4) must return ${test4}`, () => {
    expect(getSigns('-2.5+3.7', 1, 4)).toStrictEqual(test4);
});

test(`getSigns('10.5*-3.2', 0, 4) must return ${test1}`, () => {
    expect(getSigns('10.5*-3.2', 0, 4)).toStrictEqual(test1);
});

test(`getSigns('-7.7/-2.2', 1, 4) must return ${test3}`, () => {
    expect(getSigns('-7.7/-2.2', 1, 4)).toStrictEqual(test3);
});

test(`getSigns('5.5^-2.5', 0, 3) must return ${test1}`, () => {
    expect(getSigns('5.5^-2.5', 0, 3)).toStrictEqual(test1);
});

test(`getSigns('-10.5-5.5', 1, 5) must return ${test4}`, () => {
    expect(getSigns('-10.5-5.5', 1, 5)).toStrictEqual(test4);
});

test(`getSigns('-3.14+2.71', 1, 5) must return ${test4}`, () => {
    expect(getSigns('-3.14+2.71', 1, 5)).toStrictEqual(test4);
});

test(`getSigns('100.5--50.25', 0, 5) must return ${test1}`, () => {
    expect(getSigns('100.5--50.25', 0, 5)).toStrictEqual(test1);
});

// ===== @NEG COM DECIMAIS (APENAS EXPONENCIAÇÃO) =====

test(`getSigns('@NEG2.5^3.5', 4, 7) must return ${test4}`, () => {
    expect(getSigns('@NEG2.5^3.5', 4, 7)).toStrictEqual(test4);
});

test(`getSigns('@NEG10.5^-2.5', 4, 8) must return ${test3}`, () => {
    expect(getSigns('@NEG10.5^-2.5', 4, 8)).toStrictEqual(test3);
});

test(`getSigns('@NEG3.14^+2.71', 4, 8) must return ${test4}`, () => {
    expect(getSigns('@NEG3.14^+2.71', 4, 8)).toStrictEqual(test4);
});

test(`getSigns('@NEG100.25^10', 4, 10) must return ${test4}`, () => {
    expect(getSigns('@NEG100.25^10', 4, 10)).toStrictEqual(test4);
});

// ===== EXPRESSÕES COMPLEXAS =====

test(`getSigns('5+10*3', 2, 4) must return ${test2}`, () => {
    expect(getSigns('5+10*3', 2, 4)).toStrictEqual(test2);
});

test(`getSigns('100-50/5', 3, 6) must return ${test2}`, () => {
    expect(getSigns('100-50/5', 3, 6)).toStrictEqual(test2);
});

test(`getSigns('2+3*5-10', 2, 3) must return ${test2}`, () => {
    expect(getSigns('2+3*5-10', 2, 3)).toStrictEqual(test2);
});

test(`getSigns('10-5+3*2', 5, 6) must return ${test2}`, () => {
    expect(getSigns('10-5+3*2', 5, 6)).toStrictEqual(test2);
});

test(`getSigns('20/4-2*3', 4, 5) must return ${test2}`, () => {
    expect(getSigns('20/4-2*3', 4, 5)).toStrictEqual(test2);
});

test(`getSigns('50+100/-25', 3, 6) must return ${test1}`, () => {
    expect(getSigns('50+100/-25', 3, 6)).toStrictEqual(test1);
});

// ===== NÚMEROS GRANDES =====

test(`getSigns('1000+2000', 0, 4) must return ${test2}`, () => {
    expect(getSigns('1000+2000', 0, 4)).toStrictEqual(test2);
});

test(`getSigns('9999-8888', 0, 4) must return ${test2}`, () => {
    expect(getSigns('9999-8888', 0, 4)).toStrictEqual(test2);
});

test(`getSigns('123456*789', 0, 6) must return ${test2}`, () => {
    expect(getSigns('123456*789', 0, 6)).toStrictEqual(test2);
});

test(`getSigns('-12345/-6789', 1, 6) must return ${test3}`, () => {
    expect(getSigns('-12345/-6789', 1, 6)).toStrictEqual(test3);
});

test(`getSigns('9999--8888', 0, 4) must return ${test1}`, () => {
    expect(getSigns('9999--8888', 0, 4)).toStrictEqual(test1);
});

test(`getSigns('1000000-500000', 0, 7) must return ${test2}`, () => {
    expect(getSigns('1000000-500000', 0, 7)).toStrictEqual(test2);
});

// ===== EXPONENCIAÇÃO EM EXPRESSÕES MAIORES =====

test(`getSigns('10+2^3*5', 2, 3) must return ${test2}`, () => {
    expect(getSigns('10+2^3*5', 2, 3)).toStrictEqual(test2);
});

test(`getSigns('5*3^2+10', 2, 3) must return ${test2}`, () => {
    expect(getSigns('5*3^2+10', 2, 3)).toStrictEqual(test2);
});

test(`getSigns('100-10^2/5', 5, 7) must return ${test2}`, () => {
    expect(getSigns('100-10^2/5', 5, 7)).toStrictEqual(test2);
});

test(`getSigns('2^3^2', 2, 3) must return ${test2}`, () => {
    expect(getSigns('2^3^2', 2, 3)).toStrictEqual(test2);
});

test(`getSigns('5+2^-3', 2, 3) must return ${test1}`, () => {
    expect(getSigns('5+2^-3', 2, 3)).toStrictEqual(test1);
});

test(`getSigns('3^2+@NEG5^3', 7, 9) must return ${test2}`, () => {
    expect(getSigns('3^2+@NEG5^3', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('10*@NEG2^-5', 5, 7) must return ${test3}`, () => {
    expect(getSigns('10*@NEG2^-5', 7, 8)).toStrictEqual(test3);
});

// ===== CASOS EDGE =====

test(`getSigns('0+0', 0, 1) must return ${test2}`, () => {
    expect(getSigns('0+0', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('0-0', 0, 1) must return ${test2}`, () => {
    expect(getSigns('0-0', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('-0+5', 1, 2) must return ${test4}`, () => {
    expect(getSigns('-0+5', 1, 2)).toStrictEqual(test4);
});

test(`getSigns('1^0', 0, 1) must return ${test2}`, () => {
    expect(getSigns('1^0', 0, 1)).toStrictEqual(test2);
});

test(`getSigns('0^-1', 0, 1) must return ${test1}`, () => {
    expect(getSigns('0^-1', 0, 1)).toStrictEqual(test1);
});
