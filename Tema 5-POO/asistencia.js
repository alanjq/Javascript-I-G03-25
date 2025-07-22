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
