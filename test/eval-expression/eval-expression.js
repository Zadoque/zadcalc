const isValid = require('./ultilitys/is-valid/is-valid');
const evalExpression = (expression) => {
    return isValid(expression);
    if(isValid(expression)){
        console.log('nice');
    }

 //verify if it's valid
 //remove unnecessary (), [],{} if there is
 //resolve by simplifying first or solving it directly
}

module.exports = evalExpression;