const simplifyCurlyBrack = require('./simplify-curly-brack');

test(`simplifyCurlyBrack {(2+4)}*8 must return 6*8`, () => {
    expect(simplifyCurlyBrack('{(2+4)}*8')).toBe('+6*8');
});

test(`simplifyCurlyBrack (3-1)(2+4)*8 must return 12*+8`, () => {
    expect(simplifyCurlyBrack('{(3-1)(2+4)}*8')).toBe('+12*8');
});

test(`simplifyCurlyBrack {-2[9.4/8.90]6-4/(5-3)-8} must return -24.1`, () => {
    expect(simplifyCurlyBrack('{-2*[9.4/8.0]*6-4/(5-3)-8}')).toBe('-24.1');
});
