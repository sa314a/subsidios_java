import guardarPromesaDePago from "./guardarPromesaDePago";
import resetModal from "./resetModal";
import { promesaPago } from "./selectFechaEntrega";
import { recuperarDb } from "./recuperarDb";
import { desafiosTerminados } from "./recuperarDb";

function saveModal() {
  if (
    promesaPago.desafio &&
    promesaPago.fechaDePago &&
    promesaPago.fechaEntrega
  ) {
    console.log(promesaPago);
    console.log(desafiosTerminados);
    const estaRepetido = desafiosTerminados.some(
      (e) => e.desafio === promesaPago.desafio
    );

    console.log(estaRepetido);

    if (estaRepetido) {
      $("#modalError").removeClass("d-none");
      setTimeout(() => {
        $("#modalError").addClass("d-none");
      }, 3000);
    } else {
      guardarPromesaDePago(promesaPago);
      $("#modalSuccess").removeClass("d-none");
      setTimeout(() => {
        $("#modalSuccess").addClass("d-none");
      }, 3000);
      recuperarDb();
    }

    resetModal(promesaPago);
    $("#buttonSaveModal").attr("disabled", true);
  }
}

export default saveModal;
