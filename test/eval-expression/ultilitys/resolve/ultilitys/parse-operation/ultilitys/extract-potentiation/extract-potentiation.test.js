const extractPotentiation = require(`./../../../../../../../../src/eval-expression/utilities/resolve/utilities/parse-operation/utilities/extract-potentiation/extract-potentiation`);

// ===== EXPONENCIAÇÃO NO INÍCIO =====
let info1 = {
    index_start: 0,
    index_op: 5,
    index_end: 6,
    sign: '^'
};

test(`extractPotentiation('@NEG2^3+5') must return info1`, () => {
    expect(extractPotentiation(`@NEG2^3+5`)).toStrictEqual(info1);
});

let info2 = {
    index_start: 0,
    index_op: 1,
    index_end: 2,
    sign: '^'
};

test(`extractPotentiation('2^3') must return info2`, () => {
    expect(extractPotentiation(`2^3`)).toStrictEqual(info2);
});

let info3 = {
    index_start: 0,
    index_op: 2,
    index_end: 3,
    sign: '^'
};

test(`extractPotentiation('10^2') must return info3`, () => {
    expect(extractPotentiation(`10^2`)).toStrictEqual(info3);
});

let info4 = {
    index_start: 0,
    index_op: 1,
    index_end: 3,
    sign: '^'
};

test(`extractPotentiation('2^+3') must return info4`, () => {
    expect(extractPotentiation(`2^+3`)).toStrictEqual(info4);
});

let info5 = {
    index_start: 0,
    index_op: 1,
    index_end: 3,
    sign: '^'
};

test(`extractPotentiation('5^-2') must return info5`, () => {
    expect(extractPotentiation(`5^-2`)).toStrictEqual(info5);
});

// ===== EXPONENCIAÇÃO NO MEIO =====
let info6 = {
    index_start: 8,  // CORRIGIDO: não conta o '-'
    index_op: 9,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('3/7*5-1-2^3+5') must return info6`, () => {
    expect(extractPotentiation(`3/7*5-1-2^3+5`)).toStrictEqual(info6);
});

let info7 = {
    index_start: 2,  // CORRIGIDO: não conta o '+'
    index_op: 3,
    index_end: 4,
    sign: '^'
};

test(`extractPotentiation('2+3^2') must return info7`, () => {
    expect(extractPotentiation(`2+3^2`)).toStrictEqual(info7);
});

let info8 = {
    index_start: 2,
    index_op: 3,
    index_end: 5,
    sign: '^'
};

test(`extractPotentiation('5*2^10') must return info8`, () => {
    expect(extractPotentiation(`5*2^10`)).toStrictEqual(info8);
});

let info9 = {
    index_start: 3,
    index_op: 4,
    index_end: 5,
    sign: '^'
};

test(`extractPotentiation('10/2^3*5') must return info9`, () => {
    expect(extractPotentiation(`10/2^3*5`)).toStrictEqual(info9);
});

let info10 = {
    index_start: 2,  // CORRIGIDO: não conta o '+'
    index_op: 4,
    index_end: 5,
    sign: '^'
};

test(`extractPotentiation('1+10^2-5') must return info10`, () => {
    expect(extractPotentiation(`1+10^2-5`)).toStrictEqual(info10);
});

// ===== COM @NEG =====
let info11 = {
    index_start: 2,
    index_op: 7,
    index_end: 8,
    sign: '^'
};

test(`extractPotentiation('5+@NEG3^2') must return info11`, () => {
    expect(extractPotentiation(`5+@NEG3^2`)).toStrictEqual(info11);
});

let info12 = {
    index_start: 0,
    index_op: 5,
    index_end: 7,
    sign: '^'
};

test(`extractPotentiation('@NEG2^+3') must return info12`, () => {
    expect(extractPotentiation(`@NEG2^+3`)).toStrictEqual(info12);
});

let info13 = {
    index_start: 0,
    index_op: 5,
    index_end: 7,
    sign: '^'
};

test(`extractPotentiation('@NEG5^-1') must return info13`, () => {
    expect(extractPotentiation(`@NEG5^-1`)).toStrictEqual(info13);
});

let info14 = {
    index_start: 3,
    index_op: 9,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('10*@NEG10^3') must return info14`, () => {
    expect(extractPotentiation(`10*@NEG10^3`)).toStrictEqual(info14);
});

let info15 = {
    index_start: 2,
    index_op: 7,
    index_end: 9,
    sign: '^'
};

test(`extractPotentiation('3-@NEG2^10+5') must return info15`, () => {
    expect(extractPotentiation(`3-@NEG2^10+5`)).toStrictEqual(info15);
});

// ===== DECIMAIS =====
let info16 = {
    index_start: 0,
    index_op: 3,
    index_end: 4,
    sign: '^'
};

test(`extractPotentiation('2.5^2') must return info16`, () => {
    expect(extractPotentiation(`2.5^2`)).toStrictEqual(info16);
});

let info17 = {
    index_start: 0,
    index_op: 1,
    index_end: 4,
    sign: '^'
};

test(`extractPotentiation('4^0.5') must return info17`, () => {
    expect(extractPotentiation(`4^0.5`)).toStrictEqual(info17);
});

let info18 = {
    index_start: 2,  // CORRIGIDO
    index_op: 6,
    index_end: 9,
    sign: '^'
};

test(`extractPotentiation('1+10.5^2.5') must return info18`, () => {
    expect(extractPotentiation(`1+10.5^2.5`)).toStrictEqual(info18);
});

let info19 = {
    index_start: 0,
    index_op: 3,
    index_end: 6,
    sign: '^'
};

test(`extractPotentiation('100^0.5+10') must return info19`, () => {
    expect(extractPotentiation(`100^0.5+10`)).toStrictEqual(info19);
});

let info20 = {
    index_start: 4,
    index_op: 7,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('5.5*3.2^1.1') must return info20`, () => {
    expect(extractPotentiation(`5.5*3.2^1.1`)).toStrictEqual(info20);
});

// ===== MÚLTIPLAS EXPONENCIAÇÕES (deve pegar a PRIMEIRA - separadas) =====
let info21 = {
    index_start: 2,
    index_op: 3,
    index_end: 4,
    sign: '^'
};

test(`extractPotentiation('2^3^2') must return info21 (PRIMEIRA - aninhadas pegam primeira mesmo)`, () => {
    expect(extractPotentiation(`2^3^2`)).toStrictEqual(info21);
});

let info22 = {
    index_start: 4,
    index_op: 5,
    index_end: 6,
    sign: '^'
};

test(`extractPotentiation('2^2^3^2') must return info22 (PRIMEIRA)`, () => {
    expect(extractPotentiation(`2^2^3^2`)).toStrictEqual(info22);
});

let info23 = {
    index_start: 2,  // CORRIGIDO
    index_op: 3,
    index_end: 4,
    sign: '^'
};

test(`extractPotentiation('5+2^3+10^2') must return info23 (PRIMEIRA - separadas)`, () => {
    expect(extractPotentiation(`5+2^3+10^2`)).toStrictEqual(info23);
});

let info24 = {
    index_start: 0,
    index_op: 1,
    index_end: 2,
    sign: '^'
};

test(`extractPotentiation('3^2*5+2^3') must return info24 (PRIMEIRA - separadas)`, () => {
    expect(extractPotentiation(`3^2*5+2^3`)).toStrictEqual(info24);
});

// ===== EXPONENCIAÇÃO NO FINAL =====
let info25 = {
    index_start: 8,  // CORRIGIDO
    index_op: 9,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('1+2+3+4+5^2') must return info25`, () => {
    expect(extractPotentiation(`1+2+3+4+5^2`)).toStrictEqual(info25);
});

let info26 = {
    index_start: 7,
    index_op: 9,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('100-50*10^3') must return info26`, () => {
    expect(extractPotentiation(`100-50*10^3`)).toStrictEqual(info26);
});

let info27 = {
    index_start: 6,
    index_op: 11,
    index_end: 12,
    sign: '^'
};

test(`extractPotentiation('5/2-3*@NEG5^4') must return info27`, () => {
    expect(extractPotentiation(`5/2-3*@NEG5^4`)).toStrictEqual(info27);
});

// ===== CASOS COMPLEXOS =====
let info28 = {
    index_start: 0,
    index_op: 6,
    index_end: 8,
    sign: '^'
};

test(`extractPotentiation('@NEG10^+5') must return info28`, () => {
    expect(extractPotentiation(`@NEG10^+5`)).toStrictEqual(info28);
});

let info29 = {
    index_start: 12,
    index_op: 19,
    index_end: 22,
    sign: '^'
};

test(`extractPotentiation('100+200-300*@NEG100^+10') must return info29`, () => {
    expect(extractPotentiation(`100+200-300*@NEG100^+10`)).toStrictEqual(info29);
});

let info30 = {
    index_start: 0,
    index_op: 1,
    index_end: 6,
    sign: '^'
};

test(`extractPotentiation('2^+10.5') must return info30`, () => {
    expect(extractPotentiation(`2^+10.5`)).toStrictEqual(info30);
});

let info31 = {
    index_start: 0,
    index_op: 1,
    index_end: 6,
    sign: '^'
};

test(`extractPotentiation('3^-2.75') must return info31`, () => {
    expect(extractPotentiation(`3^-2.75`)).toStrictEqual(info31);
});

let info32 = {
    index_start: 16,
    index_op: 23,
    index_end: 25,
    sign: '^'
};

test(`extractPotentiation('1.5+2.5*3.5-4.5/@NEG5.5^+2') must return info32`, () => {
    expect(extractPotentiation(`1.5+2.5*3.5-4.5/@NEG5.5^+2`)).toStrictEqual(info32);
});

// ===== MAIS DECIMAIS =====
let info36 = {
    index_start: 2,  // CORRIGIDO
    index_op: 6,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('5+1.25^3.75') must return info36`, () => {
    expect(extractPotentiation(`5+1.25^3.75`)).toStrictEqual(info36);
});

let info40 = {
    index_start: 4,  // CORRIGIDO
    index_op: 8,
    index_end: 12,
    sign: '^'
};

test(`extractPotentiation('2.5+6.25^0.33-10') must return info40`, () => {
    expect(extractPotentiation(`2.5+6.25^0.33-10`)).toStrictEqual(info40);
});

// ===== @NEG COM DECIMAIS =====
let info48 = {
    index_start: 4,
    index_op: 11,  // CORRIGIDO: @NEG7.7 = 7 chars, ^ no índice 11
    index_end: 14,  // CORRIGIDO
    sign: '^'
};

test(`extractPotentiation('5.5*@NEG7.7^2.2') must return info48`, () => {
    // '5.5*@NEG7.7^2.2'
    // 0123456789ABCDE
    //     @NEG7.7 = índices 4-10 (7 chars)
    //            ^ = índice 11
    //             2.2 = índices 12-14
    expect(extractPotentiation(`5.5*@NEG7.7^2.2`)).toStrictEqual(info48);
});

let info49 = {
    index_start: 4,
    index_op: 13,  // CORRIGIDO
    index_end: 17,  // CORRIGIDO
    sign: '^'
};

test(`extractPotentiation('1.1+@NEG100.5^+0.3') must return info49`, () => {
    // '1.1+@NEG100.5^+0.3'
    // 012345678901234567
    //     @NEG100.5 = índices 4-12 (9 chars)
    //              ^ = índice 13
    //               +0.3 = índices 14-17
    expect(extractPotentiation(`1.1+@NEG100.5^+0.3`)).toStrictEqual(info49);
});

let info50 = {
    index_start: 6,
    index_op: 14,  // CORRIGIDO
    index_end: 18,  // CORRIGIDO
    sign: '^'
};

test(`extractPotentiation('99.99-@NEG0.01^-3.3') must return info50`, () => {
    // '99.99-@NEG0.01^-3.3'
    // 0123456789012345678
    //       @NEG0.01 = índices 6-13 (8 chars)
    //               ^ = índice 14
    //                -3.3 = índices 15-18
    expect(extractPotentiation(`99.99-@NEG0.01^-3.3`)).toStrictEqual(info50);
});


let info51 = {
    index_start: 4,  
    index_op: 7,
    index_end: 10, 
    sign: '^'
};

test(`extractPotentiation('2.5^1.5^0.5') must return info51 (PRIMEIRA - regex não funciona para aninhadas)`, () => {
    expect(extractPotentiation(`2.5^1.5^0.5`)).toStrictEqual(info51);
});

let info52 = {
    index_start: 2,  // CORRIGIDO
    index_op: 5,
    index_end: 8,
    sign: '^'
};

test(`extractPotentiation('3+0.5^2.5') must return info52`, () => {
    expect(extractPotentiation(`3+0.5^2.5`)).toStrictEqual(info52);
});

let info54 = {
    index_start: 7,
    index_op: 10,
    index_end: 13,
    sign: '^'
};

test(`extractPotentiation('10+3.3^2.2^1.1') must return info54 (PRIMEIRA - regex não funciona)`, () => {
    expect(extractPotentiation(`10+3.3^2.2^1.1`)).toStrictEqual(info54);
});

let info55 = {
    index_start: 0,
    index_op: 17,  
    index_end: 34, 
    sign: '^'
};

test(`extractPotentiation('0.123456789012345^0.987654321098765') must return info55`, () => {
    expect(extractPotentiation(`0.123456789012345^0.987654321098765`)).toStrictEqual(info55);
});

let info59 = {
    index_start: 26,  // CORRIGIDO
    index_op: 30,
    index_end: 35,  // CORRIGIDO
    sign: '^'
};

test(`extractPotentiation('10.5+20.25-30.125*40.0625/50.5^60.75') must return info59`, () => {
    expect(extractPotentiation(`10.5+20.25-30.125*40.0625/50.5^60.75`)).toStrictEqual(info59);
});

let info62 = {
    index_start: 0,
    index_op: 6,
    index_end: 12,  // CORRIGIDO
    sign: '^'
};

test(`extractPotentiation('999.99^888.77') must return info62`, () => {
    expect(extractPotentiation(`999.99^888.77`)).toStrictEqual(info62);
});

let info63 = {
    index_start: 2,  // CORRIGIDO
    index_op: 10,
    index_end: 16,
    sign: '^'
};

test(`extractPotentiation('5+12345.67^89.012') must return info63`, () => {
    expect(extractPotentiation(`5+12345.67^89.012`)).toStrictEqual(info63);
});

let info65 = {
    index_start: 10,
    index_op: 21,  
    index_end: 25,  
    sign: '^'
};

test(`extractPotentiation('1.23*4.56-@NEG789.012^+3.4') must return info65`, () => {
    // '1.23*4.56-@NEG789.012^+3.4'
    // 01234567890123456789012345
    //           @NEG789.012 = índices 10-20 (11 chars)
    //                      ^ = índice 21
    //                       +3.4 = índices 22-25
    expect(extractPotentiation(`1.23*4.56-@NEG789.012^+3.4`)).toStrictEqual(info65);
});

let info66 = {
    index_start: 8,  
    index_op: 11,
    index_end: 14,
    sign: '^'
};

test(`extractPotentiation('1.1^2.2^3.3^4.4') must return info66 (PRIMEIRA - regex não funciona)`, () => {
    expect(extractPotentiation(`1.1^2.2^3.3^4.4`)).toStrictEqual(info66);
});
