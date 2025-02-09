const getNumbers = require('../getNumbers');
const getSings = require('./get-sign/getSigns');
const calculate =  (str) =>{
    let times_and_division_regex = /[\+\-]?[0-9]+(\.[0-9]+)?[\*\/]{1}[\-\+]?[0-9]+(\.[0-9]+)?/;
    let plus_and_minus_regex = /[\+\-]?[0-9]+(\.[0-9]+)?[\+\-]{1}[\-\+]?[0-9]+(\.[0-9]+)?/;
    while(times_and_division_regex.test(str)){
        let index = str.search(/[\*\/]/);
        let signs = getSings(str, index);
        let op_str = str.match(/[\-\+]?[0-9]+(\.[0-9]+)?[\*\/]{1}[\-\+]?[0-9]+(\.[0-9]+)?/);
        index = op_str[0].search(/[\*\/]/);
        if(/[\-\+]/.test(op_str[0][index + 1])){
            op_str[0] = op_str[0].slice(0, index++) + op_str[0].slice(index + 2);
        }
        let numbers_info = getNumbers(op_str[0], index);
        numbers_info.signs;
        if(op_str[0][info.indexs[0] - 1] === '-'){
            info.numbers[0]  *= (-1);
        }
        if(!signs[1]){
            info.numbers[1] *= (-1);
        }
        let result = 0;
        return op_str[0];
        if(/[\/]/.test(op_str[0])){
            if(Number(info.number2) == 0){
                return 'Error! Divisão por 0';
            } else{
                 result = (Number(info.number1) / Number(info.number2)).toFixed(2);
            }
        }
        else{
             result = (Number(info.number1) * Number(info.number2)).toFixed(2)
        }
        if(Number(info.number1) < 0 && result > 0){
            str = `${str.slice(0, index_start)}+${result}${str.slice(index_end + 1)}`;
        } else{
            str = `${str.slice(0, index_start)}${result}${str.slice(index_end + 1)}`;
        }
    }
    while(plus_and_minus_regex.test(str)){
        let op_str = str.match(plus_and_minus_regex);
        let bool = false;
        let index = op_str[0].slice(1).search(/[\+\-]/) + 1;
        let index_start = op_str.index;
        let index_end = op_str[0].length + index_start - 1;
        if(/[\+\-]/.test(op_str[0][index + 1])){
            if(op_str[0][index + 1] == '-'){
                bool = true;
            }
            op_str[0] = `${op_str[0].slice(0, index + 1)}${op_str[0].slice(index + 2)}`;
        }
        let info = getInfo(op_str[0], index);
        if(bool){
            info.number2 *= (-1);
        }

        let result = 0;
        if(/[\+]/.test(op_str[0].slice(1))){
            result = Number(info.number1) + Number(info.number2);
        } else{
             result = Number(info.number1) - Number(info.number2);
        }
        str = `${str.slice(0, index_start)}${result}${str.slice(index_end + 1)}`;
    }
    return str;
}

module.exports = calculate;

/*
if((info.index_start == 1 && str[0] === '-') || (str[info.index_start - 1] === '-' && str[info.index_start - 2] === '(' )){
    info.number1 = `${Number(info.number1) * (-1)}`
    if(info.index_start === 1){
        info.string = str.slice(1);
    } else{
        info.string = `${str.slice(0,info.index_start - 1)}${str.slice(info.index_start)}`;
    }
    info.index_end--;
    info.index_start--;
}
if(info.index_start == 1 && str[0] === '+'){
    info.string = str.slice(1);
    info.index_end--;
    info.index_start--;
}*/