const extractPotentiation = (expression) => {
    let op_str = expression.match(/(@NEG)?\d+(\.\d+)?(e[+-]?\d+)?\^[+-]?\d+(\.\d+)?(e[+-]?\d+)?([^\^\.]|$)/);
    let info = {
        index_start: op_str.index,
    };
    info.index_end = info.index_start + op_str[0].length - ((expression.slice(0, info.index_start).length + op_str[0].length) == expression.length? 1: 2);
    info.index_op =  info.index_start + op_str[0].slice(1).search(/\^/) + 1;
    info.sign = expression[info.index_op];

    return info;
};


module.exports = extractPotentiation;