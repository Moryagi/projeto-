const express = require("express");
const bodyParser = require("body-parser");
const PerfilController = require("./perifl/perfil.controller.js");

const app = express();
const port = 3000;

app.use(bodyParser.json()); 

const perfilController = new PerfilController();

app.post("/perfil", (req, res) => perfilController.createPerfil(req,res));
app.get("/perfil", (req, res) => perfilController.getAllUsers(req, res));
app.get("/perfil/:id", (req, res) => perfilController.getUserById(req, res));
app.put("/perfil/:id", (req, res) => perfilController.updateUser(req, res));
app.delete("/perfil/:id", (req, res) => pefilController.deleteUser(req, res));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });