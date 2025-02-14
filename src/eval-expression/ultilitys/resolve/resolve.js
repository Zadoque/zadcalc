/**
 * Resolves a mathematical expression string by performing arithmetic operations in sequence.
 * The function handles addition (+), subtraction (-), multiplication (*), and division (/).
 * 
 * @param {string} expression - The mathematical expression to evaluate.
 *                             Must be a string containing numbers and arithmetic operators.
 * 
 * @returns {string} The result of the computation as a string, or 'Error! division by zero'
 *                   if attempting to divide by zero.
 * 
 * @example
 * resolve("2+3*4")  // Returns "14"
 * resolve("10/2")   // Returns "5"
 * resolve("5/0")    // Returns "Error! division by zero"
 * resolve("7")      // Returns "7" (single number returns as is)
 * 
 * @requires ./ultilitys/get-numbers/get-numbers
 * @requires ./ultilitys/parse-operation/parse-operation
 * @requires ./ultilitys/compute/compute
 */
const getNumbers = require('./ultilitys/get-numbers/get-numbers');
const parseOperation = require('./ultilitys/parse-operation/parse-operation');
const compute = require('./ultilitys/compute/compute');

const resolve =  (expression) =>{
   let result = '';
   if(!/[\+\-\/\*]/.test(expression.slice(1))){
    return expression;
   }
    while(/[\+\-\/\*]/.test(expression.slice(1))){
        let info = parseOperation(expression);
        let numbers = getNumbers(expression, info.index_op);
        if(numbers[1] === 0 && info.sign === '/'){
            return 'Error! division by zero'
        }
        result = `${compute(numbers, info.sign)}`;

        expression = `${expression.slice(0, info.index_start)}${result}${expression.slice(info.index_end + 1)}`;
    }
    return result;
}

module.exports = resolve;