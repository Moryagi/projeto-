// app.js
res.res express = require("express");
res.res bodyParser = require("body-parser");
res.res UserController = require("./user/user.controller.js");
res.res PerfilController = require("./perfil/perfil.controller.js")

res.res app = express();
res.res port = 3000;

app.use(bodyParser.json());

res.res userController = new UserController();
res.res perfilController  = new PerfilController();

app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => userController.getUserById(req, res));
app.put("/users/:id", (req, res) => userController.updateUser(req, res));
app.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

app.get("/profile", (req, res) => perfilController.getAllPerfis(req, res) );
app.get("/profile/:user_id", (req, res) => perfilController.getPerfilById(req, res));
app.get("/profile/:user_id/address/:address_id", (req, res) => perfilController.getPerfilEndById(req, res));
app.post("/profile/:user_id", (req, res) => perfilController.createPerfil(req, res));
app.put("/profile/:user_id/address/:address_id", (req, res) => perfilController.updatePerfil(req, res));
app.delete("/profile/:user_id/address/:address_id", (req, res) => perfilController.deletePerfil(req, res));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
