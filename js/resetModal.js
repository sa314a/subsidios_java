import { promesaPago } from "./selectFechaEntrega";

function resetModal() {
  $("#selectFechaEntrega").val("");
  $("#selectFechaPago").val("");
  $("#selectDesafios").val("");
  promesaPago.desafio = "";
  promesaPago.fechaEntrega = "";
  promesaPago.fechaDePago = "";
  promesaPago.pagado = false;
}

export default resetModal;
