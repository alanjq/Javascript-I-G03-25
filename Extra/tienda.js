// URL de la API de fakestore
const FAKE_STORE_API = "https://fakestoreapi.com/products"

function htmlProducto(producto){
    return `
        <article>
            <h2>${producto.title}</h2>
            <h3>${producto.price}</h3>
            <a href="categoria/${producto.category}">${producto.category}</a>
            <p>${producto.description}</p>
            <img src="${producto.image}" />
        </article>
    `
}

// Traer datos de la tienda
fetch(FAKE_STORE_API)
    .then(r => r.json()) // convierte la respuesta en JSON
    .then(productos => {
        // Aquí tenemos el contenido de la tienda
        console.log('productos de la tienda', productos)
        document.getElementById("tienda").innerHTML = ''
        // Mostrar el contenido en el div

        productos.forEach((producto)=>{
            console.log('producto', producto)
            document.getElementById("tienda").innerHTML += htmlProducto(producto)
        })
    })
