const prerequisites = {
  // CBC desbloquea Primer Año
  Dibujo: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],
  Proyectual1: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],
  Proyectual2: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],
  Semiología: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],
  Matemática: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],
  PensamientoCientifico: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],
  SociedadEstado: ['DG1', 'Morfologia1', 'Tipografia1', 'Historia1', 'Comunicacion1', 'Tecnologia1', 'Electiva'],

  // Segundo Año
  DG1: ['DG2'],
  Morfologia1: ['DG2', 'Morfologia2', 'Tipografia2'],
  Tipografia1: ['DG2', 'Tipografia2'],
  Historia1: ['Historia2'],
  Comunicacion1: ['Comunicacion2'],
  Tecnologia1: ['Tecnologia2'],
  Electiva: ['MediosExpresivos1'],

  // Tercer Año
  DG2: ['DG3', 'Legislacion', 'ElectivaSocio', 'Optativa1', 'Optativa2', 'Seminario1', 'Seminario2', 'Seminario3'],
  Morfologia2: ['DG3', 'Legislacion', 'ElectivaSocio', 'DG4', 'Optativa1', 'Optativa2', 'Seminario1', 'Seminario2', 'Seminario3', 'ElectivaForm1', 'ElectivaForm2'],
  Tipografia2: ['DG3', 'Legislacion', 'ElectivaSocio', 'DG4', 'Optativa1', 'Optativa2', 'Seminario1', 'Seminario2', 'Seminario3', 'ElectivaForm1', 'ElectivaForm2'],
  MediosExpresivos1: ['MediosExpresivos2', 'DG4', 'Optativa1', 'Optativa2', 'Seminario1', 'Seminario2', 'Seminario3', 'ElectivaForm1', 'ElectivaForm2'],
  Historia2: ['DG4'],
  Comunicacion2: ['DG4'],
  Tecnologia2: ['DG4', 'Optativa1', 'Optativa2', 'Seminario1', 'Seminario2', 'Seminario3', 'ElectivaForm1', 'ElectivaForm2'],
  MediosExpresivos2: [],
  Legislacion: [],
  ElectivaSocio: [],
  DG3: ['DG4', 'ElectivaForm1', 'ElectivaForm2'],
};

const courses = document.querySelectorAll('.course');

courses.forEach(course => {
  course.addEventListener('click', () => {
    if (course.classList.contains('locked')) return;

    course.classList.add('approved');
    course.disabled = true;

    const unlocked = prerequisites[course.dataset.id];
    if (unlocked) {
      unlocked.forEach(id => {
        const next = document.querySelector(`.course[data-id="${id}"]`);
        if (next) next.classList.remove('locked');
      });
    }
  });
});
