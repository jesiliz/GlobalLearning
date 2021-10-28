/*Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de el primer
desarrollador de cierto lenguaje que se haya inscripto.*/

const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];
 
function firstToRegister(array,lenguaje){
    const array1 = array.find(function(item)
    { return item.language == lenguaje;});
        if (array1!=null){
            return array1.firstName +' from '+ array1.country +' was the first '+ lenguaje +' developer in the conference';
        }else
            {return 'There are no '+ lenguaje +' developers in the conference';}
}
console.log(firstToRegister(list1,'Python'));
