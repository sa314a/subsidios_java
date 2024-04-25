const fechasDePago = [
  {
    diaPago: new Date("2024-04-29T00:00:00-04:00"),
    rangoInicial: new Date(
      new Date("2024-04-29T00:00:00-04:00").getTime() - 9 * 24 * 60 * 60 * 1000
    ),
    rangoFinal: new Date(
      new Date("2024-04-29T00:00:00-04:00").getTime() - 3 * 24 * 60 * 60 * 1000
    ),
  },
  {
    diaPago: new Date("2024-05-06T00:00:00-04:00"),
    rangoInicial: new Date(
      new Date("2024-05-06T00:00:00-04:00").getTime() - 9 * 24 * 60 * 60 * 1000
    ),
    rangoFinal: new Date(
      new Date("2024-05-06T00:00:00-04:00").getTime() - 3 * 24 * 60 * 60 * 1000
    ),
  },
  {
    diaPago: new Date("2024-05-13T00:00:00-04:00"),
    rangoInicial: new Date(
      new Date("2024-05-13T00:00:00-04:00").getTime() - 9 * 24 * 60 * 60 * 1000
    ),
    rangoFinal: new Date(
      new Date("2024-05-13T00:00:00-04:00").getTime() - 3 * 24 * 60 * 60 * 1000
    ),
  },
  {
    diaPago: new Date("2024-05-20T00:00:00-04:00"),
    rangoInicial: new Date(
      new Date("2024-05-20T00:00:00-04:00").getTime() - 9 * 24 * 60 * 60 * 1000
    ),
    rangoFinal: new Date(
      new Date("2024-05-20T00:00:00-04:00").getTime() - 3 * 24 * 60 * 60 * 1000
    ),
  },
  {
    diaPago: new Date("2024-05-27T00:00:00-04:00"),
    rangoInicial: new Date(
      new Date("2024-05-27T00:00:00-04:00").getTime() - 9 * 24 * 60 * 60 * 1000
    ),
    rangoFinal: new Date(
      new Date("2024-05-27T00:00:00-04:00").getTime() - 3 * 24 * 60 * 60 * 1000
    ),
  },
];

export default fechasDePago;
