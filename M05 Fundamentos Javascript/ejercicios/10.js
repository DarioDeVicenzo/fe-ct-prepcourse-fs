function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  var d = parseInt(toString(fecha).substring (0,2), 10);
  var m  = parseInt(toString(fecha).substr(3,2), 10);
  var a = parseInt(toString(fecha).substr(6,4), 10);
  console.log (a,d,m);
 
  
  if( (a < 1900) || (a > 2050) || (m < 1) || (m > 12) || (d < 1) || (d > 31) )
  return false;
else
{
  if((a%4 != 0) && (m == 2) && (d > 28))
  return false;
  else
  {
     if( (((m == 4) || (m == 6) || (m == 9) || (m==11)) && (d>30)) || ((m==2) && (d>29)) )
     return false;
      else{ 
        return true;
      }
  }
}

}



module.exports = esFechaValida;