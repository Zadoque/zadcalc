/**
 * Extracts the expression contained within the first pair of square brackets in a given mathematical expression.
 *
 * @param {String} expression - A string that may contain mathematical expressions with square brackets.
 * @returns {Object} An object containing details about the extracted expression:
 *      @property {String} resolve_str - The expression found inside the square brackets, without the brackets themselves.
 *      @property {Array<number>} indexs - An array containing the start and end indices of the square-bracketed expression.
 *      @property {String} expression - The original input expression.
 */
const extractExpressionInside = (expression)  => {
    let square_brack_regex = /\[(([-+*/]?\()?[-+/*]{0,2}[0-9]+(\.[0-9]+)?(\))?)+\]/;
    let resolve_str = expression.match(square_brack_regex);
    let index_a = resolve_str.index;
    let index_b = resolve_str[0].length + index_a - 1;
    resolve_str[0] = resolve_str[0].slice(1,resolve_str[0].length - 1);
    let info = {
        resolve_str: resolve_str[0],
        indexs: [index_a, index_b],
        expression: expression
    };
    return info;
};

module.exports = extractExpressionInside;
