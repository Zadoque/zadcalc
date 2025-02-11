const isValid = (expression) => {
 let basic_invalid_regex = /([\+\-\/\*]){2}|\{[\-\+\*\/]?\}|\([\-\+\*\/]?\)|\[([\-\+\*\/])?\]|[\(\[\{]{1}[\*\/]{1}|[^\d]+\.|\.[^\d]+|\.$|^\.|[\d]+\.[\d]+\./; 
 /*basic_invalid_regex match the cases below:
    1: ([\+\-\/\*]){2} search two sign together.
    2: \{[\-\+\*\/]?\} search for a curly brack with one sign or nothing inside it without numbers
    3: \([\-\+\*\/]?\) search for a parentheses with one sign or nothing inside it without numbers
    4: \[([\-\+\*\/])?\] search for a square brack with one sign inside it without numbers
    5: [\(\[\{]{1}[\*\/]{1} search for '*' or '/' after a '{' or '[' or '('
    6: [^\d]+\. search for anything that is not a number before a dot
    8: \.[^\d]+ search for anything that is not a number after a dot
    9: \.$|^\. search for a dot in the begining or in the end
    10: [\d]+\.[\d]+\. search for number dot number dot
 */
    if(expression.lenght <= 2){
        return false;
    }
    if(/\s/.test(expression)){
        return false;
    }
    if(expression.match(basic_invalid_regex)){
        return false;
    }
    let regex_open = [/\{/g, /\[/g, /\(/g];
    let regex_close = [/\}/g, /\]/g, /\)/g];
    //Verifying if there is one more than other
    for(let i = 0; i < 2; i++){
        if(regex_open[i].test(expression)){
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
}

module.exports = isValid;