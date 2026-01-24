const latexToZadcalc = require("../../../../src/eval-expression/utilities/latex-to-zadcalc/latex-to-zadcalc");


describe('latexToZadcalc - Operações Básicas', () => {
    test('Converte operadores básicos', () => {
        expect(latexToZadcalc('2+3')).toBe('2+3');
        expect(latexToZadcalc('5-2')).toBe('5-2');
        expect(latexToZadcalc('2 \\times 3')).toBe('2*3');
        expect(latexToZadcalc('2 \\cdot 3')).toBe('2*3');
        expect(latexToZadcalc('6 \\div 2')).toBe('6/2');
    });
    
    test('Converte frações', () => {
        expect(latexToZadcalc('\\frac{1}{2}')).toBe('(1)/(2)');
        expect(latexToZadcalc('\\dfrac{3}{4}')).toBe('(3)/(4)');
        expect(latexToZadcalc('\\tfrac{5}{6}')).toBe('(5)/(6)');
    });
    
    test('Converte frações aninhadas', () => {
        expect(latexToZadcalc('\\frac{\\frac{1}{2}}{3}')).toBe('((1)/(2))/(3)');
        expect(latexToZadcalc('\\frac{1}{\\frac{2}{3}}')).toBe('(1)/((2)/(3))');
    });
});

describe('latexToZadcalc - Potências e Raízes', () => {
    test('Converte potências', () => {
        expect(latexToZadcalc('x^{2}')).toBe('x^(2)');
        expect(latexToZadcalc('2^{3}')).toBe('2^(3)');
        expect(latexToZadcalc('x^2')).toBe('x^2');
    });
    
    test('Converte raízes', () => {
        expect(latexToZadcalc('\\sqrt{4}')).toBe('sqrt(4)');
        expect(latexToZadcalc('\\sqrt{16}')).toBe('sqrt(16)');
        expect(latexToZadcalc('\\sqrt[3]{8}')).toBe('nroot(8,3)');
        expect(latexToZadcalc('\\sqrt[4]{16}')).toBe('nroot(16,4)');
    });
});

describe('latexToZadcalc - Notação Científica', () => {
    test('Converte notação científica com \\times', () => {
        expect(latexToZadcalc('2.3 \\times 10^{-10}')).toBe('2.3e-10');
        expect(latexToZadcalc('1.5 \\times 10^{5}')).toBe('1.5e5');
        expect(latexToZadcalc('6.022 \\times 10^{23}')).toBe('6.022e23');
    });
    
    test('Converte notação científica com \\cdot', () => {
        expect(latexToZadcalc('2.3 \\cdot 10^{-10}')).toBe('2.3e-10');
        expect(latexToZadcalc('1.5 \\cdot 10^{5}')).toBe('1.5e5');
    });
    
    test('Não converte potências normais de 10', () => {
        expect(latexToZadcalc('10^{-10}')).toBe('10^(-10)');
        expect(latexToZadcalc('10^{5}')).toBe('10^(5)');
    });
});

describe('latexToZadcalc - Constantes', () => {
    test('Converte constantes', () => {
        expect(latexToZadcalc('\\pi')).toBe('PI');
        expect(latexToZadcalc('\\pi*2')).toBe('PI*2');
        expect(latexToZadcalc('\\Pi')).toBe('PI');
        expect(latexToZadcalc('e')).toBe('E');
        expect(latexToZadcalc('\\tau')).toBe('TAU');
        expect(latexToZadcalc('\\phi')).toBe('PHI');
        expect(latexToZadcalc('\\varphi')).toBe('PHI');
    });
    
    test('Constante e não interfere com notação científica', () => {
        expect(latexToZadcalc('2.3 \\times 10^{5}')).toBe('2.3e5');
        expect(latexToZadcalc('e^{2}')).toBe('E^(2)');
    });
});

describe('latexToZadcalc - Funções Trigonométricas', () => {
    test('Converte funções com parênteses', () => {
        expect(latexToZadcalc('\\sin(x)')).toBe('sin(x)');
        expect(latexToZadcalc('\\cos(30)')).toBe('cos(30)');
        expect(latexToZadcalc('\\tan(45)')).toBe('tan(45)');
    });
    
    test('Converte funções sem parênteses', () => {
        expect(latexToZadcalc('\\sin x')).toBe('sin(x)');
        expect(latexToZadcalc('\\cos 30')).toBe('cos(30)');
        expect(latexToZadcalc('\\tan 45')).toBe('tan(45)');
    });
    
    test('Converte funções inversas', () => {
        expect(latexToZadcalc('\\arcsin(x)')).toBe('asin(x)');
        expect(latexToZadcalc('\\arccos(x)')).toBe('acos(x)');
        expect(latexToZadcalc('\\arctan(x)')).toBe('atan(x)');
    });
    
    test('Converte notação de potência inversa', () => {
        expect(latexToZadcalc('\\sin^{-1}(x)')).toBe('asin(x)');
        expect(latexToZadcalc('\\cos^{-1}(x)')).toBe('acos(x)');
        expect(latexToZadcalc('\\tan^{-1}(x)')).toBe('atan(x)');
    });
});

describe('latexToZadcalc - Funções Hiperbólicas', () => {
    test('Converte funções hiperbólicas', () => {
        expect(latexToZadcalc('\\sinh(x)')).toBe('sinh(x)');
        expect(latexToZadcalc('\\cosh(x)')).toBe('cosh(x)');
        expect(latexToZadcalc('\\tanh(x)')).toBe('tanh(x)');
    });
    
    test('Converte funções hiperbólicas inversas', () => {
        expect(latexToZadcalc('\\sinh^{-1}(x)')).toBe('asinh(x)');
        expect(latexToZadcalc('\\cosh^{-1}(x)')).toBe('acosh(x)');
        expect(latexToZadcalc('\\tanh^{-1}(x)')).toBe('atanh(x)');
    });
});

describe('latexToZadcalc - Logaritmos', () => {
    test('Converte logaritmos', () => {
        expect(latexToZadcalc('\\ln(x)')).toBe('ln(x)');
        expect(latexToZadcalc('\\log(x)')).toBe('log(x)');
        expect(latexToZadcalc('\\exp(x)')).toBe('exp(x)');
    });
    
    test('Converte logaritmo com base', () => {
        expect(latexToZadcalc('\\log_{2}(8)')).toBe('log(8,2)');
        expect(latexToZadcalc('\\log_{10}(100)')).toBe('log(100,10)');
    });
});

describe('latexToZadcalc - Outras Funções', () => {
    test('Converte valor absoluto', () => {
        expect(latexToZadcalc('|x|')).toBe('abs(x)');
        expect(latexToZadcalc('\\left|x\\right|')).toBe('abs(x)');
    });
    
    test('Converte max e min', () => {
        expect(latexToZadcalc('\\max(3,7)')).toBe('max(3,7)');
        expect(latexToZadcalc('\\min(3,7)')).toBe('min(3,7)');
        expect(latexToZadcalc('\\max\\{3,7\\}')).toBe('max(3,7)');
    });
    
    test('Converte fatorial', () => {
        expect(latexToZadcalc('5!')).toBe('factorial(5)');
        expect(latexToZadcalc('n!')).toBe('factorial(n)');
    });
});

describe('latexToZadcalc - Delimitadores', () => {
    test('Remove \\left e \\right', () => {
        expect(latexToZadcalc('\\left(x\\right)')).toBe('(x)');
        expect(latexToZadcalc('\\left[x\\right]')).toBe('[x]');
        expect(latexToZadcalc('\\left\\{x\\right\\}')).toBe('(x)');
    });
    
    test('Converte chaves LaTeX', () => {
        expect(latexToZadcalc('\\{x\\}')).toBe('{x}');
    });
});

describe('latexToZadcalc - Casos Complexos', () => {
    test('Expressões complexas', () => {
        expect(latexToZadcalc('\\frac{\\sqrt{2}}{2}')).toBe('(sqrt(2))/(2)');
        expect(latexToZadcalc('\\sin\\left(\\frac{\\pi}{2}\\right)')).toBe('sin((PI)/(2))');
        expect(latexToZadcalc('e^{\\pi}')).toBe('E^(PI)');
        expect(latexToZadcalc('2\\pi r^{2}')).toBe('2PIr^(2)'); //embora zadcalc não suporta variável
    });
    
    test('Remove espaços corretamente', () => {
        expect(latexToZadcalc('2 \\times 3 + 4')).toBe('2*3+4');
        expect(latexToZadcalc('\\sqrt { 4 }')).toBe('sqrt(4)');
    });
});

describe('latexToZadcalc - Mathpix Real Cases', () => {
    test('Converte output do Mathpix com operatorname', () => {
        const latex = '\\frac{2-3+4}{2^{24}-2^{23}}-\\operatorname{sen}(92-3)';
        const result = latexToZadcalc(latex);
        expect(result).toBe('(2-3+4)/(2^(24)-2^(23))-sin(92-3)');
    });
    
    test('Mapeia funções em português', () => {
        expect(latexToZadcalc('\\operatorname{sen}(30)')).toBe('sin(30)');
        expect(latexToZadcalc('\\operatorname{tg}(45)')).toBe('tg(45)');
        expect(latexToZadcalc('\\operatorname{senh}(x)')).toBe('sinh(x)');
    });
});
