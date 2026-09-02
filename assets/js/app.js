const actividades = [
{
codigo: "MUS001",
nombre: "Taller de guitarra inicial",
categoria: "Música",
precio: 15000,
cupos: 20
},
{
codigo: "ART002",
nombre: "Acuarela para principiantes",
categoria: "Artes visuales",
precio: 12000,
cupos: 4
},
{
codigo: "TEA003",
nombre: "Teatro comunitario",
categoria: "Teatro",
precio: 0,
cupos: 0
}
];

const cartelera = document.querySelector("#cartelera");

function crearTarjeta(actividad) {
const tarjeta = document.createElement("article");
tarjeta.classList.add("tarjeta");

const nombre = document.createElement("h2");
nombre.textContent = actividad.nombre;

const categoria = document.createElement("p");
categoria.textContent = `Categoría: ${actividad.categoria}`;

const cupos = document.createElement("p");
cupos.textContent = `Cupos: ${actividad.cupos}`;

tarjeta.appendChild(nombre);
tarjeta.appendChild(categoria);
tarjeta.appendChild(cupos);
cartelera.appendChild(tarjeta);
}

for (const actividad of actividades) {
crearTarjeta(actividad);
}