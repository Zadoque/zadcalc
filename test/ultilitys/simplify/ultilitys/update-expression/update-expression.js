const updateExpression = (expression, result, indexs) => {
    if(/[+-]/.test(expression[indexs[0] - 1]) && result !== '0'){
        if(/[-]/.test(expression[indexs[0] - 1])){
            result = `${Number(result) * (-1)}`;
        }
        indexs[0]--;
    }
    return`${expression.slice(0,indexs[0])}${result}${expression.slice(indexs[1] + 1)}`;
}

module.exports = updateExpression;