/** 
*
* Returns the sign of the number that is located before an operation.
*
*  @param {String} - str The strings that has the operation.
*  @param {number} - index The index wher the operation is located.
*  @returns {String} '+' when is positive and '-' when negative.
*/
const checkNumber1Sign = (str, index) => {
    if(/(\-{1}[0-9]+(\.[0-9]+)?)$/.test(str.slice(0, index))){
        return '-';
    } else {
        return '+';
    }
}

module.exports = checkNumber1Sign;