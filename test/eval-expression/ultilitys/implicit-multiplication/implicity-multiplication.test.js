const implicitMultiplication = require('../../../../src/eval-expression/ultilitys/implicit-multiplication/implicit-multiplication');

test(`implicitMultiplication('6(+2)(-2){+1-5}') must return 6*(+2)*(-2)*{+1-5}`, () => {
    expect(implicitMultiplication('6(+2)(-2){+1-5}')).toBe('6*(+2)*(-2)*{+1-5}');
});