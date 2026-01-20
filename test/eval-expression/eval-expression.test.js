const mathResolver = require('../../src/eval-expression/eval-expression');
const evalExpression = mathResolver.evalExpression;
test(`evalExpression {-2[9.4/8.0]6-4/(5-3)-8} must return 2*6*8`, () => {
    expect(evalExpression('{-2[9.4/8.0]6-4/(5-3)-8}')).toBe('-24.1');
});

test(`evalExpression 1/90 must return 2*6*8`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression('1/90')).toBe('+1/90');
});



test(`evalExpression 3+2/3-5/7+12/78 must return 848/273`, () => {
    mathResolver.settings.frac_mode = true;
    expect(evalExpression('3+2/3-5/7+12/78')).toBe('+848/273');
});
mathResolver.frac_mode = false;
test(`evalExpression 1/3+2/3 must return +3.106227106`, () => {
    expect(evalExpression('1/3+2/3')).toBe('+1');
});




describe('Casos de Ponto Flutuante em Multiplicação', () => {
    mathResolver.settings.frac_mode = false;
    mathResolver.settings.positive_sign = true;
    // Caso clássico: 0.1 * 0.2
    test('evalExpression 0.1*0.2 deve lidar com imprecisão', () => {
        // Resultado real: 0.020000000000000004
        mathResolver.settings.frac_mode = false;
        expect(evalExpression('0.1*0.2')).toBe('+0.02000');
    });

    // 0.3 * 0.3
    test('evalExpression 0.3*0.3 deve retornar valor impreciso', () => {
        // Resultado real: 0.08999999999999999

        expect(evalExpression('0.3*0.3')).toBe('+0.09');
    });

    // 0.7 * 0.1
    test('evalExpression 0.7*0.1 deve retornar valor impreciso', () => {
        // Resultado real: 0.06999999999999999
        expect(evalExpression('0.7*0.1')).toBe('+0.07000');
    });

    // 0.2 * 3 (do exemplo anterior)
    test('evalExpression 0.2*3 deve retornar valor impreciso', () => {
        // Resultado real: 0.6000000000000001
        expect(evalExpression('0.2*3')).toBe('+0.60000');
    });

    // Multiplicação com decimais longos
    test('evalExpression 1.1*1.1 deve retornar valor impreciso', () => {
        // Resultado real: 1.2100000000000002
        expect(evalExpression('1.1*1.1')).toBe('+1.21000');
    });

    // Caso com divisão seguida de multiplicação
    test('evalExpression (1/3)*3 deve compensar erros', () => {
        // (1/3) = 0.3333... então (1/3)*3 pode não ser exatamente 1
        // mas JavaScript arredonda bem esse caso
        expect(evalExpression('(1/3)*3')).toBe('+1');
    });

    // Multiplicação que causa acúmulo de erro
    test('evalExpression 0.1*0.1*0.1 deve acumular imprecisão', () => {
        // Resultado: 0.0010000000000000002
        expect(evalExpression('0.1*0.1*0.1')).toBe('+0.00100');
    });

    // Expressão complexa com multiplicação e soma
    test('evalExpression 0.1+0.2*0.3 deve ter imprecisão composta', () => {
        // 0.2*0.3 = 0.06000000000000001
        // 0.1 + 0.06000000000000001 = 0.16000000000000003
        expect(evalExpression('0.1+0.2*0.3')).toBe('+0.16');
    });

    // Caso que funciona corretamente (sem erro)
    test('evalExpression 0.5*0.5 deve ser preciso', () => {
        // 0.5 é representado exatamente em binário (2^-1)
        expect(evalExpression('0.5*0.5')).toBe('+0.25');
    });
    
    test('evalExpression 0.25*4 deve ser preciso', () => {
        // Potências de 2 são precisas
        expect(evalExpression('0.25*4')).toBe('+1');
    });

    // Caso extremo: número muito pequeno
    test('evalExpression 0.0001*0.0001 deve ter precisão', () => {
        // Resultado: 0.00000001 (10^-8)
        expect(evalExpression('0.0001*0.0001')).toBe('+1e-8');
    });

    // Expressão com parênteses e multiplicação
    test('evalExpression (0.1+0.2)*10 deve amplificar erro', () => {
        // (0.1+0.2) = 0.30000000000000004
        // 0.30000000000000004 * 10 = 3.0000000000000004
        mathResolver.settings.frac_mode = false;
        expect(evalExpression('(0.1+0.2)*10')).toBe('+3.00000');
    });
});
