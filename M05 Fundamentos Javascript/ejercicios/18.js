function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  ver = num % 2;
  if (ver==1) return true;
  else return false;
}

module.exports = esImpar;