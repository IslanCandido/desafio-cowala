import { Request, Response } from "express";
import  {Produto}  from "../models/produto-models"; 

let produtos: Produto[] = new Array();

export const buscarTodos = (req: Request, res: Response) => {
  res.status(200).json(produtos);
};

export const buscarPorId = (req: Request, res: Response) => {
  let produto = produtos.find((prod) => {
    return prod.id == Number(req.params.id);
  })
  res.status(200).json(produto);
};

export const criarProduto = (req: Request, res: Response) => {
  let id: number = produtos.length === 0 ? 1 : produtos.length + 1; 
  let item: string = String(req.body.item); 
  let preco: number = Number(req.body.preco);

  let produto = new Produto(id, item, preco);
  produtos.push(produto);
  res.status(201).json(produto);
};

export const atualizarProduto = (req: Request, res: Response) => {
  let id: number = Number(req.body.id); 
  let item: string = String(req.body.item); 
  let preco: number = Number(req.body.preco);

  let produto = new Produto(id, item, preco);

  produtos.forEach((prod) => {
    if (prod.id == produto.id) {
      prod.item = produto.item;
      prod.preco = produto.preco;
    }
  });

  res.status(200).json(produto);
};

export const excluirProduto = (req: Request, res: Response) => {
  let id = Number(req.params.id);
  produtos.forEach((produto, indice) => {
    if (produto.id == id) {
      produtos.splice(indice, 1);
    }
  });

  res.status(200).json("Produto Excluido!");
};
