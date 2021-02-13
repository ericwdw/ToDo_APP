const TarefasDao = require("../DAO/tarefas-dao");

module.exports = (app,bancoDados) => {

    const tarefaDao = new TarefasDao(bancoDados);

    app.get('/tarefa', async (req, res) => {

        try {
            const listaDeTarefas = await tarefaDao.listaTarefas();
            res.send(listaDeTarefas)

        } catch(err) {
            res.send(err)
        }
        
    });

    app.post('/tarefa', async (req, res) => {

        try {

            await tarefaDao.insereTarefas(req.body.id,req.body.titulo,req.body.descricao,req.body.status,req.body.datacriacao,req.body.idUsuario);

            res.send("Tarefa inserida com sucesso");

        } catch(err) {
            res.send(err)
        }

    });

    app.get('/tarefa/:status', async (req, res) => {

        try{

            const buscaDeTarefa = await tarefaDao.buscaTarefa(req.params.status);

            if(buscaDeTarefa.length == 0){
                res.send(`<h1>Nenhuma tarefa com o status ${req.params.status} foi encontrada</h1>`);
            } else{
                res.send(buscaDeTarefa);
            }

        } catch (err){
            res.send(err)
        }
           
    });

    //falta uma condicional no delete que avisar se o usuario nao for encontrado para deletar!!!

    app.delete('/tarefa/:titulo', async (req,res) =>{

        try {
            await tarefaDao.deletaTarefa(req.params.titulo);

            res.send(`<h1>A Tarefa ${req.params.titulo} foi deletada</h1>`);

        } catch(err) {
            res.send(err)
        }

    });

    app.put('/tarefa/:status/:id', async (req,res) => {

        try {
            await tarefaDao.atualizaTarefa(req.params.status,req.params.id);

            res.send(`<h1>Tarefa com ID ${req.params.id} teve seu status atualizado para ${req.params.status} </h1>`);

        } catch(err) {
            res.send(err)
        }
        
    });

}

