const cursos = [
  // Primer año
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

  // Segundo año
  { id: "eco_admin", nombre: "ECONOMÍA PARA ADMINISTRADORES" },
  { id: "cont_admin", nombre: "CONTABILIDAD PARA ADMINISTRADORES" },
  { id: "rrhh", nombre: "RELACIONES HUMANAS" },
  { id: "teoria_sistemas", nombre: "TEORÍA DE SISTEMAS" },
  { id: "met_invest", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN" },
  { id: "estadistica", nombre: "ESTADÍSTICA", abre: ["muestreo"] },
  { id: "tic", nombre: "HERRAMIENTAS DE LAS TIC PARA LA GESTIÓN EMPRESARIAL" },
  { id: "procesos", nombre: "PROCESOS ESTRATÉGICOS" },
  { id: "mat_fin", nombre: "MATEMÁTICA FINANCIERA" },
  { id: "enfoques", nombre: "ENFOQUES Y HERRAMIENTAS ORGANIZACIONALES" },
  { id: "modernizacion", nombre: "MODERNIZACIÓN DE LA GESTIÓN ADMINISTRATIVA" },
  { id: "gestion_pub", nombre: "GESTIÓN PÚBLICA NACIONAL" },
  { id: "derecho_admin", nombre: "DERECHO ADMINISTRATIVO" },
  { id: "muestreo", nombre: "TEORÍA DEL MUESTREO", requisitos: ["estadistica"], abre: ["control_proc"] },

  // Tercer año
  { id: "control_proc", nombre: "CONTROL ESTADÍSTICO DE PROCESOS", requisitos: ["muestreo"] },
  { id: "metodos_cuant", nombre: "MÉTODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES", abre: ["toma_decisiones"] },
  { id: "toma_decisiones", nombre: "TOMA DE DECISIONES EMPRESARIALES", requisitos: ["metodos_cuant"] },
  { id: "admin_operaciones", nombre: "ADMINISTRACIÓN DE OPERACIONES", abre: ["direccion_operaciones"] },
  { id: "direccion_operaciones", nombre: "DIRECCIÓN DE OPERACIONES", requisitos: ["admin_operaciones"] },

  // Puedes seguir agregando todos los cursos aquí
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
    malla.appendChild(div);

    estadoCursos[curso.id].element = div;

    div.addEventListener("click", () => manejarClick(curso.id));
  });

  actualizarBloqueos();
}

function actualizarBloqueos() {
  cursos.forEach(curso => {
    const estado = estadoCursos[curso.id];
    const requisitos = estado.requisitos;
    const aprobados = requisitos.every(req => estadoCursos[req].aprobado);
    if (requisitos.length > 0 && !aprobados) {
      estado.element.classList.add("locked");
    } else if (!estado.aprobado) {
      estado.element.classList.remove("locked");
    }
  });
}

function manejarClick(id) {
  const curso = estadoCursos[id];

  if (curso.aprobado || curso.element.classList.contains("locked")) return;

  // Marcar como aprobado
  curso.aprobado = true;
  curso.element.classList.add("passed");

  // Intentar desbloquear los cursos que este abre
  curso.abre.forEach(idAbre => {
    const dependiente = estadoCursos[idAbre];
    if (!dependiente) return;
    const puedeDesbloquear = dependiente.requisitos.every(req => estadoCursos[req].aprobado);
    if (puedeDesbloquear) {
      dependiente.element.classList.remove("locked");
    }
  });

  // Actualizar bloqueos de todos los cursos por si hay cambios globales
  actualizarBloqueos();
}

crearMalla();
