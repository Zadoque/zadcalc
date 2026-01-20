const toSciNotation = (expression) => {
    // Converte a entrada para número
    let num = typeof expression === 'string' ? parseFloat(expression) : expression;
    
    // Validação: retorna null para valores inválidos
    if (isNaN(num) || !isFinite(num)) {
        return null;
    }
    
    // Caso especial: zero
    if (num === 0) {
        return '0e+0';
    }
    
    // Determina o sinal
    const sign = num < 0 ? '-' : '';
    num = Math.abs(num);
    
    // Calcula o expoente
    const exponent = Math.floor(Math.log10(num));
    
    // Calcula a mantissa (significand)
    let mantissa = num / Math.pow(10, exponent);
    
    // Arredonda a mantissa para 15 dígitos significativos (precisão do JavaScript)
    // Isso resolve problemas de imprecisão de ponto flutuante
    mantissa = parseFloat(mantissa.toPrecision(15));
    
    // Converte mantissa para string e remove trailing zeros
    let mantissaStr = mantissa.toString();
    
    // Remove zeros desnecessários após o ponto decimal
    if (mantissaStr.includes('.')) {
        mantissaStr = mantissaStr.replace(/\.?0+$/, '');
        // Se ficou apenas o ponto, remove também
        mantissaStr = mantissaStr.replace(/\.$/, '');
    }
    
    // Formata o expoente com sinal
    const exponentSign = exponent >= 0 ? '+' : '';
    
    // Constrói a notação científica
    return `${sign}${mantissaStr}e${exponentSign}${exponent}`;
};

module.exports = toSciNotation;
