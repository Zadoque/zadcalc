const getNumbers = (str, index) => {
    let info = {
        indexs: [index, index],
        numbers: ['', ''],
    }
    while(/\d/.test(str[info.indexs[0] - 1])){
        info.indexs[0]--;
        info.numbers[0] = `${info.numbers[0]}${str[info.indexs[0]]}`
    }
    while(/\d/.test(str[info.indexs[1] + 1])){
        info.indexs[1]++;
        info.numbers[1] += `${str[info.indexs[1]]}`
    }
    return info;
}
module.exports = getNumbers;