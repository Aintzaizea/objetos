/*1. Crear un objeto Persona
Enunciado:
Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola. */

const persona = {
    nombre: "Aintzane",
    edad: 41,
    ciudad: "Vitoria"
};
for (let key in persona) {
    console.log(key);
};

/*2. Modificar propiedades
Enunciado:
A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola. */ 

persona.ciudad = "Madrid";
persona.profesión = "Superviviente";
console.log(persona);

/* 3. Objeto Libro
Enunciado:
Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."*/

const libro = {
    titulo: "Los huérfanos",
    autor: "Carmen Mola",
    anioPublicacion: 2026,  
    resumen: () => console.log(`El libro "${libro.titulo}" ha sido escrito por ${libro.autor} en el año ${libro.anioPublicacion}`)
};

libro.resumen();

/*4. Array de objetos
Enunciado:
Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante. */

const estudiantes = [
    {
        nombre: "Aintzane",
        edad: 42,
        notaFinal: 5
    },
    {
        nombre: "Haizea",
        edad: 7,
        notaFinal: 10
    },
    {
        nombre: "Hortensia",
        edad: 22,
        notaFinal: 2
    },
];

estudiantes.forEach (function(elemento) {
    console.log(`El alumno ${elemento.nombre} ha sacado un ${elemento.notaFinal}`);
});

/*5. Método para calcular la edad
Enunciado:
Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento. */

let anioActual = 2026;
const personita = {
    nombre: "Haizea",
    anioNacimiento: 2019,
    calcularEdad: () => console.log (`La edad de ${personita.nombre} es de ${anioActual - personita.anioNacimiento}`)
};
personita.calcularEdad();

/* 6. Objeto Coche
Enunciado:
Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.*/

let velocidad = 10;
const coche = {
    marca: "Kia",
    modelo: "Carens",
    anio: 2016,
    velocidadActual: 190,
    acelerar: () => console.log (`El ${coche.marca} ${coche.modelo} ahora va a ${coche.velocidadActual + velocidad} km/h`),
    frenar: () => console.log (`El ${coche.marca} ${coche.modelo} ahora va a ${coche.velocidadActual - velocidad} km/h`)
};

coche.acelerar();
coche.frenar();

/*7. Recorrer un objeto
Enunciado:
Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores. */

const producto = {
    nombre: "Cafetera",
    precio: 110,
    cantidad: 4
};

for (let key in producto) {
    console.log(key);
    console.log(producto[key]);  
};

/*8. Contar propiedades
Enunciado: Crea un objeto animal con al menos cinco propiedades. Luego,  escribe una función que cuente y devuelva el número de propiedades que tiene el objeto. */

const animal = {
  especie: "perro",
  nombre: "Firulais",
  edad: 3,
  color: "negro",
  genero: "masculino"
};

function propiedades (propiedad) {
    return Object.keys(propiedad).length;
};
const propiedadesEnTotal = propiedades(animal);
console.log(`El bicho tiene ${propiedadesEnTotal} propiedades en total`);

/*9. Objeto dentro de otro objeto
Enunciado:
Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas. */

const empresa = {
  nombre: "Casa Mami",
  direccion: {
    calle: "Plaza Mayor de Abetxuko",
    ciudad: "Vitoria",
    codigoPostal: "01013"
  }
};

console.log(empresa.direccion.calle);
console.log(empresa.direccion.ciudad);
console.log(empresa.direccion.codigoPostal);

/* 10. Añadir métodos a objetos
Enunciado:
Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.*/ 

let ingreso = 200
let retirada = 500
const cuentaBancaria = {
    titular: "Aintzane",
    saldo: 1200,
    depositar: () => console.log( `Has ingresado ${ingreso}€ y ahora tienes ${ingreso + cuentaBancaria.saldo}€`),
    retirar: () => console.log(`Has retirado ${retirada}€ y ahora te quedan ${cuentaBancaria.saldo + ingreso - retirada}`)
};
    
cuentaBancaria.depositar();
cuentaBancaria.retirar();






