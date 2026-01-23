const resolveFunctions = require("../resolve-functions/resolve-functions");
const hasFunctions = require("./ultilitys/has-functions/has-functions");
const isValidNoFunctions = require("./ultilitys/is-valid-no-functions/is-valid-no-functions");
const isValidWithFunctions = require("./ultilitys/is-valid-with-functions/is-valid-with-functions");

const isValid = (expression) => {
    let is_valid = [expression, false];
    if(hasFunctions(expression)){
        is_valid[1] = isValidWithFunctions(expression);
        if(is_valid[1]){
            is_valid[0] = resolveFunctions(expression);
            is_valid[1] = isValidNoFunctions(is_valid[0]);
        }
    } else {
        is_valid[1] = isValidNoFunctions(expression);
    }
    return is_valid;
};

module.exports = isValid;