/** 
*
* Check the sign of the number that is located after an operation.
*
*  @param {String} - str The strings that has the operation.
*  @param {number} - index The index wher the operation is located.
*  @returns {boolean} True when is positive and false when negative.
*/
const checkNumber2Sign = (str, index) => {
    if(/[\-]/.test(str[index + 1])){
        return false;
    } else {
        return true;
    }
}

module.exports = checkNumber2Sign;