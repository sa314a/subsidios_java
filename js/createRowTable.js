function createRowTable(
  numeroModulo,
  nombreDesafio,
  montoPago,
  fechaPago,
  estadoPago
) {
  const tr = $("<tr></tr>");
  const th = $("<th></th>").attr("scope", "row");

  const td1 = $("<td></td>").text(numeroModulo).addClass("numeroModulo");
  const td2 = $("<td></td>").text(nombreDesafio).addClass("nombreDesafio");
  const td3 = $("<td></td>").text(fechaPago);
  const td4 = $("<td></td>").text(montoPago);
  const td5 = $("<td></td>").text(estadoPago).addClass("estado-pago");
  const td6 = $("<td></td>");
  const checkTd6 = $("<input>").attr({
    type: "checkbox",
    class: "desafio-checkbox",
    checked: estadoPago === "PAGADO",
  });

  tr.append(th);
  th.append(td1);

  td3.append($('<i class="bi bi-calculator-fill"></i>'));

  tr.append(td2, td3, td4, td5, td6);
  td6.append(checkTd6);

  $("#tbodyRegistros").append(tr);
}

export default createRowTable;
