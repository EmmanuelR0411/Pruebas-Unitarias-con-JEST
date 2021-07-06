// Aqui le indicamos que requerimos el sum, es una importacion
const sum = require('./sum');

// test('descripcion, () =>{})
test('Debe de sumar dos numeros y retornar la suma', () => {

    // Aqui le pasamos la funcion, los parametros y el resultado que se espera
    // SIntaxis:
    // expect(nombreFUncion(argumentos).tobe(resultadoEsperado))
  expect(sum(1, 2)).toBe(3);
});