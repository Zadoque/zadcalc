const isValid = require('../../../../src/eval-expression/ultilitys/is-valid/is-valid'); 

// Case 1: Two signs together
test("Case 1.1 isValid('++2')", () => {
    expect(isValid('++2')).toBe(false);
});
test("Case 1.2 isValid('5*(2-+1)')", () => {
    expect(isValid('5*(2-+1)')).toBe(false);
});
test("Case 1.3 isValid('3**2')", () => {
    expect(isValid('3**2')).toBe(false);
});
test("Case 1.4 isValid('--4')", () => {
    expect(isValid('--4')).toBe(false);
});
test("Case 1.5 isValid('7//2')", () => {
    expect(isValid('7//2')).toBe(false);
});

// Case 2: Empty curly brackets
test("Case 2.1 isValid('{}')", () => {
    expect(isValid('{}')).toBe(false);
});
test("Case 2.2 isValid('{+}')", () => {
    expect(isValid('{+}')).toBe(false);
});
test("Case 2.3 isValid('{*}')", () => {
    expect(isValid('{*}')).toBe(false);
});
test("Case 2.4 isValid('{/}')", () => {
    expect(isValid('{/}')).toBe(false);
});
test("Case 2.5 isValid('{-}')", () => {
    expect(isValid('{-}')).toBe(false);
});

// Case 3: Empty parentheses
test("Case 3.1 isValid('()')", () => {
    expect(isValid('()')).toBe(false);
});
test("Case 3.2 isValid('(+)')", () => {
    expect(isValid('(+)')).toBe(false);
});
test("Case 3.3 isValid('(*)')", () => {
    expect(isValid('(*)')).toBe(false);
});
test("Case 3.4 isValid('(/)')", () => {
    expect(isValid('(/)')).toBe(false);
});
test("Case 3.5 isValid('(-)')", () => {
    expect(isValid('(-)')).toBe(false);
});

// Case 4: Empty square brackets
test("Case 4.1 isValid('[]')", () => {
    expect(isValid('[]')).toBe(false);
});
test("Case 4.2 isValid('[+]')", () => {
    expect(isValid('[+]')).toBe(false);
});
test("Case 4.3 isValid('[*]')", () => {
    expect(isValid('[*]')).toBe(false);
});
test("Case 4.4 isValid('[/]')", () => {
    expect(isValid('[/]')).toBe(false);
});
test("Case 4.5 isValid('[-]')", () => {
    expect(isValid('[-]')).toBe(false);
});

// Case 5: '*' or '/' after an opening bracket
test("Case 5.1 isValid('{*2}')", () => {
    expect(isValid('{*2}')).toBe(false);
});
test("Case 5.2 isValid('[*3]')", () => {
    expect(isValid('[*3]')).toBe(false);
});
test("Case 5.3 isValid('(*4)')", () => {
    expect(isValid('(*4)')).toBe(false);
});
test("Case 5.4 isValid('{/5}')", () => {
    expect(isValid('{/5}')).toBe(false);
});
test("Case 5.5 isValid('[/6]')", () => {
    expect(isValid('[/6]')).toBe(false);
});

// Case 6: Non-number before a dot
test("Case 6.1 isValid('+.5')", () => {
    expect(isValid('+.5')).toBe(false);
});
test("Case 6.2 isValid('*.5')", () => {
    expect(isValid('*.5')).toBe(false);
});
test("Case 6.3 isValid('/.5')", () => {
    expect(isValid('/.5')).toBe(false);
});
test("Case 6.4 isValid('- .5')", () => {
    expect(isValid('- .5')).toBe(false);
});
test("Case 6.5 isValid('  .5')", () => {
    expect(isValid('  .5')).toBe(false);
});

// Case 7: Non-number after a dot
test("Case 7.1 isValid('5.+')", () => {
    expect(isValid('5.+')).toBe(false);
});
test("Case 7.2 isValid('5.*')", () => {
    expect(isValid('5.*')).toBe(false);
});
test("Case 7.3 isValid('5./')", () => {
    expect(isValid('5./')).toBe(false);
});
test("Case 7.4 isValid('5.-')", () => {
    expect(isValid('5.-')).toBe(false);
});
test("Case 7.5 isValid('5. ') ", () => {
    expect(isValid('5. ')).toBe(false);
});

// Case 8: Dot at beginning or end
test("Case 8.1 isValid('.5')", () => {
    expect(isValid('.5')).toBe(false);
});
test("Case 8.2 isValid('5.')", () => {
    expect(isValid('5.')).toBe(false);
});
test("Case 8.3 isValid('.')", () => {
    expect(isValid('.')).toBe(false);
});
test("Case 8.4 isValid('..')", () => {
    expect(isValid('..')).toBe(false);
});
test("Case 8.5 isValid(' . ') ", () => {
    expect(isValid(' . ')).toBe(false);
});

// Case 9: Multiple dots in a number
test("Case 9.1 isValid('5.5.5')", () => {
    expect(isValid('5.5.5')).toBe(false);
});
test("Case 9.2 isValid('12.34.56')", () => {
    expect(isValid('12.34.56')).toBe(false);
});
test("Case 9.3 isValid('1..2')", () => {
    expect(isValid('1..2')).toBe(false);
});
test("Case 9.4 isValid('3.14.159')", () => {
    expect(isValid('3.14.159')).toBe(false);
});
test("Case 9.5 isValid('99.99.99')", () => {
    expect(isValid('99.99.99')).toBe(false);
});

test("Case 10.0 isValid('{2+4}}')", () => {
    expect(isValid('{2+4}}')).toBe(false);
});

test("Case 10.1 isValid('5')", () => {
    expect(isValid('5')).toBe(true);
});