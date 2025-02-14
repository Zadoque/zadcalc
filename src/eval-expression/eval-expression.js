/**
 * @module mathResolver
 * @description A mathematical expression evaluator with customizable settings
 */
const isValid = require('./ultilitys/is-valid/is-valid');
const implicitMultiplication = require('./ultilitys/implicit-multiplication/implicit-multiplication');
const removeUnnecessary = require('./ultilitys/remove-unnecessary/remove-unnecessary');
const simplify = require('./ultilitys/simplify/simplify');
const resolve = require('./ultilitys/resolve/resolve');
const decimalToFrac = require('./ultilitys/decimal-to-frac/decimal-to-frac');

/**
 * @typedef {Object} MathResolverSettings
 * @property {number} to_fixed - Number of decimal places to round to
 * @property {boolean} frac_mode - Whether to convert decimal results to fractions
 * @property {boolean} positive_sign - Whether to show positive signs (+) in results
 * @property {boolean} return_as_string - Whether to return results as strings
 */

/**
 * @type {Object}
 * @property {MathResolverSettings} settings - Configuration options for the resolver
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
 * Evaluates a mathematical expression according to the configured settings
 * @param {string|number} expression - The mathematical expression to evaluate
 * @returns {string|number} The result of the evaluation, either as a string or number based on settings
 * @throws {string} Returns 'Settings Error!' if invalid settings combinations are used
 * @throws {string} Returns 'Sintax Error' if the expression is invalid
 */
 mathResolver.evalExpression = (expression) => {
    expression = expression.toString();
    if(mathResolver.settings.frac_mode && !mathResolver.settings.return_as_string){
        return 'Settings Error! frac mode just work when return_as_string is true'; 
    }
    if(mathResolver.settings.positive_sign && !mathResolver.settings.return_as_string){
        return 'Settings Error! positve_sign just work when return as string is true'; 
    }
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
        if( expression === 'Error! division by zero'){
            return expression;
        }
        if(Number(expression) !== Math.floor(Number(expression)) ){
           if(mathResolver.settings.frac_mode){
                expression = decimalToFrac(expression);
            } else {
                let len = expression.split('.')[1].length;
                if(len > mathResolver.settings.to_fixed){
                    expression = `${Number(expression).toFixed(mathResolver.settings.to_fixed)}`;
                }
            }
        }
        if(Number(expression) > 0 && expression[0] !== '+' && mathResolver.settings.positive_sign){
            expression = `+${expression}`;
        }
        if(!mathResolver.settings.positive_sign && expression[0] === '+'){
            expression = expression.slice(1);
        }
        if(!mathResolver.settings.return_as_string){
            return Number(expression);
        }
        return expression;

    } else {
        return 'Sintax Error';
    }
}

module.exports = mathResolver;