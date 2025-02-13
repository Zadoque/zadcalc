const extractExpressionInside = (expression)  => {
    let square_brack_regex = /\[(([\-\+\*\/]?\()?[\-\+\/\*]{0,2}[0-9]+(\.[0-9]+)?(\))?)+\]/;
    let resolve_str = expression.match(square_brack_regex);
    let index_a = resolve_str.index;
    let index_b = resolve_str[0].length + index_a - 1;
    resolve_str[0] = resolve_str[0].slice(1,resolve_str[0].length - 1);
    let info = {
        resolve_str: resolve_str[0],
        indexs: [index_a, index_b],
        expression: expression
    }
    return info;
}

module.exports = extractExpressionInside;