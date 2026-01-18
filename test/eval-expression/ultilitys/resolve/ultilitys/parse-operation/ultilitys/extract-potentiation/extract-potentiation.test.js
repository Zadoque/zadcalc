const extractPotentiation = require(`./../../../../../../../../src/eval-expression/utilities/resolve/utilities/parse-operation/utilities/extract-potentiation/extract-potentiation`);


test(`simplify('(-2)^(3)+5') must return @NEG2^3+5`, () => {
    expect(extractPotentiation(`@NEG2^3+5`)).toBe(`@NEG2^3+5`);
});

