function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  ver = num % 2;
  if (ver==0) return true;
  else return false;
}

module.exports = esPar;
