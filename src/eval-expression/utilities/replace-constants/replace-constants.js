const replaceConstants = (expression) => {
    let constant_regex = /E|PI|π|TAU|τ|PHI|φ/;
    let after_regex = /^\d+|^[\(\[\{]|^[a-z][a-z]+|^\(|^E|^PI|^π|^TAU|^τ|^PHI|^φ|^ϕ/;
    while (constant_regex.test(expression)) {
        let constant = expression.match(/E|PI|π|TAU|τ|PHI|φ|ϕ/);
        let replacement = '';
        switch (constant[0]) {
            case 'E':
                replacement = `${Math.E}`;
                break;
            case 'PI':
            case 'π':
                replacement = `${Math.PI}`;
                break;
            case 'TAU':
            case 'τ':
                replacement = `${2 * Math.PI}`;
                break;
            case 'PHI':
            case 'φ':
            case 'ϕ':
                replacement = `${(1 + Math.sqrt(5)) / 2}`;
                break;
            default:
                throw new Error(`Unknow function but teste with regex: ${constant[0]} in expression: ${expression}`);
                break;
        }
        // Substitui função pelo resultado (mantém multiplicação implícita)
        const char_before = constant.index > 0 ? expression[constant.index - 1] : '';
        let end_pos = (constant.index + constant[0].length - 1);
        const str_after = end_pos < (expression.length - 1) ? expression.slice(end_pos + 1) : '';
        // Adiciona multiplicação implícita
        if (/[\)\]\}\d]/.test(char_before)) {
            if (after_regex.test(str_after)) {
                replacement = `*${replacement}*`;
            } else {
                replacement = `*${replacement}`;
            }
        } else if (after_regex.test(str_after)) {
            replacement = `${replacement}*`;
        }
        expression = expression.slice(0, constant.index) + replacement + expression.slice(end_pos + 1);
    }
    return expression;
}

module.exports = replaceConstants;