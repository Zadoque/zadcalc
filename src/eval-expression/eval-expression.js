/**
 * @module mathResolver
 * @description A mathematical expression evaluator with customizable settings.
 */

const implicitMultiplication = require(`./utilities/implicit-multiplication/implicit-multiplication`);
const removeUnnecessary = require(`./utilities/remove-unnecessary/remove-unnecessary`);
const simplify = require(`./utilities/simplify/simplify`);
const resolve = require(`./utilities/resolve/resolve`);
const decimalToFrac = require(`./utilities/decimal-to-frac/decimal-to-frac`);
const toSciNotation = require('./utilities/to-sci-notation/to-sci-notation');
const smartToFixed = require('./utilities/smart-to-fixed/smart-to-fixed');
const hasFunctions = require('./utilities/has-functions/has-functions');
const isValidWithFunctions = require('./utilities/is-valid-with-functions/is-valid-with-functions');
const resolveFunctions = require('./utilities/resolve-functions/resolve-functions');
const isValidNoFunctions = require('./utilities/is-valid-no-functions/is-valid-no-functions');
const hasLatex = require('./utilities/has-latex/has-latex');
const latexToZadcalc = require('./utilities/latex-to-zadcalc/latex-to-zadcalc');
const replaceConstants = require('./utilities/replace-constants/replace-constants');
/**
 * @typedef {Object} MathResolverSettings
 * @property {number} to_fixed - Number of decimal places to round results to.
 * @property {boolean} smart_to_fixed - whether to set fixed in a smart way or use to_fixed value
 * @property {boolean} frac_mode - Whether to convert decimal results to fractions.
 * @property {boolean} positive_sign - Whether to show positive signs (+) in results.
 * @property {boolean} return_as_string - Whether to return results as strings.
 * @property {boolean} always_return_sci_notation - Whether to return in scientific notation or not
 */

/**
 * The main object containing settings and the expression evaluator function.
 * @namespace
 * @property {MathResolverSettings} settings - Configuration options for expression evaluation.
 */
let mathResolver = {
    settings: {
        to_fixed: 5,
        smart_to_fixed: true,
        frac_mode: false,
        positive_sign: false,
        return_as_string: true,
        always_return_sci_notation: false
    }
};
/**
 * Evaluates a mathematical expression based on the current settings.
 *
 * @function
 * @param {string|number} expression - The mathematical expression to evaluate. Supports basic operations, fractions, exponatiation, scientific noatation and nested brackets `{}`, `[]`, `()`.
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
    if (mathResolver.settings.frac_mode && !mathResolver.settings.return_as_string) {
        return `Settings Error! frac mode only works when return_as_string is true`;
    }
    if (mathResolver.settings.frac_mode && mathResolver.settings.smart_to_fixed) {
        return `Settings Error!: frac mode and smart to fixed are true, but you can choose just one of them, turn off one and try again!`;
    }
    if (mathResolver.settings.frac_mode && mathResolver.settings.always_return_sci_notation) {
        return `Settings Error!: frac mode and sci notation are true, but you can choose just one of them, turn off one and try again!`;
    }
    if (mathResolver.settings.always_return_sci_notation && !mathResolver.settings.return_as_string) {
        return `Settings Error!: Always return sci notation only works when retur as string is true `;
    }
    if (mathResolver.settings.positive_sign && !mathResolver.settings.return_as_string) {
        return `Settings Error! positve_sign just works when return as string is true`;
    }
    if (hasLatex(expression)) {
        expression = latexToZadcalc(expression);
    }
    expression = expression.replace(/\s/g, '');
    if (hasConstants(expression)) {
        try {
            expression = replaceConstants(expression);
           
        } catch (error) {
            return `Error while trying to replace constants in ${expression}:\n\t ${error.message}`;
        }
    }
    if (hasFunctions(expression)) {
        if (isValidWithFunctions(expression)) {
            try {
                expression = resolveFunctions(expression);
            } catch (error) {
                return `Error in function: ${error.message}`;
            }
            if (isValidNoFunctions(expression)) {
                try {
                    expression = resolvePipeline(expression);  // ← Simplificado
                } catch (error) {
                    return `Erro while trying to resolve ${expression}:\n\t${error.message}`;
                }
            } else {
                return `Invalid expression after resolving functions`;
            }
        } else {
            return `Error: Invalid function`;
        }
    } else if (isValidNoFunctions(expression)) {
        try {
            expression = resolvePipeline(expression);  // ← Simplificado
        } catch (error) {
            return `Erro while trying to resolve ${expression}:\n\t${error.message}`;
        }
    } else {
        return `Invalid Expression`;
    }

    if (Number(expression) !== Math.floor(Number(expression))) {
        if (mathResolver.settings.frac_mode) {
            expression = decimalToFrac(expression);
        } else if (/^[+-]?\d+(\.\d+)?e[+-]?\d+$/.test(expression)) {
            return expression;
        } else if (mathResolver.settings.always_return_sci_notation) {
            return toSciNotation(expression);
        } else if (mathResolver.settings.smart_to_fixed) {
            expression = smartToFixed(expression);
        } else {
            let len = expression.split(`.`)[1].length;
            if (len > mathResolver.settings.to_fixed) {
                expression = `${Number(expression).toFixed(mathResolver.settings.to_fixed)}`;
            }
        }

    } else if (mathResolver.settings.always_return_sci_notation) {
            expression =  toSciNotation(expression)
    }
    if (Number(expression) > 0 && expression[0] !== `+` && mathResolver.settings.positive_sign) {
        expression = `+${expression}`;
    }
    if (!mathResolver.settings.positive_sign && expression[0] === `+`) {
        expression = expression.slice(1);
    }
    if (!mathResolver.settings.return_as_string) {
        return Number(expression);
    }
    return expression;
};

function hasConstants(expression) {
    return /E|PI|π|TAU|τ|PHI|φ|ϕ/.test(expression);
}
function resolvePipeline(expression) {
    if (!/[{([]/.test(expression)) {
        return resolve(expression);
    }

    expression = implicitMultiplication(expression);
    expression = removeUnnecessary(expression);

    if (/[{([]/.test(expression)) {
        expression = simplify(expression);
    }

    return resolve(expression);
}

module.exports = mathResolver;
