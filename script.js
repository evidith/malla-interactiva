const cursos = [
  { id: "lenguaje", nombre: "LENGUAJE" },
  { id: "matematica", nombre: "MATEMÁTICA" },
  { id: "filosofia", nombre: "FILOSOFÍA" },
  { id: "estrategias", nombre: "ESTRATEGIAS DEL APRENDIZAJE" },
  { id: "defensa", nombre: "DEFENSA NACIONAL" },
  { id: "fund_admin", nombre: "FUNDAMENTOS DE LA ADMINISTRACIÓN" },
  { id: "sociologia", nombre: "SOCIOLOGÍA" },
  { id: "ecologia", nombre: "ECOLOGÍA Y AMBIENTE" },
  { id: "realidad", nombre: "REALIDAD NACIONAL REGIONAL Y UNIVERSITARIA" },
  { id: "riesgos", nombre: "GESTIÓN DEL RIESGO DE DESASTRES" },
  { id: "etica", nombre: "ÉTICA Y DEONTOLOGÍA" },
  { id: "admin_gral", nombre: "ADMINISTRACIÓN GENERAL" },
  { id: "analisis_mat", nombre: "ANÁLISIS MATEMÁTICO" },
  { id: "eco_admin", nombre: "ECONOMÍA PARA ADMINISTRADORES" },
  { id: "cont_admin", nombre: "CONTABILIDAD PARA ADMINISTRADORES" },
  { id: "rrhh", nombre: "RELACIONES HUMANAS" },
  { id: "teoria_sistemas", nombre: "TEORÍA DE SISTEMAS" },
  { id: "met_invest", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN" },
  { id: "estadistica", nombre: "ESTADÍSTICA", abre: ["muestreo"] },
  { id: "tic", nombre: "HERRAMIENTAS DE LAS TIC PARA LA GESTIÓN EMPRESARIAL" },
  { id: "muestreo", nombre: "TEORÍA DEL MUESTREO", requisitos: ["estadistica"], abre: ["control_proc"] },
  { id: "control_proc", nombre: "CONTROL ESTADÍSTICO DE PROCESOS", requisitos: ["muestreo"] },
  { id: "metodos_cuant", nombre: "MÉTODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES", abre: ["toma_decisiones"] },
  { id: "toma_decisiones", nombre: "TOMA DE DECISIONES EMPRESARIALES", requisitos: ["metodos_cuant"] },
  { id: "admin_operaciones", nombre: "ADMINISTRACIÓN DE OPERACIONES", abre: ["direccion_operaciones"] },
  { id: "direccion_operaciones", nombre: "DIRECCIÓN DE OPERACIONES", requisitos: ["admin_operaciones"] },
  // Agrega los demás cursos aquí según desees
];

const malla = document.getElementById("malla");

const estadoCursos = {};

cursos.forEach(curso => {
  estadoCursos[curso.id] = {
    aprobado: false,
    requisitos: curso.requisitos || [],
    abre: curso.abre || [],
    element: null,
  };
});

function crearMalla() {
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.className = "course";
    div.innerText = curso.nombre;
    if (estadoCursos[curso.id].requisitos.length > 0) {
      div.classList.add("locked");
    }
    div.addEventListener("click", () => manejarClick(curso.id));
    malla.appendChild(div);
    estadoCursos[curso.id].element = div;
  });
}

function manejarClick(id) {
  const curso = estadoCursos[id];
  if (curso.aprobado) return;

  const requisitos = curso.requisitos;
  const aprobados = requisitos.every(req => estadoCursos[req].aprobado);

  if (requisitos.length > 0 && !aprobados) return;

  curso.aprobado = true;
  curso.element.classList.remove("locked");
  curso.element.classList.add("passed");

  curso.abre.forEach(idAbre => {
    const dependiente = estadoCursos[idAbre];
    const puedeDesbloquear = dependiente.requisitos.every(req => estadoCursos[req].aprobado);
    if (puedeDesbloquear) {
      dependiente.element.classList.remove("locked");
    }
  });
}

crearMalla();
