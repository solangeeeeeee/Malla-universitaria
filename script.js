const materias = [
  // Ciclo 1
  { nombre: "Taller de Expresion Corporal", ciclo: 1, creditos: 2, desbloquea: ["Taller Presentaciones Efectivas"] },
  { nombre: "Matemática", ciclo: 1, creditos: 3, desbloquea: ["Estadística General"] },
  { nombre: "Lengua y comunicación", ciclo: 1, creditos: 3, desbloquea: [] },
  { nombre: "Introducción a la psicología", ciclo: 1, creditos: 3, desbloquea: ["Historia y sistemas Psicologicos"] },
  { nombre: "Filosofía", ciclo: 1, creditos: 3, desbloquea: ["Lógica"] },
  { nombre: "Desempeño universitario", ciclo: 1, creditos: 2, desbloquea: ["Ciencias Sociales"] },
  { nombre: "Biología", ciclo: 1, creditos: 4, desbloquea: ["Morfo fisiología del Sistema Nervioso", "Educación Ambiental"] },

  // Ciclo 2
  { nombre: "Taller Presentaciones Efectivas", ciclo: 2, creditos: 1, desbloquea: ["Taller de Desarrollo Personal 1"] },
  { nombre: "Morfo fisiología del Sistema Nervioso", ciclo: 2, creditos: 4, desbloquea: ["Psicobiología"] },
  { nombre: "Lógica", ciclo: 2, creditos: 3, desbloquea: [] },
  { nombre: "Historia y sistemas Psicologicos", ciclo: 2, creditos: 3, desbloquea: ["Psicología de la Personalidad", "Procesos Cognitivos", "Desarrollo Psicológico 1"] },
  { nombre: "Estadística General", ciclo: 2, creditos: 4, desbloquea: ["Estadística Aplicada a la Psicología"] },
  { nombre: "Educación Ambiental", ciclo: 2, creditos: 2, desbloquea: [] },
  { nombre: "Ciencias Sociales", ciclo: 2, creditos: 3, desbloquea: [] },

  // Ciclo 3
  { nombre: "Taller de Desarrollo Personal 1", ciclo: 3, creditos: 1, desbloquea: ["Taller de Desarrollo Personal 2"] },
  { nombre: "Realidad Nacional", ciclo: 3, creditos: 3, desbloquea: ["Psicología Social"] },
  { nombre: "Psicología de la Personalidad", ciclo: 3, creditos: 3, desbloquea: ["Psicoanálisis", "Psicopatología 1"] },
  { nombre: "Psicobiología", ciclo: 3, creditos: 3, desbloquea: ["Procesos afectivos-emocionales", "Motivación y emoción"] },
  { nombre: "Procesos Cognitivos", ciclo: 3, creditos: 3, desbloquea: [] },
  { nombre: "Inglés", ciclo: 3, creditos: 2, desbloquea: [] },
  { nombre: "Estadística Aplicada a la Psicología", ciclo: 3, creditos: 3, desbloquea: ["Psicometría"] },
  { nombre: "Desarrollo Psicológico 1", ciclo: 3, creditos: 3, desbloquea: ["Desarrollo Psicológico 2"] },

  // Ciclo 4
  { nombre: "Taller de Desarrollo Personal 2", ciclo: 4, creditos: 1, desbloquea: [] },
  { nombre: "Psicometría", ciclo: 4, creditos: 4, desbloquea: ["Pruebas Psicológicas 1", "Metodología de la Investigación para Psicología"] },
  { nombre: "Psicología Social", ciclo: 4, creditos: 3, desbloquea: ["Psicología de las Organizaciones", "Dinámica y Abordaje de Grupos"] },
  { nombre: "Psicoanálisis", ciclo: 4, creditos: 3, desbloquea: ["Modelo Psicoterapéutico Humanista"] },
  { nombre: "Procesos afectivos-emocionales", ciclo: 4, creditos: 3, desbloquea: [] },
  { nombre: "Motivación y emoción", ciclo: 4, creditos: 3, desbloquea: ["Psicopatología 1", "Psicología del Aprendizaje"] },
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
  { nombre: "Evaluación y Diagnóstico Psicológico", ciclo: 7, creditos: 3, desbloquea: ["Orientación Vocacional y Profesional", "Modelo Psicoterapéutico Familiar Sistem", "Integrity and Professional Ethical"] },
  { nombre: "Comportamiento y Cultura Organizacional", ciclo: 7, creditos: 3, desbloquea: [] },

  // Ciclo 8
  { nombre: "Psicología Clínica y de la Salud", ciclo: 8, creditos: 4, desbloquea: [] },
  { nombre: "Programa de Internado Aplicado a Psicología", ciclo: 8, creditos: 4, desbloquea: [] },
  { nombre: "Orientación Vocacional y Profesional", ciclo: 8, creditos: 2, desbloquea: [] },
  { nombre: "Modelo Psicoterapéutico Familiar Sistem", ciclo: 8, creditos: 3, desbloquea: [] },
  { nombre: "Metodología de la Investigación para Psicología", ciclo: 8, creditos: 3, desbloquea: ["Seminario de Tesis"] },
  { nombre: "Integrity and Professional Ethical", ciclo: 8, creditos: 3, desbloquea: ["Internado 1"] },

  // Ciclo 9
  { nombre: "Seminario de Tesis", ciclo: 9, creditos: 3, desbloquea: ["Trabajo de Investigación"] },
  { nombre: "Internado 1", ciclo: 9, creditos: 15, desbloquea: ["Internado 2"] },

  // Ciclo 10
  { nombre: "Trabajo de Investigación", ciclo: 10, creditos: 3, desbloquea: [] },
  { nombre: "Internado 2", ciclo: 10, creditos: 15, desbloquea: [] }
];

// Estado de materias completadas
const estado = {};

// Función para saber si la materia está desbloqueada
function estaDesbloqueada(materia) {
  // Casos especiales: siempre desbloqueados
  if (["Realidad Nacional", "Inglés"].includes(materia.nombre)) {
    return true;
  }

  const prerrequisitos = materias.filter(m => m.desbloquea.includes(materia.nombre));
  if (prerrequisitos.length === 0) {
    return materia.ciclo <= 3;
  }
  return prerrequisitos.every(m => estado[m.nombre] === "completado");
}

// Crear visualmente una tarjeta de materia
function crearMateria(m) {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerHTML = `<i class="fas fa-brain"></i>${m.nombre}<small>${m.creditos} créditos</small>`;

  if (!estaDesbloqueada(m)) {
    div.classList.add("locked");
  } else {
    div.addEventListener("click", () => {
      div.classList.toggle("completed");
      estado[m.nombre] = div.classList.contains("completed") ? "completado" : null;
      actualizarDesbloqueo();
    });
  }

  return div;
}

// Actualizar pantalla y progreso
function actualizarDesbloqueo() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";
  const ciclos = [...new Set(materias.map(m => m.ciclo))];
  let completadas = 0;

  ciclos.forEach(c => {
    const bloque = document.createElement("div");
    bloque.className = "ciclo";
    bloque.innerHTML = `<h3>Ciclo ${c}</h3>`;
    const grupo = document.createElement("div");
    grupo.className = "materias";

    materias.filter(m => m.ciclo === c).forEach(m => {
      const div = crearMateria(m);
      if (estado[m.nombre] === "completado") completadas++;
      grupo.appendChild(div);
    });

    bloque.appendChild(grupo);
    container.appendChild(bloque);
  });

  const porcentaje = Math.round((completadas / materias.length) * 100);
  document.getElementById("progreso-interno").style.width = porcentaje + "%";
  document.getElementById("porcentaje").innerText = porcentaje + "%";
}

// Cuando se carga la página
document.addEventListener("DOMContentLoaded", actualizarDesbloqueo);