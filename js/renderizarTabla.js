function renderizarTabla(db, createRowTable) {
  $("#tbodyRegistros").empty();

  db.forEach((modulo) => {
    modulo.desafios.forEach((desafios, index) => {
      if (desafios.nombre.includes("Prueba")) {
        createRowTable(
          modulo.nombreModulo,
          desafios.nombre,
          modulo.montoPagoPorPrueba,
          desafios.fechaPago,
          desafios.estadoPago
        );
      } else {
        createRowTable(
          modulo.nombreModulo,
          desafios.nombre,
          modulo.montoPagoPorDesafio,
          desafios.fechaPago,
          desafios.estadoPago
        );
      }
    });
  });
}

export default renderizarTabla;
