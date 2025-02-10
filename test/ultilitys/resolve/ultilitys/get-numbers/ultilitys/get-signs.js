
/**
 * 
 * @param {String} str - The string that has the operation.
 * @param {Number} index1  - The index of that first digit of the number1.
 * @param {Number} index2  - The index of  operation.
 * @returns {Array} An array with the signs of the numbers ['','']. when, they can be '+' or '-'
 */
const getSings = (str, index1, index2) => {
    let signs = [];
    if (index1 == 0){
        signs.push('+');
    } else{
        if(/[-]/.test(str[index1 - 1])){
            signs.push('-');
        }
        else{signs.push('+')};
    }
    if(/[-]/.test(str[index2 + 1])){
        signs.push('-');
    } else {
        signs.push('+');
    }
    return signs;
}

module.exports = getSings;