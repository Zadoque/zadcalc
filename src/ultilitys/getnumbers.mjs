
function searchNumber(str, index_operation){
    let number = [];
    

    return number;
}

export const getNumbers = (str, index) => {
    
    let info = {
        indexs: [],
        numbers: [],
    }
    info.numbers.push(searchNumber(str, index));
    
    
    if((info.index_start == 1 && str[0] === '-') || (str[info.index_start - 1] === '-' && str[info.index_start - 2] === '(' )){
        info.number1 = `${Number(info.number1) * (-1)}`
        if(info.index_start === 1){
            info.string = str.slice(1);
        } else{
            info.string = `${str.slice(0,info.index_start - 1)}${str.slice(info.index_start)}`;
        }
        info.index_end--;
        info.index_start--;
    }
    if(info.index_start == 1 && str[0] === '+'){
        info.string = str.slice(1);
        info.index_end--;
        info.index_start--;
    }
    return info;

}