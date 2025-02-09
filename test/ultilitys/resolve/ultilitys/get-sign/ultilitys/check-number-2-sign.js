/** 
*
* Returns the sign of the number that is located after an operation.
*
*  @param {String} - str The strings that has the operation.
*  @param {number} - index The index wher the operation is located.
*  @returns {String} '+' when is positive and '-' when negative.
*/
const checkNumber2Sign = (str, index) => {
    if(/[\-]/.test(str[index + 1])){
        return '-';
    } else {
        return '+';
    }
}

module.exports = checkNumber2Sign;