const removeUnnecessary = require('../../../../src/eval-expression/ultilitys/remove-unnecessary/remove-unnecessary');

test('removeUnnecessary((2+3)*5 must return 2+3', () => {
    expect(removeUnnecessary('5-(2+3)-5')).toBe('5-2+3-5');
});


test('removeUnnecessary({[3+2]-4})', () => {
    expect(removeUnnecessary('{[3+2]-4}')).toStrictEqual('3+2-4');
});
;

test('removeUnnecessary(((-5+3)*2))', () => {
    expect(removeUnnecessary('((-5+3)*2)')).toStrictEqual('(-5+3)*2');
});

test('removeUnnecessary([2+{4*(3-1)}])', () => {
    expect(removeUnnecessary('[2+(4*(3-1))]')).toStrictEqual('2+4*(3-1)');
});

test('removeUnnecessary({(9+5)-(2+8)*4})', () => {
    expect(removeUnnecessary('{(9+5)-(2+8)*4}')).toStrictEqual('9+5-(2+8)*4');
});

test('removeUnnecessary([(-3+7)-4])', () => {
    expect(removeUnnecessary('[(-3+7)-4]')).toStrictEqual('-3+7-4');
});

test('removeUnnecessary({[(2+3)]})', () => {
    expect(removeUnnecessary('{[(2+3)]}')).toStrictEqual('2+3');
});

test('removeUnnecessary(({3+2})*5)', () => {
    expect(removeUnnecessary('(({3+2})*5)')).toStrictEqual('(3+2)*5');
});

test('removeUnnecessary([2+3])', () => {
    expect(removeUnnecessary('[2+3]')).toStrictEqual('2+3');
});

test('removeUnnecessary({(3+2)})', () => {
    expect(removeUnnecessary('{(3+2)}')).toStrictEqual('3+2');
});

test('removeUnnecessary([5+{(4-2)}])', () => {
    expect(removeUnnecessary('[5+{(4-2)}]')).toStrictEqual('5+4-2');
});

test('removeUnnecessary({2+[(3-1)*5]})', () => {
    expect(removeUnnecessary('{2+[(3-1)*5]}')).toStrictEqual('2+(3-1)*5');
});

test('removeUnnecessary(((4+6)))', () => {
    expect(removeUnnecessary('(((4+6)))')).toStrictEqual('4+6');
});



test('removeUnnecessary([({5+2}*3)])', () => {
    expect(removeUnnecessary('[({5+2}*3)]')).toStrictEqual('{5+2}*3');
});

test('removeUnnecessary({[4+(5-2)]})', () => {
    expect(removeUnnecessary('{[4+(5-2)]}')).toStrictEqual('4+5-2');
});

test('removeUnnecessary(((5-2)+3))', () => {
    expect(removeUnnecessary('(((5-2)+3))')).toStrictEqual('5-2+3');
});

test('removeUnnecessary (1/2)/(3/4) in fraction mode', () => {
    
    expect(removeUnnecessary('(1/2)/(3/4)')).toBe('1/2/(3/4)');
});