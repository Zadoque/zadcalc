const implicitMultiplication = (expression) => {
    let implicit_regex = /[\}\]\)]{1}[\{\[\(]{1}|[\}\]\)]{1}[\d]{1}|[\d]{1}[\{\[\(]{1}/;
    while(implicit_regex.test(expression)){
        implicit_str = expression.match(implicit_regex);
        expression = `${expression.slice(0,implicit_str.index + 1)}*${expression.slice(implicit_str.index + 1)}`;

    }
    return expression;
}
module.exports = implicitMultiplication;