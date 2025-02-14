const mathResolver = require(`./../src/main`);
evalExpression = mathResolver.evalExpression;

test(`evalExpression {-2[9.4/8.0]6-4/(5-3)-8} must return 2*6*8`, () => {
    mathResolver.settings.to_fixed = 1;
    expect(evalExpression(`{-2[9.4/8.0]6-4/(5-3)-8}`)).toBe(`-24.1`);
});

test(`evalExpression 1/90 must return 2*6*8`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`1/90`)).toBe(`1/90`);
});



test(`evalExpression 3+2/3-5/7+12/78 must return +3.106227106`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`3+2/3-5/7+12/78`)).toBe(`848/273`);
});
test(`evalExpression 1/3+2/3 must return +3.106227106`, () => {
    expect(evalExpression(`1/3+2/3`)).toBe(`1`);
});


// Basic Operations
test(`evalExpression 1+1 must return 2`, () => {
    mathResolver.settings.frac_mode = false;
    expect(evalExpression(`1+1`)).toBe(`2`);
});

test(`evalExpression 10-5 must return 5`, () => {
    expect(evalExpression(`10-5`)).toBe(`5`);
});

test(`evalExpression 4*3 must return 12`, () => {
    expect(evalExpression(`4*3`)).toBe(`12`);
});

test(`evalExpression 15/3 must return 5`, () => {
    expect(evalExpression(`15/3`)).toBe(`5`);
});

// Decimal Operations
test(`evalExpression 1.5+2.3 must return 3.8`, () => {
    mathResolver.settings.to_fixed = 5;
    expect(evalExpression(`1.5+2.3`)).toBe(`3.8`);
});

test(`evalExpression 5.7-2.3 must return 3.40000`, () => {
    expect(evalExpression(`5.7-2.3`)).toBe(`3.40000`);
});

// Fraction Mode Tests
test(`evalExpression 1/4 in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`1/4`)).toBe(`1/4`);
});

test(`evalExpression 3/6 in fraction mode should simplify`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`3/6`)).toBe(`1/2`);
});

// Bracket Operations
test(`evalExpression {2+3} must return 5`, () => {
    mathResolver.settings.frac_mode = false;
    expect(evalExpression(`{2+3}`)).toBe(`5`);
});

test(`evalExpression [4*2] must return 8`, () => {
    expect(evalExpression(`[4*2]`)).toBe(`8`);
});

// Nested Brackets
test(`evalExpression {[2+3]*4} must return 20`, () => {
    expect(evalExpression(`{[2+3]*4}`)).toBe(`20`);
});

test(`evalExpression {2*[3+4]} must return 14`, () => {
    expect(evalExpression(`{2*[3+4]}`)).toBe(`14`);
});

// Complex Expressions
test(`evalExpression {2*[3+4]}/2 must return 7`, () => {
    expect(evalExpression(`{2*[3+4]}/2`)).toBe(`7`);
});

test(`evalExpression {-2[9.4/8.0]6-4/(5-3)-8} must return -24.1`, () => {
    mathResolver.settings.to_fixed = 1;
    expect(evalExpression(`{-2[9.4/8.0]6-4/(5-3)-8}`)).toBe(`-24.1`);
});

// Positive Sign Tests
test(`evalExpression +5 with positive_sign true`, () => {
    mathResolver.settings.positive_sign = true;
    mathResolver.settings.return_as_string = true;
    expect(evalExpression(`5`)).toBe(`+5`);
});

test(`evalExpression +5 with positive_sign false`, () => {
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`+5`)).toBe(`5`);
});

// Mixed Fractions and Decimals
test(`evalExpression 1.5+1/2 in decimal mode`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.to_fixed = 5;
    expect(evalExpression(`1.5+1/2`)).toBe(`2`);
});

test(`evalExpression 1.5+1/2 in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`1.5+1/2`)).toBe(`2`);
});

// Error Cases
test(`evalExpression with invalid syntax`, () => {
    expect(evalExpression(`2++2`)).toBe(`Sintax Error`);
});

test(`evalExpression with mismatched brackets`, () => {
    expect(evalExpression(`{2+3`)).toBe(`Sintax Error`);
});

// Settings Error Tests
test(`evalExpression with invalid frac_mode setting`, () => {
    mathResolver.settings.frac_mode = true;
    mathResolver.settings.return_as_string = false;
    expect(evalExpression(`1/2`)).toBe(`Settings Error! frac mode just work when return_as_string is true`);
});

test(`evalExpression with invalid positive_sign setting`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.positive_sign = true;
    mathResolver.settings.return_as_string = false;
    expect(evalExpression(`5`)).toBe(`Settings Error! positve_sign just work when return as string is true`);
});

// Large Numbers
test(`evalExpression 1000000+2000000 must return 3000000`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.return_as_string = true;
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`1000000+2000000`)).toBe(`3000000`);
});

// Multiple Operations
test(`evalExpression 2+3*4/2-1 must return 7`, () => {
    expect(evalExpression(`2+3*4/2-1`)).toBe(`7`);
});

// Zero Division Check
test(`evalExpression 1/0 must return Sintax Error`, () => {
    expect(evalExpression(`1/0`)).toBe(`Error! division by zero`);
});

// Negative Numbers
test(`evalExpression -5+-3 must return -8`, () => {
    expect(evalExpression(`-5+(-3)`)).toBe(`-8`);
});

// Complex Fractions
test(`evalExpression 1/2+1/3+1/4 in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`1/2+1/3+1/4`)).toBe(`13/12`);
});

// Implicit Multiplication
test(`evalExpression 2(3) must return 6`, () => {
    mathResolver.settings.frac_mode = false;
    expect(evalExpression(`2(3)`)).toBe(`6`);
});

// Multiple Brackets
test(`evalExpression {[2+3](4+5)} must return 45`, () => {
    expect(evalExpression(`{[2+3](4+5)}`)).toBe(`45`);
});

// Decimal Precision
test(`evalExpression 1/3 with 5 decimal places`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.to_fixed = 5;
    expect(evalExpression(`1/3`)).toBe(`0.33333`);
});

// Mixed Operations
test(`evalExpression 2.5*3+{4/2}-[1.5] must return 9`, () => {
    expect(evalExpression(`2.5*3+{4/2}-[1.5]`)).toBe(`8`);
});

// Fraction Simplification
test(`evalExpression 4/8 in fraction mode must simplify`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`4/8`)).toBe(`1/2`);
});

// Multiple Decimal Operations
test(`evalExpression 1.1+2.2+3.3 must return 6.60000`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.to_fixed = 5;
    expect(evalExpression(`1.1+2.2+3.3`)).toBe(`6.6`);
});

// Complex Nested Operations
test(`evalExpression {2*[3+(4*5)]} must return 46`, () => {
    expect(evalExpression(`{2*[3+(4*5)]}`)).toBe(`46`);
});

// Mixed Bracket Types
test(`evalExpression {[2+3]}+[4+5] must return 14`, () => {
    expect(evalExpression(`{[2+3]}+[4+5]`)).toBe(`14`);
});

// Long Decimal Results
test(`evalExpression 22/7 in decimal mode`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.to_fixed = 5;    
    expect(evalExpression(`22/7`)).toBe(`3.14286`);
});

// Multiple Fraction Operations
test(`evalExpression 1/2*1/3*1/4 in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`1/2*1/3*1/4`)).toBe(`1/24`);
});

// Complex Expression with All Operations
test(`evalExpression {2+[3*4/(1+1)]}-5 must return 3`, () => {
    mathResolver.settings.frac_mode = false;
    expect(evalExpression(`{2+[3*4/(1+1)]}-5`)).toBe(`3`);
});

// Repeated Operations
test(`evalExpression 2+2+2+2+2 must return 10`, () => {
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`2+2+2+2+2`)).toBe(`10`);
});

// Mixed Positive and Negative
test(`evalExpression 1-2+3-4+5 must return 3`, () => {
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`1-2+3-4+5`)).toBe(`3`);
});

// Complex Fraction Expression
test(`evalExpression (1/2)/(3/4) in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`(1/2)/(3/4)`)).toBe(`2/3`);
});

// Multiple Decimal Points
test(`evalExpression 1.1*1.1 must return 1.21000`, () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.to_fixed = 5;
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`1.1*1.1`)).toBe(`1.21000`);
});



// Multiple Settings Test
test(`evalExpression 1.5 with multiple settings`, () => {
    mathResolver.settings.frac_mode = true;
    mathResolver.settings.positive_sign = true;
    mathResolver.settings.return_as_string = true;
    expect(evalExpression(`1.5`)).toBe(`+3/2`);
});

// Negative Fractions
test(`evalExpression -1/4 in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    mathResolver.settings.positive_sign = false;
    expect(evalExpression(`-1/4`)).toBe(`-1/4`);
});

// Complex Decimal to Fraction
test(`evalExpression 0.333333 in fraction mode`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression(`0.333333`)).toBe(`1/3`);
});

// Zero Result
test(`evalExpression 1-1 must return 0`, () => {
    mathResolver.settings.frac_mode = false;
    expect(evalExpression(`1-1`)).toBe(`0`);
});

// Very Complex Expression
test(`evalExpression {2*[3+4*(5-2)]-1}/[2+1] with multiple operations`, () => {
    expect(evalExpression(`{2*[3+4*(5-2)]-1}/[2+1]`)).toBe(`9.66667`);
});
