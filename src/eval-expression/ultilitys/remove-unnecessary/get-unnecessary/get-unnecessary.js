/**
 * Marks container boundaries with special characters for further processing (true case)
 * @param {string} expression - The mathematical expression to modify
 * @param {number[]} indexs - Array containing start and end indices [start, end]
 * @returns {string} Expression with container boundaries marked with ! and @
 * @private
 */
const change_container_true= (expression, indexs) => {
    expression = `${expression.slice(0,indexs[0])}!${expression.slice(indexs[0]+1, indexs[1])}@${expression.slice(indexs[1]+ 1)}`;
    return expression;
}
/**
 * Marks container boundaries with special characters for further processing (false case)
 * @param {string} expression - The mathematical expression to modify
 * @param {number[]} indexs - Array containing start and end indices [start, end]
 * @returns {string} Expression with container boundaries marked with # and $
 * @private
 */
const change_container_false = (expression, indexs) => {
    expression = `${expression.slice(0,indexs[0])}#${expression.slice(indexs[0]+1, indexs[1])}$${expression.slice(indexs[1]+ 1)}`;
    return expression;
}

/**
 * Determines if a container (brackets/parentheses) should be removed based on its content and context
 * @param {Object} info - Information about the container and its context
 * @param {string} info.before_and_after - Characters before and after the container
 * @param {boolean} info.mult_and_div_inside - Whether the container contains multiplication or division
 * @param {boolean} info.add_and_sub_inside - Whether the container contains addition or subtraction
 * @returns {boolean} True if the container should be removed, false otherwise
 * @private
 */
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

/**
 * Analyzes a mathematical expression to identify unnecessary containers (brackets/parentheses)
 * @param {string} expression - The mathematical expression to analyze
 * @returns {number[]} Array of indices where unnecessary characters are located
 * 
 * @description
 * This function identifies unnecessary containers (brackets, parentheses, curly braces) in 
 * mathematical expressions based on several rules:
 * 1. Empty containers are unnecessary
 * 2. Containers after operators with no multiplication/division inside are unnecessary
 * 3. Nested containers without significant operators are unnecessary
 * 
 * The function uses special markers:
 * - !...@ for containers marked for removal
 * - #...$ for containers that should be kept
 * 
 * @example
 * getUnnecessary("((2+2))")    // returns [1,4,0, 5] (outer parentheses are unnecessary)
 * getUnnecessary("{[2*3]}")    // returns [1,5,0, 6] (outer braces are unnecessary)
 * getUnnecessary("(2+2)(3+3)") // returns an empty array
 */
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
        let before_and_after = '';
        if(indexs[0] === 0){
            before_and_after = `(${expression_temp[indexs[1] + 1]}`;
        } else if(indexs[1] === expression_temp.length - 1){
            before_and_after = `${expression_temp[indexs[0] - 1]})`
        } else {
            before_and_after = `${expression_temp[indexs[0] - 1]}${expression_temp[indexs[1] + 1]}`;
        }
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