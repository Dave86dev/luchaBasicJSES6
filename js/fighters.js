
//creamos la estructura básica de personajes y juego.

//clase luchador, con sus propiedades y métodos.

class Fighter {
    constructor(nombre, potencia, resistencia, defensa, ataque, agilidad, suerte){

        this.nombre = nombre;
        this.potencia = potencia;
        this.resistencia = resistencia;
        this.defensa = defensa;
        this.ataque = ataque;
        this.agilidad = agilidad;
        this.suerte = suerte;
        this.vida = 100;

    }

    atacar(enemigo){

        /*En este caso tenemos la referencia de una lógica muy básica para programar el ataque.
        Declaramos una variable luck que será igual al resultado que nos devuelve una función random 
        que tenemos en el archivo utiles.js, los parámetros que devuelve esta función tienen un mínimo de 1
        y un máximo de la suerte del enmigo
        */

        let luck = funciones.random(1, enemigo.suerte);

        /*A continuación, depositamos en la variable hit, el resultado de primero restarle la defensa 
        del enemigo al luchador que emite el golpe, y posteriormente multiplicarlo por la variable luck
        obtenida antes.*/

        let hit = (this.ataque - enemigo.defensa) * luck;


        /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/
        enemigo.vida -= hit;
    }

    defenderse(){
        /*........*/ 
    }

    esquivar(){
        /*........*/ 
    }

    especial(){
        let hit = (this.ataque + 2 );

        enemigo.vida -= hit;
    }
}


//instanciamos a los luchadores 

let f1 = new Fighter("Ken", 20, 10, 8, 15, 6, 3);
let f2 = new Fighter("Akira", 20, 10, 8, 15, 6, 3);
let f3 = new Fighter("Kage", 20, 10, 8, 15, 6, 3);
let f4 = new Fighter("Paul", 20, 10, 8, 15, 6, 3);
let f5 = new Fighter("Nina", 20, 10, 8, 15, 6, 3);
let f6 = new Fighter("Honda", 20, 10, 8, 15, 6, 3);
let f7 = new Fighter("Manolo", 20, 10, 8, 15, 6, 3);
let f8 = new Fighter("Pinoccio", 20, 10, 8, 15, 6, 3);
let f9 = new Fighter("Wally", 20, 10, 8, 15, 6, 3);

//traductor
let allplayers = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
    "9": f9
}

//juego

let juego = {

    turno: 0,
    player1: "",
    player2: "",
    ganador: "",

    resetearLucha(){

    },

    turnoLucha(){

    },
}