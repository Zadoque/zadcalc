const change_container_true= (expression, indexs) => {
    expression = `${expression.slice(0,indexs[0])}!${expression.slice(indexs[0]+1, indexs[1])}@${expression.slice(indexs[1]+ 1)}`;
    return expression;
}
const change_container_false = (expression, indexs) => {
    expression = `${expression.slice(0,indexs[0])}#${expression.slice(indexs[0]+1, indexs[1])}$${expression.slice(indexs[1]+ 1)}`;
    return expression;
}
const hasItToRemove = (info) => {
    bool = false;
    if(/\{\}|\[\]|\(\)/.test(info.before_and_after)){
        bool = true;
    } else if(/[\(\[\{\-\+][^\*\/]/.test(info.before_and_after) && !info.mult_and_div_inside){
        bool = true;
    } else if( /[^\/]./.test(info.before_and_after) && !info.add_and_sub_inside){
        bool = true;
    }
    return bool;
}

const getUnnecessary = (expression) =>{
    let container_regex = /\{[^(\{\[\(\}]*\}|\[[^(\{\[\(\]]*\]|\([^(\{\[\(\)]*\)/;
    let sub_container_regex = /#[^(#)]*\$/;
    let remove = [];
    let expression_temp = expression;
    while(container_regex.test(expression_temp)){
        let container_str = expression_temp.match(container_regex);
        let indexs = [container_str.index, container_str.index  + container_str[0].length - 1];
        let inside = container_str[0];
        if(container_str[0] === expression_temp){
            remove.push(indexs[0]); 
            remove.push(indexs[1]);
            return remove;
        }
        if(sub_container_regex.test(container_str[0])){
            let sub_container = inside.match(sub_container_regex);
            if(sub_container.index > 0){
                inside = `${inside.slice(0,sub_container.index + 1)}${inside.slice(sub_container.index + sub_container[0].length)}`;
            } else {
                inside = `${inside.slice(sub_container.index + sub_container[0].length)}`;
            }
        }
        let mult_and_div_inside = /[\/\*]|\d#/.test(inside.slice(2));
        let add_and_sub_inside = /[\-\+]/.test(inside.slice(2));
        let before_and_after = `${expression_temp[indexs[0] - 1]}${expression_temp[indexs[1] + 1]}`;
        let info = {
            expression_temp: expression_temp,
            before_and_after: before_and_after,
            mult_and_div_inside: mult_and_div_inside,
            add_and_sub_inside: add_and_sub_inside
        }
        if(hasItToRemove(info)){
            expression_temp = change_container_true(expression_temp, indexs);
            remove.push(indexs[0]); 
            remove.push(indexs[1]);
        } else{
            expression_temp = change_container_false(expression_temp, indexs);
        }
    }
    return remove;
    
}

module.exports = getUnnecessary;