const express = require('express');
const app = express();
const port = 8080;
const entidade = 'usuario';

app.get('/' + entidade, (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(port, () => {
  console.log(`Rota ativada com GET e recurso usuario valores de usuario devem ser retornados`)
})