class Figura {
    // altura
    // area
    constructor(lados, area = 100) {
        this._lados = lados
        this._area = area
        this._perimetro = 0
        console.log("Soy una figura geométrica")
    }

    getArea() {
        return this._area
    }

    getPerimetro() {
        return this._perimetro
    }
}

class Triangulo extends Figura {
    // + lados
    // - radio
    constructor(lado1, lado2, lado3) {
        // Crea una instancia de Figura para heredar sus métodos y funciones
        super()

        console.log("Soy un triángulo")
        this._lado1 = lado1
        this._lado2 = lado2
        this._lado3 = lado3

        this._area = lado1 + lado2 + lado3
    }

}

class Circulo extends Figura {
    // radio
    constructor(radio) {
        super()

        // this._radio = radio
        console.log("Soy un círculo")

        // Modificar el area
        this.setRadio(radio)

        delete this._lados
    }
    
    setRadio(valor){
        let area = (Math.pow(valor, 2) * Math.PI)
        this._radio = valor
        this._area = area
    }

}

// Heredar de una clase heredada
class Elipse extends Circulo{
    constructor(){
        super()
        this.setRadio(10)
    }
}

