const getUnnecessary = require('../../../../../src/eval-expression/utilities/remove-unnecessary/get-unnecessary/get-unnecessary');
function getAllRemovable(expression) {
  let allRemovable = [];
  let tempExpr = expression;
  let indexMap = [];  // Mapeia índice em tempExpr -> índice original
  
  // Inicializar mapa de índices
  for (let i = 0; i < tempExpr.length; i++) {
    indexMap[i] = i;
  }
  
  let result;
  
  do {
    result = getUnnecessary(tempExpr);
    
    if (result.length === 2) {
      const [start, end] = result;
      
      // Converter índices da expressão temporária para índices originais
      const originalStart = indexMap[start];
      const originalEnd = indexMap[end];
      
      allRemovable.push(originalStart, originalEnd);
      
      // Remover o par da expressão temporária
      tempExpr = tempExpr.slice(0, start) + tempExpr.slice(start + 1, end) + tempExpr.slice(end + 1);
      
      // Atualizar o mapa de índices (remover as posições start e end)
      indexMap.splice(start, 1);  // Remove o índice de abertura
      indexMap.splice(end - 1, 1); // Remove o índice de fechamento (end-1 porque já removemos start)
    }
  } while (result.length > 0);
  
  return allRemovable;
}


let remove1 = [0,10];
let remove2 = [0,12];
let remove3 = [1,5,0,14];
let remove4 = [3,6,2,7,1,8,0,9];
let remove5 = [1,5,7,12,0,19];

test('getUnnecessary({9+5-(2+8)})',() => {
    expect(getAllRemovable('{9+5-(2+8)}')).toStrictEqual(remove1);
}); 

test('getUnnecessary({(9+5)-(-7*4)-(2+8)})',() => {
    expect(getAllRemovable('{(9+5)-(-7*4)-(2+8)}')).toStrictEqual(remove5);
}); 

test('getUnnecessary({9+5-(2+8)*4})',() => {
    expect(getAllRemovable('{9+5-(2+8)*8}')).toStrictEqual(remove2);
});

test('getUnnecessary({(9+5)-(2+8)*4})',() => {
    expect(getAllRemovable('{(9+5)-(2+8)*8}')).toStrictEqual(remove3);
});

test(`getUnnecessary('{{{{-8}}}}') must return ${remove4}`,() => {
    expect(getAllRemovable('{{{{-8}}}}')).toStrictEqual(remove4);
});

test('getUnnecessary({[3+2]-4})', () => {
    expect(getAllRemovable('{[3+2]-4}')).toStrictEqual([1,5,0,8]);
});

test('getUnnecessary(((-5+3)*2))', () => {
    expect(getAllRemovable('((-5+3)*2)')).toStrictEqual([0,9]);
});

test('getUnnecessary([2+{4*(3-1)}])', () => {
    expect(getAllRemovable('[2+(4*(3-1))]')).toStrictEqual([3,11,0,12]);
});

test('getUnnecessary({(9+5)-(2+8)*4})', () => {
    expect(getAllRemovable('{(9+5)-(2+8)*4}')).toStrictEqual([1,5,0,14]);
});

test('getUnnecessary([(-3+7)-4])', () => {
    expect(getAllRemovable('[(-3+7)-4]')).toStrictEqual([1,6,0,9]);
});

test('getUnnecessary({[(2+3)]})', () => {
    expect(getAllRemovable('{[(2+3)]}')).toStrictEqual([2,6,1,7,0,8]);
});

test('getUnnecessary(({3+2})*5)', () => {
    expect(getAllRemovable('(({3+2})*5)')).toStrictEqual([2,6,0,10]);
});

test('getUnnecessary([2+3])', () => {
    expect(getAllRemovable('[2+3]')).toStrictEqual([0,4]);
});

test('getUnnecessary({(3+2)})', () => {
    expect(getAllRemovable('{(3+2)}')).toStrictEqual([1,5,0,6]);
});

test('getUnnecessary([5+{(4-2)}])', () => {
    expect(getAllRemovable('[5+{(4-2)}]')).toStrictEqual([4,8,3,9,0,10]);
});

test('getUnnecessary({2+[(3-1)*5]})', () => {
    expect(getAllRemovable('{2+[(3-1)*5]}')).toStrictEqual([3,11,0,12]);
});

test('getUnnecessary(((4+6)))', () => {
    expect(getAllRemovable('(((4+6)))')).toStrictEqual([2,6,1,7,0,8]);
});

test('getUnnecessary([({5+2}*3)])', () => {
    expect(getAllRemovable('[({5+2}*3)]')).toStrictEqual([1,9,0,10]);
});

test('getUnnecessary({[4+(5-2)]})', () => {
    expect(getAllRemovable('{[4+(5-2)]}')).toStrictEqual([4,8,1,9,0,10]);
});

test('getUnnecessary(((5-2)+3))', () => {
    expect(getAllRemovable('(((5-2)+3))')).toStrictEqual([2,6,1,9,0,10]);
});

test('getUnnecessary({[(3+2)*4]+5})', () => {
    expect(getAllRemovable('{[(3+2)*4]+5}')).toStrictEqual([1,9,0,12]);
});

test('getUnnecessary(({3+5}))', () => {
    expect(getAllRemovable('(({3+5}))')).toStrictEqual([2,6,1,7,0,8]);
});

test('getUnnecessary(({3+5}))', () => {
    expect(getAllRemovable('((2/{3+5}))')).toStrictEqual([1,9,0,10]);
});

// Test nested operations with multiple types of brackets
test('getUnnecessary({[2+3]*[4-1]})', () => {
    expect(getAllRemovable('{[2+3]*[4-1]}')).toStrictEqual([0,12]);
});

// Test division with nested brackets
test('getUnnecessary([2/{(3+1)*2}])', () => {
    expect(getAllRemovable('[2/{(3+1)*2}]')).toStrictEqual([0,12]);
});

// Test multiple operations with alternating brackets
test('getUnnecessary({2+[3*(4-{1+2})]})', () => {
    expect(getAllRemovable('{2+[3*(4-{1+2})]}')).toStrictEqual([3,15,0,16]);
});

// Test negative numbers with multiple brackets
test('getUnnecessary([{(-2+3)*(-4)}])', () => {
    expect(getAllRemovable('[{(-2+3)*(-4)}]')).toStrictEqual([9,12,1,13,0,14]);
});

// Test nested operations with same bracket types
test('getUnnecessary({{{2*3}+{4-5}}})', () => {
    expect(getAllRemovable('{{{2*3}+{4-5}}}')).toStrictEqual([2,6,8,12,1,13,0,14]);
});

// Test complex expressions with mixed operations
test('getUnnecessary("[2*{(3+4)/(5-2)}]")', () => {
    expect(getAllRemovable('[2*{(3+4)/(5-2)}]')).toStrictEqual([3,15,0,16]);
});

// Test expressions with multiple consecutive brackets
test('getUnnecessary(([{2+3}]))', () => {
    expect(getAllRemovable('([{2+3}])')).toStrictEqual([2,6,1,7,0,8]);
});

// Test expressions with unnecessary brackets around single numbers
test('getUnnecessary({[({5})*3]})', () => {
    expect(getAllRemovable('{[({5})*3]}')).toStrictEqual([3,5,2,6,1,9,0,10]);
});

// Test deeply nested expressions
test('getUnnecessary({[2+({3*[4-5]})]})', () => {
    expect(getAllRemovable('{[2+({3*[4-5]})]}')).toStrictEqual([5,13,4,14,1,15,0,16]);
});

// Test expressions with brackets around operators
test('getUnnecessary([2{+}(3-4)])', () => {
    expect(getAllRemovable('[2*{+7}*(3-4)]')).toStrictEqual([3,6,0,13]);
});

// Test expressions with multiple operations and brackets
test('getUnnecessary({2*[3+4*(5-2)]/6})', () => {
    expect(getAllRemovable('{2*[3+4*(5-2)]/6}')).toStrictEqual([0,16]);
});

// Test expressions with redundant nested brackets
test('getUnnecessary(((({2+3}))))', () => {
    expect(getAllRemovable('((({2+3})))')).toStrictEqual([3,7,2,8,1,9,0,10]);
});

// Test expressions with mixed brackets and negative numbers
test('getUnnecessary({[-2*({3+(-4)})]})', () => {
    expect(getAllRemovable('{[-2*({3+(-4)})]}')).toStrictEqual([9,12,6,13,1,15,0,16]);
});

// Test expressions with division and nested brackets
test('getUnnecessary([{(8/4)}/{(6-2)}])', () => {
    expect(getAllRemovable('[{(8/4)}/{(6-2)}]')).toStrictEqual([2,6,1,7,10,14,0,16]);
}); 

test('getUnnecessary (1/2)/(3/4) in fraction mode', () => {
    expect(getAllRemovable('(1/2)/(3/4)')).toStrictEqual([0,4]);
});

test('getUnnecessary (2)+(3) in fraction mode', () => {
    expect(getAllRemovable('(2)+(3)')).toStrictEqual([0,2,4,6]);
});
// Very Complex Expression
test(`getUnnecessary {2*[3+4*(5-2)]-1}/[2+1] `, () => {
    expect(getAllRemovable(`{2*[3+4*(5-2)]-1}/[2+1]`)).toStrictEqual([]);
});
