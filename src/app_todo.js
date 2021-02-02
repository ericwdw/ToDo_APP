const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());


const port = 8080;

const tarefaController = require('./controller/tarefa_controller');
const usuarioController = require('./controller/usuario_controller');
const bancoDados = require('./infra/sqlite-db');

tarefaController(app,bancoDados);
usuarioController(app,bancoDados);

app.listen(port, () => {
  console.log(`Servidor respondendo em http://localhost:${port}`)
});

const usuarioExport = require('./model/usuario_model');
const tarefaExport = require('./model/tarefa_model');




