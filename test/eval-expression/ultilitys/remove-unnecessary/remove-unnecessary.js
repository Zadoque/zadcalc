const getUnnecessary = require('./get-unnecessary/get-unnecessary');
const removeUnnecessary  = (expression) => {
    let remove = getUnnecessary(expression);
    let count = 0;
    if(remove.length > 0){
        for(let i = 0; i < remove.length ; i++){
            if(remove[i] === 0){
                expression = `${expression.slice(remove[i] + 1 - count)}`;
            } else{
                expression = `${expression.slice(0, remove[i] - count)}${expression.slice(remove[i] + 1 - count)}`;
            }
            count += 1;
        }
    }
    return expression;
}
module.exports = removeUnnecessary;