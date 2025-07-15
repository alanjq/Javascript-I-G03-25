function contarCaracteres(cadena = "") {
    if (!cadena) {
        console.error(`No ingresaste ninguna cadena`)
        return;
    }
    else if (cadena.length == 0) {
        console.error(`No ingresaste ninguna cadena`)
        return;
    } else {
        console.warn(`La cadena (${cadena}) tiene (${cadena.length}) caracteres`)
    }
}

const cuentaCaracteres = (cadena) => (cadena || "").length > 0
    ? console.warn(`La cadena (${cadena}) tiene (${cadena.length}) caracteres`)
    : console.error(`No ingresaste ninguna cadena`)

