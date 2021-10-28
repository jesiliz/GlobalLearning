//Haga una función que reciba un número y retorne un arreglo que tenga el tamaño del número recibido.
//El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 a n-1)

const array = [];
function returnVector (number)
{
    for(var i=0; i<number; i++)
    {
        array.splice(i,0,i); //agrego elementos al vector desde la posicion i=0. En este caso almacena el valor de la posicion i.
    }
    return array;
}
console.log(returnVector(5));
