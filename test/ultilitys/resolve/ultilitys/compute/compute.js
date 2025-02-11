const compute = (numbers, operation) => {
    let result = '';
    switch(operation){
        case '+':
            result = `${numbers[0] + numbers[1]}`;
            break;
        case '-':
            result = `${numbers[0] - numbers[1]}`;;
            break;
        case '*':
            result = `${numbers[0] * numbers[1]}`;;
            break;
        case '/':
            result = `${numbers[0] / numbers[1]}`;;
            break;    
    }
    if(result >= 0){
        return `+${result}`;
    }
    return result;
}

module.exports = compute;