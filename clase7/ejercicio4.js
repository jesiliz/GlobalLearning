/*Ejercicio 5: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores 
de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una function que nos
devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo: return ('Ruby' )==> true*/

const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

    function Validation(array,lenguaje)
    {
        let  value = array.some(function(item) { //some devuelve true si alguna de las prop. es verdadera sino devuelve false.
            return item.language == lenguaje;
        });
        return value
    }
    console.log(Validation(list,'Ruby'));
