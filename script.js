// Lista de materias por ciclo con créditos y desbloqueos
const materias = [
  {
    nombre: "Taller de Expresión Corporal",
    creditos: 2,
    ciclo: 1,
    desbloquea: ["Taller Presentaciones Efectivas"]
  },
  {
    nombre: "Matemática",
    creditos: 3,
    ciclo: 1,
    desbloquea: ["Estadística General"]
  },
  {
    nombre: "Lengua y Comunicación",
    creditos: 3,
    ciclo: 1,
    desbloquea: []
  },
  {
    nombre: "Introducción a la Psicología",
    creditos: 3,
    ciclo: 1,
    desbloquea: ["Historia y Sistemas Psicológicos"]
  },
  {
    nombre: "Filosofía",
    creditos: 3,
    ciclo: 1,
    desbloquea: ["Lógica"]
  },
  {
    nombre: "Desempeño Universitario",
    creditos: 2,
    ciclo: 1,
    desbloquea: ["Ciencias Sociales"]
  },
  {
    nombre: "Biología",
    creditos: 4,
    ciclo: 1,
    desbloquea: ["Morfofisiología del Sistema Nervioso", "Educación Ambiental"]
  },
  {
    nombre: "Taller Presentaciones Efectivas",
    creditos: 1,
    ciclo: 2,
    desbloquea: ["Taller de Desarrollo Personal 1"]
  },
  {
    nombre: "Morfofisiología del Sistema Nervioso",
    creditos: 4,
    ciclo: 2,
    desbloquea: ["Psicobiología"]
  },
  {
    nombre: "Lógica",
    creditos: 3,
    ciclo: 2,
    desbloquea: []
  },
  {
    nombre: "Historia y Sistemas Psicológicos",
    creditos: 3,
    ciclo: 2,
    desbloquea: ["Psicología de la Personalidad", "Procesos Cognitivos", "Desarrollo Psicológico 1"]
  },
  {
    nombre: "Estadística General",
    creditos: 4,
    ciclo: 2,
    desbloquea: ["Estadística Aplicada a la Psicología"]
  },
  {
    nombre: "Educación Ambiental",
    creditos: 2,
    ciclo: 2,
    desbloquea: []
  },
  {
    nombre: "Ciencias Sociales",
    creditos: 3,
    ciclo: 2,
    desbloquea: []
  },
  // Aquí puedes seguir pegando las demás materias desde el ciclo 3 al 10
  // Usa el mismo formato:
  // {
  //   nombre: "Nombre de la materia",
  //   creditos: X,
  //   ciclo: X,
  //   desbloquea: ["Nombre materia 1", "Nombre materia 2"]
  // }

];

// Estado inicial (guardado en localStorage para que se conserve)
let estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias")) || {};

function guardarEstado() {
  localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
}

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  // Agrupar materias por ciclo
  const ciclos = [...new Set(materias.map(m => m.ciclo))];
  ciclos.sort((a, b) => a - b);

  ciclos.forEach(ciclo => {
    const cicloDiv = document.createElement("div");
    cicloDiv.classList.add("ciclo");

    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${ciclo}`;
    cicloDiv.appendChild(titulo);

    const materiasDiv = document.createElement("div");
    materiasDiv.classList.add("materias");

    const materiasCiclo = materias.filter(m => m.ciclo === ciclo);
    materiasCiclo.forEach(materia => {
      const div = document.createElement("div");
      div.classList.add("materia");

      const estaCompletada = estadoMaterias[materia.nombre] === "completada";
      const estaDesbloqueada = estaCompletada || materia.desbloquea.length === 0 || materia.desbloquea.every(prereq =>
        materias.find(m => m.nombre === prereq)
      ) || estaDesbloqueadaPorCompletar(materia.nombre);

      if (estaCompletada) div.classList.add("completed");
      if (!estaDesbloqueada) div.classList.add("locked");

      div.textContent = materia.nombre;

      const info = document.createElement("small");
      info.textContent = `${materia.creditos} créditos`;
      div.appendChild(info);

      div.onclick = () => {
        div.classList.toggle("completed");
        const estado = div.classList.contains("completed") ? "completada" : "pendiente";
        estadoMaterias[materia.nombre] = estado;
        guardarEstado();
        renderMalla(); // Volver a dibujar para actualizar desbloqueos
      };

      materiasDiv.appendChild(div);
    });

    cicloDiv.appendChild(materiasDiv);
    container.appendChild(cicloDiv);
  });
}

function estaDesbloqueadaPorCompletar(nombreMateria) {
  const prereqs = materias.filter(m => m.desbloquea.includes(nombreMateria));
  if (prereqs.length === 0) return true;
  return prereqs.every(p => estadoMaterias[p.nombre] === "completada");
}

renderMalla();