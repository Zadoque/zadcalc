const replaceConstants = require("../../../../src/eval-expression/utilities/replace-constants/replace-constants");

describe("replaceConstants - Testes de substituição de constantes matemáticas", () => {

    // ===== CATEGORIA 1: CONSTANTE E (número de Euler) =====
    describe("Constante E (Euler)", () => {
        test("deve substituir E isolado", () => {
            expect(replaceConstants("E")).toBe(`${Math.E}`);
        });

        test("deve substituir E com número antes", () => {
            expect(replaceConstants("2E")).toBe(`2*${Math.E}`);
        });

        test("deve substituir E com número depois", () => {
            expect(replaceConstants("E3")).toBe(`${Math.E}*3`);
        });

        test("deve substituir E com números antes e depois", () => {
            expect(replaceConstants("2E4")).toBe(`2*${Math.E}*4`);
        });

        test("deve substituir múltiplos E na expressão", () => {
            expect(replaceConstants("E+E")).toBe(`${Math.E}+${Math.E}`);
        });

        test("deve substituir E com parênteses antes", () => {
            expect(replaceConstants("(2)E")).toBe(`(2)*${Math.E}`);
        });

        test("deve substituir E com parênteses depois", () => {
            expect(replaceConstants("E(3)")).toBe(`${Math.E}*(3)`);
        });

        test("deve substituir E com parênteses antes e depois", () => {
            expect(replaceConstants("(2)E(3)")).toBe(`(2)*${Math.E}*(3)`);
        });

        test("deve substituir E com colchetes antes", () => {
            expect(replaceConstants("[2]E")).toBe(`[2]*${Math.E}`);
        });

        test("deve substituir E com colchetes depois", () => {
            expect(replaceConstants("E[3]")).toBe(`${Math.E}*[3]`);
        });

        test("deve substituir E com chaves antes", () => {
            expect(replaceConstants("{2}E")).toBe(`{2}*${Math.E}`);
        });

        test("deve substituir E com chaves depois", () => {
            expect(replaceConstants("E{3}")).toBe(`${Math.E}*{3}`);
        });

        test("deve substituir E com função depois", () => {
            expect(replaceConstants("Esin(x)")).toBe(`${Math.E}*sin(x)`);
        });

        test("deve substituir E em expressão complexa", () => {
            expect(replaceConstants("2E+3E")).toBe(`2*${Math.E}+3*${Math.E}`);
        });

        test("deve substituir E com operadores", () => {
            expect(replaceConstants("E*2")).toBe(`${Math.E}*2`);
        });
    });

    // ===== CATEGORIA 2: CONSTANTE PI =====
    describe("Constante PI", () => {
        test("deve substituir PI isolado", () => {
            expect(replaceConstants("PI")).toBe(`${Math.PI}`);
        });

        test("deve substituir PI com número antes", () => {
            expect(replaceConstants("2PI")).toBe(`2*${Math.PI}`);
        });

        test("deve substituir PI com número depois", () => {
            expect(replaceConstants("PI3")).toBe(`${Math.PI}*3`);
        });

        test("deve substituir PI com números antes e depois", () => {
            expect(replaceConstants("2PI4")).toBe(`2*${Math.PI}*4`);
        });

        test("deve substituir múltiplos PI na expressão", () => {
            expect(replaceConstants("PI+PI")).toBe(`${Math.PI}+${Math.PI}`);
        });

        test("deve substituir PI com parênteses antes", () => {
            expect(replaceConstants("(5)PI")).toBe(`(5)*${Math.PI}`);
        });

        test("deve substituir PI com parênteses depois", () => {
            expect(replaceConstants("PI(2)")).toBe(`${Math.PI}*(2)`);
        });

        test("deve substituir PI com parênteses antes e depois", () => {
            expect(replaceConstants("(3)PI(2)")).toBe(`(3)*${Math.PI}*(2)`);
        });

        test("deve substituir PI com função depois", () => {
            expect(replaceConstants("PIcos(x)")).toBe(`${Math.PI}*cos(x)`);
        });

        test("deve substituir PI em fórmula de círculo", () => {
            expect(replaceConstants("2PIr")).toBe(`2*${Math.PI}r`);
        });
    });

    // ===== CATEGORIA 3: SÍMBOLO π (pi) =====
    describe("Símbolo π (pi)", () => {
        test("deve substituir π isolado", () => {
            expect(replaceConstants("π")).toBe(`${Math.PI}`);
        });

        test("deve substituir π com número antes", () => {
            expect(replaceConstants("2π")).toBe(`2*${Math.PI}`);
        });

        test("deve substituir π com número depois", () => {
            expect(replaceConstants("π3")).toBe(`${Math.PI}*3`);
        });

        test("deve substituir π com números antes e depois", () => {
            expect(replaceConstants("2π4")).toBe(`2*${Math.PI}*4`);
        });

        test("deve substituir múltiplos π na expressão", () => {
            expect(replaceConstants("π+π")).toBe(`${Math.PI}+${Math.PI}`);
        });

        test("deve substituir π com parênteses antes", () => {
            expect(replaceConstants("(7)π")).toBe(`(7)*${Math.PI}`);
        });

        test("deve substituir π com parênteses depois", () => {
            expect(replaceConstants("π(4)")).toBe(`${Math.PI}*(4)`);
        });

        test("deve misturar PI e π", () => {
            expect(replaceConstants("PI+π")).toBe(`${Math.PI}+${Math.PI}`);
        });
    });

    // ===== CATEGORIA 4: CONSTANTE TAU =====
    describe("Constante TAU", () => {
        test("deve substituir TAU isolado", () => {
            expect(replaceConstants("TAU")).toBe(`${2 * Math.PI}`);
        });

        test("deve substituir TAU com número antes", () => {
            expect(replaceConstants("2TAU")).toBe(`2*${2 * Math.PI}`);
        });

        test("deve substituir TAU com número depois", () => {
            expect(replaceConstants("TAU3")).toBe(`${2 * Math.PI}*3`);
        });

        test("deve substituir TAU com números antes e depois", () => {
            expect(replaceConstants("2TAU4")).toBe(`2*${2 * Math.PI}*4`);
        });

        test("deve substituir múltiplos TAU na expressão", () => {
            expect(replaceConstants("TAU+TAU")).toBe(`${2 * Math.PI}+${2 * Math.PI}`);
        });

        test("deve substituir TAU com parênteses antes", () => {
            expect(replaceConstants("(3)TAU")).toBe(`(3)*${2 * Math.PI}`);
        });

        test("deve substituir TAU com parênteses depois", () => {
            expect(replaceConstants("TAU(5)")).toBe(`${2 * Math.PI}*(5)`);
        });

        test("deve substituir TAU com função depois", () => {
            expect(replaceConstants("TAUtan(x)")).toBe(`${2 * Math.PI}*tan(x)`);
        });
    });

    // ===== CATEGORIA 5: SÍMBOLO τ (tau) =====
    describe("Símbolo τ (tau)", () => {
        test("deve substituir τ isolado", () => {
            expect(replaceConstants("τ")).toBe(`${2 * Math.PI}`);
        });

        test("deve substituir τ com número antes", () => {
            expect(replaceConstants("3τ")).toBe(`3*${2 * Math.PI}`);
        });

        test("deve substituir τ com número depois", () => {
            expect(replaceConstants("τ2")).toBe(`${2 * Math.PI}*2`);
        });

        test("deve substituir τ com números antes e depois", () => {
            expect(replaceConstants("3τ2")).toBe(`3*${2 * Math.PI}*2`);
        });

        test("deve misturar TAU e τ", () => {
            expect(replaceConstants("TAU+τ")).toBe(`${2 * Math.PI}+${2 * Math.PI}`);
        });

        test("deve substituir τ com parênteses", () => {
            expect(replaceConstants("(2)τ(3)")).toBe(`(2)*${2 * Math.PI}*(3)`);
        });
    });

    // ===== CATEGORIA 6: CONSTANTE PHI (número áureo) =====
    describe("Constante PHI (número áureo)", () => {
        test("deve substituir PHI isolado", () => {
            expect(replaceConstants("PHI")).toBe(`${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir PHI com número antes", () => {
            expect(replaceConstants("2PHI")).toBe(`2*${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir PHI com número depois", () => {
            expect(replaceConstants("PHI3")).toBe(`${(1 + Math.sqrt(5)) / 2}*3`);
        });

        test("deve substituir PHI com números antes e depois", () => {
            expect(replaceConstants("2PHI4")).toBe(`2*${(1 + Math.sqrt(5)) / 2}*4`);
        });

        test("deve substituir múltiplos PHI na expressão", () => {
            expect(replaceConstants("PHI+PHI")).toBe(`${(1 + Math.sqrt(5)) / 2}+${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir PHI com parênteses antes", () => {
            expect(replaceConstants("(4)PHI")).toBe(`(4)*${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir PHI com parênteses depois", () => {
            expect(replaceConstants("PHI(6)")).toBe(`${(1 + Math.sqrt(5)) / 2}*(6)`);
        });

        test("deve substituir PHI com função depois", () => {
            expect(replaceConstants("PHIlog(x)")).toBe(`${(1 + Math.sqrt(5)) / 2}*log(x)`);
        });
    });

    // ===== CATEGORIA 7: SÍMBOLO φ (phi) =====
    describe("Símbolo φ (phi)", () => {
        test("deve substituir φ isolado", () => {
            expect(replaceConstants("φ")).toBe(`${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir φ com número antes", () => {
            expect(replaceConstants("5φ")).toBe(`5*${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir φ com número depois", () => {
            expect(replaceConstants("φ7")).toBe(`${(1 + Math.sqrt(5)) / 2}*7`);
        });

        test("deve substituir φ com números antes e depois", () => {
            expect(replaceConstants("5φ7")).toBe(`5*${(1 + Math.sqrt(5)) / 2}*7`);
        });

        test("deve misturar PHI e φ", () => {
            expect(replaceConstants("PHI+φ")).toBe(`${(1 + Math.sqrt(5)) / 2}+${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve substituir φ com parênteses", () => {
            expect(replaceConstants("(8)φ(9)")).toBe(`(8)*${(1 + Math.sqrt(5)) / 2}*(9)`);
        });
    });

    // ===== CATEGORIA 8: MÚLTIPLAS CONSTANTES =====
    describe("Múltiplas constantes na mesma expressão", () => {
        test("deve substituir E e PI juntos", () => {
            expect(replaceConstants("E+PI")).toBe(`${Math.E}+${Math.PI}`);
        });

        test("deve substituir E e PI com multiplicação implícita", () => {
            expect(replaceConstants("2E3PI")).toBe(`2*${Math.E}*3*${Math.PI}`);
        });

        test("deve substituir todas as constantes em sequência", () => {
            expect(replaceConstants("E+PI+TAU+PHI")).toBe(
                `${Math.E}+${Math.PI}+${2 * Math.PI}+${(1 + Math.sqrt(5)) / 2}`
            );
        });

        test("deve substituir constantes misturadas com símbolos", () => {
            expect(replaceConstants("E+π+τ+φ")).toBe(
                `${Math.E}+${Math.PI}+${2 * Math.PI}+${(1 + Math.sqrt(5)) / 2}`
            );
        });

        test("deve substituir constantes com números intercalados", () => {
            expect(replaceConstants("2E3PI4TAU")).toBe(
                `2*${Math.E}*3*${Math.PI}*4*${2 * Math.PI}`
            );
        });

        test("deve substituir constantes em expressão matemática complexa", () => {
            expect(replaceConstants("(2E+3PI)*TAU")).toBe(
                `(2*${Math.E}+3*${Math.PI})*${2 * Math.PI}`
            );
        });

        test("deve substituir constantes com operadores variados", () => {
            expect(replaceConstants("E*PI-TAU/PHI")).toBe(
                `${Math.E}*${Math.PI}-${2 * Math.PI}/${(1 + Math.sqrt(5)) / 2}`
            );
        });

        test("deve substituir três E seguidos", () => {
            expect(replaceConstants("E+E+E")).toBe(`${Math.E}+${Math.E}+${Math.E}`);
        });

        test("deve substituir constantes aninhadas em parênteses", () => {
            expect(replaceConstants("((E))PI")).toBe(`((${Math.E}))*${Math.PI}`);
        });

        test("deve substituir constantes em fração", () => {
            expect(replaceConstants("E/PI")).toBe(`${Math.E}/${Math.PI}`);
        });
    });

    // ===== CATEGORIA 9: MULTIPLICAÇÃO IMPLÍCITA COM NÚMEROS =====
    describe("Multiplicação implícita com números", () => {
        test("deve adicionar * entre número e constante", () => {
            expect(replaceConstants("5E")).toBe(`5*${Math.E}`);
        });

        test("deve adicionar * entre constante e número", () => {
            expect(replaceConstants("E8")).toBe(`${Math.E}*8`);
        });

        test("deve adicionar * entre número, constante e número", () => {
            expect(replaceConstants("3E7")).toBe(`3*${Math.E}*7`);
        });

        test("deve funcionar com números de múltiplos dígitos antes", () => {
            expect(replaceConstants("123E")).toBe(`123*${Math.E}`);
        });

        test("deve funcionar com números de múltiplos dígitos depois", () => {
            expect(replaceConstants("E456")).toBe(`${Math.E}*456`);
        });

        test("deve funcionar com números decimais antes", () => {
            expect(replaceConstants("3.14E")).toBe(`3.14*${Math.E}`);
        });

        test("deve funcionar com números decimais depois", () => {
            expect(replaceConstants("E2.71")).toBe(`${Math.E}*2.71`);
        });

        test("deve adicionar * com zero antes", () => {
            expect(replaceConstants("0E")).toBe(`0*${Math.E}`);
        });

        test("deve adicionar * com zero depois", () => {
            expect(replaceConstants("E0")).toBe(`${Math.E}*0`);
        });
    });

    // ===== CATEGORIA 10: MULTIPLICAÇÃO IMPLÍCITA COM PARÊNTESES =====
    describe("Multiplicação implícita com parênteses", () => {
        test("deve adicionar * entre ) e constante", () => {
            expect(replaceConstants("(x)E")).toBe(`(x)*${Math.E}`);
        });

        test("deve adicionar * entre constante e (", () => {
            expect(replaceConstants("E(x)")).toBe(`${Math.E}*(x)`);
        });

        test("deve adicionar * entre ), constante e (", () => {
            expect(replaceConstants("(2)E(3)")).toBe(`(2)*${Math.E}*(3)`);
        });

        test("deve funcionar com múltiplos níveis de parênteses", () => {
            expect(replaceConstants("((x))E")).toBe(`((x))*${Math.E}`);
        });

        test("deve funcionar com parênteses vazios", () => {
            expect(replaceConstants("()E")).toBe(`()*${Math.E}`);
        });

        test("deve adicionar * com expressão complexa em parênteses", () => {
            expect(replaceConstants("(2+3)E")).toBe(`(2+3)*${Math.E}`);
        });

        test("deve adicionar * entre ] e constante", () => {
            expect(replaceConstants("[x]PI")).toBe(`[x]*${Math.PI}`);
        });

        test("deve adicionar * entre constante e [", () => {
            expect(replaceConstants("PI[x]")).toBe(`${Math.PI}*[x]`);
        });

        test("deve adicionar * entre } e constante", () => {
            expect(replaceConstants("{x}TAU")).toBe(`{x}*${2 * Math.PI}`);
        });

        test("deve adicionar * entre constante e {", () => {
            expect(replaceConstants("TAU{x}")).toBe(`${2 * Math.PI}*{x}`);
        });

        test("deve misturar tipos de brackets", () => {
            expect(replaceConstants("(x)E[y]")).toBe(`(x)*${Math.E}*[y]`);
        });
    });

    // ===== CATEGORIA 11: MULTIPLICAÇÃO IMPLÍCITA COM FUNÇÕES =====
    describe("Multiplicação implícita com funções", () => {
        test("deve adicionar * entre constante e sin(", () => {
            expect(replaceConstants("Esin(x)")).toBe(`${Math.E}*sin(x)`);
        });

        test("deve adicionar * entre constante e cos(", () => {
            expect(replaceConstants("PIcos(x)")).toBe(`${Math.PI}*cos(x)`);
        });

        test("deve adicionar * entre constante e tan(", () => {
            expect(replaceConstants("TAUtan(x)")).toBe(`${2 * Math.PI}*tan(x)`);
        });

        test("deve adicionar * entre constante e log(", () => {
            expect(replaceConstants("PHIlog(x)")).toBe(`${(1 + Math.sqrt(5)) / 2}*log(x)`);
        });

        test("deve adicionar * entre constante e sqrt(", () => {
            expect(replaceConstants("Esqrt(x)")).toBe(`${Math.E}*sqrt(x)`);
        });

        test("deve adicionar * entre constante e exp(", () => {
            expect(replaceConstants("PIexp(x)")).toBe(`${Math.PI}*exp(x)`);
        });

        test("deve adicionar * entre número, constante e função", () => {
            expect(replaceConstants("2Esin(x)")).toBe(`2*${Math.E}*sin(x)`);
        });

        test("deve adicionar * entre ), constante e função", () => {
            expect(replaceConstants("(3)PIcos(x)")).toBe(`(3)*${Math.PI}*cos(x)`);
        });

        test("deve funcionar com função de múltiplas letras", () => {
            expect(replaceConstants("Easin(x)")).toBe(`${Math.E}*asin(x)`);
        });

        test("deve funcionar com função customizada", () => {
            expect(replaceConstants("PImyFunc(x)")).toBe(`${Math.PI}*myFunc(x)`);
        });
    });

    // ===== CATEGORIA 12: CASOS SEM MULTIPLICAÇÃO IMPLÍCITA =====
    describe("Casos que não devem adicionar multiplicação implícita", () => {
        test("não deve adicionar * com operador + antes", () => {
            expect(replaceConstants("+E")).toBe(`+${Math.E}`);
        });

        test("não deve adicionar * com operador - antes", () => {
            expect(replaceConstants("-E")).toBe(`-${Math.E}`);
        });

        test("não deve adicionar * com operador * antes", () => {
            expect(replaceConstants("*E")).toBe(`*${Math.E}`);
        });

        test("não deve adicionar * com operador / antes", () => {
            expect(replaceConstants("/E")).toBe(`/${Math.E}`);
        });

        test("não deve adicionar * com operador ^ antes", () => {
            expect(replaceConstants("^E")).toBe(`^${Math.E}`);
        });

        test("não deve adicionar * com vírgula antes", () => {
            expect(replaceConstants(",E")).toBe(`,${Math.E}`);
        });

        test("não deve adicionar * com ( antes", () => {
            expect(replaceConstants("(E")).toBe(`(${Math.E}`);
        });

        test("não deve adicionar * com [ antes", () => {
            expect(replaceConstants("[E")).toBe(`[${Math.E}`);
        });

        test("não deve adicionar * com { antes", () => {
            expect(replaceConstants("{E")).toBe(`{${Math.E}`);
        });

        test("não deve adicionar * com operador + depois", () => {
            expect(replaceConstants("E+")).toBe(`${Math.E}+`);
        });

        test("não deve adicionar * com operador - depois", () => {
            expect(replaceConstants("E-")).toBe(`${Math.E}-`);
        });

        test("não deve adicionar * com operador * depois", () => {
            expect(replaceConstants("E*")).toBe(`${Math.E}*`);
        });

        test("não deve adicionar * com operador / depois", () => {
            expect(replaceConstants("E/")).toBe(`${Math.E}/`);
        });
    });

    // ===== CATEGORIA 13: CASOS EXTREMOS E EDGE CASES =====
    describe("Casos extremos e edge cases", () => {
        test("deve tratar string vazia", () => {
            expect(replaceConstants("")).toBe("");
        });

        test("deve tratar expressão sem constantes", () => {
            expect(replaceConstants("2+3")).toBe("2+3");
        });

        test("deve tratar constante no início da string", () => {
            expect(replaceConstants("E+5")).toBe(`${Math.E}+5`);
        });

        test("deve tratar constante no final da string", () => {
            expect(replaceConstants("5+E")).toBe(`5+${Math.E}`);
        });

        test("deve tratar múltiplas constantes consecutivas", () => {
            expect(replaceConstants("EPI")).toBe(`${Math.E}*${Math.PI}`);
        });

        test("deve tratar expressão longa e complexa", () => {
            expect(replaceConstants("((2E+3PI)*(TAU-PHI))/E")).toBe(
                `((2*${Math.E}+3*${Math.PI})*(${2 * Math.PI}-${(1 + Math.sqrt(5)) / 2}))/${Math.E}`
            );
        });

        test("deve funcionar com espaços na expressão", () => {
            expect(replaceConstants("2 E")).toBe(`2 ${Math.E}`);
        });

        test("deve tratar constante duplicada seguida", () => {
            expect(replaceConstants("EE")).toBe(`${Math.E}*${Math.E}`);
        });

        test("deve tratar constante triplicada seguida", () => {
            expect(replaceConstants("EEE")).toBe(`${Math.E}*${Math.E}*${Math.E}`);
        });

        test("deve funcionar em expressão com variáveis", () => {
            expect(replaceConstants("xE")).toBe(`x${Math.E}`);
        });
    });

    // ===== CATEGORIA 14: COMBINAÇÕES VARIADAS =====
    describe("Combinações variadas de operações", () => {
        test("deve processar soma de constantes com coeficientes", () => {
            expect(replaceConstants("2E+3PI")).toBe(`2*${Math.E}+3*${Math.PI}`);
        });

        test("deve processar subtração de constantes com coeficientes", () => {
            expect(replaceConstants("5E-2PI")).toBe(`5*${Math.E}-2*${Math.PI}`);
        });

        test("deve processar multiplicação explícita de constantes", () => {
            expect(replaceConstants("E*PI")).toBe(`${Math.E}*${Math.PI}`);
        });

        test("deve processar divisão de constantes", () => {
            expect(replaceConstants("TAU/E")).toBe(`${2 * Math.PI}/${Math.E}`);
        });

        test("deve processar potência com constante na base", () => {
            expect(replaceConstants("E^2")).toBe(`${Math.E}^2`);
        });

        test("deve processar potência com constante no expoente", () => {
            expect(replaceConstants("2^E")).toBe(`2^${Math.E}`);
        });

        test("deve processar fração com constantes", () => {
            expect(replaceConstants("(E)/(PI)")).toBe(`(${Math.E})/(${Math.PI})`);
        });

        test("deve processar módulo com constante", () => {
            expect(replaceConstants("E%3")).toBe(`${Math.E}%3`);
        });

        test("deve processar negação de constante", () => {
            expect(replaceConstants("-E")).toBe(`-${Math.E}`);
        });

        test("deve processar positivo explícito de constante", () => {
            expect(replaceConstants("+E")).toBe(`+${Math.E}`);
        });
    });

    // ===== CATEGORIA 15: EXPRESSÕES MATEMÁTICAS REALISTAS =====
    describe("Expressões matemáticas realistas", () => {
        test("deve processar fórmula da área do círculo", () => {
            expect(replaceConstants("PIr^2")).toBe(`${Math.PI}r^2`);
        });

        test("deve processar fórmula do perímetro do círculo", () => {
            expect(replaceConstants("2PIr")).toBe(`2*${Math.PI}r`);
        });

        test("deve processar fórmula de Euler", () => {
            expect(replaceConstants("E^(PIi)")).toBe(`${Math.E}^(${Math.PI}i)`);
        });

        test("deve processar crescimento exponencial", () => {
            expect(replaceConstants("E^(rt)")).toBe(`${Math.E}^(rt)`);
        });

        test("deve processar identidade trigonométrica", () => {
            expect(replaceConstants("sin(2PI)")).toBe(`sin(2*${Math.PI})`);
        });

        test("deve processar conversão graus para radianos", () => {
            expect(replaceConstants("(PI/180)*degrees")).toBe(`(${Math.PI}/180)*degrees`);
        });

        test("deve processar volume da esfera", () => {
            expect(replaceConstants("(4/3)PIr^3")).toBe(`(4/3)*${Math.PI}r^3`);
        });

        test("deve processar proporção áurea", () => {
            expect(replaceConstants("PHI^2-PHI-1")).toBe(
                `${(1 + Math.sqrt(5)) / 2}^2-${(1 + Math.sqrt(5)) / 2}-1`
            );
        });

        test("deve processar logaritmo natural", () => {
            expect(replaceConstants("log(E)")).toBe(`log(${Math.E})`);
        });

        test("deve processar função exponencial", () => {
            expect(replaceConstants("Eexp(x)")).toBe(`${Math.E}*exp(x)`);
        });
    });

    // ===== CATEGORIA 16: TESTES COM DIFERENTES POSIÇÕES =====
    describe("Constantes em diferentes posições", () => {
        test("deve processar constante no início com parênteses", () => {
            expect(replaceConstants("E(2+3)")).toBe(`${Math.E}*(2+3)`);
        });

        test("deve processar constante no meio de expressão", () => {
            expect(replaceConstants("2+E+3")).toBe(`2+${Math.E}+3`);
        });

        test("deve processar constante entre operadores", () => {
            expect(replaceConstants("2*E/3")).toBe(`2*${Math.E}/3`);
        });

        test("deve processar constante em denominador", () => {
            expect(replaceConstants("1/E")).toBe(`1/${Math.E}`);
        });

        test("deve processar constante em numerador", () => {
            expect(replaceConstants("E/2")).toBe(`${Math.E}/2`);
        });

        test("deve processar constante em expoente", () => {
            expect(replaceConstants("x^E")).toBe(`x^${Math.E}`);
        });

        test("deve processar constante em base de potência", () => {
            expect(replaceConstants("E^x")).toBe(`${Math.E}^x`);
        });

        test("deve processar constante dentro de função", () => {
            expect(replaceConstants("sin(E)")).toBe(`sin(${Math.E})`);
        });

        test("deve processar constante após vírgula em função", () => {
            expect(replaceConstants("func(x,E)")).toBe(`func(x,${Math.E})`);
        });

        test("deve processar múltiplas constantes separadas por vírgulas", () => {
            expect(replaceConstants("func(E,PI,TAU)")).toBe(
                `func(${Math.E},${Math.PI},${2 * Math.PI})`
            );
        });
    });

    // ===== CATEGORIA 17: VARIAÇÕES DE NOTAÇÃO =====
    describe("Variações de notação e símbolos", () => {
        test("deve processar PI maiúsculo", () => {
            expect(replaceConstants("PI")).toBe(`${Math.PI}`);
        });

        test("deve processar π minúsculo (símbolo)", () => {
            expect(replaceConstants("π")).toBe(`${Math.PI}`);
        });

        test("deve processar TAU maiúsculo", () => {
            expect(replaceConstants("TAU")).toBe(`${2 * Math.PI}`);
        });

        test("deve processar τ minúsculo (símbolo)", () => {
            expect(replaceConstants("τ")).toBe(`${2 * Math.PI}`);
        });

        test("deve processar PHI maiúsculo", () => {
            expect(replaceConstants("PHI")).toBe(`${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve processar φ minúsculo (símbolo)", () => {
            expect(replaceConstants("φ")).toBe(`${(1 + Math.sqrt(5)) / 2}`);
        });

        test("deve misturar notações de PI", () => {
            expect(replaceConstants("PI+π")).toBe(`${Math.PI}+${Math.PI}`);
        });

        test("deve misturar notações de TAU", () => {
            expect(replaceConstants("TAU*τ")).toBe(`${2 * Math.PI}*${2 * Math.PI}`);
        });

        test("deve misturar notações de PHI", () => {
            expect(replaceConstants("PHI-φ")).toBe(
                `${(1 + Math.sqrt(5)) / 2}-${(1 + Math.sqrt(5)) / 2}`
            );
        });

        test("deve processar todas as notações em uma expressão", () => {
            expect(replaceConstants("E+PI+π+TAU+τ+PHI+φ")).toBe(
                `${Math.E}+${Math.PI}+${Math.PI}+${2 * Math.PI}+${2 * Math.PI}+${(1 + Math.sqrt(5)) / 2}+${(1 + Math.sqrt(5)) / 2}`
            );
        });
    });

    // ===== CATEGORIA 18: TESTES DE PRECISÃO =====
    describe("Testes de precisão numérica", () => {
        test("deve usar valor correto de E", () => {
            const result = replaceConstants("E");
            expect(result).toBe(String(Math.E));
        });

        test("deve usar valor correto de PI", () => {
            const result = replaceConstants("PI");
            expect(result).toBe(String(Math.PI));
        });

        test("deve usar valor correto de TAU", () => {
            const result = replaceConstants("TAU");
            expect(result).toBe(String(2 * Math.PI));
        });

        test("deve usar valor correto de PHI", () => {
            const result = replaceConstants("PHI");
            expect(result).toBe(String((1 + Math.sqrt(5)) / 2));
        });

        test("deve manter precisão em múltiplas substituições", () => {
            const result = replaceConstants("E+E");
            expect(result).toBe(`${Math.E}+${Math.E}`);
        });
    });

    // ===== CATEGORIA 19: INTERAÇÃO COM VARIÁVEIS =====
    describe("Interação com variáveis e identificadores", () => {
        test("deve processar constante seguida de variável minúscula", () => {
            expect(replaceConstants("Ex")).toBe(`${Math.E}x`);
        });

        test("deve processar variável seguida de constante", () => {
            expect(replaceConstants("xE")).toBe(`x${Math.E}`);
        });

        test("deve processar constante entre variáveis", () => {
            expect(replaceConstants("xEy")).toBe(`x${Math.E}y`);
        });

        test("não deve confundir E com variável E", () => {
            expect(replaceConstants("E")).toBe(`${Math.E}`);
        });

        test("deve processar expressão com múltiplas variáveis", () => {
            expect(replaceConstants("aEbPIc")).toBe(`a${Math.E}b${Math.PI}c`);
        });
    });

    // ===== CATEGORIA 20: CASOS COMPLEXOS E ANINHADOS =====
    describe("Casos complexos e aninhados", () => {
        test("deve processar parênteses aninhados com constante", () => {
            expect(replaceConstants("((E))")).toBe(`((${Math.E}))`);
        });

        test("deve processar múltiplos níveis de aninhamento", () => {
            expect(replaceConstants("(((E)))")).toBe(`(((${Math.E})))`);
        });

        test("deve processar constante em expressão profundamente aninhada", () => {
            expect(replaceConstants("((2E+3)*(4-PI))")).toBe(
                `((2*${Math.E}+3)*(4-${Math.PI}))`
            );
        });

        test("deve processar função aninhada com constante", () => {
            expect(replaceConstants("sin(cos(E))")).toBe(`sin(cos(${Math.E}))`);
        });

        test("deve processar múltiplas funções com constantes", () => {
            expect(replaceConstants("sin(E)+cos(PI)")).toBe(
                `sin(${Math.E})+cos(${Math.PI})`
            );
        });

        test("deve processar expressão com brackets mistos", () => {
            expect(replaceConstants("(E+[PI*{TAU}])")).toBe(
                `(${Math.E}+[${Math.PI}*{${2 * Math.PI}}])`
            );
        });

        test("deve processar cadeia longa de operações", () => {
            expect(replaceConstants("E+PI*TAU-PHI/E")).toBe(
                `${Math.E}+${Math.PI}*${2 * Math.PI}-${(1 + Math.sqrt(5)) / 2}/${Math.E}`
            );
        });

        test("deve processar expressão com múltiplas funções aninhadas", () => {
            expect(replaceConstants("log(exp(sin(E)))")).toBe(
                `log(exp(sin(${Math.E})))`
            );
        });

        test("deve processar fração complexa", () => {
            expect(replaceConstants("(2E+3)/(PIϕ-TAU)")).toBe(
                `(2*${Math.E}+3)/(${Math.PI}*${(1 + Math.sqrt(5)) / 2}-${2 * Math.PI})`
            );
        });

        test("deve processar expressão com potências aninhadas", () => {
            expect(replaceConstants("E^(PI^TAU)")).toBe(
                `${Math.E}^(${Math.PI}^${2 * Math.PI})`
            );
        });
    });
});