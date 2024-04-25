function createCardsFor(modulos, createCards) {
  modulos.forEach((obj) => {
    createCards(
      obj.nombreModulo,
      obj.subtitulo,
      obj.cantidadDesafiosEvaluados,
      obj.montoPagoPorDesafio.toLocaleString(),
      obj.cantidadPruebas,
      obj.montoPagoPorPrueba.toLocaleString(),
      obj.totalPorRecibir.toLocaleString(),
      obj.desafios
    );
  });
}

export default createCardsFor;
