const resolve = require(`../../../resolve/resolve.js`);
const extractExpressionInside = require(`./utilities/extract-expression-inside.js`);
const updateExpression = require(`../update-expression/update-expression.js`);
const simplifyParentheses = require(`../simplify-parentheses/simplify-parentheses.js`);
/**
 * Simplifies a numerical expression containing square brackets and/or parentheses by resolving the expressions within them.
 *
 * @param {String} expression - A string representing a numerical expression that may include square brackets and parentheses.
 *                              Supported operations are: `+`, `-`, `*`, and `/`.
 * @returns {String} The result of the simplified numerical expression after resolving all square brackets and parentheses.
 */
const simplifySquareBrack = (expression) => {
    while(expression.includes(`[`)){
        let info =  extractExpressionInside(expression);
        if(info.resolve_str.includes(`(`)){
            info.resolve_str = simplifyParentheses(info.resolve_str);
        }
        let result = `${resolve(info.resolve_str)}`;
        expression = updateExpression(info.expression,result, info.indexs);
    }
    return expression;

};
module.exports = simplifySquareBrack;
