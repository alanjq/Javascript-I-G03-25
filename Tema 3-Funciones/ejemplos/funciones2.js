let numero1 = 5
let numero2 = 4
let nombre = 'Jordan'

// Función dentro de ámbito global
function multiplica(){
    return numero1 * numero2
}

multiplica()
console.log(multiplica())

// Funciones anidadas
function getMarcador(){
    let numero1 = 10
    numero2 = 7

    function agregar(){
        return `${nombre} anotó (${numero1 + numero2})`
    }

    return agregar()
}

getMarcador()
