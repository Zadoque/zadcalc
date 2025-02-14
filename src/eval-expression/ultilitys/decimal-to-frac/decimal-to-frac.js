const mdcCalculate = (a, b) =>{
    if (!b) {
        return a;
    }
    
    return mdcCalculate(b, a % b);
};
const isDizima = (decimal1) => {
    let decimal = decimal1;
    let info = {
        bool: false
    }
    for(let j = 1; j < decimal1.length - 3; j++ ){
        let repeat = [];
        repeat.push(decimal[0]);
        let count = 0;
        let index = 0;
        for(let i = 1; i < decimal.length - 1; i++){
            if(decimal[i] == repeat[count] ){
                count++;
                repeat.push(decimal[count]);
                if(index === 0){
                    index = i;
                }
            }
        }
        if(repeat.length > 3){
            let repeat_str = repeat.reduce((char1,char2) => char1 += `${char2}`);
            if(repeat_str.length === decimal.length || repeat_str.length + index === decimal.length){
                info.bool = true;
                info.dizim = j - 1;
                info.periodo = index;
                return info;
            }
        }
        decimal = decimal1.slice(j);
    }
    return info;
};

const decimalToFrac = (decimal) => {
    let parts = decimal.split('.');
    let fraction = '';
    let bool = false;
    if(/[\-\+]/.test(parts[0][0])){
        parts[0] = parts[0].slice(1);
        bool = true;
    }
    if(parts[1].length >= 16 ){
        let info = isDizima(parts[1]);
        console.log(info);
        if(info.bool){
            let numerador = Number(`${parts[0]}${parts[1].slice(0,info.dizim)}${parts[1].slice(info.dizim, info.dizim + info.periodo )}`);
            console.log(numerador);
            numerador -= Number(`${parts[0]}${parts[1].slice(0, info.dizim )}`);
            console.log(numerador);
            let denominador = '';
            for(let i = 0; i < info.periodo; i++){
                denominador += '9';
            }
            for(let i = 0; i < info.dizim; i++){
                denominador += '0';
            }
            let mdc = mdcCalculate(numerador,Number(denominador));
            if(mdc !== numerador){
                numerador =  numerador / mdc;
                denominador =  `${Number(denominador) / mdc}`;
            }
            if(bool){
                return `${decimal[0]}${numerador}/${denominador}`
            }
            return `${numerador}/${denominador}`; 
        }
    } else{
        return false;
    }
    
};

module.exports = decimalToFrac;