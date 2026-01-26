const add_sub_inside_regex = /[-+]?\d+(\.\d+)?(e[+-]?\d+)?[+-]/;
const pow_mult_div_inside_regex = /[*\/^]/;
const unit_number_signed_regex = /^[+-]\d+(\.\d+)?(e[+-]?\d+)?$/;
const unit_number_not_signed_regex = /^\d+(\.\d+)?(e[+-]?\d+)?$/;
const inner_most_regex = /\([^()]*\)|\[[^\[\]]*\]|\{[^{}]*\}/g;  // ← Adicionei 'g' flag


function getLevel0Op(inside_str) {
  let temp_inside = inside_str;
  while (inner_most_regex.test(temp_inside)) {
    temp_inside = temp_inside.replace(inner_most_regex, '1');  // ← Corrigido: replace (não replaced)
  }
  let info = {
    has_add_sub: add_sub_inside_regex.test(temp_inside),
    has_pow_mult_div: pow_mult_div_inside_regex.test(temp_inside),
    is_unit_signed: unit_number_signed_regex.test(inside_str),  // ← Usar original, não simplificado
    is_unit_not_signed: unit_number_not_signed_regex.test(inside_str),  // ← Usar original
    is_empty: temp_inside === '',  // ← Adicionado
    inside_simplified: temp_inside
  }
  return info;
}


function hasItToBeRemoved(info, before_and_after,indice_char_before) {
  const [before, after] = before_and_after;

  // Casos que sempre podem remover
  if ((info.is_unit_signed && !(before === '-' && indice_char_before === 0)) || info.is_unit_not_signed) {
    return true;
  }

  // Caso vazio (só agrupamentos aninhados)
  if (info.is_empty) {
    return before !== '/';  // Bloquear se vier após divisão
  }

  // Assume removível, depois bloqueia
  let can_remove = true;

  // Bloqueios baseados no BEFORE
  if (before === '^') {
    can_remove = false;
  }
  else if (before === '-' && info.has_add_sub) {
    can_remove = false;
  }
  else if (before === '/' && (info.has_add_sub || info.has_pow_mult_div)) {
    can_remove = false;
  }
  else if (before === '*' && info.has_add_sub) {
    can_remove = false;
  }
  else if (before === '-' && indice_char_before === 0 && info.is_unit_signed){
    can_remove = false;
  }
  // Bloqueios baseados no AFTER
  if (can_remove && after === '^') {
    can_remove = false;
  }
  if (can_remove && after === '*' && info.has_add_sub) {
    can_remove = false;
  }
  if (can_remove && after === '/' && info.has_add_sub) {
    can_remove = false;
  }

  return can_remove;
}


const getUnnecessary = (expression) => {
  let stack = [];
  let pairs = [];
  let before_and_after = [];
  let removable = [];
  let temp_expression = expression;
  let show = false;
  if(expression === '{2*[3+4*(5-2)]-1}/[2+1]'){
    show = true;
  }
  // Mapear todos os pares
  for (let i = 0; i < temp_expression.length; i++) {
    if (/[{[(]/.test(temp_expression[i])) {
      stack.push([temp_expression[i], i, (i > 0) ? temp_expression[i - 1] : '']);
    } else if (/[}\])]/.test(temp_expression[i])) {
      let last = stack.pop();
      pairs.push([last[1], i]);
      before_and_after.push([last[2], (i < temp_expression.length - 1) ? temp_expression[i + 1] : '']);
    }
  }
  for (let i = 0; i < pairs.length; i++) {
    // Caso trivial: agrupamentos vazios ou no início/fim
    if (/\(\)|\[\]|\{\}|^$/.test(`${before_and_after[i][0]}${before_and_after[i][1]}`)) {
      removable.push(pairs[i][0]);
      removable.push(pairs[i][1]);
      return removable;
    }

    let inside = temp_expression.slice(pairs[i][0] + 1, pairs[i][1]);
    let info = getLevel0Op(inside);

    if (hasItToBeRemoved(info, before_and_after[i], pairs[i][0] - 1)) {
  removable.push(pairs[i][0]);
  removable.push(pairs[i][1]);
  
  if(show){
    console.log('╔════════════════════════════════════════════════════════════════');
    console.log('║ AGRUPAMENTO REMOVÍVEL ENCONTRADO');
    console.log('╠════════════════════════════════════════════════════════════════');
    console.log(`║ Expressão completa: "${expression}"`);
    console.log('║');
    console.log(`║ Posições: [${pairs[i][0]}, ${pairs[i][1]}]`);
    console.log(`║ Agrupamento: ${expression[pairs[i][0]]}...${expression[pairs[i][1]]}`);
    console.log(`║ Conteúdo interno: "${expression.slice(pairs[i][0] + 1, pairs[i][1])}"`);
    console.log('║');
    console.log(`║ Contexto:`);
    console.log(`║   Caractere ANTES: "${before_and_after[i][0]}" (pos ${pairs[i][0] - 1})`);
    console.log(`║   Caractere DEPOIS: "${before_and_after[i][1]}" (pos ${pairs[i][1] + 1})`);
    console.log('║');
    console.log(`║ Análise do conteúdo:`);
    console.log(`║   Simplificado: "${info.inside_simplified}"`);
    console.log(`║   Tem +/-: ${info.has_add_sub}`);
    console.log(`║   Tem */^: ${info.has_pow_mult_div}`);
    console.log(`║   É número com sinal: ${info.is_unit_signed}`);
    console.log(`║   É número sem sinal: ${info.is_unit_not_signed}`);
    console.log(`║   Está vazio: ${info.is_empty}`);
    console.log('║');
    console.log(`║ Índice do par: ${i} de ${pairs.length - 1}`);
    console.log(`║ Total a remover: [${removable.join(', ')}]`);
    console.log('╚════════════════════════════════════════════════════════════════\n');
  }
  
  return removable;
}


  }
  return removable;
}


module.exports = getUnnecessary;
