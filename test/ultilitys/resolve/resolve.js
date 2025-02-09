const getNumbers = require('./ultilitys/getNumbers/getNumbers');
const getSings = require('./ultilitys/get-sign/getSigns');
/**
 * 
 * @param {String} expression - A sting of a numerical expression withouth parentheses 
 * @returns {String} The result of the expression or a messsage error: division by zero error
 */
const resolve =  (expression) =>{
    let times_and_division_regex = /[\+\-]?[0-9]+(\.[0-9]+)?[\*\/]{1}[\-\+]?[0-9]+(\.[0-9]+)?/;
    let plus_and_minus_regex = /[\+\-]?[0-9]+(\.[0-9]+)?[\+\-]{1}[\-\+]?[0-9]+(\.[0-9]+)?/;
    while(times_and_division_regex.test(expression)){
        let index = expression.search(/[\*\/]/);
        let signs = getSings(expression, index);
        let op_expression = expression.match(/[\-\+]?[0-9]+(\.[0-9]+)?[\*\/]{1}[\-\+]?[0-9]+(\.[0-9]+)?/);
        let index_end = op_expression.index + op_expression[0].length;
        index = op_expression[0].search(/[\*\/]/);
        if(/[\-\+]/.test(op_expression[0][index + 1])){
            op_expression[0] = `${op_expression[0].slice(0, index + 1)}${op_expression[0].slice(index + 2)}` ;
        }
        let numbers_info = getNumbers(op_expression[0], index);
        numbers_info.numbers[0] = `${signs[0]}${numbers_info.numbers[0]}`;
        numbers_info.numbers[1] = `${signs[1]}${numbers_info.numbers[1]}`;
        console.log(op_expression);
        let result = '';
        if(/[\/]/.test(op_expression[0])){
            if(Number(numbers_info.numbers[1]) == 0){
                return 'Error! Divisão por 0';
            } else{
                result = `${Number(numbers_info.numbers[0]) / Number(numbers_info.numbers[1])}`;

            }
        } else{
            result = `${Number(numbers_info.numbers[0]) * Number(numbers_info.numbers[1])}`;
        }
        Number(result) >=0?
        result = `+${result}`:
        reuslt = `-${result}`;
        expression = `${expression.slice(0, op_expression.index)}${result}${expression.slice(index_end)}`;
    }
    while(plus_and_minus_regex.test(expression)){
        let index = expression.slice(1).search(/[\+\-]/) + 1;
        let signs = getSings(expression, index);
        let op_expression = expression.match(/[\-\+]?[0-9]+(\.[0-9]+)?[\+\-]{1}[\-\+]?[0-9]+(\.[0-9]+)?/);
        let index_end = op_expression.index + op_expression[0].length;
        index = op_expression[0].slice(1).search(/[\+\-]/) + 1;
        if(/[\-\+]/.test(op_expression[0][index + 1])){
            op_expression[0] = `${op_expression[0].slice(0, index + 1)}${op_expression[0].slice(index + 2)}` ;
        }
        let numbers_info = getNumbers(op_expression[0], index);
        numbers_info.numbers[0] = `${signs[0]}${numbers_info.numbers[0]}`;
        numbers_info.numbers[1] = `${signs[1]}${numbers_info.numbers[1]}`;
        console.log(op_expression);
        let result = '';
        if(/[\+]/.test(op_expression[0].slice(1))){
            result = `${Number(numbers_info.numbers[0]) + Number(numbers_info.numbers[1])}`;
        } else{
            result = `${Number(numbers_info.numbers[0]) - Number(numbers_info.numbers[1])}`;
        }
        Number(result) >=0?
        result = `+${result}`:
        reuslt = `-${result}`;
        expression = `${expression.slice(0, op_expression.index)}${result}${expression.slice(index_end)}`;
    }
    if(expression[0] === '+'){
        expression = expression.slice(1);
    }
    return expression;
    
}

module.exports = resolve;

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