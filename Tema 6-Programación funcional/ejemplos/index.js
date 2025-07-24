
// let texto = document.getElementById("texto1").value

// Busca un elemento basándose por el ID
const getByID = (idTexto) => document.getElementById(idTexto) || {}

function getInput(texto) {
    let elinput = document.getElementById(texto)
    if (elinput.value.length == 0) {

    } else {

    }
}

// Devuelve el div del contenedor
function getInputGroup(idTexto) {
    return document.getElementById(idTexto)
}

// Obtener a los tres elementos del contenedor
function getTextInput(inputGroup) {
    return inputGroup.querySelector("input")
}
function getTextLegend(inputGroup) {
    return inputGroup.querySelector("legend")
}
function getTextLabel(inputGroup) {
    return inputGroup.querySelector("label")
}
function getTextLabels(inputGroup) {
    return inputGroup.querySelectorAll("label")
}


function CrearInput(padre, id, etiqueta) {
    // Creamos los elementos
    let container = document.createElement("div")
    let label = document.createElement("label")
    let text = document.createElement("input")
    let labelMensaje = document.createElement("label")

    // Crear los atributos
    label.setAttribute("id", `text_${id}_label`)
    container.setAttribute("id", `text_${id}_container`)
    text.setAttribute("id", `text_${id}_input`)
    labelMensaje.setAttribute("id", `text_${id}_message`)

    label.innerText = etiqueta

    // Agrupar
    container.append(label, text, labelMensaje)
    container.classList.add("grupo-input")

    // Agregar al padre "formulario 1"
    padre.append(container)
    // document.getElementById("formulario").append(container)
}


// Agregar eventos
function validarTexto(e) {
    // Quien disparó el evento
    let target = e.target
    // console.log('evento', target)
    // Puede ser otro atributo en lugar de ID
    // if(target.classList.contains('eliminar')){
    //     eliminar()
    // }
    if (target.id.endsWith("input")) {
        if (target.value == '') {
            target.classList.remove('success')
            target.classList.add('error')
        } else {
            target.classList.remove('error')
            target.classList.add('success')
        }
    }
}

// formulario es el contenedor al que se le aplica el evento
// input se cambia por onclick para eventos de botón
// ValidarTexto es la función del evento
document.getElementById("formulario").addEventListener("input", validarTexto)

// Crear la vista con HTML
function crearHtmlResumen(datos) {
    let html = ""

    datos.forEach((dato)=>{
        html += `<div>${dato}</div>`
    })

    return html
}



// Hacer un listado de los datos ingresados del formulario anterior
function actualizarDatos() {
    let elFormulario = document.getElementById("formulario")
    let listadoGrupos = elFormulario.querySelectorAll('.grupo-input')

    let listaLabels = []
    let listaInputs = []
    let listaTexto = []

    // Obtener los valores
    listadoGrupos.forEach((grupo) => {
        // Obtenemos el texto del label
        let textoLabel = grupo.querySelector('label').innerText
        listaLabels.push(textoLabel)

        // Obtenemos el valor del input
        let textoInput = grupo.querySelector('input').value
        listaInputs.push(textoInput)

        // Combinando en un solo arreglo
        // Nombre: yo
        listaTexto.push(`${textoLabel}: ${textoInput}`)
    })

    // Mostrar los valores uno por uno en el div
    let padre = document.getElementById("datosIngresados")

    padre.innerHTML = crearHtmlResumen(listaTexto)
}
