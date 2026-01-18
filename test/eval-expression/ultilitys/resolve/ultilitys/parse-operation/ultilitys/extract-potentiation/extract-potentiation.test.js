
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
    index_start: 7,
    index_op: 9,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('3/7*5-1-2^3+5') must return info6`, () => {
    expect(extractPotentiation(`3/7*5-1-2^3+5`)).toStrictEqual(info6);
});

let info7 = {
    index_start: 1,
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
    index_start: 1,
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
    index_start: 1,
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

// ===== MÚLTIPLAS EXPONENCIAÇÕES (deve pegar a última/direita) =====
let info21 = {
    index_start: 4,
    index_op: 5,
    index_end: 6,
    sign: '^'
};

test(`extractPotentiation('2^3^2') must return info21 (rightmost)`, () => {
    expect(extractPotentiation(`2^3^2`)).toStrictEqual(info21);
});

let info22 = {
    index_start: 6,
    index_op: 7,
    index_end: 8,
    sign: '^'
};

test(`extractPotentiation('2^2^3^2') must return info22 (rightmost)`, () => {
    expect(extractPotentiation(`2^2^3^2`)).toStrictEqual(info22);
});

let info23 = {
    index_start: 8,
    index_op: 10,
    index_end: 11,
    sign: '^'
};

test(`extractPotentiation('5+2^3+10^2') must return info23 (rightmost)`, () => {
    expect(extractPotentiation(`5+2^3+10^2`)).toStrictEqual(info23);
});

let info24 = {
    index_start: 8,
    index_op: 9,
    index_end: 10,
    sign: '^'
};

test(`extractPotentiation('3^2*5+2^3') must return info24 (rightmost)`, () => {
    expect(extractPotentiation(`3^2*5+2^3`)).toStrictEqual(info24);
});

// ===== EXPONENCIAÇÃO NO FINAL =====
let info25 = {
    index_start: 7,
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
