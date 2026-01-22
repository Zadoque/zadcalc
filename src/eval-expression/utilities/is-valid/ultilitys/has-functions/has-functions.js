/**
 * Checks if expression contains mathematical functions
 * 
 * @param {string} expression - The expression to check
 * @returns {boolean} True if contains functions, false otherwise
 * 
 * @example
 * hasFunctions("2+3")        // false
 * hasFunctions("sqrt(9)")    // true
 * hasFunctions("sin(30)+2")  // true
 */
const hasFunctions = (expression) => {
    // Detecta padrão: letras minúsculas seguidas de '('
    return /[a-z]+\(/.test(expression);
};

module.exports = hasFunctions;
