import { desafiosTerminados } from "./recuperarDb";

function guardarPromesaDePago(d) {
  console.log({ d });
  desafiosTerminados.push(d);
  console.log(desafiosTerminados);
  localStorage.setItem(
    "desafiosTerminados",
    JSON.stringify(desafiosTerminados)
  );
}

export default guardarPromesaDePago;
