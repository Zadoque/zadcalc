/**
 * @module mathResolver
 * @description A mathematical expression evaluator with customizable settings.
 */
const isValid = require(`./utilities/is-valid/is-valid`);
const implicitMultiplication = require(`./utilities/implicit-multiplication/implicit-multiplication`);
const removeUnnecessary = require(`./utilities/remove-unnecessary/remove-unnecessary`);
const simplify = require(`./utilities/simplify/simplify`);
const resolve = require(`./utilities/resolve/resolve`);
const decimalToFrac = require(`./utilities/decimal-to-frac/decimal-to-frac`);

/**
 * @typedef {Object} MathResolverSettings
 * @property {number} to_fixed - Number of decimal places to round results to.
 * @property {boolean} frac_mode - Whether to convert decimal results to fractions.
 * @property {boolean} positive_sign - Whether to show positive signs (+) in results.
 * @property {boolean} return_as_string - Whether to return results as strings.
 */

/**
 * The main object containing settings and the expression evaluator function.
 * @namespace
 * @property {MathResolverSettings} settings - Configuration options for expression evaluation.
 */
let mathResolver = {
    settings : {
        to_fixed: 5,
        frac_mode: false,
        positive_sign: false,
        return_as_string: true
    }
};
/**
 * Evaluates a mathematical expression based on the current settings.
 *
 * @function
 * @param {string|number} expression - The mathematical expression to evaluate. Supports basic operations, fractions, and nested brackets `{}`, `[]`, `()`.
 * @returns {string|number} The evaluated result, returned as a string or number based on settings.
 * @throws {Error} Throws an error if there is a syntax issue or invalid settings.
 *
 * @example
 * const mathResolver = require('zadoque-math-resolver');
 * console.log(mathResolver.evalExpression('2+2')); // "4"
 * console.log(mathResolver.evalExpression('1/2')); // "0.5"
 *
 * mathResolver.settings.frac_mode = true;
 * console.log(mathResolver.evalExpression('1/2')); // "1/2"
 */
mathResolver.evalExpression = (expression) => {
    expression = expression.toString();
    if(mathResolver.settings.frac_mode && !mathResolver.settings.return_as_string){
        return `Settings Error! frac mode just work when return_as_string is true`;
    }
    if(mathResolver.settings.positive_sign && !mathResolver.settings.return_as_string){
        return `Settings Error! positve_sign just work when return as string is true`;
    }
    if( isValid(expression)){
        if(/[{([]/.test(expression)){
            expression = implicitMultiplication(expression);
            expression = removeUnnecessary(expression);
            if(/[{([]/.test(expression)){
                expression = simplify(expression);
                expression = resolve(expression);
            } else{
                expression = resolve(expression);
            }
        } else {
            expression = resolve(expression);
        }
        if( expression === `Error! division by zero`){
            return expression;
        }
        if(Number(expression) !== Math.floor(Number(expression)) ){
            if(mathResolver.settings.frac_mode){
                expression = decimalToFrac(expression);
            } else {
                let len = expression.split(`.`)[1].length;
                if(len > mathResolver.settings.to_fixed){
                    expression = `${Number(expression).toFixed(mathResolver.settings.to_fixed)}`;
                }
            }
        }
        if(Number(expression) > 0 && expression[0] !== `+` && mathResolver.settings.positive_sign){
            expression = `+${expression}`;
        }
        if(!mathResolver.settings.positive_sign && expression[0] === `+`){
            expression = expression.slice(1);
        }
        if(!mathResolver.settings.return_as_string){
            return Number(expression);
        }
        return expression;

    } else {
        return `Sintax Error`;
    }
};

module.exports = mathResolver;
