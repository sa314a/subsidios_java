import calcularFechaDePago from "./calcularFechaDePago";

let promesaPago = {
  desafio: "",
  fechaEntrega: "",
  fechaDePago: "",
  pagado: false,
};

function selectFechaEntrega() {
  const fechaDeEntrega = this.value;
  const fechaPago = calcularFechaDePago(fechaDeEntrega);
  const fechaPagoFormateada = `${fechaPago.getFullYear()}-${String(
    fechaPago.getMonth() + 1
  ).padStart(2, "0")}-${String(fechaPago.getDate()).padStart(2, "0")}`;
  $("#selectFechaPago").val(fechaPagoFormateada);

  promesaPago = {
    modulo: $("#myModalLabel").text(),
    desafio: $("#selectDesafios").val(),
    fechaEntrega: this.value,
    fechaDePago: fechaPagoFormateada,
    pagado: false,
  };
  $("#buttonSaveModal").removeAttr("disabled");
}

export { promesaPago, selectFechaEntrega };
