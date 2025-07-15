function saludarGrupo(mensaje, fecha) {
    let saludo_completo = `${mensaje} a todos en el grupo. Hoy es ${fecha}`
    console.log("Hola", mensaje, "Hoy es:", fecha)
    return saludo_completo
}

// let mensaje = saludarGrupo("Buenas noches", "Lunes 14 de julio de 2025")

// console.log(mensaje)

// Validar si el número es válido
// Función tipo flecha
function verificarNumero(numero) {
    if (!numero) {
        return 0
    }
    if (isNaN(numero)) {
        return 0
    }
    // Si no hay ningún problema con el número
    return parseInt(numero)
}

// Función flecha sin parámetros
const saludo = () => `Hola gente`
// Función flecha con un parámetro (se pueden omitir paréntesis)
const saludar = nombre => `Hola ${nombre}`

const sumar = (numero1 = -1, numero2 = -1) => verificarNumero(numero1) + verificarNumero(numero2)

const restar = (a, b) => verificarNumero(a) - verificarNumero(b)

// Recibir n cantidad de parámetros
const listaAsistencia = (...personas) => {
    let lista_completa = [...personas]
    // console.log("contenido:", lista_completa)
    // ["Arath", "Ariana", "Armando", "Lorena", "Mauricio", "Rosa"]
    return lista_completa
}

const LISTA_ASISTENCIAS = ["Arath", "Ariana", "Armando", "Lorena", "Mauricio", "Rosa"]

//#region Buscar en arreglo usando `includes`
// Función flecha con operador terciario
const asistio = (quien) => LISTA_ASISTENCIAS.includes(quien) ? 'Sí asistió' : 'No asistió'

function asistio2(quien) {
    return LISTA_ASISTENCIAS.includes(quien) ? 'Sí asistió' : 'No asistió'
}

function asistio3(quien) {
    if (LISTA_ASISTENCIAS.includes(quien)) {
        return 'Sí asistió'
    }
    return 'No asistió'
}
//#endregion

function buscarEnArreglo(arreglo = [], valorBuscado = "") {
    if (!Array.isArray(arreglo)) {
        console.error("El parámetro arreglo no es válido", arreglo)
        return "La lista no es válida."
    }
    let enQueIndice = arreglo.indexOf(valorBuscado)
    if (enQueIndice == -1) {
        return "No se encontró el elemento buscado"
    }
    return `(${valorBuscado}): se encuentra en el índice (${enQueIndice})`
}

let valor
function funcionPrincipal(opcion = 0, valorPredeterminado, variableC) {
    if (valorPredeterminado) {
        valor = valorPredeterminado
    }
    if (variableC) {
        console.log('Este valor no se usa', variableC)
    }
    if (opcion == 0) {
        console.log("Valor antes: ", valor)
        valor = sumar(3, 5)
        console.log("Valor después: ", valor)
        funcionPrincipal(1)
    }
    if (opcion == 1) {
        console.log("Opción 1. Resultado", valor)
    }
}

const Persona = {
    todos: [],
    // Función dentro de objeto
    agregar(nombre){
        // console.log('Aquí [this] es Persona', this)
        this.todos.push(nombre)
    },
    // Funciones normales sí tienen acceso al objeto usando this
    saludo(indice){
        console.log("Hola, soy", this.todos[indice])
    },
    // Función flecha dentro de objetos no tiene acceso a propiedades y métodos
    saludo2: (indice) => {
        console.log('Aquí [this] es window', this)
    }
}


