function renombrarDocumento() {
    // Buscar al input para obtener el texto ingresado
    let input = document.getElementById("textoTitulo")
    console.log('INPUT', input)

    // Cambiar el título de la pestaña
    document.title = input.value

    // Borrar el formulario
    resetearFormulario()
}

// Invocamos a la función
// renombrarDocumento("Documento 1")
// <button onclick="funcion()">Boton</button>
// document.getElementById("botonCambiarTitulo").addEventListener("click", renombrarDocumento)

function resetearFormulario() {
    // Buscar los elementos HTML que vamos a modificar
    let input = document.getElementById("textoTitulo")
    let boton = document.getElementById("botonCambiarTitulo")

    // Desactivar botón de cambiar título
    boton.setAttribute("disabled", "")
    // Colocamos un placeholder porque no tenemos etiquetas
    input.setAttribute("placeholder", "Escribe el título del documento")
    // Input inicie vacío
    input.value = ""
}

const mostrarOcultarSubMenu = (event) => {
    let botonUtilizado = event.button
    let contenedor = document.getElementById("contenedor")
    let submenu = contenedor.querySelector(".submenu")

    switch (botonUtilizado) {
        case 0:
            console.log('Botón izquierdo click')
            // submenu.style.display = ""
            submenu.classList.remove("visible")
            break;
        case 1:
            console.log('Clic con la rueda del mouse')
            break;

        case 2:
            console.log('Clic derecho')
            // contenedor.querySelector("datalist") // Etiqueta
            // contenedor.querySelector(".submenu") // Clase CSS
            // contenedor.querySelector("[submenu]") // Atributo / Propiedad
            // contenedor.querySelector("[id='submenu']") // Atributo igual a cierto valor
            // submenu.style.display = "block"
            submenu.classList.add("visible")
            event.stopImmediatePropagation();

            break;

        default:
            console.log('Clic con otro botón')
            break;
    }

}

function iniciarSitio() {
    // Buscar los elementos HTML que vamos a modificar
    let input = document.getElementById("textoTitulo")
    let boton = document.getElementById("botonCambiarTitulo")

    resetearFormulario()

    boton.addEventListener("click", renombrarDocumento)

    input.addEventListener("input", function () {
        let boton = document.getElementById("botonCambiarTitulo")
        if (this.value === '') {
            boton.setAttribute("disabled", "")
        } else {
            boton.removeAttribute("disabled")
        }
    })

    // Evita que se muestre el menú contextual del navegador
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    // Evento para mostrar/ocultar nuestro submenu
    let contenedor = document.getElementById("contenedor")

    contenedor.addEventListener("mousedown", mostrarOcultarSubMenu)
    
    // Ocultar el submenu cuando salimos del contenedor
    contenedor.addEventListener("mouseout", function(){
        let submenu = contenedor.querySelector(".submenu")
        submenu.classList.remove("visible")
        // submenu.style.display = ""
    })
    contenedor.addEventListener("mouseover", function(){
        let submenu = contenedor.querySelector(".submenu")
        submenu.classList.add("visible")
        // submenu.style.display = "block"
    })

    // Enviar formuarlios
    document.getElementById("btnEnviar").addEventListener("click", function(){
        // Detener que la pagina se recargue o actualice
        event.preventDefault()
        console.log("Formulario", document.forms[0].nombre.value)
    })
}

document.addEventListener("DOMContentLoaded", iniciarSitio)
// $(document).ready(iniciarSitio) -> equivalente de jQuery
