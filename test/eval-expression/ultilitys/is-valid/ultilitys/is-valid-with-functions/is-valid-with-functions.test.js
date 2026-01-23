const isValidWithFunctions = require("./../../../../../../src/eval-expression/utilities/is-valid/ultilitys/is-valid-with-functions/is-valid-with-functions");

// ==================================================
// SINGLE PARAMETER FUNCTIONS - VALID
// ==================================================

test("Single-param function - valid (1)", () => {
    expect(isValidWithFunctions("sin(0)")).toBe(true);
});

test("Single-param function - valid (2)", () => {
    expect(isValidWithFunctions("sin(90)")).toBe(true);
});

test("Single-param function - valid (3)", () => {
    expect(isValidWithFunctions("sin(3.14159)")).toBe(true);
});

test("Single-param function - valid (4)", () => {
    expect(isValidWithFunctions("cos(45)")).toBe(true);
});

test("Single-param function - valid (5)", () => {
    expect(isValidWithFunctions("cos(180)")).toBe(true);
});

test("Single-param function - valid (6)", () => {
    expect(isValidWithFunctions("tan(30)")).toBe(true);
});

test("Single-param function - valid (7)", () => {
    expect(isValidWithFunctions("tg(60)")).toBe(true);
});

test("Single-param function - valid (8)", () => {
    expect(isValidWithFunctions("sen(90)")).toBe(true);
});

test("Single-param function - valid (9)", () => {
    expect(isValidWithFunctions("sqrt(16)")).toBe(true);
});

test("Single-param function - valid (10)", () => {
    expect(isValidWithFunctions("sqrt(2)")).toBe(true);
});

test("Single-param function - valid (11)", () => {
    expect(isValidWithFunctions("cbrt(27)")).toBe(true);
});

test("Single-param function - valid (12)", () => {
    expect(isValidWithFunctions("cbrt(8)")).toBe(true);
});

test("Single-param function - valid (13)", () => {
    expect(isValidWithFunctions("ln(2.718)")).toBe(true);
});

test("Single-param function - valid (14)", () => {
    expect(isValidWithFunctions("ln(10)")).toBe(true);
});

test("Single-param function - valid (15)", () => {
    expect(isValidWithFunctions("exp(1)")).toBe(true);
});

test("Single-param function - valid (16)", () => {
    expect(isValidWithFunctions("exp(0)")).toBe(true);
});

test("Single-param function - valid (17)", () => {
    expect(isValidWithFunctions("asin(0.5)")).toBe(true);
});

test("Single-param function - valid (18)", () => {
    expect(isValidWithFunctions("asen(1)")).toBe(true);
});

test("Single-param function - valid (19)", () => {
    expect(isValidWithFunctions("acos(0)")).toBe(true);
});

test("Single-param function - valid (20)", () => {
    expect(isValidWithFunctions("atan(1)")).toBe(true);
});

test("Single-param function - valid (21)", () => {
    expect(isValidWithFunctions("atg(0)")).toBe(true);
});

test("Single-param function - valid (22)", () => {
    expect(isValidWithFunctions("sin(1+2)")).toBe(true);
});

test("Single-param function - valid (23)", () => {
    expect(isValidWithFunctions("cos(3*4)")).toBe(true);
});

test("Single-param function - valid (24)", () => {
    expect(isValidWithFunctions("sqrt(2^2)")).toBe(true);
});

test("Single-param function - valid (25)", () => {
    expect(isValidWithFunctions("ln(10/2)")).toBe(true);
});

test("Single-param function - valid (26)", () => {
    expect(isValidWithFunctions("exp(2-1)")).toBe(true);
});

test("Single-param function - valid (27)", () => {
    expect(isValidWithFunctions("tan((3+4)*2)")).toBe(true);
});

test("Single-param function - valid (28)", () => {
    expect(isValidWithFunctions("sqrt([3+4])")).toBe(true);
});

test("Single-param function - valid (29)", () => {
    expect(isValidWithFunctions("cbrt({8*2})")).toBe(true);
});

test("Single-param function - valid (30)", () => {
    expect(isValidWithFunctions("sin(1e2)")).toBe(true);
});

// ==================================================
// MULTI-PARAMETER FUNCTIONS - VALID
// ==================================================

test("Multi-param function - valid (31)", () => {
    expect(isValidWithFunctions("pow(2,3)")).toBe(true);
});

test("Multi-param function - valid (32)", () => {
    expect(isValidWithFunctions("pow(10,2)")).toBe(true);
});

test("Multi-param function - valid (33)", () => {
    expect(isValidWithFunctions("pow(2.5,3.5)")).toBe(true);
});

test("Multi-param function - valid (34)", () => {
    expect(isValidWithFunctions("nroot(27,3)")).toBe(true);
});

test("Multi-param function - valid (35)", () => {
    expect(isValidWithFunctions("nroot(16,4)")).toBe(true);
});

test("Multi-param function - valid (36)", () => {
    expect(isValidWithFunctions("nroot(8,3)")).toBe(true);
});

test("Multi-param function - valid (37)", () => {
    expect(isValidWithFunctions("log(100,10)")).toBe(true);
});

test("Multi-param function - valid (38)", () => {
    expect(isValidWithFunctions("log(8,2)")).toBe(true);
});

test("Multi-param function - valid (39)", () => {
    expect(isValidWithFunctions("log(1000,10)")).toBe(true);
});

test("Multi-param function - valid (40)", () => {
    expect(isValidWithFunctions("pow(2,8)")).toBe(true);
});

test("Multi-param function - valid (41)", () => {
    expect(isValidWithFunctions("pow(3,3)")).toBe(true);
});

test("Multi-param function - valid (42)", () => {
    expect(isValidWithFunctions("nroot(125,3)")).toBe(true);
});

test("Multi-param function - valid (43)", () => {
    expect(isValidWithFunctions("log(64,2)")).toBe(true);
});

test("Multi-param function - valid (44)", () => {
    expect(isValidWithFunctions("pow(2+3,4)")).toBe(true);
});

test("Multi-param function - valid (45)", () => {
    expect(isValidWithFunctions("pow(10,2*3)")).toBe(true);
});

test("Multi-param function - valid (46)", () => {
    expect(isValidWithFunctions("nroot(3+5,2)")).toBe(true);
});

test("Multi-param function - valid (47)", () => {
    expect(isValidWithFunctions("log(10*10,10)")).toBe(true);
});

test("Multi-param function - valid (48)", () => {
    expect(isValidWithFunctions("pow((2+3),2)")).toBe(true);
});

test("Multi-param function - valid (49)", () => {
    expect(isValidWithFunctions("nroot([16+9],2)")).toBe(true);
});

test("Multi-param function - valid (50)", () => {
    expect(isValidWithFunctions("log({100-10},10)")).toBe(true);
});

test("Multi-param function - valid (51)", () => {
    expect(isValidWithFunctions("pow(2,3+4)")).toBe(true);
});

test("Multi-param function - valid (52)", () => {
    expect(isValidWithFunctions("nroot(27,1+2)")).toBe(true);
});

test("Multi-param function - valid (53)", () => {
    expect(isValidWithFunctions("log(100,5*2)")).toBe(true);
});

test("Multi-param function - valid (54)", () => {
    expect(isValidWithFunctions("pow(1e2,2)")).toBe(true);
});

test("Multi-param function - valid (55)", () => {
    expect(isValidWithFunctions("log(1e3,10)")).toBe(true);
});

// ==================================================
// NESTED FUNCTIONS - VALID
// ==================================================

test("Nested functions - valid (56)", () => {
    expect(isValidWithFunctions("sin(cos(30))")).toBe(true);
});

test("Nested functions - valid (57)", () => {
    expect(isValidWithFunctions("cos(sin(45))")).toBe(true);
});

test("Nested functions - valid (58)", () => {
    expect(isValidWithFunctions("sqrt(sqrt(16))")).toBe(true);
});

test("Nested functions - valid (59)", () => {
    expect(isValidWithFunctions("ln(exp(2))")).toBe(true);
});

test("Nested functions - valid (60)", () => {
    expect(isValidWithFunctions("exp(ln(10))")).toBe(true);
});

test("Nested functions - valid (61)", () => {
    expect(isValidWithFunctions("sin(sqrt(2))")).toBe(true);
});

test("Nested functions - valid (62)", () => {
    expect(isValidWithFunctions("cos(cbrt(8))")).toBe(true);
});

test("Nested functions - valid (63)", () => {
    expect(isValidWithFunctions("tan(ln(10))")).toBe(true);
});

test("Nested functions - valid (64)", () => {
    expect(isValidWithFunctions("sqrt(sin(90))")).toBe(true);
});

test("Nested functions - valid (65)", () => {
    expect(isValidWithFunctions("cbrt(cos(0))")).toBe(true);
});

test("Nested functions - valid (66)", () => {
    expect(isValidWithFunctions("pow(sin(30),2)")).toBe(true);
});

test("Nested functions - valid (67)", () => {
    expect(isValidWithFunctions("pow(2,cos(0))")).toBe(true);
});

test("Nested functions - valid (68)", () => {
    expect(isValidWithFunctions("nroot(sqrt(16),2)")).toBe(true);
});

test("Nested functions - valid (69)", () => {
    expect(isValidWithFunctions("log(exp(10),10)")).toBe(true);
});

test("Nested functions - valid (70)", () => {
    expect(isValidWithFunctions("log(10,sqrt(100))")).toBe(true);
});

test("Nested functions - valid (71)", () => {
    expect(isValidWithFunctions("sin(pow(2,3))")).toBe(true);
});

test("Nested functions - valid (72)", () => {
    expect(isValidWithFunctions("cos(nroot(27,3))")).toBe(true);
});

test("Nested functions - valid (73)", () => {
    expect(isValidWithFunctions("sqrt(log(100,10))")).toBe(true);
});

test("Nested functions - valid (74)", () => {
    expect(isValidWithFunctions("sin(sin(sin(30)))")).toBe(true);
});

test("Nested functions - valid (75)", () => {
    expect(isValidWithFunctions("sqrt(sqrt(sqrt(256)))")).toBe(true);
});

test("Nested functions - valid (76)", () => {
    expect(isValidWithFunctions("pow(pow(2,2),2)")).toBe(true);
});

test("Nested functions - valid (77)", () => {
    expect(isValidWithFunctions("log(log(1000,10),10)")).toBe(true);
});

test("Nested functions - valid (78)", () => {
    expect(isValidWithFunctions("sin(cos(tan(45)))")).toBe(true);
});

test("Nested functions - valid (79)", () => {
    expect(isValidWithFunctions("sqrt(cbrt(pow(2,6)))")).toBe(true);
});

test("Nested functions - valid (80)", () => {
    expect(isValidWithFunctions("ln(exp(sin(0)))")).toBe(true);
});

test("Nested functions - valid (81)", () => {
    expect(isValidWithFunctions("pow(sqrt(16),cbrt(8))")).toBe(true);
});

test("Nested functions - valid (82)", () => {
    expect(isValidWithFunctions("nroot(pow(3,3),sqrt(9))")).toBe(true);
});

test("Nested functions - valid (83)", () => {
    expect(isValidWithFunctions("log(pow(10,2),sqrt(100))")).toBe(true);
});

test("Nested functions - valid (84)", () => {
    expect(isValidWithFunctions("sin(log(100,10)+cos(0))")).toBe(true);
});

test("Nested functions - valid (85)", () => {
    expect(isValidWithFunctions("sqrt(pow(2,2)+pow(3,2))")).toBe(true);
});

// ==================================================
// IMPLICIT MULTIPLICATION - VALID
// ==================================================

test("Implicit multiplication - valid (86)", () => {
    expect(isValidWithFunctions("2sin(30)")).toBe(true);
});

test("Implicit multiplication - valid (87)", () => {
    expect(isValidWithFunctions("3cos(45)")).toBe(true);
});

test("Implicit multiplication - valid (88)", () => {
    expect(isValidWithFunctions("5sqrt(16)")).toBe(true);
});

test("Implicit multiplication - valid (89)", () => {
    expect(isValidWithFunctions("10ln(2)")).toBe(true);
});

test("Implicit multiplication - valid (90)", () => {
    expect(isValidWithFunctions("sin(30)cos(45)")).toBe(true);
});

test("Implicit multiplication - valid (91)", () => {
    expect(isValidWithFunctions("sqrt(4)cbrt(8)")).toBe(true);
});

test("Implicit multiplication - valid (92)", () => {
    expect(isValidWithFunctions("ln(2)exp(1)")).toBe(true);
});

test("Implicit multiplication - valid (93)", () => {
    expect(isValidWithFunctions("cos(0)sin(90)")).toBe(true);
});

test("Implicit multiplication - valid (94)", () => {
    expect(isValidWithFunctions("(2+3)sin(30)")).toBe(true);
});

test("Implicit multiplication - valid (95)", () => {
    expect(isValidWithFunctions("(4*5)cos(45)")).toBe(true);
});

test("Implicit multiplication - valid (96)", () => {
    expect(isValidWithFunctions("[3+4]sqrt(25)")).toBe(true);
});

test("Implicit multiplication - valid (97)", () => {
    expect(isValidWithFunctions("{2*3}ln(10)")).toBe(true);
});

test("Implicit multiplication - valid (98)", () => {
    expect(isValidWithFunctions("sin(30)(4+5)")).toBe(true);
});

test("Implicit multiplication - valid (99)", () => {
    expect(isValidWithFunctions("cos(45)[2*3]")).toBe(true);
});

test("Implicit multiplication - valid (100)", () => {
    expect(isValidWithFunctions("sqrt(16){3+2}")).toBe(true);
});

test("Implicit multiplication - valid (101)", () => {
    expect(isValidWithFunctions("ln(10)(5-2)")).toBe(true);
});

test("Implicit multiplication - valid (102)", () => {
    expect(isValidWithFunctions("(2)sin(30)")).toBe(true);
});

test("Implicit multiplication - valid (103)", () => {
    expect(isValidWithFunctions("sin(30)(2)")).toBe(true);
});

test("Implicit multiplication - valid (104)", () => {
    expect(isValidWithFunctions("2sin(30)3")).toBe(true);
});

test("Implicit multiplication - valid (105)", () => {
    expect(isValidWithFunctions("sin(30)2cos(45)")).toBe(true);
});

test("Implicit multiplication - valid (106)", () => {
    expect(isValidWithFunctions("(2+3)sin(30)(4+5)")).toBe(true);
});

test("Implicit multiplication - valid (107)", () => {
    expect(isValidWithFunctions("2sin(30)cos(45)3")).toBe(true);
});

test("Implicit multiplication - valid (108)", () => {
    expect(isValidWithFunctions("sqrt(4)sqrt(9)")).toBe(true);
});

test("Implicit multiplication - valid (109)", () => {
    expect(isValidWithFunctions("3sin(30)2")).toBe(true);
});

test("Implicit multiplication - valid (110)", () => {
    expect(isValidWithFunctions("sin(30)3cos(45)")).toBe(true);
});

test("Implicit multiplication - valid (111)", () => {
    expect(isValidWithFunctions("2pow(2,3)")).toBe(true);
});

test("Implicit multiplication - valid (112)", () => {
    expect(isValidWithFunctions("pow(2,3)5")).toBe(true);
});

test("Implicit multiplication - valid (113)", () => {
    expect(isValidWithFunctions("nroot(27,3)2")).toBe(true);
});

test("Implicit multiplication - valid (114)", () => {
    expect(isValidWithFunctions("3log(100,10)")).toBe(true);
});

test("Implicit multiplication - valid (115)", () => {
    expect(isValidWithFunctions("(1+2)pow(2,3)")).toBe(true);
});

test("Implicit multiplication - valid (116)", () => {
    expect(isValidWithFunctions("pow(2,3)(4+5)")).toBe(true);
});

test("Implicit multiplication - valid (117)", () => {
    expect(isValidWithFunctions("2sin(cos(30))")).toBe(true);
});

test("Implicit multiplication - valid (118)", () => {
    expect(isValidWithFunctions("sin(cos(30))2")).toBe(true);
});

test("Implicit multiplication - valid (119)", () => {
    expect(isValidWithFunctions("(2)sin(cos(30))(3)")).toBe(true);
});

test("Implicit multiplication - valid (120)", () => {
    expect(isValidWithFunctions("2pow(sqrt(16),2)3")).toBe(true);
});

// ==================================================
// COMPLEX EXPRESSIONS - VALID
// ==================================================

test("Complex expression - valid (121)", () => {
    expect(isValidWithFunctions("sin(30)+cos(45)")).toBe(true);
});

test("Complex expression - valid (122)", () => {
    expect(isValidWithFunctions("sqrt(16)-cbrt(8)")).toBe(true);
});

test("Complex expression - valid (123)", () => {
    expect(isValidWithFunctions("ln(10)*exp(2)")).toBe(true);
});

test("Complex expression - valid (124)", () => {
    expect(isValidWithFunctions("pow(2,3)/nroot(27,3)")).toBe(true);
});

test("Complex expression - valid (125)", () => {
    expect(isValidWithFunctions("2*sin(30)+3*cos(45)")).toBe(true);
});

test("Complex expression - valid (126)", () => {
    expect(isValidWithFunctions("sqrt(pow(3,2)+pow(4,2))")).toBe(true);
});

test("Complex expression - valid (127)", () => {
    expect(isValidWithFunctions("log(100,10)+log(1000,10)")).toBe(true);
});

test("Complex expression - valid (128)", () => {
    expect(isValidWithFunctions("sin(30)*cos(30)+tan(30)")).toBe(true);
});

test("Complex expression - valid (129)", () => {
    expect(isValidWithFunctions("pow(2,3)+pow(3,2)-pow(1,5)")).toBe(true);
});

test("Complex expression - valid (130)", () => {
    expect(isValidWithFunctions("(sin(30)+cos(30))*2")).toBe(true);
});

test("Complex expression - valid (131)", () => {
    expect(isValidWithFunctions("2*(sqrt(16)+cbrt(8))")).toBe(true);
});

test("Complex expression - valid (132)", () => {
    expect(isValidWithFunctions("ln(exp(3))+exp(ln(3))")).toBe(true);
});

test("Complex expression - valid (133)", () => {
    expect(isValidWithFunctions("pow(sin(30),2)+pow(cos(30),2)")).toBe(true);
});

test("Complex expression - valid (134)", () => {
    expect(isValidWithFunctions("sqrt(16)/cbrt(8)*ln(10)")).toBe(true);
});

test("Complex expression - valid (135)", () => {
    expect(isValidWithFunctions("3*sin(45)+4*cos(45)-5*tan(45)")).toBe(true);
});

test("Complex expression - valid (136)", () => {
    expect(isValidWithFunctions("log(pow(10,3),10)")).toBe(true);
});

test("Complex expression - valid (137)", () => {
    expect(isValidWithFunctions("pow(2,log(8,2))")).toBe(true);
});

test("Complex expression - valid (138)", () => {
    expect(isValidWithFunctions("nroot(pow(2,6),2)")).toBe(true);
});

test("Complex expression - valid (139)", () => {
    expect(isValidWithFunctions("sin(30+45)")).toBe(true);
});

test("Complex expression - valid (140)", () => {
    expect(isValidWithFunctions("cos(90-45)")).toBe(true);
});

test("Complex expression - valid (141)", () => {
    expect(isValidWithFunctions("sqrt(100/4)")).toBe(true);
});

test("Complex expression - valid (142)", () => {
    expect(isValidWithFunctions("cbrt(216/8)")).toBe(true);
});

test("Complex expression - valid (143)", () => {
    expect(isValidWithFunctions("ln(10*2.718)")).toBe(true);
});

test("Complex expression - valid (144)", () => {
    expect(isValidWithFunctions("exp(2+3)")).toBe(true);
});

test("Complex expression - valid (145)", () => {
    expect(isValidWithFunctions("pow(2+3,3-1)")).toBe(true);
});

// ==================================================
// EDGE CASES - VALID
// ==================================================

test("Edge case - valid (146)", () => {
    expect(isValidWithFunctions("sin(0)")).toBe(true);
});

test("Edge case - valid (147)", () => {
    expect(isValidWithFunctions("cos(0)")).toBe(true);
});

test("Edge case - valid (148)", () => {
    expect(isValidWithFunctions("sqrt(0)")).toBe(true);
});

test("Edge case - valid (149)", () => {
    expect(isValidWithFunctions("cbrt(0)")).toBe(true);
});

test("Edge case - valid (150)", () => {
    expect(isValidWithFunctions("ln(1)")).toBe(true);
});

test("Edge case - valid (151)", () => {
    expect(isValidWithFunctions("exp(0)")).toBe(true);
});

test("Edge case - valid (152)", () => {
    expect(isValidWithFunctions("pow(0,2)")).toBe(true);
});

test("Edge case - valid (153)", () => {
    expect(isValidWithFunctions("pow(2,0)")).toBe(true);
});

test("Edge case - valid (154)", () => {
    expect(isValidWithFunctions("log(1,10)")).toBe(true);
});

test("Edge case - valid (155)", () => {
    expect(isValidWithFunctions("nroot(0,2)")).toBe(true);
});

test("Edge case - valid (156)", () => {
    expect(isValidWithFunctions("sin(1e10)")).toBe(true);
});

test("Edge case - valid (157)", () => {
    expect(isValidWithFunctions("cos(1e-5)")).toBe(true);
});

test("Edge case - valid (158)", () => {
    expect(isValidWithFunctions("sqrt(1e6)")).toBe(true);
});

test("Edge case - valid (159)", () => {
    expect(isValidWithFunctions("pow(10,100)")).toBe(true);
});

test("Edge case - valid (160)", () => {
    expect(isValidWithFunctions("log(1e10,10)")).toBe(true);
});

test("Edge case - valid (161)", () => {
    expect(isValidWithFunctions("sin((((30))))")).toBe(true);
});

test("Edge case - valid (162)", () => {
    expect(isValidWithFunctions("sqrt([[[16]]])")).toBe(true);
});

test("Edge case - valid (163)", () => {
    expect(isValidWithFunctions("cbrt({{{27}}})")).toBe(true);
});

test("Edge case - valid (164)", () => {
    expect(isValidWithFunctions("sin(3.141592653589793)")).toBe(true);
});

test("Edge case - valid (165)", () => {
    expect(isValidWithFunctions("sqrt(2.0)")).toBe(true);
});

// ==================================================
// INVALID - FUNCTION WITHOUT PARENTHESES
// ==================================================

test("Invalid - function without parentheses (166)", () => {
    expect(isValidWithFunctions("sin30")).toBe(false);
});

test("Invalid - function without parentheses (167)", () => {
    expect(isValidWithFunctions("cos45")).toBe(false);
});

test("Invalid - function without parentheses (168)", () => {
    expect(isValidWithFunctions("sqrt16")).toBe(false);
});

test("Invalid - function without parentheses (169)", () => {
    expect(isValidWithFunctions("cbrt8")).toBe(false);
});

test("Invalid - function without parentheses (170)", () => {
    expect(isValidWithFunctions("ln10")).toBe(false);
});

test("Invalid - function without parentheses (171)", () => {
    expect(isValidWithFunctions("exp2")).toBe(false);
});

test("Invalid - function without parentheses (172)", () => {
    expect(isValidWithFunctions("pow23")).toBe(false);
});

test("Invalid - function without parentheses (173)", () => {
    expect(isValidWithFunctions("log100")).toBe(false);
});

test("Invalid - function without parentheses (174)", () => {
    expect(isValidWithFunctions("nroot27")).toBe(false);
});

test("Invalid - function without parentheses (175)", () => {
    expect(isValidWithFunctions("sincos")).toBe(false);
});

test("Invalid - function without parentheses (176)", () => {
    expect(isValidWithFunctions("sqrtcbrt")).toBe(false);
});

test("Invalid - function without parentheses (177)", () => {
    expect(isValidWithFunctions("lnexp")).toBe(false);
});

test("Invalid - function without parentheses (178)", () => {
    expect(isValidWithFunctions("ab")).toBe(false);
});

test("Invalid - function without parentheses (179)", () => {
    expect(isValidWithFunctions("xyz")).toBe(false);
});

test("Invalid - function without parentheses (180)", () => {
    expect(isValidWithFunctions("sentan")).toBe(false);
});

// ==================================================
// INVALID - WRONG PARAMETER COUNT
// ==================================================

test("Invalid - wrong parameter count (181)", () => {
    expect(isValidWithFunctions("sin()")).toBe(false);
});

test("Invalid - wrong parameter count (182)", () => {
    expect(isValidWithFunctions("cos(,)")).toBe(false);
});

test("Invalid - wrong parameter count (183)", () => {
    expect(isValidWithFunctions("sqrt(1,2)")).toBe(false);
});

test("Invalid - wrong parameter count (184)", () => {
    expect(isValidWithFunctions("cbrt(1,2,3)")).toBe(false);
});

test("Invalid - wrong parameter count (185)", () => {
    expect(isValidWithFunctions("ln(1,2)")).toBe(false);
});

test("Invalid - wrong parameter count (186)", () => {
    expect(isValidWithFunctions("exp(1,2)")).toBe(false);
});

test("Invalid - wrong parameter count (187)", () => {
    expect(isValidWithFunctions("pow(2)")).toBe(false);
});

test("Invalid - wrong parameter count (188)", () => {
    expect(isValidWithFunctions("pow(2,3,4)")).toBe(false);
});

test("Invalid - wrong parameter count (189)", () => {
    expect(isValidWithFunctions("nroot(27)")).toBe(false);
});

test("Invalid - wrong parameter count (190)", () => {
    expect(isValidWithFunctions("nroot(27,3,2)")).toBe(false);
});

test("Invalid - wrong parameter count (191)", () => {
    expect(isValidWithFunctions("log()")).toBe(false);
});

test("Invalid - wrong parameter count (192)", () => {
    expect(isValidWithFunctions("log(10,10,10)")).toBe(false);
});

test("Invalid - wrong parameter count (193)", () => {
    expect(isValidWithFunctions("sin(1,2)")).toBe(false);
});

test("Invalid - wrong parameter count (194)", () => {
    expect(isValidWithFunctions("tan(3,4,5)")).toBe(false);
});

test("Invalid - wrong parameter count (195)", () => {
    expect(isValidWithFunctions("acos(1,2)")).toBe(false);
});

// ==================================================
// INVALID - MALFORMED EXPRESSIONS
// ==================================================

test("Invalid - malformed expression (196)", () => {
    expect(isValidWithFunctions("sin(30")).toBe(false);
});

test("Invalid - malformed expression (197)", () => {
    expect(isValidWithFunctions("cos45)")).toBe(false);
});

test("Invalid - malformed expression (198)", () => {
    expect(isValidWithFunctions("sqrt(16))")).toBe(false);
});

test("Invalid - malformed expression (199)", () => {
    expect(isValidWithFunctions("((cbrt(8)")).toBe(false);
});

test("Invalid - malformed expression (200)", () => {
    expect(isValidWithFunctions("ln((10)")).toBe(false);
});

test("Invalid - malformed expression (201)", () => {
    expect(isValidWithFunctions("exp(2))")).toBe(false);
});

test("Invalid - malformed expression (202)", () => {
    expect(isValidWithFunctions("pow((2,3)")).toBe(false);
});

test("Invalid - malformed expression (203)", () => {
    expect(isValidWithFunctions("pow(2,3))")).toBe(false);
});

test("Invalid - malformed expression (204)", () => {
    expect(isValidWithFunctions("log(10,,10)")).toBe(false);
});

test("Invalid - malformed expression (205)", () => {
    expect(isValidWithFunctions("nroot(,27,3)")).toBe(false);
});

test("Invalid - malformed expression (206)", () => {
    expect(isValidWithFunctions("sin(+)")).toBe(false);
});

test("Invalid - malformed expression (207)", () => {
    expect(isValidWithFunctions("cos(*30)")).toBe(false);
});

test("Invalid - malformed expression (208)", () => {
    expect(isValidWithFunctions("sqrt(/16)")).toBe(false);
});

test("Invalid - malformed expression (209)", () => {
    expect(isValidWithFunctions("cbrt(8**)")).toBe(false);
});

test("Invalid - malformed expression (210)", () => {
    expect(isValidWithFunctions("ln(++10)")).toBe(false);
});

test("Invalid - malformed expression (211)", () => {
    expect(isValidWithFunctions("exp(2--)")).toBe(false);
});

test("Invalid - malformed expression (212)", () => {
    expect(isValidWithFunctions("pow(,2,3)")).toBe(false);
});

test("Invalid - malformed expression (213)", () => {
    expect(isValidWithFunctions("log(100,,)")).toBe(false);
});

test("Invalid - malformed expression (214)", () => {
    expect(isValidWithFunctions("sin(30)+cos(")).toBe(false);
});

test("Invalid - malformed expression (215)", () => {
    expect(isValidWithFunctions("sqrt(16)cbrt")).toBe(false);
});

// ==================================================
// INVALID - UNKNOWN FUNCTIONS
// ==================================================

test("Invalid - unknown function (216)", () => {
    expect(isValidWithFunctions("max(3,4)")).toBe(true);
});

test("Invalid - unknown function (217)", () => {
    expect(isValidWithFunctions("min(2,5)")).toBe(true);
});

test("Invalid - unknown function (218)", () => {
    expect(isValidWithFunctions("abs(10)")).toBe(true);
});

test("Invalid - unknown function (219)", () => {
    expect(isValidWithFunctions("ceil(3.5)")).toBe(false);
});

test("Invalid - unknown function (220)", () => {
    expect(isValidWithFunctions("floor(4.8)")).toBe(false);
});

test("Invalid - unknown function (221)", () => {
    expect(isValidWithFunctions("round(2.6)")).toBe(false);
});

test("Invalid - unknown function (222)", () => {
    expect(isValidWithFunctions("random()")).toBe(false);
});

test("Invalid - unknown function (223)", () => {
    expect(isValidWithFunctions("factorial(5)")).toBe(true);
});

test("Invalid - unknown function (224)", () => {
    expect(isValidWithFunctions("gcd(12,18)")).toBe(false);
});

test("Invalid - unknown function (225)", () => {
    expect(isValidWithFunctions("lcm(4,6)")).toBe(false);
});
