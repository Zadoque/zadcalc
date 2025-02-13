const isValid = require('./ultilitys/is-valid/is-valid');
const implicitMultiplication = require('./ultilitys/implicit-multiplication/implicit-multiplication');
const removeUnnecessary = require('./ultilitys/remove-unnecessary/remove-unnecessary');
const simplify = require('./ultilitys/simplify/simplify');
const resolve = require('./ultilitys/resolve/resolve');
/**
 * @typedef {Object} Config
 * @property {number} toFixed - The number of decimal places to round to (default: 5).
 * @property {boolean} fracMode - Whether to return results as fractions (default: false).
 * @property {boolean} positiveSign - Whether to include a '+' sign in front of positive numbers when returning as a string (default: false).
 * @property {boolean} returnAsString - Whether the result should be returned as a string (default: true).
 */
let config = {
    to_fixed: 5,
    frac_mode: false,
    positive_sign: false,
    return_as_string: true
}
/**
 * Evaluates a mathematical expression and returns the result based on configuration settings.
 *
 * @param {string|number} expression The mathematical expression to evaluate.
 *
 * @returns {(string|number)} The evaluated result, either as a string or number depending on config.returnAsString.
 */
const evalExpression = (expression) => {
    if( isValid(expression)){
        if(/[\{\(\[]/.test(expression)){
            expression = implicitMultiplication(expression);
            expression = removeUnnecessary(expression);
            if(/[\{\(\[]/.test(expression)){
                expression = simplify(expression);
                expression = resolve(expression);
            } else{
                expression = resolve(expression);
            }
        } else {
            expression = resolve(expression);
        }
        return expression;
        if(Number(expression) !== Math.floor(Number(expression))){
            if(config.frac_mode){
                
            }
        }

    } else {
        return 'Sintax Error';
    }
}
/**
 * A math resolver object that encapsulates evaluation functionality with configurable settings.
 *
 * @typedef {Object} MathResolver
 */
const mathResolver = {
    settings: config,
    evalExpression: evalExpression
}
module.exports = mathResolver;