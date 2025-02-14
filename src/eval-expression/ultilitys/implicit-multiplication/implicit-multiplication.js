/**
 * Converts implicit multiplication in mathematical expressions to explicit multiplication
 * by adding * operators where needed.
 * 
 * @param {string} expression - The mathematical expression to process
 * @returns {string} The expression with implicit multiplication converted to explicit multiplication
 * 
 * @example
 * implicitMultiplication("2(3)")     // returns "2*3"
 * implicitMultiplication("(2)(3)")   // returns "(2)*(3)"
 * implicitMultiplication("2[3]")     // returns "2*[3]"
 * implicitMultiplication("{2}[3]")   // returns "{2}*[3]"
 * 
 * @description
 * Handles three types of implicit multiplication:
 * 1. Between closing and opening brackets: )( or }[ or ]{
 * 2. Between closing bracket and number: )2 or }3 or ]4
 * 3. Between number and opening bracket: 2( or 3[ or 4{
 */
const implicitMultiplication = (expression) => {
    let implicit_regex = /[\}\]\)]{1}[\{\[\(]{1}|[\}\]\)]{1}[\d]{1}|[\d]{1}[\{\[\(]{1}/;
    while(implicit_regex.test(expression)){
        implicit_str = expression.match(implicit_regex);
        expression = `${expression.slice(0,implicit_str.index + 1)}*${expression.slice(implicit_str.index + 1)}`;

    }
    return expression;
}
module.exports = implicitMultiplication;