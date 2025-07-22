// Objetos
let objeto1 = {
    nombre: 'a',
    apellido: '0'
}

const objeto2 = {
    nombre: 'b',
    apellido: '1a'
}
let extra = { nombre: 'nuevo', apellido: 'objeto extra', edad: 0 }
const adicional = { ciudad: 'centro', edad: 0 }

// Objeto con propiedades genéricas
const JugadorBase = {
    nombre: 'Jugador',
    poder: 5,
    vida: 100,

    atacar(oponente) {
        oponente.vida = oponente.vida - this.poder
        console.warn(this.nombre, 'Ataca a ', oponente.nombre, 'con', this.poder, 'pts de daño', oponente.vida)
        if (oponente.vida < 1) {
            console.error(this.nombre, 'Derrotó a', oponente.nombre)
        }
    }
}

// Objetos interactuando entre sí
const jugador1 = {
    ...JugadorBase,
    nombre: 'Ryu',
    // poder: 10,
    vida: 99,
}

const jugador2 = {
    ...JugadorBase,
    nombre: 'Ken',
    poder: 11,
    // vida: 100,
}

jugador1.atacar(jugador2)

// Función obsoleta al tener un objeto base
function atacar(quien, oponente, ataque, vidaInicial) {
    let vidaFinal = vidaInicial - ataque
    console.warn(quien, 'Ataca a ', oponente, 'con', ataque, 'pts de daño', vidaFinal)
    if (vidaFinal < 1) {
        console.error(quien, 'Derrotó a', oponente)
    }
    return vidaFinal
}

