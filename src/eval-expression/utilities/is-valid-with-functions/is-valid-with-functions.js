const isValidNoFunctions = require("../is-valid-no-functions/is-valid-no-functions");

/**
 * Validates mathematical expressions containing functions
 * @param {string} expression - Mathematical expression with functions
 * @returns {boolean} True if valid, false otherwise
 * 
 * Supported functions:
 * - 1 parameter: sin, cos, tan, sqrt, cbrt, ln, exp, abs, factorial, sinh, cosh, tanh, asinh, acosh, atanh
 * - 2 parameters: pow, nroot, max, min
 * - 1-2 parameters: log
 * 
 * @example
 * isValidWithFunctions("sin(30)+abs(-5)") // true
 * isValidWithFunctions("max(3,factorial(5))") // true
 * isValidWithFunctions("sinh(log(100,10))") // true
 */

const isValidWithFunctions = (expression) => {
    // Verifica se há pelo menos 2 letras sem parênteses (ex: "ln34" ao invés de "ln(34)")
    if (/[a-z][a-z]+(?![a-z]*\()/.test(expression)) {
        return false;
    }

    let temp_expression = expression;

    while (/[a-z]+\((?!.*[a-z]+\()/.test(temp_expression)) {
        let func_str = temp_expression.match(/[a-z]+\((?!.*[a-z]+\()/);
        let end_pos = func_str.index + func_str[0].length;
        let close_pos = getClosePosition(temp_expression, end_pos);
        if (close_pos === -1) {
            return false;
        }
        let inside_str = temp_expression.slice(end_pos, close_pos);
        switch (func_str[0].slice(0, -1)) {//removes the '(' from the string
            //grouping one parameter cases:
            case 'sin':
            case 'sen':
            case 'cos':
            case 'tan':
            case 'tg':
            case 'sqrt':
            case 'cbrt':
            case 'ln':
            case 'acos':
            case 'asin':
            case 'asen':
            case 'atan':
            case 'atg':
            case 'exp':
            case 'sinh':
            case 'senh':
            case 'cosh':
            case 'tanh':
            case 'tgh':
            case 'asinh':
            case 'acosh':
            case 'atanh':
            case 'atgh':
            case 'factorial': 
            case 'fact':
            case 'abs':
                if (!isValidNoFunctions(inside_str)) {
                    return false;
                }
                break;
            case 'pow':
            case 'nroot':
            case 'max':
            case 'min':
                if (/,/.test(inside_str)) {
                    let parametes = inside_str.split(',');
                    if (!isValidNoFunctions(parametes[0]) || !isValidNoFunctions(parametes[1]) || parametes.length > 2) {
                        return false;
                    }
                } else {
                    return false;
                }
                break;
            case 'log':
                if (/,/.test(inside_str)) {
                    let parametes = inside_str.split(',');
                    if (!isValidNoFunctions(parametes[0]) || !isValidNoFunctions(parametes[1]) || parametes.length > 2) {
                        return false;
                    }
                } else {
                    if (!isValidNoFunctions(inside_str)) {
                        return false;
                    }
                }
                break;
            default:

                return false;
        }
        //Now to replace with 1, I gotta be carefull wit sen(2)sen(3), 2sen(2), (2+3)sen(1), [+3]sen(1), {+3}sen(1)
        //In other words, implicity multiplication
        //Multiplication before and after:
        const char_before = func_str.index > 0 ? temp_expression[func_str.index - 1] : '';
        const str_after = close_pos < (temp_expression.length - 1) ? temp_expression.slice(close_pos + 1) : '';
        if (/[\)\]\}\d]/.test(char_before)) {
            if (/^[\(\[\{]|^[a-z][a-z]+\(/.test(str_after)) {
                temp_expression = `${temp_expression.slice(0, func_str.index)}*1*${temp_expression.slice(close_pos + 1)}`;
            } else {
                temp_expression = `${temp_expression.slice(0, func_str.index)}*1${temp_expression.slice(close_pos + 1)}`;
            }
        } else if (/^\d+|^[\(\[\{]|^[a-z][a-z]+\(/.test(str_after)) {
            temp_expression = `${temp_expression.slice(0, func_str.index)}1*${temp_expression.slice(close_pos + 1)}`;
        } else {
            temp_expression = `${temp_expression.slice(0, func_str.index)}1${temp_expression.slice(close_pos + 1)}`;
        }

    }
    return isValidNoFunctions(temp_expression);
};

function getClosePosition(str, openIndex) {
    let depth = 1;
    for (let i = openIndex; i < str.length; i++) {
        if (str[i] === '(') depth++;
        if (str[i] === ')') depth--;
        if (depth === 0) return i;
    }
    return -1;
}
module.exports = isValidWithFunctions;
