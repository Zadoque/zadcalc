const resolve = require("../resolve/resolve");
const implicitMultiplication = require('../implicit-multiplication/implicit-multiplication');
const removeUnnecessary = require('../remove-unnecessary/remove-unnecessary');
const simplify = require("../simplify/simplify");
const resolveFunctions = (expression) => {
    let temp_expression = expression;

    // Mesmo regex: pega função mais interna (da direita para esquerda)
    while (/[a-z]+\((?!.*[a-z]+\()/.test(temp_expression)) {
        let func_match = temp_expression.match(/[a-z]+\((?!.*[a-z]+\()/);
        let func_name = func_match[0].slice(0, -1); // Remove '('
        let open_pos = func_match.end || (func_match.index + func_match[0].length);
        let close_pos = getClosePosition(temp_expression, open_pos);

        let inside_str = temp_expression.slice(open_pos, close_pos);
        let result;
        let param;
        // Funções de 1 parâmetro
        if (/^(sin|sen|cos|tan|tg|sqrt|cbrt|ln|exp|abs|asin|asen|acos|atan|atg|sinh|senh|cosh|tanh|tgh|asinh|acosh|atanh|atgh|factorial|fact)$/.test(func_name)) {
            // Resolve o parâmetro primeiro
            param = resolveParameter(inside_str);
            // Verifica domínio e calcula
            result = resolveOneParam(func_name, param);

        } else if (/^(pow|nroot|max|min)$/.test(func_name)) {
            // Funções de 2 parâmetros
            let params = inside_str.split(',');
            let param1 = resolveParameter(params[0]);
            let param2 = resolveParameter(params[1]);

            result = resolveTwoParams(func_name, param1, param2);

        } else if (func_name === 'log') {
            // Log: 1 ou 2 parâmetros
            if (/,/.test(inside_str)) {
                let params = inside_str.split(',');
                let param1 = resolveParameter(params[0]);
                let param2 = resolveParameter(params[1]);

                result = resolveLog(param1, param2);
            } else {
                param = resolveParameter(inside_str);
                result = resolveLog(param, 10); // log base 10 por padrão
            }
        }

        // Verifica se resultado é válido
        if (result === null || !isFinite(result)) {
            throw new Error(`Domain error in ${func_name}(${inside_str}), result was: ${result}, because param was: ${param}`);
        }

        // Substitui função pelo resultado (mantém multiplicação implícita)
        const char_before = func_match.index > 0 ? temp_expression[func_match.index - 1] : '';
        const str_after = close_pos < (temp_expression.length - 1) ? temp_expression.slice(close_pos + 1) : '';

        let replacement = formatNumber(result);

        // Adiciona multiplicação implícita
        if (/[\)\]\}\d]/.test(char_before)) {
            if (/\d+|^[\(\[\{]|^[a-z][a-z]+\(/.test(str_after)) {
                replacement = `*${replacement}*`;
            } else {
                replacement = `*${replacement}`;
            }
        } else if (/^\d+|^[\(\[\{]|^[a-z][a-z]+\(/.test(str_after)) {
            replacement = `${replacement}*`;
        }

        temp_expression = temp_expression.slice(0, func_match.index) + replacement + temp_expression.slice(close_pos + 1);
    }

    return temp_expression;
};

function resolveParameter(param) {
    if (!/[{([]/.test(param)) {
        return resolve(param);
    }

    param = implicitMultiplication(param);
    param = removeUnnecessary(param);

    if (/[{([]/.test(param)) {
        param = simplify(param);
    }

    let result = resolve(param);

    if (result === `Error! division by zero`) {
        throw new Error(`Error! division by zero`);
    }
    if (result === `Error! 0 in potation of 0`) {
        throw new Error(`Error! 0 in potation of 0`);
    }
    let numResult = parseFloat(result);

    // Validação adicional
    if (isNaN(numResult)) {
        throw new Error(`Invalid numeric result: ${result}`);
    }

    return numResult;
}

// ============================================================================
// FUNÇÕES DE 1 PARÂMETRO COM VERIFICAÇÃO DE DOMÍNIO
// ============================================================================
function resolveOneParam(func_name, param) {
    switch (func_name) {
        // Trigonométricas (graus → radianos)
        case 'sin':
        case 'sen':
            return Math.sin(param * Math.PI / 180);
        case 'cos':
            return Math.cos(param * Math.PI / 180);
        case 'tan':
        case 'tg':
            // Verifica múltiplos de 90° (exceto 0, 180, 360...)
            if (Math.abs(param % 180 - 90) < 1e-10) {
                return null; // Indefinido
            }
            return Math.tan(param * Math.PI / 180);

        // Inversas (retorna em graus)
        case 'asin':
        case 'asen':
            if (param < -1 || param > 1) return null;
            return Math.asin(param) * 180 / Math.PI;
        case 'acos':
            if (param < -1 || param > 1) return null;
            return Math.acos(param) * 180 / Math.PI;
        case 'atan':
        case 'atg':
            return Math.atan(param) * 180 / Math.PI;

        // Raízes
        case 'sqrt':
            if (param < 0) return null; // Sem números complexos
            return Math.sqrt(param);
        case 'cbrt':
            return Math.cbrt(param); // Aceita negativos

        // Logaritmos e exponenciais
        case 'ln':
            if (param <= 0) return null;
            return Math.log(param);
        case 'exp':
            let result = Math.exp(param);
            if (!isFinite(result)) return null;
            return result;

        // Hiperbólicas
        case 'sinh':
        case 'senh':
            return Math.sinh(param);
        case 'cosh':
            return Math.cosh(param);
        case 'tanh':
        case 'tgh':
            return Math.tanh(param);

        // Hiperbólicas inversas
        case 'asinh':
            return Math.asinh(param);
        case 'acosh':
            if (param < 1) return null;
            return Math.acosh(param);
        case 'atanh':
        case 'atgh':
            if (param <= -1 || param >= 1) return null;
            return Math.atanh(param);
        case 'abs':
            return Math.abs(param);
        case 'factorial':
        case 'fact':
            // Arredonda para remover erros de precisão
            const roundedParam = Math.round(param);

            // Verifica se está próximo de um inteiro (tolerância de 1e-10)
            if (Math.abs(param - roundedParam) > 1e-10) {
                console.log(`Not an integer: ${param}`);
                return null;
            }

            // Agora verifica com o valor arredondado
            if (roundedParam < 0) {
                console.log(`Negative: ${roundedParam}`);
                return null;
            }

            if (roundedParam > 170) {
                console.log(`Too large: ${roundedParam}`);
                return null;
            }

            return factorial(roundedParam);


        default:
            return null;
    }
}

// ============================================================================
// FUNÇÕES DE 2 PARÂMETROS COM VERIFICAÇÃO DE DOMÍNIO
// ============================================================================
function resolveTwoParams(func_name, param1, param2) {
    switch (func_name) {
        case 'pow':
            // 0^0 é indeterminado
            if (param1 === 0 && param2 === 0) return null;
            // Negativos com expoentes não inteiros
            if (param1 < 0 && !Number.isInteger(param2)) return null;
            let result = Math.pow(param1, param2);
            if (!isFinite(result)) return null;
            return result;

        case 'nroot':
            // nroot(x, n) = x^(1/n)
            if (param2 === 0) return null;
            // Raiz par de número negativo
            if (param1 < 0 && param2 % 2 === 0) return null;
            return Math.pow(param1, 1 / param2);

        case 'max':
            return Math.max(param1, param2);
        case 'min':
            return Math.min(param1, param2);

        default:
            return null;
    }
}

// ============================================================================
// LOGARITMO COM BASE CUSTOMIZADA
// ============================================================================
function resolveLog(value, base) {
    if (value <= 0 || base <= 0 || base === 1) return null;
    return Math.log(value) / Math.log(base);
}

// ============================================================================
// HELPERS
// ============================================================================
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function getClosePosition(str, openIndex) {
    let depth = 1;
    for (let i = openIndex; i < str.length; i++) {
        if (str[i] === '(') depth++;
        if (str[i] === ')') depth--;
        if (depth === 0) return i;
    }
    return -1;
}

function formatNumber(num) {
    // Se é inteiro, retorna sem decimal
    if (Number.isInteger(num)) return String(num);

    // Se é muito pequeno ou muito grande, usa notação científica
    if (Math.abs(num) < 1e-6 || Math.abs(num) > 1e15) {
        return num.toExponential();
    }

    // Caso contrário, retorna com precisão limitada
    return String(parseFloat(num.toFixed(10)));
}

module.exports = resolveFunctions;
