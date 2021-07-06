// import getObjectDescription from "./01-ejercicio";
const getObjectDescription = require('./01-ejercicio')

// descibe sirve para describir toda la prueba de manera general
// dentro de el puede haber varios test
describe('Este archivo de pruebas es para la funcion getObjectDEscription y el objectMapping', () =>{
    
    // Test recibe la descripcion de la prueba y despues una funcion anonima
    test('La funcion getObjectDescription debe existir', () => {

        // Aqui preguntamos si la funcion existe
        expect(getObjectDescription).toBeTruthy();
    });
})