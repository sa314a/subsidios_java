function agregarDesafiosModal(desafio) {
  $("#selectDesafios").empty();

  let opcion = $("<option></option>").val(desafio).text(desafio);
  // Añadir la opción al select
  $("#selectDesafios").append(opcion);
}

export default agregarDesafiosModal;
