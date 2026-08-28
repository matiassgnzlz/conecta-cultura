function calcularCupos(capacidad, inscritos) {
const disponibles = capacidad - inscritos;
return disponibles;
}

const cuposTaller = calcularCupos(30, 18);
console.log(cuposTaller);

function obtenerEstado(cuposDisponibles) {
if (cuposDisponibles === 0) {
return "Completa";
}

if (cuposDisponibles <= 5) {
return "Últimos cupos";

}
return "Disponible";
}

const estadoTaller = obtenerEstado(cuposTaller);
console.log(estadoTaller);

const actividades = [
"Taller de fotografía",
"Concierto comunitario",
"Muestra de teatro"
];

console.log(`La agenda contiene ${actividades.length} actividades`);

for (const actividad of actividades) {
console.log(actividad);
} 

/*const nombreActividad = "Taller de fotografía";
const capacidad = 30;
const inscritos = 18;
function calcularCupos(capacidad, inscritos) {
return capacidad - inscritos;
}
function obtenerEstado(cuposDisponibles) {
if (cuposDisponibles === 0) {
return "Completa";
}
if (cuposDisponibles <= 5) {
return "Últimos cupos";
}
return "Disponible";
}
const cuposDisponibles = calcularCupos(capacidad, inscritos);
const estado = obtenerEstado(cuposDisponibles);
console.log(`Actividad: ${nombreActividad}`);
console.log(`Cupos disponibles: ${cuposDisponibles}`);
console.log(`Estado: ${estado}`);*/ 
