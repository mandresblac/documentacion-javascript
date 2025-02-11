//URL de video en youtube para consultar https://www.youtube.com/watch?v=frm0CHyeSbE

//CALLBAKCS
//Las funciones pueden ser recibidas como parametros
//Se les llama Callback porque es una llamada devuelta

//Le pasamos por parametro a la funcion operation la operacion que vamos a heacer con numero1 y numero2, que en este caso es
//Callback pero tambien puede llamarse "op" de operacion o de cualquier forma que querramos
/*
const operation = (numero1, numero2, callback) => {
    return callback(numero1, numero2);
};
*/

//Le pasamos como tercer argumento en la llamda de la funcion otra funcion que recibe 2 parametros y luego los suma, multiplica y resta
/*
console.log(operation(1, 3, (a, b) => a + b));
console.log(operation(1, 3, (a, b) => a * b));
console.log(operation(1, 3, (a, b) => a - b));
*/


//Ahora hecemos la misma funcion per de forma Asincrona utilizando el temporizador setTimeout()
/*
const operation = (numero1, numero2, callback) => {
    return setTimeout(() => {
	  callback(numero1, numero2)
	}, 900);
};
*/

//lLlamamos a la funcion operation
/*
operation(1, 3, (a, b) => {
  console.log(a + b);
});
*/



//PROMESAS
const doAsyncStuffWithPromises = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  //utlizamos new Promise() para crear la premesa que sera devuelta por la funcion doAsyncStuffWithPromises
  return new Promise(resolve => {
	setTimeout(() => {
	  resolve(resultado);
	}, 500);
  });
};


//Llamamso a la funcion doAsyncStuffWithPromises
doAsyncStuffWithPromises(1, 3)
	.then(result => console.log(result))

