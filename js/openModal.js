import agregarDesafiosModal from "./agregarDesafiosModal";

const myModal = new bootstrap.Modal("#myModal", {
  keyboard: false,
});

function openModal(nombreModulo, desafios) {
  $("#selectFechaPago").val("");
  $("#selectFechaEntrega").val("");

  $("#myModalLabel").text(nombreModulo);
  agregarDesafiosModal(desafios);
  myModal.show();
}

export default openModal;
