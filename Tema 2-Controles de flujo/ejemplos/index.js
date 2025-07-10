const numero1 = 3
const numero2 = 5

function suma_1(numA = 1, numB = 0) {
    // Usando un if por cada variable
    if (typeof numA === 'number') {
        if (typeof numB === 'number') {
            let totalsuma = numA + numB
            return totalsuma
        } else {
            console.error('NumB no es un número válido')
        }
    } else {
        console.error('NumA no es un número válido')
    }
}

function suma_2(numA = 1, numB = 0) {
    // Usando dos validaciones en el mismo if
    if (typeof numA === 'number' && typeof numB === 'number') {
        let totalsuma = numA + numB
        return totalsuma
    }
    console.error("Ingresa valores válidos para realizar la suma")
    return 0
}

function suma_3(numA = 1, numB = 0) {
    // Si no es un número válido se muestra el mensaje de error y salimos de la función
    if (typeof numA !== 'number') {
        console.error('NumA no es un número válido')
        return 0;
    }
    if (typeof numB !== 'number') {
        console.error('NumB no es un número válido')
        return 0;
    }
    // Si las condiciones se cumplen, se realiza la suma
    return numA + numB
}

let total = suma_3(numero1, numero2)

console.log("Total:", total)
