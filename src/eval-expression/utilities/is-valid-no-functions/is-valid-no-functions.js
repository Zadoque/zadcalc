/**
 * Validates a mathematical expression string for proper syntax and structure
 *
 * @param {string} expression - The mathematical expression to validate
 * @returns {boolean} Returns true if the expression is valid, false otherwise
 *
 * @description
 * Performs the following validations:
 * 1. Checks for empty expressions
 * 2. Validates that expression doesn't start with * or /
 * 3. Ensures only valid characters are used (numbers, operators, brackets, dots)
 * 4. Checks for invalid patterns using regex:
 *    - Two consecutive operators (++, --, +*, etc.)
 *    - Empty or operator-only brackets ({}, {+}, [], [*], etc.)
 *    - Multiplication/division immediately after opening brackets
 *    - Invalid decimal point usage
 * 5. Verifies matching pairs of brackets
 *
 * @example
 * isValid("2+2")           // returns true
 * isValid("2++2")          // returns false (consecutive operators)
 * isValid("2.3.4")         // returns false (multiple decimal points)
 * isValid("{}")            // returns false (empty brackets)
 * isValid("2+{3-4}")       // returns true
 * isValid("2+{3-4")        // returns false (unmatched brackets)
 * isValid("*2")            // returns false (starts with multiplication operator )
 */
const isValidNoFunctions = (expression) => {
    expression = expression.replace(/\s/g, '');

    if (expression.length === 0) {
        return false;
    }
    if (/^[*/]/.test(expression)) {
        return false;
    }
    if (/[^e\d\-+*\/\{\[\(\)\]\}\.\^]/.test(expression)) {
        return false;
    }
    const validations = [
        /[\+\-\^\*\/]{2}(?!.*e[+-]?\d)/,  // Operadores duplos (exceto notação científica)
        /(?<![0-9])[e]/,                  // 'e' sem número antes
        /[e](?![+-]?\d)/,                 // 'e' sem expoente válido
        /[e][+-](?!\d)/,                  // 'e+' ou 'e-' sem dígito
        /[e][+-]?\d+[e]/,                // Dois 'e' no mesmo número
        /[e][\+\-]?\d+\./,                 // Ponto decimal após expoente
        /\.(?!\d+)/,                       // Ponto sem dígitos depois
        /\.\d+\./,                         // Múltiplos pontos
        /(?<!\d)\./,                       // Ponto sem dígito antes
        /[\+\-\*\^\/][\}\]\)]/,           // Operador antes de fechar bracket
        /[\{\[\(][\^\*\/]/,                // *, /, ^ após abrir bracket
        /[\+\-\*\/\^]$/,                   // Termina com operador
        /^[\*\^\/]/,                       // Começa com *, ^, /
        /[\{\[\(][\+\-\*\/\^]*[\}\]\)]/   // Brackets vazios ou só com operadores
    ];

    for (let pattern of validations) {
        if (pattern.test(expression)) {
            return false;
        }
    }
    // Mais limpo e direto ao ponto
    if (/[\{\[\(\)\]\}]/.test(expression)) {
        return !hasBracketMismatch(expression);
    }
    return true;
};

function hasBracketMismatch(expr) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };

    for (let char of expr) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return true; // Fecha sem abrir
            }

            const lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return true; // Fecha com tipo errado
            }
        }
    }

    return stack.length > 0; // Abre sem fechar
}
module.exports = isValidNoFunctions;