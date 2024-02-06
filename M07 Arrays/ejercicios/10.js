function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var mayor = array[0];
  var long = array.length;
  var mayorind=0;
  //console.log(long);
  if(long===0)return 0;
  else{
      for(var i=0;i<long; i++){
       if (array[i]>=mayor){
     //   console.log("if",array[i]>=mayor,array[i],mayor,mayorind,i); 
        mayorind= i;
        mayor=array[i];
        }
       
      }
     // console.log(mayorind,mayor,"salio");
  return mayorind;
}
}
module.exports = encontrarIndiceMayor;
