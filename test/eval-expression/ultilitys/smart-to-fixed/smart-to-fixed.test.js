const smartToFixed = require('../../../../src/eval-expression/utilities/smart-to-fixed/smart-to-fixed');

describe('smartToFixed', () => {

    test('remove zeros trailing de ponto flutuante', () => {
        expect(smartToFixed('0.0200000000000')).toBe('0.02');
        expect(smartToFixed('1.230000')).toBe('1.23');
        expect(smartToFixed('10.000000')).toBe('10');
        expect(smartToFixed('0.000')).toBe('0');
    });

    test('preserva precisão sem zeros trailing', () => {
        expect(smartToFixed('0.333333333')).toBe('0.333333333');
        expect(smartToFixed('1.23456789')).toBe('1.23456789');
        expect(smartToFixed('0.123456789')).toBe('0.123456789');
    });

    test('inteiros sem mudança', () => {
        expect(smartToFixed('42')).toBe('42');
        expect(smartToFixed('0')).toBe('0');
        expect(smartToFixed('-5')).toBe('-5');
    });

    test('números negativos', () => {
        expect(smartToFixed('-0.020000')).toBe('-0.02');
        expect(smartToFixed('-1.23000')).toBe('-1.23');
        expect(smartToFixed('-10.000')).toBe('-10');
    });


    test('null e undefined', () => {
        expect(smartToFixed(null)).toBe(null);
        expect(smartToFixed(undefined)).toBe(undefined);
    });

    test('científica e edge cases', () => {
        expect(smartToFixed('1e-10')).toBe('1e-10');  // parseFloat preserva
        expect(smartToFixed('123.456e0')).toBe('123.456');
    });

    test(`ponto flutuante`, () => {
        expect(smartToFixed(`1.2100000000000002`)).toBe(`1.21`);
    });
});


