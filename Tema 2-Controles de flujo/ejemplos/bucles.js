function repetirCiclo() {
    console.log('Aquí se va a llamar al bucle')
    cicloWhile(10);
}

function cicloWhile(limite) {
    let contador = 0
    while (contador <= limite) {
        let texto = document.getElementById('contenedor').innerHTML
        document.getElementById('contenedor').innerHTML = texto + '<br><br>' + 'Texto de prueba' + contador
        // Incrementar el contador en 1
        //contador+=1
        //contador = contador+1
        contador++
    }
}

function pedirNombre() {
    let nombre=""
    while (nombre.trim().length == 0) {
        nombre = prompt("Ingresa tu nombre")
    }
    return nombre
}
function pedirNumeroValido(){
    let valor = ""
    while(typeof valor != 'number'){
        valor = prompt("Ingresa un número")
        // Validamos que sea un número
        if(!isNaN(valor)){
            valor = parseInt(valor)
        }
    }
    return valor
}

function pedirNumero(){
    let numero = 0
    let total = 0
    const LIMITE = 21
    do{
        numero = pedirNumeroValido()
        // Convertir a número
        // numero = parseInt(numero)
        console.log('prompt', numero, typeof numero)
        total = numero + total
    }while(total < LIMITE)
    return total
}

