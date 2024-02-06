function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var long = array.length;
  var array2=[];

  for (var i=0; i < long; i++){
    array2[i] = array.pop();
    }
//array =array2;
return array2;
  }


module.exports = invertirArray;
