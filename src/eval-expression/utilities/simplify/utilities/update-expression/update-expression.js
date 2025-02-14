/**
 * Updates a mathematical expression by replacing a specified segment with a new result, while handling implicit multiplication and sign adjustments.
 *
 * @param {String} expression - The original mathematical expression to be updated.
 * @param {String} result - The new result to insert into the expression.
 * @param {Array<number>} indexs - An array containing the start and end indices of the segment to be replaced.
 * @returns {String} The updated mathematical expression with the specified segment replaced by the new result.
 */
const updateExpression = (expression, result, indexs) => {
    if(/[0-9)\]}]/g.test(expression[indexs[0] - 1])){
        expression = `${expression.slice(0, indexs[0])}*${expression.slice(indexs[0])}`;
        indexs[0]++;
        indexs[1]++;
    }
    if(/[+-]/.test(expression[indexs[0] - 1]) && result !== `0`){
        if(/[-]/.test(expression[indexs[0] - 1])){
            result = `${Number(result) * (-1)}`;
        }
        indexs[0]--;
    }
    return`${expression.slice(0,indexs[0])}${result}${expression.slice(indexs[1] + 1)}`;
};

module.exports = updateExpression;
