const smartToFixed = require('../../../../src/eval-expression/utilities/smart-to-fixed/smart-to-fixed');

describe('smartToFixed – floating point normalization & identities', () => {

    // ============================================================
    // FP NOISE (representational)
    // ============================================================

    test('corrige erros clássicos de ponto flutuante', () => {
        expect(smartToFixed('0.30000000000000004')).toBe('0.3');
        expect(smartToFixed('1.0000000000000002')).toBe('1');
        expect(smartToFixed('2.9999999999999996')).toBe('3');
        expect(smartToFixed('-1.0000000000000002')).toBe('-1');
        expect(smartToFixed('-2.9999999999999996')).toBe('-3');
    });

    test('corrige quase inteiros positivos', () => {
        expect(smartToFixed('9.999999999999998')).toBe('10');
        expect(smartToFixed('99.00000000000001')).toBe('99');
        expect(smartToFixed('1000.0000000000001')).toBe('1000');
    });

    test('corrige quase inteiros negativos', () => {
        expect(smartToFixed('-9.999999999999998')).toBe('-10');
        expect(smartToFixed('-99.00000000000001')).toBe('-99');
        expect(smartToFixed('-1000.0000000000001')).toBe('-1000');
    });



    test('identidades ln(exp(x))', () => {
        expect(smartToFixed('1.0000000000000002')).toBe('1');
        expect(smartToFixed('2.9999999999999996')).toBe('3');
    });

    test('identidades trigonométricas numéricas', () => {
        expect(smartToFixed('0.9999999999999999')).toBe('1');
        expect(smartToFixed('-0.9999999999999999')).toBe('-1');
        expect(smartToFixed('6.123233995736766e-17')).toBe('0');
    });

    // ============================================================
    // NÃO DEVE CORRIGIR (diferença real, não ruído)
    // ============================================================

    test('não corrige números legitimamente diferentes', () => {
        expect(smartToFixed('10.0001')).toBe('10.0001');
        expect(smartToFixed('9.999')).toBe('9.999');
        expect(smartToFixed('-9.999')).toBe('-9.999');
    });

    test('não corrige decimais periódicos aproximados', () => {
        expect(smartToFixed('0.3333333333333333')).toBe('0.333333333333333');
        expect(smartToFixed('0.6666666666666666')).toBe('0.666666666666667');
    });

    // ============================================================
    // LIMITES DE PRECISÃO
    // ============================================================

    test('limites de precisão IEEE-754', () => {
        expect(smartToFixed('9007199254740991')).toBe('9007199254740991'); // MAX_SAFE_INTEGER
        expect(smartToFixed('9007199254740992')).toBe('9007199254740992');
    });


    // ============================================================
    // ZERO E SINAL
    // ============================================================

    test('zero negativo não deve vazar', () => {
        expect(smartToFixed('-0')).toBe('0');
        expect(smartToFixed('-0.0000000000000000')).toBe('0');
    });

    test('zero com ruído', () => {
        expect(smartToFixed('1e-16')).toBe('0');
        expect(smartToFixed('-1e-16')).toBe('0');
    });

    // ============================================================
    // CIENTÍFICA
    // ============================================================


    test('converte científica simples para decimal', () => {
        expect(smartToFixed('1e0')).toBe('1');
        expect(smartToFixed('1e1')).toBe('10');
        expect(smartToFixed('1e-1')).toBe('0.1');
    });

    // ============================================================
    // INPUT NÃO NUMÉRICO
    // ============================================================


    test('NaN e Infinity', () => {
        expect(smartToFixed('NaN')).toBe('NaN');
        expect(smartToFixed('Infinity')).toBe('Infinity');
        expect(smartToFixed('-Infinity')).toBe('-Infinity');
    });

});


describe('smartToFixed – numeric normalization only', () => {

  test('remove trailing zeros', () => {
    expect(smartToFixed('1.230000')).toBe('1.23');
    expect(smartToFixed('10.000')).toBe('10');
  });

  test('classic floating point noise', () => {
    expect(smartToFixed('1.2100000000000002')).toBe('1.21');
    expect(smartToFixed('0.30000000000000004')).toBe('0.3');
  });

  test('does NOT fix mathematical identities', () => {
    expect(smartToFixed('10.0000000001')).toBe('10.0000000001');
    expect(smartToFixed('4.999999999999999')).toBe('5');
  });

  test('scientific notation is not preserved', () => {
    expect(smartToFixed('1e20')).toBe('100000000000000000000');
  });


  test('negative zero normalized', () => {
    expect(smartToFixed('-0')).toBe('0');
    expect(smartToFixed('-0.000000000000')).toBe('0');
  });

});
