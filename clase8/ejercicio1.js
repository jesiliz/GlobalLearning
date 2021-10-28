/*Ejercicio 1: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si todas las personas
 registradas trabajan con el mismo lenguaje. Es decir, necesitamos que nuestra función devuelva True si todos
los lenguajes son iguales, o que nos devuelva False si hay por lo menos uno que sea distinto.*/
const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

function sameLanguage(){
    let value = list.every(item => item.language == list.map(item => item.language).shift());
    return value;
}
console.log(sameLanguage());