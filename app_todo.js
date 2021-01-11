const express = require('express');
const app = express();
const port = 8080;
const entidade1 = 'usuario';
const entidade2 = "tarefa"

app.get('/' + entidade1, (req, res) => {
  res.send('<h1>Rota ativada com GET e recurso ' + entidade1 + ' valores de ' + entidade1 + ' devem ser retornados</h1>')
})

app.get('/' + entidade2, (req, res) => {
    res.send('<h1>Rota ativada com GET e recurso ' + entidade2 + ' valores de ' + entidade2 + ' devem ser retornados</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})