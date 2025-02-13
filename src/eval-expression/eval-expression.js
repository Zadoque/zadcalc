const isValid = require('./ultilitys/is-valid/is-valid');
const implicitMultiplication = require('./ultilitys/implicit-multiplication/implicit-multiplication');
const removeUnnecessary = require('./ultilitys/remove-unnecessary/remove-unnecessary');
const simplify = require('./ultilitys/simplify/simplify');
const resolve = require('./ultilitys/resolve/resolve');
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

    } else {
        return 'Sintax Error';
    }
}

module.exports = evalExpression;