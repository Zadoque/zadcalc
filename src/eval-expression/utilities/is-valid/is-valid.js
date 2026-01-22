/**
 * Validates a mathematical expression string for proper syntax and structure
 *
 * @param {string} expression - The mathematical expression to validate
 * @returns {boolean} Returns true if the expression is valid, false otherwise
 *
 * @description
 * Performs the following validations:
 * 1. Checks for empty expressions
 * 2. Validates that expression doesn't start with * or /
 * 3. Ensures only valid characters are used (numbers, operators, brackets, dots)
 * 4. Checks for invalid patterns using regex:
 *    - Two consecutive operators (++, --, +*, etc.)
 *    - Empty or operator-only brackets ({}, {+}, [], [*], etc.)
 *    - Multiplication/division immediately after opening brackets
 *    - Invalid decimal point usage
 * 5. Verifies matching pairs of brackets
 *
 * @example
 * isValid("2+2")           // returns true
 * isValid("2++2")          // returns false (consecutive operators)
 * isValid("2.3.4")         // returns false (multiple decimal points)
 * isValid("{}")            // returns false (empty brackets)
 * isValid("2+{3-4}")       // returns true
 * isValid("2+{3-4")        // returns false (unmatched brackets)
 * isValid("*2")            // returns false (starts with multiplication operator )
 */
const isValid = (expression) => {
    let basic_invalid_regex = /^[*\/\^]|([*+-\/\^][\{\}\(\)\[\]]*$|[\+\-\*\^]{2}(?!\d+\.?\d*e[+-]?\d+)|[\*\/\^]{2})|\{[-+*/\^]?\}|\([-+*/\^]?\)|\[([-+*/\^])?\]|[([{]{1}[*/\^]{1}|[^\d]+\.|\.[^\d]+|\.$|^\.|[\d]+\.[\d]+\.|(?!(\d+(\.\d+)?))e(?!([+-]?\d+))|(?<![0-9.])[eE]|[eE](?![+-]?\d)|[eE][+-](?!\d)|[eE][+-]?\d+[eE]/;
    expression = expression.replace(/\s/g, '');
    /*basic_invalid_regex match the cases below:
    0: ^[*\/]|[*+-\/\^][\(\[\{\)\]\}]*$ starts or ends with signs (just ^, * and / in case of starts)
    1: ([*+-\/\^]$|[+-]{2}(?!\d+\.?\d*e[+-]?\d+)|[\*\/\^]{2}) search two signs when after isn't a scientific notation
    2: \{[\-\+\*\/]?\} search for a curly brack with one sign or nothing inside it without numbers
    3: \([\-\+\*\/]?\) search for a parentheses with one sign or nothing inside it without numbers
    4: [([\-\+\*\/])?\] search for a square brack with one sign inside it without numbers
    5: [\(\[\{]{1}[\*\/]{1} search for '*' or '/' after a '{' or '[' or '('
    6: [^\d]+\. search for anything that is not a number before a dot
    8: \.[^\d]+ search for anything that is not a number after a dot
    9: \.$|^\. search for a dot in the begining or in the end
    10: [\d]+\.[\d]+\. search for number dot number dot
    11: (?<![0-9.])[eE]|[eE](?![+-]?\d)|[eE][+-](?!\d)|[eE][+-]?\d+[eE] - search for an "e" with no scientifi notation structure when it has somethin before and after
    12: 
    
 */
    if(expression.length === 0){
        return false;
    }
    if(/^[*/]/.test(expression)){
        return false;
    }
    if(/[^e\d\-+*\/\{\[\(\)\]\}\.\^]/.test(expression)){
        return false;
    }
    if(expression.match(basic_invalid_regex)){
        return false;
    }
    let regex_open = [/\{/g, /\[/g, /\(/g];
    let regex_close = [/\}/g, /\]/g, /\)/g];
    //Verifying if there is one more than other
    for(let i = 0; i < 3; i++){
        if(regex_open[i].test(expression) || regex_close[i].test(expression)){
            if(regex_close[i].test(expression)){
                let open_count = expression.match(regex_open[i]).length;
                let close_count = expression.match(regex_close[i]).length;
                if(open_count !== close_count){
                    return false;
                }
            } else{
                return false;
            }
        }
    }
    return true;
};

module.exports = isValid;