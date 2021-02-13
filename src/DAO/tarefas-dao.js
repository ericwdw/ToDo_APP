module.exports = class TarefasDao {

    constructor(bancoDados){
        
        this.bancoDados = bancoDados;
    }

    listaTarefas(){

        return new Promise((resolve,reject)=>{
            this.bancoDados.all("SELECT * FROM TAREFAS;", (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });
    };

    insereTarefas(ID,TITULO,DESCRICAO,STATUS,DATACRIACAO,IDUSUARIO){

        return new Promise((resolve,reject)=>{

            this.bancoDados.run(`INSERT INTO TAREFAS VALUES (?,?,?,?,?,?)`,[ID,TITULO,DESCRICAO,STATUS,DATACRIACAO,IDUSUARIO], (err,rows)=>{
                if(err) reject(`Erro ao inserir tarefa: ${err}`);
                else resolve(rows);
            })

        });
            

    };

    buscaTarefa(STATUS){

        return new Promise((resolve,reject)=>{
            this.bancoDados.all(`SELECT * FROM TAREFAS WHERE STATUS = (?) ;`,[STATUS], (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });

         
    };

    deletaTarefa(TITULO){

        return new Promise((resolve,reject)=>{
            this.bancoDados.run(`DELETE FROM TAREFAS WHERE TITULO = (?);`,[TITULO], (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });

    };

    atualizaTarefa(STATUS,ID){
        
        return new Promise((resolve,reject)=>{
            
            this.bancoDados.run(`UPDATE TAREFAS SET STATUS = (?) WHERE ID = (?)`,[STATUS,ID], (err, rows)=> {
                if(err) reject("Erro ao consultar a tabela");
                else resolve(rows);
            });    
        });

    }

}