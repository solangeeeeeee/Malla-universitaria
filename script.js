// Datos de la malla con ciclos, créditos y desbloqueos
const materias = [
  // Ciclo 1
  { nombre: "Taller de Expresión Corporal", ciclo: 1, creditos: 2, desbloquea: ["Taller Presentaciones Efectivas"] },
  { nombre: "Matemática", ciclo: 1, creditos: 3, desbloquea: ["Estadística General"] },
  { nombre: "Lengua y Comunicación", ciclo: 1, creditos: 3, desbloquea: [] },
  { nombre: "Introducción a la Psicología", ciclo: 1, creditos: 3, desbloquea: ["Historia y Sistemas Psicológicos"] },
  { nombre: "Filosofía", ciclo: 1, creditos: 3, desbloquea: ["Lógica"] },
  { nombre: "Desempeño Universitario", ciclo: 1, creditos: 2, desbloquea: ["Ciencias Sociales"] },
  { nombre: "Biología", ciclo: 1, creditos: 4, desbloquea: ["Morfofisiología del Sistema Nervioso", "Educación Ambiental"] },

  // Ciclo 2
  { nombre: "Taller Presentaciones Efectivas", ciclo: 2, creditos: 1, desbloquea: ["Taller de Desarrollo Personal 1"] },
  { nombre: "Morfofisiología del Sistema Nervioso", ciclo: 2, creditos: 4, desbloquea: ["Psicobiología"] },
  { nombre: "Lógica", ciclo: 2, creditos: 3, desbloquea: [] },
  { nombre: "Historia y Sistemas Psicológicos", ciclo: 2, creditos: 3, desbloquea: ["Psicología de la Personalidad", "Procesos Cognitivos", "Desarrollo Psicológico 1"] },
  { nombre: "Estadística General", ciclo: 2, creditos: 4, desbloquea: ["Estadística Aplicada a la Psicología"] },
  { nombre: "Educación Ambiental", ciclo: 2, creditos: 2, desbloquea: [] },
  { nombre: "Ciencias Sociales", ciclo: 2, creditos: 3, desbloquea: [] },

  // Ciclo 3
  { nombre: "Taller de Desarrollo Personal 1", ciclo: 3, creditos: 1, desbloquea: ["Taller de Desarrollo Personal 2"] },
  { nombre: "Realidad Nacional", ciclo: 3, creditos: 3, desbloquea: ["Psicología Social"] },
  { nombre: "Psicología de la Personalidad", ciclo: 3, creditos: 3, desbloquea: ["Psicoanálisis", "Psicopatología 1"] },
  { nombre: "Psicobiología", ciclo: 3, creditos: 3, desbloquea: ["Procesos Afectivos-Emocionales", "Motivación y Emoción"] },
  { nombre: "Procesos Cognitivos", ciclo: 3, creditos: 3, desbloquea: [] },
  { nombre: "Inglés", ciclo: 3, creditos: 2, desbloquea: [] },
  { nombre: "Estadística Aplicada a la Psicología", ciclo: 3, creditos: 3, desbloquea: ["Psicometría"] },
  { nombre: "Desarrollo Psicológico 1", ciclo: 3, creditos: 3, desbloquea: ["Desarrollo Psicológico 2"] },

  // Ciclo 4
  { nombre: "Taller de Desarrollo Personal 2", ciclo: 4, creditos: 1, desbloquea: [] },
  { nombre: "Psicometría", ciclo: 4, creditos: 4, desbloquea: ["Pruebas Psicológicas 1", "Metodología de la Investigación para Psicología"] },
  { nombre: "Psicología Social", ciclo: 4, creditos: 3, desbloquea: ["Psicología de las Organizaciones", "Dinámica y Abordaje de Grupos"] },
  { nombre: "Psicoanálisis", ciclo: 4, creditos: 3, desbloquea: ["Modelo Psicoterapéutico Humanista"] },
  { nombre: "Procesos Afectivos-Emocionales", ciclo: 4, creditos: 3, desbloquea: [] },
  { nombre: "Motivación y Emoción", ciclo: 4, creditos: 3, desbloquea: ["Psicopatología 1", "Psicología del Aprendizaje"] },
  { nombre: "Desarrollo Psicológico 2", ciclo: 4, creditos: 3, desbloquea: ["Entrevista y Observación Psicológica"] },
  
  // Ciclo 5
  { nombre: "Psicopatología 1", ciclo: 5, creditos: 4, desbloquea: ["Psicopatología 2"] },
  { nombre: "Psicología del Aprendizaje", ciclo: 5, creditos: 3, desbloquea: ["Psicología Educativa"] },
  { nombre: "Psicología de las Organizaciones", ciclo: 5, creditos: 3, desbloquea: ["Comportamiento y Cultura Organizacional"] },
  { nombre: "Pruebas Psicológicas 1", ciclo: 5, creditos: 3, desbloquea: ["Pruebas Psicológicas 2"] },
  { nombre: "Modelo Psicoterapéutico Humanista", ciclo: 5, creditos: 3, desbloquea: ["Psicología de la Sexualidad"] },
  { nombre: "Entrevista y Observación Psicológica", ciclo: 5, creditos: 3, desbloquea: ["Consejo Psicológico"] },

  // Ciclo 6
  { nombre: "Psicopatología 2", ciclo: 6, creditos: 4, desbloquea: ["Neuropsicología"] },
  { nombre: "Psicología de la Sexualidad", ciclo: 6, creditos: 3, desbloquea: ["Psicología Positiva"] },
  { nombre: "Psicología Educativa", ciclo: 6, creditos: 4, desbloquea: [] },
  { nombre: "Pruebas Psicológicas 2", ciclo: 6, creditos: 3, desbloquea: ["Evaluación y Diagnóstico Psicológico"] },
  { nombre: "Dinámica y Abordaje de Grupos", ciclo: 6, creditos: 2, desbloquea: ["Psicología Comunitaria y Ambiental"] },
  { nombre: "Consejo Psicológico", ciclo: 6, creditos: 3, desbloquea: ["Modelo Psicoterapéutico Cognitivo - Conductual"] },

  // Ciclo 7
  { nombre: "Psicología Positiva", ciclo: 7, creditos: 3, desbloquea: ["Psicología Clínica y de la Salud"] },
  { nombre: "Psicología Comunitaria y Ambiental", ciclo: 7, creditos: 3, desbloquea: ["Programa de Internado Aplicado a Psicología"] },
  { nombre: "Neuropsicología", ciclo: 7, creditos: 4, desbloquea: [] },
  { nombre: "Modelo Psicoterapéutico Cognitivo - Conductual", ciclo: 7, creditos: 3, desbloquea: [] },
  { nombre: "Evaluación y Diagnóstico Psicológico", ciclo: 7, creditos: 3, desbloquea: ["Orientación Vocacional y Profesional", "Modelo Psicoterapéutico Familiar Sistémico", "Integrity and Professional Ethical"] },
  { nombre: "Comportamiento y Cultura Organizacional", ciclo: 7, creditos: 3, desbloquea: [] },

  // Ciclo 8
  { nombre: "Psicología Clínica y de la Salud", ciclo: 8, creditos: 4, desbloquea: [] },
  { nombre: "Programa de Internado Aplicado a Psicología", ciclo: 8, creditos: 4, desbloquea: [] },
  { nombre: "Orientación Vocacional y Profesional", ciclo: 8, creditos: 2, desbloquea: [] },
  { nombre: "Modelo Psicoterapéutico Familiar Sistémico", ciclo: 8, creditos: 3, desbloquea: [] },
  { nombre: "Metodología de la Investigación para Psicología", ciclo: 8, creditos: 3, desbloquea: ["Seminario de Tesis"] },
  { nombre: "Integrity and Professional Ethical", ciclo: 8, creditos: 3, desbloquea: ["Internado 1"] },

  // Ciclo 9
  { nombre: "Seminario de Tesis", ciclo: 9, creditos: 3, desbloquea: ["Trabajo de Investigación"] },
  { nombre: "Internado 1", ciclo: 9, creditos: 15, desbloquea: ["Internado 2"] },

  // Ciclo 10
  { nombre: "Trabajo de Investigación", ciclo: 10, creditos: 3, desbloquea: [] },
  { nombre: "Internado 2", ciclo: 10, creditos: 15, desbloquea: [] }
];

// Estado guardado
let estado = JSON.parse(localStorage.getItem("estadoCursos")) || {};

function guardarEstado() {
  localStorage.setItem("estadoCursos", JSON.stringify(estado));
}

function estaDesbloqueada(nombre) {
  const bloqueantes = materias.filter(m =>
    m.desbloquea.includes(nombre)
  );
  if (bloqueantes.length === 0) return true;
  return bloqueantes.every(m => estado[m.nombre] === "completado");
}

function renderMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  const ciclos = [...new Set(materias.map(m => m.ciclo))].sort((a, b) => a - b);

  ciclos.forEach(ciclo => {
    const cicloDiv = document.createElement("div");
    cicloDiv.className = "ciclo";
    const titulo = document.createElement("h3");
    titulo.textContent = `Ciclo ${ciclo}`;
    cicloDiv.appendChild(titulo);

    const grupo = document.createElement("div");
    grupo.className = "materias";

    materias.filter(m => m.ciclo === ciclo).forEach(m => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "materia";

      const desbloqueada = estaDesbloqueada(m.nombre);
      if (!desbloqueada) tarjeta.classList.add("locked");
      if (estado[m.nombre] === "completado") tarjeta.classList.add("completed");

      tarjeta.innerHTML = `${m.nombre}<small>${m.creditos} créditos</small>`;

      tarjeta.onclick = () => {
        if (!desbloqueada) return;
        if (estado[m.nombre] === "completado") {
          delete estado[m.nombre];
        } else {
          estado[m.nombre] = "completado";
        }
        guardarEstado();
        renderMalla();
      };

      grupo.appendChild(tarjeta);
    });

    cicloDiv.appendChild(grupo);
    contenedor.appendChild(cicloDiv);
  });
}

renderMalla();