const gcdCalculate = (a, b) =>{
    if (!b) {
        return a;
    }
    
    return gcdCalculate(b, a % b);
};
function decimalToFraction(decimal) {
    let len = decimal.toString().length - decimal.toString().search(/\./);
    let denominator = Math.pow(10, len);
    let numerator = Number(decimal) * denominator;
    let divisor = gcdCalculate(numerator, denominator);
    return `${Math.floor(numerator / divisor)}/${Math.floor(denominator / divisor)}`;
}
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