const latexToZadcalc = (latex) => {
    let expr = latex;

    // ========================================
    // FASE 1: PRÉ-PROCESSAMENTO
    // ========================================

    expr = expr.replace(/\s+/g, ' ').trim();


    // ========================================
    // FASE 2: NOTAÇÃO CIENTÍFICA (PRIMEIRO!)
    // ========================================

    expr = expr.replace(
        /(\d+\.?\d*)\s*\\times\s*10\s*\^\s*\{([+-]?\d+)\}/g,
        '$1e$2'
    );

    expr = expr.replace(
        /(\d+\.?\d*)\s*\\times\s*10\s*\^\s*([+-]?\d+)(?!\d)/g,
        '$1e$2'
    );

    expr = expr.replace(
        /(\d+\.?\d*)\s*\\cdot\s*10\s*\^\s*\{([+-]?\d+)\}/g,
        '$1e$2'
    );

    expr = expr.replace(
        /(\d+\.?\d*)\s*\\cdot\s*10\s*\^\s*([+-]?\d+)(?!\d)/g,
        '$1e$2'
    );


    // ========================================
    // FASE 2.5: DELIMITADORES (ANTES DE PROTEGER CHAVES!)
    // ========================================

    expr = expr.replace(/\\left\s*\\\{/g, '\\left(');
    expr = expr.replace(/\\right\s*\\\}/g, '\\right)');

    expr = expr.replace(/\\left/g, '');
    expr = expr.replace(/\\right/g, '');

    expr = expr.replace(/\\[bB]igg?[lr]?/g, '');


    // ========================================
    // FASE 2.6: OPERATORNAME E FUNÇÕES EM PORTUGUÊS (ANTES DE CONVERTER CHAVES!)
    // ========================================

    // Remove \operatorname{...} mantendo conteúdo
    expr = expr.replace(/\\operatorname\{([^{}]+)\}/g, '$1');

    // Mapeia funções em português → inglês
    expr = expr.replace(/\bsen\b/g, 'sin');
    expr = expr.replace(/\bsenh\b/g, 'sinh');
    expr = expr.replace(/\btgh\b/g, 'tanh');

    // Remove \text, \mathrm, \mathbf mantendo conteúdo
    expr = expr.replace(/\\mathrm\{([^{}]+)\}/g, '$1');
    expr = expr.replace(/\\text\{([^{}]+)\}/g, '$1');
    expr = expr.replace(/\\mathbf\{([^{}]+)\}/g, '$1');


    // ========================================
    // FASE 3: FRAÇÕES (PROCESSAMENTO ROBUSTO)
    // ========================================

    // Remove espaços extras dentro de frações
    expr = expr.replace(/\\([dt]?)frac\s*\{\s*/g, '\\$1frac{');
    expr = expr.replace(/\s*\}\s*\{/g, '}{');
    expr = expr.replace(/\s*\}/g, '}');

    // Processa frações iterativamente (máximo 20 iterações)
    for (let i = 0; i < 20; i++) {
        let before = expr;

        // Regex 1: Sem aninhamento (mais comum)
        expr = expr.replace(
            /\\([dt]?)frac\{([^{}]+)\}\{([^{}]+)\}/g,
            '($2)/($3)'
        );

        // Regex 2: Primeiro argumento tem 1 nível de chaves
        expr = expr.replace(
            /\\([dt]?)frac\{([^{}]*\{[^{}]*\}[^{}]*)\}\{([^{}]+)\}/g,
            '($2)/($3)'
        );

        // Regex 3: Segundo argumento tem 1 nível de chaves  
        expr = expr.replace(
            /\\([dt]?)frac\{([^{}]+)\}\{([^{}]*\{[^{}]*\}[^{}]*)\}/g,
            '($2)/($3)'
        );

        // Regex 4: Ambos têm 1 nível de chaves
        expr = expr.replace(
            /\\([dt]?)frac\{([^{}]*\{[^{}]*\}[^{}]*)\}\{([^{}]*\{[^{}]*\}[^{}]*)\}/g,
            '($2)/($3)'
        );

        // Regex 5: Segundo argumento tem 2 níveis de chaves (caso da sua expressão!)
        expr = expr.replace(
            /\\([dt]?)frac\{([^{}]+)\}\{([^{}]*\{[^{}]*\}[^{}]*\{[^{}]*\}[^{}]*)\}/g,
            '($2)/($3)'
        );

        // Se nada mudou, para de iterar
        if (expr === before) break;
    }



    // ========================================
    // FASE 4: RAÍZES
    // ========================================

    expr = expr.replace(/\\sqrt\s*\[\s*/g, '\\sqrt[');
    expr = expr.replace(/\]\s*\{/g, ']{');
    expr = expr.replace(/\\sqrt\s*\{/g, '\\sqrt{');

    expr = expr.replace(
        /\\sqrt\[(\d+)\]\{([^{}]+)\}/g,
        'nroot($2,$1)'
    );

    expr = expr.replace(
        /\\sqrt\{([^{}]+)\}/g,
        'sqrt($1)'
    );


    // ========================================
    // FASE 5: FUNÇÕES TRIGONOMÉTRICAS
    // ========================================

    const trigFunctions = {
        '\\\\sin': 'sin',
        '\\\\cos': 'cos',
        '\\\\tan': 'tan',
        '\\\\sec': 'sec',
        '\\\\csc': 'csc',
        '\\\\cot': 'cot'
    };

    for (const [latexFunc, zadcalcFunc] of Object.entries(trigFunctions)) {
        expr = expr.replace(
            new RegExp(`${latexFunc}\\s*\\(`, 'g'),
            `${zadcalcFunc}(`
        );

        expr = expr.replace(
            new RegExp(`${latexFunc}\\s+([^\\s+\\-*/^()\\[\\]{}]+)`, 'g'),
            `${zadcalcFunc}($1)`
        );

        expr = expr.replace(
            new RegExp(`${latexFunc}\\s*\\{`, 'g'),
            `${zadcalcFunc}{`
        );
    }

    expr = expr.replace(/\\arcsin\s*\(/g, 'asin(');
    expr = expr.replace(/\\arcsin\s+([^\s+\-*/^()\[\]{}]+)/g, 'asin($1)');
    expr = expr.replace(/\\arcsin\s*\{/g, 'asin{');

    expr = expr.replace(/\\arccos\s*\(/g, 'acos(');
    expr = expr.replace(/\\arccos\s+([^\s+\-*/^()\[\]{}]+)/g, 'acos($1)');
    expr = expr.replace(/\\arccos\s*\{/g, 'acos{');

    expr = expr.replace(/\\arctan\s*\(/g, 'atan(');
    expr = expr.replace(/\\arctan\s+([^\s+\-*/^()\[\]{}]+)/g, 'atan($1)');
    expr = expr.replace(/\\arctan\s*\{/g, 'atan{');

    expr = expr.replace(/\\sin\s*\^\s*\{-1\}\s*\(/g, 'asin(');
    expr = expr.replace(/\\cos\s*\^\s*\{-1\}\s*\(/g, 'acos(');
    expr = expr.replace(/\\tan\s*\^\s*\{-1\}\s*\(/g, 'atan(');


    // ========================================
    // FASE 6: FUNÇÕES HIPERBÓLICAS
    // ========================================

    const hyperbolicFunctions = {
        '\\\\sinh': 'sinh',
        '\\\\cosh': 'cosh',
        '\\\\tanh': 'tanh'
    };

    for (const [latexFunc, zadcalcFunc] of Object.entries(hyperbolicFunctions)) {
        expr = expr.replace(
            new RegExp(`${latexFunc}\\s*\\(`, 'g'),
            `${zadcalcFunc}(`
        );
        expr = expr.replace(
            new RegExp(`${latexFunc}\\s+([^\\s+\\-*/^()\\[\\]{}]+)`, 'g'),
            `${zadcalcFunc}($1)`
        );
        expr = expr.replace(
            new RegExp(`${latexFunc}\\s*\\{`, 'g'),
            `${zadcalcFunc}{`
        );
    }

    expr = expr.replace(/\\sinh\s*\^\s*\{-1\}\s*\(/g, 'asinh(');
    expr = expr.replace(/\\cosh\s*\^\s*\{-1\}\s*\(/g, 'acosh(');
    expr = expr.replace(/\\tanh\s*\^\s*\{-1\}\s*\(/g, 'atanh(');

    expr = expr.replace(/\\text\{arcsinh\}\s*\(/g, 'asinh(');
    expr = expr.replace(/\\text\{arccosh\}\s*\(/g, 'acosh(');
    expr = expr.replace(/\\text\{arctanh\}\s*\(/g, 'atanh(');


    // ========================================
    // FASE 7: LOGARITMOS E EXPONENCIAIS
    // ========================================

    expr = expr.replace(/\\ln\s*\(/g, 'ln(');
    expr = expr.replace(/\\ln\s+([^\s+\-*/^()\[\]{}]+)/g, 'ln($1)');
    expr = expr.replace(/\\ln\s*\{/g, 'ln{');

    expr = expr.replace(/\\log\s*_\s*\{([^{}]+)\}\s*\(([^()]+)\)/g, 'log($2,$1)');
    expr = expr.replace(/\\log\s*_\s*(\d+)\s*\(([^()]+)\)/g, 'log($2,$1)');

    expr = expr.replace(/\\log\s*\(/g, 'log(');
    expr = expr.replace(/\\log\s+([^\s+\-*/^()\[\]{}]+)/g, 'log($1)');
    expr = expr.replace(/\\log\s*\{/g, 'log{');

    expr = expr.replace(/\\exp\s*\(/g, 'exp(');
    expr = expr.replace(/\\exp\s+([^\s+\-*/^()\[\]{}]+)/g, 'exp($1)');
    expr = expr.replace(/\\exp\s*\{/g, 'exp{');


    // ========================================
    // FASE 8: OUTRAS FUNÇÕES (ANTES DE PROTEGER CHAVES!)
    // ========================================

    expr = expr.replace(/\|([^|]+)\|/g, 'abs($1)');

    expr = expr.replace(/\\max\s*\\\{([^{}]+)\\\}/g, 'max($1)');
    expr = expr.replace(/\\min\s*\\\{([^{}]+)\\\}/g, 'min($1)');
    expr = expr.replace(/\\max\s*\{/g, 'max{');
    expr = expr.replace(/\\min\s*\{/g, 'min{');
    expr = expr.replace(/\\max\s*\(/g, 'max(');
    expr = expr.replace(/\\min\s*\(/g, 'min(');

    expr = expr.replace(/(\d+|[a-zA-Z])\s*!/g, 'factorial($1)');


    // ========================================
    // FASE 9: POTÊNCIAS
    // ========================================

    expr = expr.replace(/\^\s*\{([^{}]+)\}/g, '^($1)');


    // ========================================
    // FASE 10: CONSTANTES
    // ========================================

    expr = expr.replace(/\\pi/g, 'PI');
    expr = expr.replace(/\\Pi/g, 'PI');
    expr = expr.replace(/\\tau/g, 'TAU');
    expr = expr.replace(/\\phi/g, 'PHI');
    expr = expr.replace(/\\varphi/g, 'PHI');
    expr = expr.replace(/\be\b/g, 'E');


    // ========================================
    // FASE 11: OPERADORES
    // ========================================

    expr = expr.replace(/\\times/g, '*');
    expr = expr.replace(/\\cdot/g, '*');
    expr = expr.replace(/\\div/g, '/');


    // ========================================
    // FASE 12: PROTEGE CHAVES LATEX ESCAPADAS
    // ========================================

    expr = expr.replace(/\\\{/g, '___LBRACE___');
    expr = expr.replace(/\\\}/g, '___RBRACE___');


    // ========================================
    // FASE 13: CONVERTE CHAVES {} → ()
    // ========================================

    expr = expr.replace(/\{/g, '(');
    expr = expr.replace(/\}/g, ')');

    expr = expr.replace(/___LBRACE___/g, '{');
    expr = expr.replace(/___RBRACE___/g, '}');


    // ========================================
    // FASE 14: ESPAÇOS E FORMATAÇÃO
    // ========================================

    expr = expr.replace(/\\,/g, '');
    expr = expr.replace(/\\;/g, '');
    expr = expr.replace(/\\:/g, '');
    expr = expr.replace(/\\quad/g, '');
    expr = expr.replace(/\\qquad/g, '');
    expr = expr.replace(/\\ /g, '');
    expr = expr.replace(/~/g, '');

    expr = expr.replace(/\s+/g, '');


    // ========================================
    // FASE 15: LIMPEZA FINAL
    // ========================================

    expr = expr.replace(/\(\)/g, '');
    expr = expr.replace(/\\/g, '');

    return expr;
};

module.exports = latexToZadcalc;
