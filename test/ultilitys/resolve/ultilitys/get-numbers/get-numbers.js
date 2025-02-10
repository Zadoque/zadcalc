const getSigns = require('./ultilitys/get-signs');
const getNumbers = (str, index) => {
    let  numbers =  ['', ''];
    let indexs = [index,index];
    while(/\d/.test(str[indexs[0] - 1])){
        indexs[0]--;
        numbers[0] = `${numbers[0]}${str[indexs[0]]}`
    }
    let signs = getSigns(str,indexs[0], index);
    if(/[-+]/.test(str[index + 1])){
        str = `${str.slice(0, index+1)}${str.slice(index + 2)}`;
    }
    while(/\d/.test(str[indexs[1] + 1])){
        indexs[1]++;
        numbers[1] += `${str[indexs[1]]}`
    }
    for(let i = 0; i < 2; i++){
        numbers[i] = Number(`${signs[i]}${numbers[i]}`);
    }
    return numbers;
}
module.exports = getNumbers;