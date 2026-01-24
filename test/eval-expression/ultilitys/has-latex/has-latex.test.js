// test/eval-expression/utilities/has-latex/has-latex.test.js

const hasLatex = require('../../../../src/eval-expression/utilities/has-latex/has-latex');

describe('hasLatex', () => {
    test('Detecta frações LaTeX', () => {
        expect(hasLatex('\\frac{1}{2}')).toBe(true);
        expect(hasLatex('\\dfrac{3}{4}')).toBe(true);
        expect(hasLatex('1/2')).toBe(false);
    });
    
    test('Detecta funções LaTeX vs funções normais', () => {
        expect(hasLatex('\\sin(30)')).toBe(true);
        expect(hasLatex('sin(30)')).toBe(false);
        expect(hasLatex('\\cos(x)')).toBe(true);
        expect(hasLatex('cos(x)')).toBe(false);
    });
    
    test('Detecta constantes LaTeX', () => {
        expect(hasLatex('\\pi')).toBe(true);
        expect(hasLatex('\\pi*2')).toBe(true);
        expect(hasLatex('\\tau')).toBe(true);
        expect(hasLatex('PI')).toBe(false);
        expect(hasLatex('E')).toBe(false);
    });
    
    test('Detecta operadores LaTeX', () => {
        expect(hasLatex('2 \\times 3')).toBe(true);
        expect(hasLatex('2 \\cdot 3')).toBe(true);
        expect(hasLatex('6 \\div 2')).toBe(true);
        expect(hasLatex('2*3')).toBe(false);
    });
    
    test('Detecta raízes', () => {
        expect(hasLatex('\\sqrt{4}')).toBe(true);
        expect(hasLatex('\\sqrt[3]{8}')).toBe(true);
        expect(hasLatex('sqrt(4)')).toBe(false);
    });
    
    test('Detecta delimitadores', () => {
        expect(hasLatex('\\left(x\\right)')).toBe(true);
        expect(hasLatex('\\bigl[x\\bigr]')).toBe(true);
        expect(hasLatex('(x)')).toBe(false);
    });
    
    test('Detecta operatorname', () => {
        expect(hasLatex('\\operatorname{sen}(30)')).toBe(true);
    });
    
    test('Detecta formatação', () => {
        expect(hasLatex('\\mathrm{sin}(x)')).toBe(true);
        expect(hasLatex('\\text{resultado}')).toBe(true);
    });
    
    test('Não dá falso positivo com expressões normais', () => {
        expect(hasLatex('2+3')).toBe(false);
        expect(hasLatex('sin(30)+cos(60)')).toBe(false);
        expect(hasLatex('2^3')).toBe(false);
        expect(hasLatex('sqrt(16)')).toBe(false);
        expect(hasLatex('log(100)')).toBe(false);
    });
});
