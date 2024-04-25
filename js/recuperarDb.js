import modulos from "./modulos";
let db = [];

function recuperarDb() {
  const getItem = localStorage.getItem("modulos");
  try {
    const getItemParse = JSON.parse(getItem);
    db = [...getItemParse];
  } catch (e) {
    console.log("Error al analizar los datos de usuario:", e);
  }
}

function insertarDb() {
  const getItem = localStorage.getItem("modulos");
  if (!getItem) {
    localStorage.setItem("modulos", JSON.stringify(modulos));
  }

  recuperarDb();
}

function actualizarDb(newModule) {
  localStorage.setItem("modulos", JSON.stringify(newModule));
  recuperarDb();
}
export { db, recuperarDb, insertarDb, actualizarDb };
