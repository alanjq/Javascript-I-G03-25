function cargarPagina(){
    let tarjetas = document.querySelectorAll(".card")
    tarjetas.forEach((card, indice)=>{
        card.classList.add('p-3', 'mx-4', 'my-3')
        card.classList.remove('mx-4', 'my-3')

        // Modificar el contenido
        let textTitle = card.querySelector('.card-title')
        let image = card.querySelector('.card-img-top')
        image.addEventListener('click', function(e){
            image.classList.add('d-none')
        })
        textTitle.innerText =  (indice +1) + ".-" + textTitle.innerText
    })
}
