const smartToFixed = (expression) => {
  // trata nulos/undefined
  if (expression === null || expression === undefined) return expression;

  const num = parseFloat(expression);

  // se não der pra converter, retorna original
  if (Number.isNaN(num)) return expression;
  if(Math.abs(Math.round(num) - num) < 1e-10) return Math.round(num).toString();
  // corrige erros de ponto flutuante com toPrecision(15)
  // depois parseFloat remove zeros trailing
  return parseFloat(num.toPrecision(15)).toString();
};

module.exports = smartToFixed;

