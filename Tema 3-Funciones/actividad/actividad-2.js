// Función anónima
const pelicula = function (cadena) {
    return `El nombre de la película es: ${cadena}`
}

function sumame(a, b){
    let suma = a + b
    console.log("Total de la Suma:", a,'+', b, 'es', suma)
    return suma
}

// sumame(sumame(2,4), sumame(5,2))

// Funciones call back
function peliculaYSuma(a,b,nombrePelicula, sugerencia, calcularSuma){
    // Llamamos a la función pelicula
    console.log("Callback 'sugerencia/pelicula'", sugerencia(nombrePelicula))
    // Llamamos a la función sumame
    console.log("Callback 'calcularSuma/sumame'", calcularSuma(a, b))
}

// invocar a la función callback
peliculaYSuma(5,2, "Pinocho", pelicula, sumame)
