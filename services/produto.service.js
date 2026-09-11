// services/produto.service.js

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