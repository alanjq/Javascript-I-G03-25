const DIAS_SEMANA = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
]

// Recorrer un arreglo
for (let indice = 0; indice < DIAS_SEMANA.length; indice++){
    let dia = DIAS_SEMANA[indice]
    // console.log('Índice', `[${indice}]`,'Día actual:', dia)
}

// Recorrer un objeto
let libro = {
    titulo: 'Javascript',
    autor: 'David Flanagan',
    numPaginas: 1245,
    editorial: "O'Really",
    precio: "10.45"
}


let htmlLibro = ""
for(let propiedad in libro){
    // switch (propiedad) {
    //     case "titulo":
    //         htmlLibro += `<h2>${libro[propiedad]}</h2>`  
    //         break;
    //     case "numPaginas":
    //         htmlLibro += `<div>No. de páginas: <b>${libro[propiedad]}</b> </div>`
    //         break;
    
    //     default: 
    //         htmlLibro += `<div>${propiedad}: ${libro[propiedad]} </div>`
    //         break;
    // }
    
    htmlLibro += `<div>${propiedad}: ${libro[propiedad]} </div>`
    // if(propiedad == "numPaginas"){
    //     break;
    // }
    if(propiedad == "editorial"){
        continue;
    }
    document.getElementById("contenedor").innerHTML = htmlLibro
}

function iterarElementoMap(elemento, indice){
    console.log("Posición", indice, "elemento:", elemento)
}

DIAS_SEMANA.map(iterarElementoMap)

DIAS_SEMANA.map((element, index)=>{
    console.log('Elemento', element, 'index', index);
})