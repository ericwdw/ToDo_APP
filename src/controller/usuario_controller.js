const UsuariosDao = require("../DAO/usuarios-dao");

module.exports = (app,bancoDados) => {

    const usuarioDao = new UsuariosDao(bancoDados);

    app.get('/usuario', async (req, res) => {

        try {
            const listaDeUsuarios = await usuarioDao.listaUsuarios();
            res.send(listaDeUsuarios)

        } catch(err) {
            res.send(err)
        }
        
    });

    app.post('/usuario', async (req, res) => {

        try {
            

            console.log(req.body.nome)

            await usuarioDao.insereUsuarios(req.body.id,req.body.nome,req.body.email,req.body.senha);

            res.send("Usuario inserido com sucesso");

        } catch(err) {
            res.send(err)
        }

    });

    app.get('/usuario/:email', async (req, res) => {

        try{

            const buscaDeUsuario = await usuarioDao.buscaUsuario(req.params.email);

            if(buscaDeUsuario.length == 0){
                res.send("<h1>Usuário não encontrado</h1>");
            } else{
                res.send(buscaDeUsuario);
            }

        } catch (err){
            res.send(err)
        }
           
    });

    //falta uma condicional no delete que avisar se o usuario nao for encontrado para deletar!!!

    app.delete('/usuario/:nome', async (req,res) =>{

        try {
            await usuarioDao.deletaUsuario(req.params.nome);

            res.send(`<h1>O Usuário ${req.params.nome} foi deletado</h1>`);

        } catch(err) {
            res.send(err)
        }

    });

    app.put('/usuario/:email/:id', async (req,res) => {

        try {
            const teste = await usuarioDao.atualizaUsuario(req.params.email,req.params.id);

            console.log(teste);

            res.send(`<h1>Usuário com ID ${req.params.id} teve seu email atualizado para ${req.params.email} </h1>`);

        } catch(err) {
            res.send(err)
        }

        
    });

}