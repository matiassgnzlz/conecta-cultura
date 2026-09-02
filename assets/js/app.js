
const titulo = document.querySelector("#titulo-cartelera");
const boton = document.querySelector("#boton-destacar");
function destacarTitulo() {
titulo.classList.toggle("destacado");
}

boton.addEventListener("click", destacarTitulo);