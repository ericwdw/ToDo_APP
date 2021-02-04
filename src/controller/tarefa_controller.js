const modelTarefa = require('../model/tarefa_model');

module.exports = (app,bancoDados) => {
    app.get('/tarefa', (req, res) => {

        bancoDados.all("SELECT * FROM TAREFAS;", (err, rows)=> {
            if(err) throw new Error("Erro ao consultar tabela");
            else res.send(rows);
        });

    });

    app.post('/tarefa', (req, res) => {
        const newModelTarefa = req.body;
        bancoDados.tarefa.push(newModelTarefa);
        res.send('<h1>Rota Post de Tarefa ativada: tarefa adicionada ao banco de dados</h1>')
    });
};

