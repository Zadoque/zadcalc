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
 * @requires ./utilities/get-numbers/get-numbers
 * @requires ./utilities/parse-operation/parse-operation
 * @requires ./utilities/compute/compute
 */
const getNumbers = require(`./utilities/get-numbers/get-numbers`);
const parseOperation = require(`./utilities/parse-operation/parse-operation`);
const compute = require(`./utilities/compute/compute`);

const resolve =  (expression) =>{
    let result = ``;
    if(!/[+\-/*/^]/.test(expression.slice(1))){
        return expression;
    }
    while(/[+\-/*\^]/.test(expression.slice(1))){
        if(/[+-]?\d+(\.\d+)?e[+-]?\d+/.test(expression)){
            let verify_str = expression.match(/[+-]?\d+(\.\d+)?e[+-]?\d+/);
            console.log(`Verify str is: ${verify_str[0]}`);
            if(verify_str[0].length == expression.length){
                return expression;
            }
        }
        let info = parseOperation(expression);       
        let numbers = getNumbers(expression, info.index_op);
        if(numbers[1] === 0 && info.sign === `/`){
            return `Error! division by zero`;
        }
        if((numbers[0] === numbers[1] === 0)&& info.sign === '^'){
            return `Error! 0 in potation of 0`;
        }
        result = `${compute(numbers, info.sign)}`;

        expression = `${expression.slice(0, info.index_start)}${result}${expression.slice(info.index_end + 1)}`;
    }
    return result;
};

module.exports = resolve;
