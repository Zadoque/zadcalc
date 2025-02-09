const checkNumber1Sign =  require('./ultilitys/checkNumber1Sign');
const checkNumber2Sign =  require('./ultilitys/checkNumber2Sign');
/**
 * 
 * @param {String} str - The string that has the operation.
 * @param {Number} index  - The index of that operation.
 * @returns {Array} An array with the signs of the numbers ['','']. when, they can be '+' or '-'
 */
const getSings = (str, index) => {
    let signs = [];
    signs.push(checkNumber1Sign(str, index));
    signs.push(checkNumber2Sign(str, index));
    return signs;
}

module.exports = getSings;