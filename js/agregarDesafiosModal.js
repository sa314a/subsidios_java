function agregarDesafiosModal(desafios) {
  $("#selectDesafios").find("option:not(:first)").remove();
  desafios.forEach((desafio, index) => {
    // Crear una opción para cada desafío
    let opcion = $("<option></option>")
      .val(desafio.nombre)
      .text(desafio.nombre);
    // Añadir la opción al select
    $("#selectDesafios").append(opcion);
  });
}

export default agregarDesafiosModal;
