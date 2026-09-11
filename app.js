// app.js

const express = require("express");
const produtoRoutes = require("./routes/produto.routes");

const app = express();

app.use(express.json());

// Registra todas as rotas de produto sob o prefixo /produtos
app.use("/produtos", produtoRoutes);

app.listen(3000, () => {
  console.log("API rodando na porta 3000!");
});