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
 * removeUnnecessary("2+(+2)")       // returns "2+2
 *
 * @requires ./get-unnecessary/get-unnecessary
 */
const getUnnecessary = require(`./get-unnecessary/get-unnecessary`);

const removeUnnecessary = (expression) => {
  let remove;
  do {
    remove = getUnnecessary(expression);
    
    if (remove.length === 2) {  // ← Sempre 2 índices (start, end)
      const [start, end] = remove;
      
      // Remover os caracteres
      expression = expression.slice(0, start) + expression.slice(start + 1, end) + expression.slice(end + 1);
    }
  } while(remove.length > 0);
  
  return expression;
};

module.exports = removeUnnecessary;
