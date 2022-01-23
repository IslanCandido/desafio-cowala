import express from "express";
import cors from "cors";
import produtoRotas from "./routes/produto-routes";

const app = express();

// Rotas
app.use(cors());
app.use(express.json())

app.use(produtoRotas);
app.use((req, res) => {
  res.send("pages/404");
});

app.listen(3000);
