
module.exports = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('<h1>Tarefa</h1>')
    })
};
