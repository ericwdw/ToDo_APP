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

    insereUsuarios(ID,NOME,EMAIL,SENHA){

        return new Promise((resolve,reject)=>{

            this.bancoDados.run(`INSERT INTO USUARIOS VALUES (?,?,?,?)`,[ID,NOME,EMAIL,SENHA], (err,rows)=>{
                if(err) reject(`Erro ao inserir usuario: ${err}`);
                else resolve(rows);
            })

        });
            

    };

    buscaUsuario(EMAIL){

        return new Promise((resolve,reject)=>{
            this.bancoDados.all(`SELECT * FROM USUARIOS WHERE EMAIL = (?) ;`,[EMAIL], (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });

         
    };

    deletaUsuario(NOME){

        return new Promise((resolve,reject)=>{
            this.bancoDados.all(`DELETE FROM USUARIOS WHERE NOME = (?); ;`,[NOME], (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });

    };

    atualizaUsuario(EMAIL,ID){
        
        
        return new Promise((resolve,reject)=>{
            
            this.bancoDados.all(`UPDATE USUARIOS SET EMAIL = (?) WHERE ID = (?)`,[EMAIL,ID], (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });

    }







}