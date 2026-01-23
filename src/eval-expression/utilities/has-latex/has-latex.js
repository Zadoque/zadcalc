/**
 * Detects if an expression contains LaTeX commands
 * @param {string} expression - Expression to check
 * @returns {boolean} True if contains LaTeX syntax
 */
function hasLatex(expression) {
    // Regex otimizado: detecta qualquer comando LaTeX \comando
    // que seja um dos suportados pelo conversor
    const latexRegex = /\\(?:[dt]?frac|sqrt|sin|cos|tan|sec|csc|cot|arcsin|arccos|arctan|sinh|cosh|tanh|ln|log|exp|pi|Pi|tau|phi|varphi|times|cdot|div|left|right|[bB]ig[glr]?|operatorname|mathrm|mathbf|text|[,;:]|quad|qquad|[{}\[\]])/;
    
    return latexRegex.test(expression);
}

module.exports = hasLatex;
