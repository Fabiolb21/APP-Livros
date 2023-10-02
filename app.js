const express = require("express");
const app = express();
const port = 3000;
const livros = require("./livros");

app.use(express.json());

app.use("/livros", livros);

// app.get("/", (req, res) => {
//   res.send("Olá... Bem Vindo!!");
// });
// app.get("/livro", (req, res) => {
//   res.send("<h2>Capítulo 12: Introdução ao Express");
// });
// app.post("/filmes", (req, res) => {
//   const { titulo, genero } = req.body;
//   res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`);
// });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
