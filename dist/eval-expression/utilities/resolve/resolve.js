const getNumbers=require("./utilities/get-numbers/get-numbers"),parseOperation=require("./utilities/parse-operation/parse-operation"),compute=require("./utilities/compute/compute"),resolve=e=>{let r="";if(!/[+\-/*]/.test(e.slice(1)))return e;for(;/[+\-/*]/.test(e.slice(1));){let t=parseOperation(e),i=getNumbers(e,t.index_op);if(0===i[1]&&"/"===t.sign)return"Error! division by zero";r=`${compute(i,t.sign)}`,e=`${e.slice(0,t.index_start)}${r}${e.slice(t.index_end+1)}`}return r};module.exports=resolve;