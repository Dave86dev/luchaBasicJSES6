
//elenco de funciones útiles que podremos utilizar a nuestro antojo en varios proyectos

const funciones = {
    
    minMax: (n, min, max) => {
        //min and max limiter..
        return Math.max (Math.min (n, max), min);
    },
    random(min, max){
        //random creation of a number..
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}