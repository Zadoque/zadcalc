const simplifyParentheses=require("./utilities/simplify-parentheses/simplify-parentheses"),simplifySquareBrack=require("./utilities/simplify-square-brack/simplify-square-brack"),simplifyCurlyBrack=require("./utilities/simplify-curly-brack/simplify-curly-brack"),simplify=i=>{do{i.includes("{")?i=simplifyCurlyBrack(i):i.includes("[")?i=simplifySquareBrack(i):i.includes("(")&&(i=simplifyParentheses(i))}while(/[{[(]/.test(i));return i};module.exports=simplify;