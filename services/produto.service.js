// services/produto.service.js

//1- terminal: node app.js;
//2- abrir no navegador;
//3- pegar URL e colocar no final: /produtos (devera aparecer todos os produtos listados);
//4- pesquisar produtos por id: /produtos/id (devera aparecer o produto por id).

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 120 }
];

function listar() {
  return produtos;
}

function buscarPorId(id) {
  return produtos.find(p => p.id === Number(id));
}

function criar(dados) {
  if (!dados.nome || dados.preco == null) {
    throw new Error("Nome e preço são obrigatórios");
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
  };

  produtos.push(novoProduto);
  return novoProduto;
}

module.exports = { listar, buscarPorId, criar };
