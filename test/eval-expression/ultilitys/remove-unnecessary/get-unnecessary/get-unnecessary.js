const cutExpression = (expression, indexs) => {
    expression = `${expression.slice(0,indexs[0])}${expression.slice(indexs[0]+1, indexs[1])}${expression.slice(indexs[1]+ 1)}`;
    return expression;
}
const getUnnecessary = (expression) =>{
    let container_regex = /\{[^(\{\[\(]*\}|\[[^(\{\[\(]*\]|\([^(\{\[\(]*\)/;
    let remove = [];
    let count = 0;
    let expression_temp = expression;
    for(let i = 0;i < 2; i++){
        let container_str = expression_temp.match(container_regex);
        let indexs = [container_str.index, container_str.index  + container_str[0].length - 1];
        console.log(indexs);
        if((indexs[0] === 0) && (indexs[1] + count === (expression.length - 1))){
            expression_temp = cutExpression(expression_temp, [0, expression_temp.length - 1]);
            remove.push([0 ,expression.length - 1]);
            
        }
        if(/[\-\+]/.test(expression[indexs[0] - 1 + count]) && /[^(\*\(\[\{\d)]/.test(expression[indexs[1] + 1 + count])){
            expression_temp = cutExpression(expression_temp, indexs);
            let original_indexs = indexs.map(number => number += count);
            remove.push(original_indexs); 
            count += 2;
        } else if(/[\*\/]/.test(expression[indexs[0] - 1 + count])){
            expression_temp = cutExpression(expression_temp, indexs);
            
        }else {
            expression_temp = cutExpression(expression_temp, indexs);
            count += 2;
        }
        
         
    }
    return remove;
    
}

module.exports = getUnnecessary;