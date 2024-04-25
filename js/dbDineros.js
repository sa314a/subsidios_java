// Primero, obtenemos el elemento 'dineros' del localStorage.
let dineros = localStorage.getItem("dineros");

// Si 'dineros' no existe en localStorage, lo inicializamos.
if (!dineros) {
  localStorage.setItem(
    "dineros",
    JSON.stringify({
      recibido: 0,
      pendiente: 480000,
    })
  );
} else {
  // Si 'dineros' ya existe, necesitamos parsearlo para usarlo como objeto en JavaScript.
  try {
    dineros = JSON.parse(dineros);
  } catch (e) {
    console.log("Error al analizar los datos de usuario:", e);
  }

  // Aquí puedes hacer operaciones con 'dinerosObj' si necesitas.
}

function actualizarDineroAdd(recibido, dineros) {
  dineros.recibido += recibido;
  dineros.pendiente -= recibido;
  localStorage.setItem("dineros", JSON.stringify(dineros));

  dineros = localStorage.getItem("dineros");

  dineros = JSON.parse(dineros);
}

function actualizarDineroSubtract(recibido, dineros) {
  dineros.recibido -= recibido;
  dineros.pendiente += recibido;
  localStorage.setItem("dineros", JSON.stringify(dineros));

  dineros = localStorage.getItem("dineros");
  dineros = JSON.parse(dineros);
}

function insertarTextDineros() {
  dineros = localStorage.getItem("dineros");

  dineros = JSON.parse(dineros);
  if (dineros) {
    $("#montoRecibido").text(dineros.recibido.toLocaleString());
    $("#montoPendiente").text(dineros.pendiente.toLocaleString());
  }
}

export {
  actualizarDineroAdd,
  dineros,
  actualizarDineroSubtract,
  insertarTextDineros,
};
