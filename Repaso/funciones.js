// Composición de funciones
function suma(a, b){
    return a + b
}

function multiplicar(c, d){
    return c * d
}

function mostrarResultado(tipo, resultado){
    return "Resultado de " + tipo + ": " + resultado
}

// Función compuesta (solo recibe el resultado)
let res = suma(5,3)
let sumaymultiplicacion = mostrarResultado("de la suma", res)

// Callback - recibe la función y la ejecuta dentro del cuerpo de la función callback
function hacerTodo(callbackResultado){
    let res = suma(5,3)
    callbackResultado("de la suma", res)
}

