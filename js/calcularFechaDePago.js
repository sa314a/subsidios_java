import fechasDePago from "./fechasDePago";

function calcularFechaDePago(fecha) {
  const fechaEntrega = new Date(`${fecha}T00:00:00-04:00`);
  console.log({ fechaEntrega });
  const fechaDePago = fechasDePago.filter((f) => {
    if (fechaEntrega >= f.rangoInicial && fechaEntrega <= f.rangoFinal) {
      return f.diaPago;
    }
  });

  return fechaDePago[0].diaPago;
}

export default calcularFechaDePago;
