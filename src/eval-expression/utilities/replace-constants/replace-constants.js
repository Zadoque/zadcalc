const replaceConstants = (expression) => {
    while(/E|PI|π|TAU|τ|PHI|φ/.test(expression)){
        let constant = expression.match(/E|PI|π|TAU|τ|PHI|φ/);
        let replacement = '';
        switch(constant[0]){
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
                replacement = `${(1 + Math.sqrt(5)) / 2}`;
                break;
            default:
                throw new Error(`Unknow function but teste with regex: ${constant[0]} in expression: ${expression}`);
                break;
        }
          // Substitui função pelo resultado (mantém multiplicação implícita)
        const char_before = constant.index > 0 ? expression[constant.index - 1] : '';
        let end_pos = (constant.index + constant[0].length - 1)
        const str_after = end_pos < (expression.length - 1) ? expression.slice(end_pos + 1) : '';


        // Adiciona multiplicação implícita
        if (/[\)\]\}\d]/.test(char_before)) {
            if (/^[\(\[\{]|^[a-z][a-z]+\(/.test(str_after)) {
                replacement = `*${replacement}*`;
            } else {
                replacement = `*${replacement}`;
            }
        } else if (/^\d+|^[\(\[\{]|^[a-z][a-z]+\(/.test(str_after)) {
            replacement = `${replacement}*`;
        }
        expression = expression.slice(0, constant.index) + replacement + expression.slice(close_pos + 1);      
    }
    return expression;
}