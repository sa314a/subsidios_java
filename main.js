import createCards from "./js/createCards";
import createCardsFor from "./js/createCardsFor";
import modulos from "./js/modulos";

import { recuperarDb, desafiosTerminados } from "./js/recuperarDb";
import { selectFechaEntrega } from "./js/selectFechaEntrega";
import saveModal from "./js/saveModal";

recuperarDb(desafiosTerminados);

createCardsFor(modulos, createCards);

$("#selectFechaEntrega").change(selectFechaEntrega);

$("#buttonSaveModal").click(saveModal);
