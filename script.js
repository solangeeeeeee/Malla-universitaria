const materias = [
  { nombre: "Taller de Expresion Corporal", ciclo: 1, desbloquea: ["Taller Presentaciones Efectivas"] },
  { nombre: "Matemática", ciclo: 1, desbloquea: ["Estadística General"] },
  { nombre: "Lengua y comunicación", ciclo: 1, desbloquea: [] },
  { nombre: "Introducción a la psicología", ciclo: 1, desbloquea: ["Historia y sistemas Psicologicos"] },
  { nombre: "Filosofía", ciclo: 1, desbloquea: ["Lógica"] },
  { nombre: "Desempeño universitario", ciclo: 1, desbloquea: ["Ciencias Sociales"] },
  { nombre: "Biología", ciclo: 1, desbloquea: ["Morfo fisiología del Sistema Nervioso", "Educación Ambiental"] },

  { nombre: "Taller Presentaciones Efectivas", ciclo: 2, desbloquea: ["Taller de Desarrollo Personal 1"] },
  { nombre: "Morfo fisiología del Sistema Nervioso", ciclo: 2, desbloquea: ["Psicobiologia"] },
  { nombre: "Lógica", ciclo: 2, desbloquea: [] },
  { nombre: "Historia y sistemas Psicologicos", ciclo: 2, desbloquea: ["Psicologia de la Personalidad", "Procesos Cognitivos", "Desarrollo Psicologico 1"] },
  { nombre: "Estadística General", ciclo: 2, desbloquea: ["Estadística aplicada a la psicologia"] },
  { nombre: "Educación Ambiental", ciclo: 2, desbloquea: [] },
  { nombre: "Ciencias Sociales", ciclo: 2, desbloquea: [] },

  { nombre: "Taller de Desarrollo Personal 1", ciclo: 3, desbloquea: ["Taller de Desarrollo Personal 2"] },
  { nombre: "Realidad Nacional", ciclo: 3, desbloquea: ["Psicologia social"] },
  { nombre: "Psicologia de la Personalidad", ciclo: 3, desbloquea: ["Psicoanalisis", "Psicopatologia 1"] },
  { nombre: "Psicobiologia", ciclo: 3, desbloquea: ["Procesos afectivos-emocionales", "Motivación y emoción"] },
  { nombre: "Procesos Cognitivos", ciclo: 3, desbloquea: [] },
  { nombre: "Ingles", ciclo: 3, desbloquea: [] },
  { nombre: "Estadística aplicada a la psicologia", ciclo: 3, desbloquea: ["Psicometría"] },
  { nombre: "Desarrollo Psicologico 1", ciclo: 3, desbloquea: ["Desarrollo psicologico 2"] },

  { nombre: "Taller de Desarrollo Personal 2", ciclo: 4, desbloquea: [] },
  { nombre: "Psicometría", ciclo: 4, desbloquea: ["Pruebas psicologicas 1", "Metodología de la investigación para psicología"] },
  { nombre: "Psicologia social", ciclo: 4, desbloquea: ["Psicologia de las organizaciones", "Dinamica y abordaje de grupos"] },
  { nombre: "Psicoanalisis", ciclo: 4, desbloquea: ["Modelo psicoterapeutico humanista"] },
  { nombre: "Procesos afectivos-emocionales", ciclo: 4, desbloquea: [] },
  { nombre: "Motivación y emoción", ciclo: 4, desbloquea: ["Psicopatologia 1", "Psicologia del aprendizaje"] },
  { nombre: "Desarrollo psicologico 2", ciclo: 4, desbloquea: ["Entrevista y observación psicologica"] },

  { nombre: "Psicopatologia 1", ciclo: 5, desbloquea: ["Psicopatologia 2"] },
  { nombre: "Psicologia del aprendizaje", ciclo: 5, desbloquea: ["Psicologia educativa"] },
  { nombre: "Psicologia de las organizaciones", ciclo: 5, desbloquea: ["Comportamiento y cultura organizacional"] },
  { nombre: "Pruebas psicologicas 1", ciclo: 5, desbloquea: ["Pruebas Psicologicas 2"] },
  { nombre: "Modelo psicoterapeutico humanista", ciclo: 5, desbloquea: ["Psicologia de la sexualidad"] },
  { nombre: "Entrevista y observación psicologica", ciclo: 5, desbloquea: ["Consejo psicologico"] },

  { nombre: "Psicopatologia 2", ciclo: 6, desbloquea: ["Neuropsicología"] },
  { nombre: "Psicologia de la sexualidad", ciclo: 6, desbloquea: ["Psicologia positiva"] },
  { nombre: "Psicologia educativa", ciclo: 6, desbloquea: [] },
  { nombre: "Pruebas Psicologicas 2", ciclo: 6, desbloquea: ["Evaluación y diagnóstico psicológico"] },
  { nombre: "Dinamica y abordaje de grupos", ciclo: 6, desbloquea: ["Psicología comunitaria y ambiental"] },
  { nombre: "Consejo psicologico", ciclo: 6, desbloquea: ["Modelo Psicoterapéutico cognitivo - conductual"] },

  { nombre: "Psicología positiva", ciclo: 7, desbloquea: ["Psicología clínica y de la salud"] },
  { nombre: "Psicología comunitaria y ambiental", ciclo: 7, desbloquea: ["Programa de internado aplicado a psicología"] },
  { nombre: "Neuropsicología", ciclo: 7, desbloquea: [] },
  { nombre: "Modelo Psicoterapéutico cognitivo - conductual", ciclo: 7, desbloquea: [] },
  { nombre: "Evaluación y diagnóstico psicológico", ciclo: 7, desbloquea: ["Orientación vocacional y profesional", "Modelo psicoterapéutico familiar sistem", "Integrity and Professional Ethical"] },
  { nombre: "Comportamiento y cultura organizacional", ciclo: 7, desbloquea: [] },

  { nombre: "Psicología clínica y de la salud", ciclo: 8, desbloquea: [] },
  { nombre: "Programa de internado aplicado a psicología", ciclo: 8, desbloquea: [] },
  { nombre: "Orientación vocacional y profesional", ciclo: 8, desbloquea: [] },
  { nombre: "Modelo psicoterapéutico familiar sistem", ciclo: 8, desbloquea: [] },
  { nombre: "Metodología de la investigación para psicología", ciclo: 8, desbloquea: ["Seminario de tesis"] },
  { nombre: "Integrity and Professional Ethical", ciclo: 8, desbloquea: ["Internado 1"] },

  { nombre: "Seminario de tesis", ciclo: 9, desbloquea: ["Trabajo de investigación"] },
  { nombre: "Internado 1", ciclo: 9, desbloquea: ["Internado 2"] },

  { nombre: "Trabajo de investigación", ciclo: 10, desbloquea: [] },
  { nombre: "Internado 2", ciclo: 10, desbloquea: [] }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("malla-container");
  const ciclosUnicos = [...new Set(materias.map(m => m.ciclo))].sort((a, b) => a - b);

  ciclosUnicos.forEach(ciclo => {
    const seccion = document.createElement("div");
    seccion.className = "ciclo";
    const titulo = document.createElement("h3");
    titulo.textContent = `Ciclo ${ciclo}`;
    seccion.appendChild(titulo);

    const grupo = document.createElement("div");
    grupo.className = "materias";

    materias.filter(m => m.ciclo === ciclo).forEach(materia => {
      const div = document.createElement("div");
      div.className = "materia locked";
      div.setAttribute("data-nombre", materia.nombre);

      const icono = document.createElement("i");
      icono.className = "fas fa-brain";
      div.appendChild(icono);

      const nombreSpan = document.createElement("span");
      nombreSpan.className = "nombre";
      nombreSpan.textContent = materia.nombre;
      div.appendChild(nombreSpan);

      div.addEventListener("click", () => toggleMateria(div));
      grupo.appendChild(div);
    });

    seccion.appendChild(grupo);
    container.appendChild(seccion);
  });

  actualizarDesbloqueo();
  actualizarProgreso();
});

function toggleMateria(div) {
  if (div.classList.contains("locked")) return;

  div.classList.toggle("completed");
  actualizarDesbloqueo();
  actualizarProgreso();
}

function actualizarDesbloqueo() {
  const completadas = [...document.querySelectorAll(".materia.completed")]
    .map(d => d.getAttribute("data-nombre"));

  document.querySelectorAll(".materia").forEach(div => {
    const nombre = div.getAttribute("data-nombre");
    const materia = materias.find(m => m.nombre === nombre);
    const requisitos = materias.filter(m => m.desbloquea.includes(nombre));
    const desbloqueada = requisitos.every(req => completadas.includes(req.nombre));

    div.classList.toggle("locked", !desbloqueada && !completadas.includes(nombre));
  });

  document.querySelectorAll(".materia.completed .nombre").forEach(span => {
    span.style.textDecoration = "line-through";
    span.style.opacity = "1";
  });
}

function actualizarProgreso() {
  const total = document.querySelectorAll(".materia").length;
  const completadas = document.querySelectorAll(".materia.completed").length;
  const porcentaje = Math.round((completadas / total) * 100);
  document.getElementById("progreso-interno").style.width = `${porcentaje}%`;
  document.getElementById("porcentaje").textContent = `${porcentaje}%`;
}