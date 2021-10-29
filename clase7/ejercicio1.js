/*Ejercicio 1: Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes 
en el juego.Haga una función o una clase que nos sirva para crear nuestro objeto “heroe” Debe tener las 
siguientes propiedades y valores.*/

//opción 1:
class Heroe {
    name
    position
    life
    rank
    experience
    constructor (name='Hereo'){
        this.name = name,
        this.position = '00',
        this.life = 100 ,
        this.rank = 5,
        this.experience = 0
    }
}
let avatar = new Heroe(name='IronMan');
console.log(avatar);

//opción 2:
const createHeroe = (name='Hereo') =>{
    const heroe = {
        name,
        position:'00',
        life:100,
        rank:5,
        experience:0
    }
    return heroe;
}
const heroe1 = createHeroe( name='BlackWindow');
console.log(heroe1);
