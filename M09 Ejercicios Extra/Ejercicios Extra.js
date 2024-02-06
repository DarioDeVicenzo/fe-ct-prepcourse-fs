/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

var long=objeto.length;
var arretot=[];

for (var prop in objeto)
{
var arreglonew=[];
var ob2= objeto[prop];
var ob1=prop;
arreglonew.push(ob1);
  arreglonew.push(ob2);

arretot.push(arreglonew);
//console.log(ob1,ob2);
}
return arretot;

}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var pasaarreglo= string.split('');
  var suma=1;
var arrfinal={};

  while (pasaarreglo.length!=0){
    
    var letra = pasaarreglo.shift();
    longi=pasaarreglo.length;
   
//console.log(longi,'ini');
    for (i=0;i<longi;i++){
      if (letra===pasaarreglo[i]){
            suma= suma+1;
          pasaarreglo.splice([i], 1);
          i--;
          longi--;
          }
       
    } 
    arrfinal[letra]=suma;
  suma= 1;
  }
  return arrfinal;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

var arreglostr= string.split('');
var longi=arreglostr.length;
var nuevostr=[];
var nuevomay=[];

for (var i=0;i<longi;i++){
  letra= arreglostr[i];
  if (letra===letra.toUpperCase()){
      nuevomay.push(letra);
  }
  else{
    nuevostr.push(letra);
  }
//console.log(nuevostr);
}
var unir= [];
unir = nuevomay.concat(nuevostr);
//console.log(unir);
var string2=unir.join('');
//console.log(string2);
return string2;

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  
  var arreglostr= frase.split('');
  var longi=arreglostr.length;
  var nuevostr=[];
  var nuevomay=[];
  
  for (var i=0;i<longi;i++){
    letra= arreglostr[i];
    
    if (letra!=' '){
          nuevostr.unshift(letra);
        }
        else {
          nuevostr.push(letra);
          var nuevomay= nuevomay.concat(nuevostr);
          nuevostr =[];
        }
      }
      var nuevomay= nuevomay.concat(nuevostr);

      var pasastr= nuevomay.join('');
     // console.log(pasastr);
      return pasastr;

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var pasan= numero.toString();
  var pasanum=pasan.split('');
  var long= Math.floor(pasan.length/2);
  var salio=false;
//console.log(long,pasanum,numero);
  
for (var i=0;i<long;i++){
    var primero=  pasanum.shift();
    var segundo = pasanum.pop();
   // console.log(primero,segundo,salio,i,long,pasanum);

      if (primero===segundo){
         salio= true;
         }
         else{   salio=false;
        break;}
  } 
  //console.log(salio);
  if (salio) return "Es capicua";
  else return "No es capicua";

}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var arreglostr= string.split('');
  var longi=arreglostr.length;
  var nuevostr=[];
    
  for (var i=0;i<longi;i++){
    letra= arreglostr[i];
    if (letra==='a' || letra==='b'|| letra==='c'){
         }
    else{
      nuevostr.push(letra);
    }
  //console.log(nuevostr);
  }
;
  var string2=nuevostr.join('');
  //console.log(string2);
  return string2;
  
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  arrayOfStrings.sort( (a, b) => {

    if(a.split('').length < b.split('').length) {
      return -1;
    }
    if(a.split('').length > b.split('').length) {
      return 1;
    }
    
    return 0;
  });
  //console.log(people);
return(arrayOfStrings);
}

 

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
var longi=array1.length;
var nuevoar=[];

for(var i=0;i<longi;i++){
    if (array2.includes(array1[i])){
      nuevoar=nuevoar.concat(array1[i]);
    }

}
//console.log(nuevoar);
return (nuevoar);


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
