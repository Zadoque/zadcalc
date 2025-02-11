const getNumbers = require('./ultilitys/get-numbers/get-numbers');
const parseOperation = require('./ultilitys/parse-operation/parse-operation');
const compute = require('./ultilitys/compute/compute');

/**
 * 
 * @param {String} expression - A sting of a numerical expression withouth parentheses, it can include '+', '-','*' or '/'
 * @returns {String} The result of the expression or a messsage error: division by zero error
 */
const resolve =  (expression) =>{
   let result = '';
    while(/[+-/*]/.test(expression.slice(1))){
        let info = parseOperation(expression);
        let numbers = getNumbers(expression, info.index_op);
        if(numbers[1] === 0 && info.sign === '/'){
            return 'Error! divisão por zero'
        }
        result = `${compute(numbers, info.sign)}`;
        expression = `${expression.slice(0, info.index_start)}${result}${expression.slice(info.index_end + 1)}`;
    }
    return result;
}

module.exports = resolve;