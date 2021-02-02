module.exports = class UsuariosDao {

    constructor(bancoDados){
        
        this.bancoDados = bancoDados;
    }

    listaUsuarios(){

        return new Promise((resolve,reject)=>{
            this.bancoDados.all("SELECT * FROM USUARIOS;", (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });
    };
}