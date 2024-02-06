function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var recupost= objetoUsuario.posts;
  var suma=0;
  longi=recupost.length;
 // console.log( longi, recupost);

  for (var i=0;i<longi;i++){
  //  console.log(suma);
    var suma = suma+recupost[i].likes;

  }


  //for (var prop in recupost){
  // var reculike= objetoUsuario.posts.likes;
  // var recu2= recupost.likes;
  //  console.log(prop,prop.likes,recupost,suma,reculike,recu2);
//suma += reculike;
  //}
  console.log(suma);
  return(suma);
}

module.exports = sumarLikesDeUsuario;
