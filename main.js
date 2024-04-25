import createRowTable from "./js/createRowTable";

import { db, insertarDb, actualizarDb } from "./js/recuperarDb";
import { selectFechaEntrega } from "./js/selectFechaEntrega";

import {
  dineros,
  actualizarDineroAdd,
  actualizarDineroSubtract,
  insertarTextDineros,
} from "./js/dbDineros";

import openModal from "./js/openModal";
import saveModal from "./js/saveModal";
import renderizarTabla from "./js/renderizarTabla";

insertarDb();

$("#selectFechaEntrega").change(selectFechaEntrega);

$("#buttonSaveModal").click(() => {
  saveModal(db);
});

renderizarTabla(db, createRowTable);

$("#tbodyRegistros").on("click", ".desafio-checkbox", function () {
  const numeroModulo = $(this).closest("tr").find(".numeroModulo");

  const nombreDesafio = $(this).closest("tr").find(".nombreDesafio");

  const isDesafio = $(nombreDesafio[0]).text().startsWith("Desaf");

  console.log(isDesafio);
  if ($(this).is(":checked")) {
    const newModulos = db.map((modulo) => {
      if (modulo.nombreModulo === $(numeroModulo[0]).text()) {
        modulo.desafios.forEach((desafio) => {
          if (desafio.nombre === $(nombreDesafio[0]).text()) {
            desafio.estadoPago = "PAGADO";
            if (isDesafio) {
              actualizarDineroAdd(modulo.montoPagoPorDesafio, dineros);
            } else {
              actualizarDineroAdd(modulo.montoPagoPorPrueba, dineros);
            }
          }
        });
      }
      return modulo;
    });
    actualizarDb(newModulos);

    renderizarTabla(newModulos, createRowTable);
    insertarTextDineros(dineros);
  } else {
    const newModulos = db.map((modulo) => {
      if (modulo.nombreModulo === $(numeroModulo[0]).text()) {
        modulo.desafios.forEach((desafio) => {
          if (desafio.nombre === $(nombreDesafio[0]).text()) {
            desafio.estadoPago = "PENDIENTE";
            if (isDesafio) {
              actualizarDineroSubtract(modulo.montoPagoPorDesafio, dineros);
            } else {
              actualizarDineroSubtract(modulo.montoPagoPorPrueba, dineros);
            }
          }
        });
      }
      return modulo;
    });
    actualizarDb(newModulos);

    renderizarTabla(newModulos, createRowTable);

    insertarTextDineros(dineros);
  }
});

$("#tbodyRegistros").on("click", ".bi-calculator-fill", function () {
  const numeroModulo = $(this)
    .closest("tr")
    .find(".numeroModulo")[0].textContent;

  const nombreDesafio = $(this)
    .closest("tr")
    .find(".nombreDesafio")[0].textContent;

  openModal(numeroModulo, [nombreDesafio]);
});
insertarTextDineros(dineros);
