import { Router } from "express";
import * as ProdutoControllers from "../controllers/produto-controllers";

const router = Router();

router.get("/produtos", ProdutoControllers.buscarTodos);
router.get("/produtos/:id", ProdutoControllers.buscarPorId);
router.post("/produtos", ProdutoControllers.criarProduto);
router.put("/produtos/:id", ProdutoControllers.atualizarProduto);
router.delete("/produtos/:id", ProdutoControllers.excluirProduto);

export default router;
