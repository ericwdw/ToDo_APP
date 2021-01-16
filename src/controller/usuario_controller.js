
module.exports = (app) => {
    app.get('/usuario', (req, res) => {
        res.send('<h1>Rota Get de Usuario ativada: usuario adicionado ao banco de dados</h1>')
    });

    app.post('/usuario', (req, res) => {
        res.send('<h1>Rota Post de Usuario ativada: usuario adicionado ao banco de dados</h1>')
    })
}