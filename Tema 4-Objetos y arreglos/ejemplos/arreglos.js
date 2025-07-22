// Arreglos
const DIAS_SEMANA = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
]


let frutas = [
    "Mango",
    "Manzana",
    "Uva",
    "Pera"
]

let verduras = [
    "Cebolla",
    "Tomate",
    "Zanahoria"
]

let compras = [frutas, verduras]

// Calendario

const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

let Calendario = []

let inicio = 1
let fin = 31

let ahora = new Date()

// Crear calendario
for (let index = inicio; index < fin; index++) {
    let fecha = new Date(`2025-7-${index}`)

    let diaActual = fecha.getDate()
    let mesActual = MESES[fecha.getMonth()]
    let diaSemanaActual = DIAS_SEMANA[fecha.getDay()]

    let fechaCalendario = {
        mes: mesActual,
        dia: diaActual,
        semana: diaSemanaActual
    }
    Calendario.push(fechaCalendario)
}

function imprimirCalendario() {
    let htmlCalendario = ""
    Calendario.forEach((item, index) => {
        // Abre un section en el primer elemento
        if (index === 0) {
            htmlCalendario += "<tr>"
        }
        htmlCalendario += `<td>
            ${item.dia} - ${item.semana}
        </td>`
        // Cierra y abre en cada domingo
        if (item.semana == "Domingo") {
            htmlCalendario += "</tr><tr>"
        }
        // Cierra el section en el último elemento
        if (index === Calendario.length) {
            htmlCalendario += "</tr>"
        }
    })
    document.getElementById("calendario").innerHTML = htmlCalendario
}

let arregloMixto = [
    100,
    'a',
    {}
]
let arregloComplejo = [
    [
        ['Texto'],
        ['Otro texto']
    ],
    ['Opción B'],
    [
        {
            Dato: 'extra',
        },
    ]
]