/* const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenido al servidor!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Acerca de nosotros");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Informacion de contacto");
  } else if (req.url === "/search" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Estas buscando informacion");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Error 404, pagina no encontrada.");
  }
});

server.listen(3000, () => {
  console.log("Server started...");
});
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const ruta = path.join(__dirname, "public", req.url);
  const readStream = fs.ReadStream(ruta, "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(readStream);
});

server.listen(3000, () => {
  console.log("Server started...");
});
