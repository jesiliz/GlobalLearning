//Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes

const array = [5,19,4,110,92,15];
console.log(array);

function multiplicationAdjacent(array)
{
    let multiply = array[0] * array[1]
    for(i=1;i<array.length;i++)
    {
        let multiply2 = array[i] * array[i-1]
        if(multiply < multiply2)
        {
            multiply = multiply2
        }
    }
    return multiply;
}
let value = multiplicationAdjacent(array);
console.log("El mayor producto posible es: ",value);
