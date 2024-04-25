import { actualizarDb } from "./recuperarDb";
import renderizarTabla from "./renderizarTabla";
import createRowTable from "./createRowTable";

function saveModal(db) {
  const desafioModal = $("#selectDesafios").val();
  const newDb = db.map((modulo) => {
    modulo.desafios.forEach((desafio) => {
      if (desafioModal === desafio.nombre) {
        desafio.fechaPago = $("#selectFechaPago").val();
      }
    });
    return modulo;
  });

  console.log({ newDb });
  actualizarDb(newDb);
  renderizarTabla(newDb, createRowTable);

  $("#modalSuccess").removeClass("d-none");
  setTimeout(() => {
    $("#modalSuccess").addClass("d-none");
  }, 3000);

  //reset
  $("#selectFechaEntrega").val("");
  $("#selectFechaPago").val("");
  $("#buttonSaveModal").attr("disabled", true);
}

export default saveModal;
