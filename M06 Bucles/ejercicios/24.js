function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
var nuevotxt=""
var carac= " "
  for ( i = texto.length; i > 0; i--) {
    carac = texto.prototype.substring(i,1);
    console.log(carac);

    nuevotxt=nuevotxt + carac;
  }
    return nuevotxt
}

module.exports = invertirTexto;