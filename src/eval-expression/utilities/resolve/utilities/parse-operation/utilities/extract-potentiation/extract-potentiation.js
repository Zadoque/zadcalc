const extractPotentiation = (expression) => {
    let temp = expression;
    let acc_start = 0;
    let acc_end = 0;
    let info;
    do{
        let op_str = temp.match(/([+-]?|(@NEG))\d+(\.\d+)?\^[+-]?\d+(\.\d+)?/);
        acc_start += op_str.index;
        info = {
            index_start: acc_start,
        };
        acc_end += info.index_start + op_str[0].length - 1;
        info.index_end = acc_end;
        info.index_op =  info.index_start + op_str[0].slice(1).search(/\^/) + 1;
        info.sign = expression[info.index_op];
        temp = `${temp.slice(0, info.index_start)}${temp.slice(info.index_end + 1)}`;
        console.log(temp);
    }while(/\^/.test(temp));
    return info;
};


module.exports = extractPotentiation;