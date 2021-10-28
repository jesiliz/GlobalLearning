//Ejercicio 2: Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3
const array = [4,7,9,5,6,3];
//const array = [1,2,3];

console.log(array);

if (array.length > 5){

    for (i=0;i<3;i++)
    {
        array.pop();
    }
    console.log(array);
}
else
{
    console.log("La longitud del arreglo es menor o igual a 5 ");
}


