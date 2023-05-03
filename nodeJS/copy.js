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

const express = require("express");
console.log("express", express);

function getContentType(nombreFichero) {
  const extension = path.extname(nombreFichero);

  switch (extension) {
    case ".html":
      return "text/html";
    case ".js":
      return "application/javascript";
    case ".css":
      return "text/css";
    default:
      return "text/plain";
  }
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    res.end("Beinvenido");
    return;
  }
  const ruta = path.join(__dirname, "public", req.url);
  const readStream = fs.createReadStream(ruta, "utf-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  readStream.on("error", () => {
    res.end(`El archivo ${req.url} no existe`);
  });

  const contentType = getContentType(req.url);
  res.writeHead(200, { "Content-Type": `${contentType}; charset=UTF-8` });
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log("Server started...");
});
