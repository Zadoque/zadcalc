const toSciNotation = require('./../../../../src/eval-expression/utilities/to-sci-notation/to-sci-notation');

describe('toSciNotation - Casos Básicos', () => {
    test('toSciNotation 0.5 must return 5e-1', () => {
        expect(toSciNotation('0.5')).toBe('5e-1');
    });

    test('toSciNotation 1 must return 1e+0', () => {
        expect(toSciNotation(1)).toBe('1e+0');
    });

    test('toSciNotation 10 must return 1e+1', () => {
        expect(toSciNotation(10)).toBe('1e+1');
    });

    test('toSciNotation 100 must return 1e+2', () => {
        expect(toSciNotation(100)).toBe('1e+2');
    });

    test('toSciNotation 0.1 must return 1e-1', () => {
        expect(toSciNotation(0.1)).toBe('1e-1');
    });

    test('toSciNotation 0.01 must return 1e-2', () => {
        expect(toSciNotation(0.01)).toBe('1e-2');
    });
});

describe('toSciNotation - Números Decimais', () => {
    test('toSciNotation 123.456 must return 1.23456e+2', () => {
        expect(toSciNotation(123.456)).toBe('1.23456e+2');
    });

    test('toSciNotation 0.00123 must return 1.23e-3', () => {
        expect(toSciNotation(0.00123)).toBe('1.23e-3');
    });

    test('toSciNotation 9.8 must return 9.8e+0', () => {
        expect(toSciNotation(9.8)).toBe('9.8e+0');
    });

    test('toSciNotation 0.0456 must return 4.56e-2', () => {
        expect(toSciNotation(0.0456)).toBe('4.56e-2');
    });

    test('toSciNotation 7.89 must return 7.89e+0', () => {
        expect(toSciNotation(7.89)).toBe('7.89e+0');
    });
});

describe('toSciNotation - Números Grandes', () => {
    test('toSciNotation 1000 must return 1e+3', () => {
        expect(toSciNotation(1000)).toBe('1e+3');
    });

    test('toSciNotation 1000000 must return 1e+6', () => {
        expect(toSciNotation(1000000)).toBe('1e+6');
    });

    test('toSciNotation 123456789 must return 1.23456789e+8', () => {
        expect(toSciNotation(123456789)).toBe('1.23456789e+8');
    });

    test('toSciNotation 5.5e10 must return 5.5e+10', () => {
        expect(toSciNotation(5.5e10)).toBe('5.5e+10');
    });

    test('toSciNotation 9.99e15 must return 9.99e+15', () => {
        expect(toSciNotation(9.99e15)).toBe('9.99e+15');
    });
});

describe('toSciNotation - Números Pequenos', () => {
    test('toSciNotation 0.00001 must return 1e-5', () => {
        expect(toSciNotation(0.00001)).toBe('1e-5');
    });

    test('toSciNotation 0.000000001 must return 1e-9', () => {
        expect(toSciNotation(0.000000001)).toBe('1e-9');
    });

    test('toSciNotation 3.14e-8 must return 3.14e-8', () => {
        expect(toSciNotation(3.14e-8)).toBe('3.14e-8');
    });

    test('toSciNotation 0.0000123456 must return 1.23456e-5', () => {
        expect(toSciNotation(0.0000123456)).toBe('1.23456e-5');
    });

    test('toSciNotation 1e-15 must return 1e-15', () => {
        expect(toSciNotation(1e-15)).toBe('1e-15');
    });
});

describe('toSciNotation - Números Negativos', () => {
    test('toSciNotation -1 must return -1e+0', () => {
        expect(toSciNotation(-1)).toBe('-1e+0');
    });

    test('toSciNotation -123.456 must return -1.23456e+2', () => {
        expect(toSciNotation(-123.456)).toBe('-1.23456e+2');
    });

    test('toSciNotation -0.5 must return -5e-1', () => {
        expect(toSciNotation(-0.5)).toBe('-5e-1');
    });

    test('toSciNotation -1000 must return -1e+3', () => {
        expect(toSciNotation(-1000)).toBe('-1e+3');
    });

    test('toSciNotation -0.00001 must return -1e-5', () => {
        expect(toSciNotation(-0.00001)).toBe('-1e-5');
    });

    test('toSciNotation -9.8765e7 must return -9.8765e+7', () => {
        expect(toSciNotation(-9.8765e7)).toBe('-9.8765e+7');
    });
});

describe('toSciNotation - Casos Especiais', () => {
    test('toSciNotation 0 must return 0e+0', () => {
        expect(toSciNotation(0)).toBe('0e+0');
    });

    test('toSciNotation -0 must return 0e+0', () => {
        expect(toSciNotation(-0)).toBe('0e+0');
    });

    test('toSciNotation 2 must return 2e+0', () => {
        expect(toSciNotation(2)).toBe('2e+0');
    });

    test('toSciNotation 5 must return 5e+0', () => {
        expect(toSciNotation(5)).toBe('5e+0');
    });

    test('toSciNotation 0.2 must return 2e-1', () => {
        expect(toSciNotation(0.2)).toBe('2e-1');
    });

    test('toSciNotation 0.25 must return 2.5e-1', () => {
        expect(toSciNotation(0.25)).toBe('2.5e-1');
    });
});

describe('toSciNotation - Entrada como String', () => {
    test('toSciNotation "100" must return 1e+2', () => {
        expect(toSciNotation('100')).toBe('1e+2');
    });

    test('toSciNotation "0.001" must return 1e-3', () => {
        expect(toSciNotation('0.001')).toBe('1e-3');
    });

    test('toSciNotation "-456.78" must return -4.5678e+2', () => {
        expect(toSciNotation('-456.78')).toBe('-4.5678e+2');
    });

    test('toSciNotation "3.14159" must return 3.14159e+0', () => {
        expect(toSciNotation('3.14159')).toBe('3.14159e+0');
    });

    test('toSciNotation "1e5" must return 1e+5', () => {
        expect(toSciNotation('1e5')).toBe('1e+5');
    });
});

describe('toSciNotation - Constantes Científicas', () => {
    test('velocidade da luz aproximada 299792458 m/s', () => {
        expect(toSciNotation(299792458)).toBe('2.99792458e+8');
    });

    test('constante de Planck aproximada 6.62607015e-34', () => {
        expect(toSciNotation(6.62607015e-34)).toBe('6.62607015e-34');
    });

    test('número de Avogadro aproximado 6.022e23', () => {
        expect(toSciNotation(6.022e23)).toBe('6.022e+23');
    });

    test('carga do elétron aproximada 1.602e-19', () => {
        expect(toSciNotation(1.602e-19)).toBe('1.602e-19');
    });
});

describe('toSciNotation - Precisão de Ponto Flutuante', () => {
    test('toSciNotation 0.3 deve lidar com imprecisão de float', () => {
        const result = toSciNotation(0.3);
        expect(result).toBe('3e-1');
    });

    test('toSciNotation 0.1 + 0.2 deve lidar com soma imprecisa', () => {
        const result = toSciNotation(0.1 + 0.2);
        expect(result).toBe('3e-1');
    });

    test('toSciNotation 1/3 deve converter dízima periódica', () => {
        const result = toSciNotation(1/3);
        expect(result).toMatch(/3\.333+\d*e-1/);
    });

    test('toSciNotation 2/3 deve converter dízima periódica', () => {
        const result = toSciNotation(2/3);
        expect(result).toMatch(/6\.666+\d*e-1/);
    });

    test('toSciNotation 1/7 deve converter dízima periódica', () => {
        const result = toSciNotation(1/7);
        expect(result).toMatch(/1\.42857\d*e-1/);
    });
});

describe('toSciNotation - Valores Inválidos', () => {
    test('toSciNotation NaN must return null', () => {
        expect(toSciNotation(NaN)).toBeNull();
    });

    test('toSciNotation Infinity must return null', () => {
        expect(toSciNotation(Infinity)).toBeNull();
    });

    test('toSciNotation -Infinity must return null', () => {
        expect(toSciNotation(-Infinity)).toBeNull();
    });

    test('toSciNotation "invalid" must return null', () => {
        expect(toSciNotation('invalid')).toBeNull();
    });

    test('toSciNotation undefined must return null', () => {
        expect(toSciNotation(undefined)).toBeNull();
    });
});

describe('toSciNotation - Testes Adicionais', () => {
    test('toSciNotation 0.0001 must return 1e-4', () => {
        expect(toSciNotation(0.0001)).toBe('1e-4');
    });

    test('toSciNotation 50000 must return 5e+4', () => {
        expect(toSciNotation(50000)).toBe('5e+4');
    });

    test('toSciNotation 0.000050 must return 5e-5', () => {
        expect(toSciNotation(0.000050)).toBe('5e-5');
    });

    test('toSciNotation 3.5 must return 3.5e+0', () => {
        expect(toSciNotation(3.5)).toBe('3.5e+0');
    });

    test('toSciNotation 12.34 must return 1.234e+1', () => {
        expect(toSciNotation(12.34)).toBe('1.234e+1');
    });

    test('toSciNotation 0.9999 must return 9.999e-1', () => {
        expect(toSciNotation(0.9999)).toBe('9.999e-1');
    });

    test('toSciNotation 1.11111 must return 1.11111e+0', () => {
        expect(toSciNotation(1.11111)).toBe('1.11111e+0');
    });
});
