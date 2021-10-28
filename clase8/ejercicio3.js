/*Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre de usuario
a cada persona registrada dependiendo del nombre y el año en el que nacieron. Este nombre de usuario
tiene que agregarse como una nueva propiedad llamada “userName“ ejemplo:  userName: 'emilyn1990' */

const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

const addProperty = list1.map(item => {
  return{
    ...item,
    userName: item.firstName.toLocaleLowerCase() + item.lastName.toLocaleLowerCase() + (2021-item.age)
  }
})
console.log(addProperty);