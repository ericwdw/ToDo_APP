
module.exports = (app,bancoDados) => {

    app.get('/usuario', (req, res) => {

        res.send(bancoDados.usuario)

    });

    app.post('/usuario', (req, res) => {

        const newModelUsuario = req.body;

        bancoDados.usuario.push(newModelUsuario);

        res.send('<h1>Rota Post de Usuario ativada: usuario adicionado ao banco de dados</h1>');

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