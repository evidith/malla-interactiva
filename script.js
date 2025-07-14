const cursos = [
  // Año 1
  { id: 'lenguaje', nombre: 'LENGUAJE' },
  { id: 'matematica', nombre: 'MATEMÁTICA' },
  { id: 'filosofia', nombre: 'FILOSOFÍA' },
  { id: 'estrategias', nombre: 'ESTRATEGIAS DEL APRENDIZAJE' },
  { id: 'defensa', nombre: 'DEFENSA NACIONAL' },
  { id: 'fund_admin', nombre: 'FUNDAMENTOS DE LA ADMINISTRACIÓN' },
  { id: 'sociologia', nombre: 'SOCIOLOGÍA' },
  { id: 'ecologia', nombre: 'ECOLOGÍA Y AMBIENTE' },
  { id: 'realidad', nombre: 'REALIDAD NACIONAL REGIONAL Y UNIVERSITARIA' },
  { id: 'riesgo', nombre: 'GESTIÓN DEL RIESGO DE DESASTRES' },
  { id: 'etica', nombre: 'ÉTICA Y DEONTOLOGÍA' },
  { id: 'admin_general', nombre: 'ADMINISTRACIÓN GENERAL' },
  { id: 'analisis_mat', nombre: 'ANÁLISIS MATEMÁTICO' },

  // Año 2
  { id: 'economia', nombre: 'ECONOMÍA PARA ADMINISTRADORES' },
  { id: 'contabilidad', nombre: 'CONTABILIDAD PARA ADMINISTRADORES' },
  { id: 'relaciones', nombre: 'RELACIONES HUMANAS' },
  { id: 'teoria_sistemas', nombre: 'TEORÍA DE SISTEMAS' },
  { id: 'metodologia', nombre: 'METODOLOGÍA DE LA INVESTIGACIÓN' },
  { id: 'estadistica', nombre: 'ESTADÍSTICA' },
  { id: 'tic', nombre: 'HERRAMIENTAS DE LAS TIC PARA LA GESTIÓN EMPRESARIAL' },
  { id: 'procesos', nombre: 'PROCESOS ESTRATÉGICOS' },
  { id: 'mat_fin', nombre: 'MATEMÁTICA FINANCIERA' },
  { id: 'herramientas_org', nombre: 'ENFOQUES Y HERRAMIENTAS ORGANIZACIONALES' },
  { id: 'modernizacion', nombre: 'MODERNIZACIÓN DE LA GESTIÓN ADMINISTRATIVA' },
  { id: 'gestion_publica_nac', nombre: 'GESTIÓN PÚBLICA NACIONAL' },
  { id: 'derecho_admin', nombre: 'DERECHO ADMINISTRATIVO' },
  { id: 'muestreo', nombre: 'TEORÍA DEL MUESTREO', requiere: ['estadistica'] },

  // Año 3
  { id: 'control_est', nombre: 'CONTROL ESTADÍSTICO DE PROCESOS', requiere: ['muestreo'] },
  { id: 'gestion_descentralizada', nombre: 'GESTIÓN PÚBLICA DESCENTRALIZADA' },
  { id: 'derecho_empresarial', nombre: 'DERECHO EMPRESARIAL' },
  { id: 'liderazgo', nombre: 'LIDERAZGO EMPRESARIAL' },
  { id: 'marketing_fund', nombre: 'FUNDAMENTOS DE MARKETING' },
  { id: 'inv_mercado', nombre: 'INVESTIGACIÓN DE MERCADOS' },
  { id: 'costos', nombre: 'COSTOS' },
  { id: 'pymes', nombre: 'GESTIÓN DE MyPES / PyMES' },
  { id: 'logistica', nombre: 'GESTIÓN LOGÍSTICA' },
  { id: 'rse', nombre: 'RESPONSABILIDAD SOCIAL EMPRESARIAL' },
  { id: 'gestion_rh', nombre: 'GESTIÓN DEL POTENCIAL HUMANO' },
  { id: 'marketing', nombre: 'MARKETING' },
  { id: 'analisis_fin', nombre: 'ANÁLISIS FINANCIERO' },
  { id: 'metodos_cuant', nombre: 'MÉTODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES' },
  { id: 'toma_decisiones', nombre: 'TOMA DE DECISIONES EMPRESARIALES', requiere: ['metodos_cuant'] },

  // Año 4
  { id: 'desarrollo_talento', nombre: 'DESARROLLO DEL TALENTO HUMANO EN LAS ORGANIZACIONES' },
  { id: 'emprendimiento', nombre: 'EMPRENDIMIENTO EMPRESARIAL' },
  { id: 'fund_finanzas', nombre: 'FUNDAMENTOS DE FINANZAS CORPORATIVAS' },
  { id: 'admin_operaciones', nombre: 'ADMINISTRACIÓN DE OPERACIONES' },
  { id: 'direccion_operaciones', nombre: 'DIRECCIÓN DE OPERACIONES', requiere: ['admin_operaciones'] },
  { id: 'promocion', nombre: 'PROMOCIÓN' },
  { id: 'gestion_calidad', nombre: 'GESTIÓN DE LA CALIDAD' },
  { id: 'seguridad', nombre: 'GESTIÓN DE SEGURIDAD Y SALUD OCUPACIONAL' },
  { id: 'mercado_valores', nombre: 'MERCADO DE VALORES' },
  { id: 'form_proyectos', nombre: 'FORMULACIÓN DE PROYECTOS EMPRESARIALES' },
  { id: 'publicidad', nombre: 'PUBLICIDAD' },
  { id: 'gerencia_ventas', nombre: 'GERENCIA DE VENTAS' },
  { id: 'comercio_ext', nombre: 'GESTIÓN DEL COMERCIO EXTERIOR' },

  // Año 5
  { id: 'direccion_rh', nombre: 'DIRECCIÓN DEL POTENCIAL HUMANO' },
  { id: 'direccion_proy', nombre: 'DIRECCIÓN DE PROYECTOS EMPRESARIALES' },
  { id: 'proyecto_tesis', nombre: 'PROYECTO DE TESIS' },
  { id: 'marketing_estrategico', nombre: 'MARKETING ESTRATÉGICO' },
  { id: 'conflictos', nombre: 'GESTIÓN DE CONFLICTOS LABORALES' },
  { id: 'finanzas_corp', nombre: 'FINANZAS CORPORATIVAS' },
  { id: 'practica1', nombre: 'PRACTICA PRE PROFESIONAL I' },
  { id: 'presupuesto', nombre: 'ADMINISTRACIÓN PRESUPUESTARIA' },
  { id: 'auditoria', nombre: 'AUDITORIA ADMINISTRATIVA' },
  { id: 'asesoria', nombre: 'ASESORÍA DE TESIS' },
  { id: 'marketing_digital', nombre: 'MARKETING DIGITAL' },
  { id: 'gestion_conocimiento', nombre: 'GESTIÓN DEL CONOCIMIENTO EN ORGANIZACIONES' },
  { id: 'finanzas_internacionales', nombre: 'FINANZAS INTERNACIONALES' },
  { id: 'practica2', nombre: 'PRACTICA PRE PROFESIONAL – II' },
];

// Mapa para saber cuáles están aprobados
const estadoCursos = {};

function renderMalla() {
  const contenedor = document.get
