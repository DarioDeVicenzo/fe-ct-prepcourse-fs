function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var longi=arrayOfStrings.length;
  var arreglo2=[];
//console.log(longi);

  for (i=0;i<longi;i++) {
    var tri=arrayOfStrings[i];
    var letra= tri.substring(0,1);
    //var pasast= arrayOfStrings[i].split();
   // var letra1= pasast[0];
    //console.log(i,arrayOfStrings[i],letra,tri,arreglo2,pasast,letra1,letra==='a');
    if(letra==='a'){
      arreglo2.push(arrayOfStrings[i]);
    }

  };
  //console.log(arreglo2);
  return arreglo2;
}

module.exports = filter;
