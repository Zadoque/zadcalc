const evalExpression = require('./eval-expression'); // Assuming this is the function that checks validity

// Case 1: Two signs together
test("Case 1.1 evalExpression('++2')", () => {
    expect(evalExpression('++2')).toBe(false);
});
test("Case 1.2 evalExpression('5*(2-+1)')", () => {
    expect(evalExpression('5*(2-+1)')).toBe(false);
});
test("Case 1.3 evalExpression('3**2')", () => {
    expect(evalExpression('3**2')).toBe(false);
});
test("Case 1.4 evalExpression('--4')", () => {
    expect(evalExpression('--4')).toBe(false);
});
test("Case 1.5 evalExpression('7//2')", () => {
    expect(evalExpression('7//2')).toBe(false);
});

// Case 2: Empty curly brackets
test("Case 2.1 evalExpression('{}')", () => {
    expect(evalExpression('{}')).toBe(false);
});
test("Case 2.2 evalExpression('{+}')", () => {
    expect(evalExpression('{+}')).toBe(false);
});
test("Case 2.3 evalExpression('{*}')", () => {
    expect(evalExpression('{*}')).toBe(false);
});
test("Case 2.4 evalExpression('{/}')", () => {
    expect(evalExpression('{/}')).toBe(false);
});
test("Case 2.5 evalExpression('{-}')", () => {
    expect(evalExpression('{-}')).toBe(false);
});

// Case 3: Empty parentheses
test("Case 3.1 evalExpression('()')", () => {
    expect(evalExpression('()')).toBe(false);
});
test("Case 3.2 evalExpression('(+)')", () => {
    expect(evalExpression('(+)')).toBe(false);
});
test("Case 3.3 evalExpression('(*)')", () => {
    expect(evalExpression('(*)')).toBe(false);
});
test("Case 3.4 evalExpression('(/)')", () => {
    expect(evalExpression('(/)')).toBe(false);
});
test("Case 3.5 evalExpression('(-)')", () => {
    expect(evalExpression('(-)')).toBe(false);
});

// Case 4: Empty square brackets
test("Case 4.1 evalExpression('[]')", () => {
    expect(evalExpression('[]')).toBe(false);
});
test("Case 4.2 evalExpression('[+]')", () => {
    expect(evalExpression('[+]')).toBe(false);
});
test("Case 4.3 evalExpression('[*]')", () => {
    expect(evalExpression('[*]')).toBe(false);
});
test("Case 4.4 evalExpression('[/]')", () => {
    expect(evalExpression('[/]')).toBe(false);
});
test("Case 4.5 evalExpression('[-]')", () => {
    expect(evalExpression('[-]')).toBe(false);
});

// Case 5: '*' or '/' after an opening bracket
test("Case 5.1 evalExpression('{*2}')", () => {
    expect(evalExpression('{*2}')).toBe(false);
});
test("Case 5.2 evalExpression('[*3]')", () => {
    expect(evalExpression('[*3]')).toBe(false);
});
test("Case 5.3 evalExpression('(*4)')", () => {
    expect(evalExpression('(*4)')).toBe(false);
});
test("Case 5.4 evalExpression('{/5}')", () => {
    expect(evalExpression('{/5}')).toBe(false);
});
test("Case 5.5 evalExpression('[/6]')", () => {
    expect(evalExpression('[/6]')).toBe(false);
});

// Case 6: Non-number before a dot
test("Case 6.1 evalExpression('+.5')", () => {
    expect(evalExpression('+.5')).toBe(false);
});
test("Case 6.2 evalExpression('*.5')", () => {
    expect(evalExpression('*.5')).toBe(false);
});
test("Case 6.3 evalExpression('/.5')", () => {
    expect(evalExpression('/.5')).toBe(false);
});
test("Case 6.4 evalExpression('- .5')", () => {
    expect(evalExpression('- .5')).toBe(false);
});
test("Case 6.5 evalExpression('  .5')", () => {
    expect(evalExpression('  .5')).toBe(false);
});

// Case 7: Non-number after a dot
test("Case 7.1 evalExpression('5.+')", () => {
    expect(evalExpression('5.+')).toBe(false);
});
test("Case 7.2 evalExpression('5.*')", () => {
    expect(evalExpression('5.*')).toBe(false);
});
test("Case 7.3 evalExpression('5./')", () => {
    expect(evalExpression('5./')).toBe(false);
});
test("Case 7.4 evalExpression('5.-')", () => {
    expect(evalExpression('5.-')).toBe(false);
});
test("Case 7.5 evalExpression('5. ') ", () => {
    expect(evalExpression('5. ')).toBe(false);
});

// Case 8: Dot at beginning or end
test("Case 8.1 evalExpression('.5')", () => {
    expect(evalExpression('.5')).toBe(false);
});
test("Case 8.2 evalExpression('5.')", () => {
    expect(evalExpression('5.')).toBe(false);
});
test("Case 8.3 evalExpression('.')", () => {
    expect(evalExpression('.')).toBe(false);
});
test("Case 8.4 evalExpression('..')", () => {
    expect(evalExpression('..')).toBe(false);
});
test("Case 8.5 evalExpression(' . ') ", () => {
    expect(evalExpression(' . ')).toBe(false);
});

// Case 9: Multiple dots in a number
test("Case 9.1 evalExpression('5.5.5')", () => {
    expect(evalExpression('5.5.5')).toBe(false);
});
test("Case 9.2 evalExpression('12.34.56')", () => {
    expect(evalExpression('12.34.56')).toBe(false);
});
test("Case 9.3 evalExpression('1..2')", () => {
    expect(evalExpression('1..2')).toBe(false);
});
test("Case 9.4 evalExpression('3.14.159')", () => {
    expect(evalExpression('3.14.159')).toBe(false);
});
test("Case 9.5 evalExpression('99.99.99')", () => {
    expect(evalExpression('99.99.99')).toBe(false);
});
