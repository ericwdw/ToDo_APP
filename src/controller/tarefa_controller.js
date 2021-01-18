
module.exports = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('<h1>Rota Get de Tarefa ativada: tarefa adicionada ao banco de dados</h1>')
    });

    app.post('/tarefa', (req, res) => {
        console.log(req.body);
        res.send('<h1>Rota Post de Tarefa ativada: tarefa adicionada ao banco de dados</h1>')
    });
};