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
    constructor (HeroeName,HeroePosition,HeroeLife,HeroeRank,HeroeExperience){
        this.name = HeroeName;
        this.position = HeroePosition
        this.life = HeroeLife;
        this.rank = HeroeRank;
        this.experience = HeroeExperience;
    }
}
let avatar = new Heroe('Heroe','00',100,5,0);
console.log(avatar);

//opción 2:
const createHeroe = (name, position,life,rank,experience) =>{
    const heroe = {
        name,
        position,
        life,
        rank,
        experience
    }
    return heroe;
}
const heroe1 = createHeroe( 'Heroe','00',100,5,0);
console.log(heroe1);