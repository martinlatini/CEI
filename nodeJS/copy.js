/* const fs = require("fs");

const readStream = fs.createReadStream("./original.txt");
const writeStream = fs.createWriteStream("./copia.txt");

readStream.pipe(writeStream);
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello world!");
});

server.listen(3000, () => {
  console.log("Hola Mundo!");
});
