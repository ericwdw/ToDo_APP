const express = require('express');
const app = express();
const port = 8080;

const tarefaController = require('./controller/tarefa_controller');
const usuarioController = require('./controller/usuario_controller');

tarefaController(app);
usuarioController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
