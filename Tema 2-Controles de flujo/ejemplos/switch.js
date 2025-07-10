let fecha = new Date()
const DIAS_SEMANA = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
]

function meses(numero_mes) {
    switch (numero_mes) {
        case 0: return "Enero"
        case 1: return "Febrero"
        case 2: return "Marzo"
        case 3: return "Abril"
        case 4: return "Mayo"
        case 5: return "Junio"
        case 6: return "Julio"
        case 7: return "Agosto"
        case 8: return "Septiembre"
        case 9: return "Octubre"
        case 10: return "Noviembre"
        case 11: return "Diciembre"
        default: return ""
    }
}

function dia_de_la_semana(fecha) {
    if (fecha instanceof Date) {
        let dia = fecha.getDay()
        return DIAS_SEMANA[dia]
    } else {
        console.error("El valor ingresado no es una fecha válida.")
    }
}


