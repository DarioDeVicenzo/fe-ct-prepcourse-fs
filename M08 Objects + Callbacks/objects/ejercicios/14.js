function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  var recumail=objetoUsuario['email'];
  //console.log(objetoUsuario,recumail,recumail===null);

  if(recumail===null || recumail=== undefined) return false;
  else return true;
}

module.exports = tieneEmail;
