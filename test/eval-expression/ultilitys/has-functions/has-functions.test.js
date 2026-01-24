const hasFunctions = require("../../../../src/eval-expression/utilities/has-functions/has-functions");



describe('hasFunctions', () => {
    describe('Detecta funções', () => {
        test('detecta função simples', () => {
            expect(hasFunctions('sin(30)')).toBe(true);
        });
        
        test('detecta múltiplas funções', () => {
            expect(hasFunctions('sin(30)+cos(60)')).toBe(true);
        });
        
        test('detecta função no meio da expressão', () => {
            expect(hasFunctions('2+sqrt(4)+3')).toBe(true);
        });
        
        test('detecta função no início', () => {
            expect(hasFunctions('log(100)')).toBe(true);
        });
        
        test('detecta função no fim', () => {
            expect(hasFunctions('2+3+tan(45)')).toBe(true);
        });
        
        test('detecta funções aninhadas', () => {
            expect(hasFunctions('sin(cos(30))')).toBe(true);
        });
        
        test('detecta função com múltiplos parâmetros', () => {
            expect(hasFunctions('log(100,10)')).toBe(true);
        });
    });
    
    describe('NÃO detecta quando não há função', () => {
        test('expressão só com números', () => {
            expect(hasFunctions('2+3')).toBe(false);
        });
        
        test('expressão com constantes', () => {
            expect(hasFunctions('PI*2')).toBe(false);
        });
        
        test('string vazia', () => {
            expect(hasFunctions('')).toBe(false);
        });
        
        test('função sem parênteses', () => {
            expect(hasFunctions('sin')).toBe(false);
        });
        
        test('letras maiúsculas com parênteses', () => {
            expect(hasFunctions('SIN(30)')).toBe(false);
        });
    });
    
    describe('Edge cases', () => {
        test('parênteses sem função', () => {
            expect(hasFunctions('(2+3)*4')).toBe(false);
        });
        
        test('função com número grudado', () => {
            expect(hasFunctions('2sin(30)')).toBe(true);
        });
    });
});
