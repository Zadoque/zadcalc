const simplifyParentheses = require('./ultilitys/simplify-parentheses/simplify-parentheses');
const simplifySquareBrack = require('./ultilitys/simplify-square-brack/simplify-square-brack');
const simplifyCurlyBrack = require('./ultilitys/simplify-curly-brack/simplify-curly-brack');


const simplify = (expression) => {
    do{
        if(expression.includes('{')){
            expression =  simplifyCurlyBrack(expression);
        } else if( expression.includes('[')){
            expression = simplifySquareBrack(expression);
        } else if(expression.includes('(')){
            expression = simplifyParentheses(expression);
        }
    }while(/[{[(]/.test(expression))
    return expression;
    
}


module.exports = simplify;