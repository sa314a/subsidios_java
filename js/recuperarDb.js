let desafiosTerminados = [];

function recuperarDb() {
  const getItem = localStorage.getItem("desafiosTerminados");
  try {
    const getItemParse = JSON.parse(getItem);
    desafiosTerminados = [...getItemParse];
  } catch (e) {
    console.log("Error al analizar los datos de usuario:", e);
  }
}
export { desafiosTerminados, recuperarDb };
