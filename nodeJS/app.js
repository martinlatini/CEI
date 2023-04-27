// const operacionesMatematicas = require("./calculadora");

// console.log("Hola, me estoy ejecutando con nodeJS!");

// console.log(operacionesMatematicas.suma(10, 5));
// console.log(operacionesMatematicas.resta(10, 5));
// console.log(operacionesMatematicas.multiplicacion(10, 5));
// console.log(operacionesMatematicas.division(10, 5));

const fs = require("fs");

// fs.mkdir("./prueba", (error) => {
//   if (error) {
//     console.error("Error al crear el directorio:", error);
//   } else {
//     console.log("Directorio creado exitosamente");
//   }
// });

// fs.writeFile("./prueba/texto.txt", "Hola Mundo!", (error) => {
//   if (error) {
//     console.error("Error al crear el archivo:", error);
//   } else {
//     console.log("Fichero creado exitosamente");
//   }
// });
// fs.readdir("./prueba", (error, files) => {
//   if (error) {
//     console.error("error al leer el directorio:", error);
//   } else {
//     console.log("Contenido del directorio: ", files);
//   }
// });

// fs.readFile("./prueba/texto.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.error("Error al leer el fichero:", error);
//   } else {
//     console.log("El contenido del fichero es:", data);
//   }
// });

// fs.rename("./prueba/texto.txt", "./prueba/texto_renombrado.txt", (error) => {
//   if (error) {
//     console.error("Error al renombrar el fichero", error);
//   } else {
//     console.log("Fichero renombrado correctamente");
//   }
// });

/* fs.unlink("./prueba/texto_renombrado.txt", (error) => {
  if (error) {
    console.error("Error al eliminar el archivo", error);
  } else {
    console.log("Fichero eliminado exitosamente");
  }
});

fs.rmdir("./prueba", (error) => {
  if (error) {
    console.error("No se pudo eliminar el directorio", error);
  } else {
    console.log("Directorio eliminado exitosamente");
  }
});
 */

const readStream = fs.createReadStream("./input.txt", "utf-8");
const writeStream = fs.createWriteStream("./output.txt", "utf-8");

let fragmentos = 0;

readStream.on("data", (chunk) => {
  writeStream.write(chunk.toUpperCase());
  fragmentos++;
});

readStream.on("end", () => {
  console.log("copia y transformacion completados");
  writeStream.end();
});
