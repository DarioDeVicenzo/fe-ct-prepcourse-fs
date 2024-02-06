function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var nuevoarr=[];
  var long=array.length;
  
  if (array.includes("Enero")&&array.includes("Marzo")&&array.includes("Noviembre"))
    {
      for (var i=0;i<long;i++)  if (array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre") nuevoarr.push(array[i]);
          
     } 
  else {
    //console.log('salio');
    return "No se encontraron los meses pedidos";
  
}
  return nuevoarr;
}

module.exports = mesesDelAño;
