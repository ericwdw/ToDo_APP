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
        
        /* promessa.listaUsuarios()
        .then((usuarios)=>{
            res.send(usuarios);
        })
        .catch((erro)=>{
            res.send(erro);
        }) */
    });

    app.post('/usuario', (req, res) => {

        bancoDados.run(`INSERT INTO USUARIOS VALUES (?,?,?,?)`,[req.body.id,req.body.nome,req.body.email,req.body.senha], (err,rows)=>{
            if(err) throw new Error(`Erro ao inserir usuario: ${err}`);
            else res.send('<h1>Sucesso, Usuario adicionado</h1>');
        })

    });

    app.get('/usuario/:email', (req, res) => {

        const respostaUsuario = [];

        for(let user of bancoDados.usuario){

            if(user.email == req.params.email){
                respostaUsuario.push(user);
            };
        };
        if(respostaUsuario.length == 0){
            res.send("<h1>Usuario nao encontrado</h1>");
        } else{
            res.send(respostaUsuario);
        }     
    });

    app.delete('/usuario/:email', (req,res) =>{

        let usuarioNDeletado = [];

        for(let i=0; i<bancoDados.usuario.length; i++){

            if(bancoDados.usuario[i].email!==req.params.email){
                usuarioNDeletado.push(bancoDados.usuario[i]);
            };
        };
        bancoDados.usuario = usuarioNDeletado;
        res.send("<h1>O usuario com o email " + req.params.email + " foi deletado</h1>")
    });

    app.put('/usuario/:email', (req,res) => {

        for(let i = 0; i < bancoDados.usuario.length; i++){

            if(bancoDados.usuario[i].email == req.params.email){
                bancoDados.usuario[i].email = "asdas"        
            };
        }
        res.send("<h1>Registro: " + req.params.email + " atualizado</h1>");
    });

}