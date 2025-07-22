// Programación orientada a objetos
const Animal = {
    nombre: '',
    altura: '',
    peso: '',

    // Métodos
    comer() {
        console.log("Comiendo")
    },
    dormir() {
        console.log('Durmiendo')
    },
}

const Gato = {
    ...Animal,
    colores: ['anaranjado', 'blanco']
}

const Perro = {
    ...Animal,
    // Atributos
    // nombre: '',
    raza: '',
    // altura: '',

    // Métodos
    // comer(){
    //     console.log('El perro está comiendo')
    // },
    // dormir(){
    //     console.log('El perro duerme')
    // },
    ladrar() {
        console.log('Guau')
    }
}

const Persona = {
    ...Animal,
    // Atributos
    // nombre: '',
    // altura: '',
    // peso: '',

    // Métodos
    /**
     * Muestra un mensaje en consola con el texto indicado
     */
    hablar(mensaje) {
        console.log("La persona dice: '", mensaje, "'")
    }
}

// Recorrer los objetos usando for in
for (const propiedad in Persona) {
    console.log(typeof Persona[propiedad], propiedad)
    if (typeof Persona[propiedad] === 'function') {
        Persona[propiedad]('Hola')
    }
}