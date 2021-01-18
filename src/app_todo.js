const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())


const port = 8080;

const tarefaController = require('./controller/tarefa_controller');
const usuarioController = require('./controller/usuario_controller');

tarefaController(app);
usuarioController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
