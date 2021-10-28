//Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos.

//const array = [7,4,3,6,1,9];
const array = [ 75, 19, 10, 90, 25, 110 ]
console.log(array);

/*funcion para comparar: si devuelve -1, 'a' se posicionara en el indice menor a 'b';
si devuelve 0, no hay cambios; si devuelve 1,'b' se situa en el indice menor a 'a'*/
function comparation(a,b){ return a-b; } 
array.sort(comparation) //ordena el array por comparacion

let value1= array.shift() // remueve el primer valor del arreglo y retorna el elemento movido.
let value2= array.shift()
let add = value1 + value2
console.log("La menor suma posible es entre: ",value1, "+",value2 ," = ",add);
