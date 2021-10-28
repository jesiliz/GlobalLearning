// Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique.

//const array = [1,1,2,1,1];
//const array = [1,0,0,0,0,0];
const array = ['y','y','y','y','x'];
console.log(array);

function identifyInfiltrator(array)
{
    return array.find(item => array.indexOf(item) == array.lastIndexOf(item)); //compara los indices de la primera ocurrencia del valor especificado.
}
const value = identifyInfiltrator(array);
console.log(" Eh aquí el valor infiltrado: ", value);
