import openModal from "./openModal";

function createCards(
  nombreModulo,
  subtitulo,
  cantidadDesafiosEvaluados,
  montoPagoPorDesafio,
  cantidadPruebas,
  montoPagoPorPrueba,
  totalPorRecibir,
  desafios
) {
  let card = $("<div>").addClass("card shadow-sm").css("width", "18rem");
  let cardBody = $("<div>").addClass("card-body");
  let cardtitle = $("<h5>").addClass("card-title").text(nombreModulo);
  let cardSubtitle = $("<h6>")
    .addClass("card-subtitle mb-2 text-body-secondary")
    .text(subtitulo);
  let listGroup = $("<ul>").addClass("list-group list-group-flush");
  let listGroupItem1 = $("<li>").addClass("list-group-item");
  let span1 = $("<span>").text("Cantidad de Desafíos: ");
  span1.addClass("fw-medium");
  let span2 = $("<span>").text(cantidadDesafiosEvaluados);
  let listGroupItem2 = $("<li>").addClass("list-group-item");
  let span3 = $("<span>").text("Pago por Desafio: ");
  span3.addClass("fw-medium");
  let span4 = $("<span>").text(montoPagoPorDesafio);
  let listGroupItem3 = $("<li>").addClass("list-group-item");
  let span5 = $("<span>").text("Cantidad de Pruebas: ");
  span5.addClass("fw-medium");
  let span6 = $("<span>").text(cantidadPruebas);
  let listGroupItem4 = $("<li>").addClass("list-group-item");
  let span7 = $("<span>").text("Pago por Prueba: ");
  span7.addClass("fw-medium");
  let span8 = $("<span>").text(montoPagoPorPrueba);
  let listGroupItem5 = $("<li>").addClass("list-group-item");
  let span9 = $("<span>").text("Total a recibir: ");
  span9.addClass("fw-medium");
  let span10 = $("<span>").text(totalPorRecibir);
  let cardButtons = $("<div>").addClass("card-body");
  let button = $("<button>")
    .addClass("btn btn-success w-100")
    .text("Calcular Pago")
    .on("click", function () {
      openModal(nombreModulo, desafios);
    });

  card.append(cardBody);
  cardBody.append(cardtitle);
  cardBody.append(cardSubtitle);
  card.append(listGroup);
  listGroup.append(listGroupItem1);
  listGroupItem1.append(span1);
  listGroupItem1.append(span2);
  listGroup.append(listGroupItem2);
  listGroupItem2.append(span3);
  listGroupItem2.append(span4);
  listGroup.append(listGroupItem3);
  listGroupItem3.append(span5);
  listGroupItem3.append(span6);
  listGroup.append(listGroupItem4);
  listGroupItem4.append(span7);
  listGroupItem4.append(span8);
  listGroup.append(listGroupItem5);
  listGroupItem5.append(span9);
  listGroupItem5.append(span10);
  card.append(cardButtons);
  cardButtons.append(button);

  $("#wrapper").append(card);
}

export default createCards;
