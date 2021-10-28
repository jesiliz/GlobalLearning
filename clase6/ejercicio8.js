/*Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como 
el primero. El lobo solo puede comer a la oveja que tiene a su derecha*/

const array= ['sheep1','sheep2','sheep3','wolf','sheep4','sheep5'];

const arrayReverse = array.reverse();
let value = arrayReverse.indexOf('wolf');

function warnOfSheep(value)
{
    var  newArray = arrayReverse.slice(value,arrayReverse.length)
    for(var i=0 ;i<newArray.length; i++)
    {
        console.log(newArray);
        console.log("Hey!! ",newArray.pop()," El lobo esta cerca!!");
    }
     console.log(newArray,"No sigas comiendo ovejas!! ");
}
warnOfSheep();

