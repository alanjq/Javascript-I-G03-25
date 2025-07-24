let objeto = {}

Object.prototype.toString = function () {
    return 'Este es un objeto y necesitas indicar la propiedad para imprimir su valor.'
}

let numero = "2"

String.prototype.toNumber = function () {
    let valor = this
    if(isNaN(valor) || valor.length == 0 || !valor){
        return 0
    }
    return parseFloat(valor)
}

let num1 = "3"
let num2 = "5"

function sumar(){
    // Aqui tenemos a los elementos HTML del formulario
    let a = document.getElementById("numa").value.toNumber()
    let b = document.getElementById("numb").value.toNumber()

    let total = a + b
    let resultado = document.getElementById("resultado")
    
    resultado.innerText = total
}

let suma = num1.toNumber() + num2.toNumber()

console.log('Resultado de la suma', num1, '+', num2, '=', suma)