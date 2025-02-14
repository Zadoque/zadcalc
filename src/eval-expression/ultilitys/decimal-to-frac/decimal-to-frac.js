/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The Greatest Common Divisor of a and b
 */
const gcdCalculate = (a, b) =>{
    if (!b) {
        return a;
    }
    
    return gcdCalculate(b, a % b);
};

/**
 * Converts a decimal number to a fraction using the ratio method
 * @param {number|string} decimal - The decimal number to convert
 * @returns {string} A string representation of the fraction in the format "numerator/denominator"
 * @example
 * decimalToFraction("0.5") // returns "1/2"
 * decimalToFraction("0.25") // returns "1/4"
 */
function decimalToFraction(decimal) {
    let len = decimal.toString().length - decimal.toString().search(/\./);
    let denominator = Math.pow(10, len);
    let numerator = Number(decimal) * denominator;
    let divisor = gcdCalculate(numerator, denominator);
    return `${Math.floor(numerator / divisor)}/${Math.floor(denominator / divisor)}`;
}

/**
 * Checks if a decimal string contains a repeating sequence
 * @param {string} decimal - The decimal string to check (without the integer part)
 * @returns {Object} Information about the repeating decimal
 * @property {boolean} bool - Whether the decimal is repeating
 * @property {number} [dizim] - The position where the repeating sequence starts
 * @property {number} [periodo] - The length of the repeating sequence
 * @example
 * isRepeatingDecimal("333333") // returns { bool: true, dizim: 0, periodo: 1 }
 */
const isRepeatingDecimal = (decimal) => {
    let decimal_temp = decimal;
    let info = {
        bool: false
    }
    for(let j = 1; j < decimal.length - 1; j++ ){
        let repeat = [];
        repeat.push(decimal_temp[0]);
        let count = 0;
        let index = 0;
        for(let i = 1; i < decimal_temp.length - 1; i++){
            if(decimal_temp[i] == repeat[count] ){
                count++;
                repeat.push(decimal_temp[count]);
                if(index === 0){
                    index = i;
                }
            }
        }
        if(repeat.length > 3){
            let repeat_str = repeat.reduce((char1,char2) => char1 += `${char2}`);
            if(repeat_str.length === decimal_temp.length || repeat_str.length + index === decimal_temp.length){
                info.bool = true;
                info.dizim = j - 1;
                info.periodo = index;
                return info;
            }
        }
        decimal_temp = decimal.slice(j);
    }
    return info;
};
/**
 * Converts a repeating decimal to a fraction
 * @param {string[]} parts - Array containing the integer and decimal parts
 * @param {Object} info - Information about the repeating sequence
 * @param {number} info.dizim - The position where the repeating sequence starts
 * @param {number} info.periodo - The length of the repeating sequence
 * @returns {string} A string representation of the fraction in the format "numerator/denominator"
 * @example
 * handleRepeatingDecimal(["0", "333333"], { dizim: 0, periodo: 1 }) // returns "1/3"
 */
const handleRepeatingDecimal = (parts, info) =>{
    let numerador = Number(`${parts[0]}${parts[1].slice(0,info.dizim)}${parts[1].slice(info.dizim, info.dizim + info.periodo )}`);
    numerador -= Number(`${parts[0]}${parts[1].slice(0, info.dizim )}`);
    let denominador = '';
    for(let i = 0; i < info.periodo; i++){
        denominador += '9';
    }
    for(let i = 0; i < info.dizim; i++){
        denominador += '0';
    }
    let gcd = gcdCalculate(numerador,Number(denominador));
    if(gcd !== Number(denominador)){
        numerador =  numerador / gcd;
        denominador =  `${Number(denominador) / gcd}`;
    }
    return `${numerador}/${denominador}`;
};
/**
 * Main function to convert any decimal number to a fraction, handling both repeating and non-repeating decimals
 * @param {string|number} decimal - The decimal number to convert to a fraction
 * @returns {string} A string representation of the fraction in the format "±numerator/denominator"
 * @example
 * decimalToFrac("0.333333") // returns "1/3"
 * decimalToFrac("-0.5") // returns "-1/2"
 * decimalToFrac("0.142857142857") // returns "1/7"
 */
const decimalToFrac = (decimal) => {
    let parts = decimal.split('.');
    let fraction = '';
    let bool = false;
    if(/[\-\+]/.test(parts[0][0])){
        parts[0] = parts[0].slice(1);
        bool = true;
    }else{
        bool = true;
        decimal = `+${decimal}`;
    }
    if(parts[1].length >= 3 ){
        let info = isRepeatingDecimal(parts[1]);
        if(info.bool){
            fraction =   handleRepeatingDecimal(parts, info);
        } else{
            fraction = decimalToFraction(`${parts[0]}${parts[1]}`);
        }
    } else{
        fraction = decimalToFraction(`${parts[0]}.${parts[1]}`);
    }
    if(bool){
        fraction = `${decimal[0]}${fraction}`;
    }
    return fraction;
    
};

module.exports = decimalToFrac;