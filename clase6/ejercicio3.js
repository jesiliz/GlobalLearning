//Teniendo un arreglo numérico, tenemos que sumarle un número (por parámetro) a cada elemento de nuestro arreglo

function sumaxParametro(array,num){
    return array.map(item => item + num);
}
console.log(sumaxParametro([2,4,6,8] , 4));
