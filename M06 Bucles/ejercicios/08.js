function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  if ( (a<0)  || (a>=10) ) return false;
  else return true;
}

module.exports = esPositivoOInferiorA10;