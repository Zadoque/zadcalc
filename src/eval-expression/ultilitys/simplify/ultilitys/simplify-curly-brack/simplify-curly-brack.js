const resolve = require('../../../resolve/resolve.js');
const extractExpressionInside = require('./ultilitys/extract-expression-inside.js');
const updateExpression = require('../update-expression/update-expression.js');
const simplifySquareBrack = require('../simplify-square-brack/simplify-square-brack.js');
const simplifyParentheses = require('../simplify-parentheses/simplify-parentheses.js');
/**
 * Simplifies a numerical expression containing curly brackets and/or parentheses by resolving the expressions within them.
 *
 * @param {String} expression - A string representing a numerical expression that may include curly brackets and parentheses.
 *                              Supported operations are: '+', '-', '*', and '/'.
 * @returns {String} The result of the simplified numerical expression after resolving all curly brackets and parentheses.
 */
const simplifyCurlyBrack = (expression) => {
    while(expression.includes('{')){
        let info =  extractExpressionInside(expression);
        if(info.resolve_str.includes('[')){
            info.resolve_str = simplifySquareBrack(info.resolve_str);
        }
        if(info.resolve_str.includes('(')){
            info.resolve_str = simplifyParentheses(info.resolve_str);
        }
        let result = '';
        if(/[\-\+\/\*]/.test(info.resolve_str.slice(1))){
            result = `${resolve(info.resolve_str)}`;
        }
        else{
            result = info.resolve_str;
        }
        expression = updateExpression(info.expression,result, info.indexs);
    }
    return expression;

}
module.exports = simplifyCurlyBrack;