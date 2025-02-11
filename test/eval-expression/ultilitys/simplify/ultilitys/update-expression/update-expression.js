const updateExpression = (expression, result, indexs) => {
    
    if(/[0-9\)\]\}]/g.test(expression[indexs[0] - 1])){
        expression = `${expression.slice(0, indexs[0])}*${expression.slice(indexs[0])}`;
        indexs[0]++;
        indexs[1]++;
    }
    if(/[+-]/.test(expression[indexs[0] - 1]) && result !== '0'){
        if(/[-]/.test(expression[indexs[0] - 1])){
            result = `${Number(result) * (-1)}`;
        }
        indexs[0]--;
    }
    if(/[0-9\(\[\{]/g.test(expression[indexs[1] + 1])){
        expression = `${expression.slice(0, indexs[1] + 1)}*${expression.slice(indexs[1] + 1)}`;
    }
    return`${expression.slice(0,indexs[0])}${result}${expression.slice(indexs[1] + 1)}`;
}

module.exports = updateExpression;