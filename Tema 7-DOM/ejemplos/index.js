let elementosLista = []

// Esta función agrega el elemento a la vista HTML
function actualizarVistaHTML() {
    // Buscamos al contenedor
    let contenedor = document.getElementById('contenedor_lista')

    let html = ''

    elementosLista.forEach((elemento, index) => {
        html += `<li>${elemento} <span indice="${index}">[x]</span></li>`
    })

    // Agregamos el contenido generado del arreglo
    contenedor.innerHTML = html

}

function crearElementoLista(text, indice){
    let li = document.createElement("li")
    let boton_eliminar = document.createElement("span")

    boton_eliminar.innerText = "(eliminar)"
    li.innerText = text
    boton_eliminar.addEventListener('click', function(){
        eliminarElemento(indice)
        actualizarVistaElementos()
    })

    li.append(boton_eliminar)
    return li
}

function actualizarVistaElementos(){
    let contenedor = document.getElementById('contenedor_lista')

    elementosLista.forEach((item, index)=> {
        contenedor.append(crearElementoLista(item, index))
    })
}

// Esta crea el elemento en el arreglo
function agregarElemento() {
    let texto = document.getElementById("inputElemento")
    elementosLista.push(texto.value)
    // actualizarVistaHTML()
    actualizarVistaElementos()
    // Borrar la caja de texto
    texto.value = ''
}

function eliminarElemento(posicion) {
    elementosLista.splice(posicion, 1)
}

function eventoClicListado(e) {
    // Solo cuando se haga clic en el SPAN
    if (e.target.tagName == 'SPAN') {
        let indice = e.target.getAttribute('indice')
        console.log('evento de', e.target, 'indice', indice)
        eliminarElemento(indice)
        actualizarVistaHTML()
    }
}

function cargarPagina() {
//     document.getElementById('contenedor_lista').addEventListener('click', eventoClicListado)
}

