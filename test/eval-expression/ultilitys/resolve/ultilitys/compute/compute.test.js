const compute = require('../../../../../../src/eval-expression/utilities/resolve/utilities/compute/compute');

describe('Operação de Adição (+)', () => {
    test('deve retornar +17 para [9, 8]', () => {
        expect(compute([9, 8], '+')).toBe('+17');
    });

    test('deve retornar -17 para [-9, -8]', () => {
        expect(compute([-9, -8], '+')).toBe('-17');
    });

    test('deve retornar +2 para [-5, 7]', () => {
        expect(compute([-5, 7], '+')).toBe('+2');
    });

    test('deve retornar +0 para [5, -5]', () => {
        expect(compute([5, -5], '+')).toBe('+0');
    });

    test('deve retornar +300 para [152, 148]', () => {
        expect(compute([152, 148], '+')).toBe('+300');
    });
});

describe('Operação de Subtração (-)', () => {
    test('deve retornar +2 para [5, 3]', () => {
        expect(compute([5, 3], '-')).toBe('+2');
    });

    test('deve retornar -2 para [3, 5]', () => {
        expect(compute([3, 5], '-')).toBe('-2');
    });

    test('deve retornar +0 para [10, 10]', () => {
        expect(compute([10, 10], '-')).toBe('+0');
    });

    test('deve retornar +10 para [-5, -15]', () => {
        expect(compute([-5, -15], '-')).toBe('+10');
    });
});

describe('Operação de Multiplicação (*)', () => {
    test('deve retornar +15 para [5, 3]', () => {
        expect(compute([5, 3], '*')).toBe('+15');
    });

    test('deve retornar -15 para [-5, 3]', () => {
        expect(compute([-5, 3], '*')).toBe('-15');
    });

    test('deve retornar +15 para [-5, -3]', () => {
        expect(compute([-5, -3], '*')).toBe('+15');
    });

    test('deve retornar +0 para [5, 0]', () => {
        expect(compute([5, 0], '*')).toBe('+0');
    });

    test('deve retornar +0.6 para [0.2, 3]', () => {
        expect(compute([0.2, 3], '*')).toBe('+0.6000000000000001');
    });
});

describe('Operação de Divisão (/)', () => {
    test('deve retornar +3 para [6, 2]', () => {
        expect(compute([6, 2], '/')).toBe('+3');
    });

    test('deve retornar +11.7 para [11.7, 1]', () => {
        expect(compute([11.7, 1], '/')).toBe('+11.7');
    });

    test('deve retornar -2.5 para [-5, 2]', () => {
        expect(compute([-5, 2], '/')).toBe('-2.5');
    });

    test('deve retornar +2.5 para [5, 2]', () => {
        expect(compute([5, 2], '/')).toBe('+2.5');
    });


   
});

describe('Operação de Exponenciação (^)', () => {
    test('deve retornar +8 para [2, 3]', () => {
        expect(compute([2, 3], '^')).toBe('+8');
    });

    test('deve retornar +25 para [5, 2]', () => {
        expect(compute([5, 2], '^')).toBe('+25');
    });

    test('deve retornar +1 para [10, 0]', () => {
        expect(compute([10, 0], '^')).toBe('+1');
    });

    test('deve retornar +0.25 para [2, -2]', () => {
        expect(compute([2, -2], '^')).toBe('+0.25');
    });

    test('deve retornar +1 para [-1, 2]', () => {
        expect(compute([-1, 2], '^')).toBe('+1');
    });

    test('deve retornar -1 para [-1, 3]', () => {
        expect(compute([-1, 3], '^')).toBe('-1');
    });
});


describe('Casos Extremos', () => {
    test('deve lidar com precisão de ponto flutuante', () => {
        expect(compute([0.1, 0.2], '+')).toBe('+0.30000000000000004');
    });

    test('deve retornar +0 para [0, 0] com adição', () => {
        expect(compute([0, 0], '+')).toBe('+0');
    });

    test('deve retornar +0 para [0, 0] com multiplicação', () => {
        expect(compute([0, 0], '*')).toBe('+0');
    });

    // CORRIGIDO: 1e308 * 2 causa overflow e retorna Infinity
    test('deve retornar +Infinity para overflow numérico', () => {
        expect(compute([1e308, 2], '*')).toBe('+Infinity');
    });

    test('deve lidar com números grandes sem overflow', () => {
        expect(compute([1e100, 2], '*')).toBe('+2e+100');
    });
});