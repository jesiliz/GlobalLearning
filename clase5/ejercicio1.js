//Ejercicio 1: Crear una función que reciba un número como parámetro y devuelva “par” o “impar” dependiendo del número que tome ese parámetro

function pareImpar(num)
{
    if(num % 2 == 0)
    {
        console.log("Es par");
    }
    else{
        console.log("Es Impar");
    }
}
pareImpar(3)