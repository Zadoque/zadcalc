
const removeUnnecessary  = (expression) => {
    let container_regex = /\{[^(\{\[\(]*\}/;
    let expression_temp = expression;
    while(container_regex.test(expression_temp)){
        let container_str = expression.match(container_regex);
        if(container_str[0] === expression){
            return expression.slice(1, expression.length - 1);
        }
        let indexs = [container_str.index, container_str.index  + container_str[0].length - 1];
        if(expression_temp[indexs[0] - 1] === '/'){
            expression_temp = expression_temp.slice(0,indexs[0])
        }
    }

    return expression;
}
module.exports = removeUnnecessary;