class Persona {
    _nombre
    _apellido
    _asistencia

    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }

    setNombre(nombre){
        this._nombre = nombre
    }

    getNombre(){
        return this._nombre
    }

    setApellido(apellido){
        this._apellido = apellido
    }

    getApellido(){
        return this._apellido
    }

    getNombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }

    setAsistencia(){
        this._asistencia = true
    }

    getAsistencia(){
        return this._asistencia || false
    }
}

let persona1 = new Persona('Arath', 'Sebastian')
let persona2 = new Persona('Ariana', 'Rincon')

class GrupoClase {
    constructor(){
        this.asistencias = []
    }

    setAsistencias(persona){
        this.asistencias.push(persona)
    }

    getAsistencias(){
        return this.asistencias
    }
}

let grupoclase = new GrupoClase()


// Lista de asistencia
const Grupo = {
    _listaAsistencia: [],

    marcarAsistencia(nombre, apellido = '') {
        this._listaAsistencia.push({ nombre, apellido })
    },

    obtenerAsistencia(){
        console.group('Asistencia')
        console.table(this._listaAsistencia)
        console.groupEnd()
    }
}

// Traer elementos de cierto tipo
// Grupo._listaAsistencia.filter((elemento)=>typeof elemento === 'string')
// Eliminar elementos al principio
// Grupo._listaAsistencia.shift()

// Eliminar elementos al final
// Grupo._listaAsistencia.pop()
