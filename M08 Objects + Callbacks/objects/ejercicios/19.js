function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
 // console.log(objetoMuchosUsuarios, espremium);
  for (var prop in objetoMuchosUsuarios){
   // console.log('for',prop,objetoMuchosUsuarios[0].esPremium,objetoMuchosUsuarios.length,objetoMuchosUsuarios.esPremium);
    objetoMuchosUsuarios[prop].esPremium= true;
};
return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;
