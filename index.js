const http = require("http");

http.createServer((req, res) => {
  res.end("Servidor funcionando!");
}).listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
