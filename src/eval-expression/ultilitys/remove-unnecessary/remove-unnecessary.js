/**
 * Removes unnecessary characters from a mathematical expression based on a list of indices
 * 
 * @param {string} expression - The mathematical expression to clean up
 * @returns {string} The expression with unnecessary characters removed
 * 
 * @description
 * Takes a mathematical expression and removes unnecessary characters (such as redundant
 * brackets or operators) based on indices provided by the getUnnecessary function.
 * The function handles special cases:
 * 1. Removing characters from the start of the expression (index 0)
 * 2. Removing characters while maintaining correct expression structure
 * 3. Adjusting indices to account for previously removed characters
 * 
 * @example
 * removeUnnecessary("((2+2))")      // returns "2+2"
 * removeUnnecessary("{[2+2]}")      // returns "2+2"
 * removeUnnecessary("2+(+2)")       // returns "2+2"
 * 
 * @requires ./get-unnecessary/get-unnecessary
 */
const getUnnecessary = require('./get-unnecessary/get-unnecessary');
const removeUnnecessary  = (expression) => {
    let remove = getUnnecessary(expression);
    let count = 0;
    if(remove.length > 0){
        let before = remove[0];
        for(let i = 0; i < remove.length ; i++){
            if(remove[i] === 0){
                expression = `${expression.slice(remove[i] + 1 )}`;
            } else{
                if(remove[i] < before){
                    expression = `${expression.slice(0, remove[i] )}${expression.slice(remove[i] + 1 )}`;
                }else{
                    expression = `${expression.slice(0, remove[i] - count)}${expression.slice(remove[i] + 1 - count)}`;
                }
                before = remove[i];
            }
            count += 1;
        }
    }
    return expression;
}
module.exports = removeUnnecessary;