# Título do projeto

ToDo - App de Gerenciamento de Atividades

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Esse projeto tem como objetivo a criacao de uma API para controle de tarefas de usuarios. A API utiliza o padrão MVC (Modelo, Vizualicao e Controle) alem de utilizar os verbos HTTP para realizar todas as operacoes de CRUD (Create, Read, Update & Delete).

Atraves de consultas com verbos de comando HTTP voce podera gerenciar seu banco de dados Criando, Lendo, Atualizando e Deletando informacoes sobre os Usuarios e suas Tarefas.

Consulte **Instalação** para saber como implantar o projeto.

Consulte **Funcionalidades** para saber como executar as as funcoes do programa.

### 📋 Pré-requisitos

Dependencias:
body-parser: 1.19.0,
cors: 2.8.5,
express: 4.17.1,
sqlite3: 5.0.0

Dependencias de Desenvolvimento
nodemon: 2.0.7

### 🔧 Instalação

1. Realize o Download de todos os arquivos disponiveis no repositorio : https://github.com/ericwdw/TODO_APP

2. Em seu editor de codigo, instale as dependecias descritas na secao desse arquivo "Dependencias" utilizando o NPM

Obs: A dependencia de desenvolvimento Nodemon nao 'e obrigatoria, podendo ser instalada para auxiliar na execucao do servidor automaticamente, verifique a documentacao. (https://www.npmjs.com/package/nodemon)

3. Execute o arquivo ./src/infra/create-and-populate.js para que o Banco de Dados seja criado.

4. Execute o arquivo ./src/app.js --> A mensagem "Servidor respondendo em http://localhost:${port}" aparecera no console.

Obs: Caso tenha instalado a dependencia nodemon, o programa conta com o comando "npm start" que utiliza o nodemon para executar o servidor.

5. O seu programa esta pronto para uso.

### 🔧 Funcionalidades

Modelos:

Usuario:

    ID - Identificacao unica do usuario (Numero inteiro, autoincremental, chave primaria)
    NOME - Nome do usuario (varchar(64))
    EMAIL - E-mail do usuario (varchar(64))
    SENHA - Senha para acesso do usuario (varchar(64))

Tarefa:

    ID - Identificacao unica da tarefa (Numero inteiro, autoincremental, chave primaria)
    TITULO - Titulo da Tarefa (varchar(64))
    DESCRICAO - Descricao da Tarefa (texto)
    STATUS - Em qual estado de execucao a Tarefa se encontra (varchar(32))
    DATACRIACAO - Data na qual foi criada a tarefa (varchar(32))
    ID_USUARIO - Identificador unico do Usuario responsavel pela tarefa (Chave estrangeira da tabela USUARIOS)

### ⚙️ Requisicoes de rotas:

Obs: o aplicativo está programado para ser utilizado no endereço http://localhost:8080

**_ Listar todos os Usuarios/Tarefas presentes no banco de dados _**

A funcao utiliza o verbo de rota GET para acessar os dados.

- Utilizando a rota http://localhost:8080/tarefa, será possivel acessar TODAS as tarefas cadastradas no banco de dados.
- Utilizando a rota http://localhost:8080/usuario, será possivel acessar TODOS os usuarios cadastrados no banco de dados.

**_ Inserir novos Usuarios/Tarefas no banco de dados _**

A funcao utiliza o verbo de rota POST para inserir dados no banco de dados.

- Utilizando a rota http://localhost:8080/tarefa, será possivel inserir tarefas no banco de dados.

A seguinte mensagem devera aparecer: "Tarefa inserida com sucesso"

Exemplo:

{
"titulo":"teste 1",
"descricao":"essa tarefa foi criada para o teste de post",
"status":"TODO",
"datacriacao":"2021-02-13",
"id_usuario":2
}

- Utilizando a rota http://localhost:8080/usuario, será possivel inserir usuarios no banco de dados.

A seguinte mensagem devera aparecer: "Usuario inserido com sucesso"

Exemplo:

{
"nome":"essa usuario foi criado para o teste de post",
"email":"teste@teste.com.br",
"senha":"teste123"
}

**_ Buscar no banco de dados Usuarios/Tarefas _**

A funcao utiliza o verbo de rota GET para buscar dados no banco de dados.

- Utilizando a rota http://localhost:8080/tarefa/status, será possivel buscar tarefas no banco de dados atraves do seu status.

Exemplo: http://localhost:8080/tarefa/concluido --> Busca no banco de dados todas as tarefas com status == concluido

- Utilizando a rota http://localhost:8080/usuario/email, será possivel buscar usuarios no banco de dados atraves do seu email.

Exemplo: http://localhost:8080/tarefa/teste@teste.com.br --> Busca no banco de dados todos os usuarios com email == teste@teste.com.br

**_ Deletar Usuarios/Tarefas no banco de dados _**

A funcao utiliza o verbo de rota DELETE para deletar dados no banco de dados.

- Utilizando a rota http://localhost:8080/tarefa/titulo, será possivel deletar tarefas no banco de dados atraves do seu titulo.

Exemplo: http://localhost:8080/tarefa/lavar roupa --> Busca no banco de dados todas as tarefas com titulo == lavar roupas e deleta as tarefas

- Utilizando a rota http://localhost:8080/usuario/nome, será possivel deletar usuarios no banco de dados atraves do seu nome.

Exemplo: http://localhost:8080/usuario/teste1 --> Busca no banco de dados todos os usuarios com nome == teste1 e deleta os usuarios

**_ Atualizar informacoes dos Usuarios/Tarefas _**

A funcao utiliza o verbo de rota PUT para deletar dados no banco de dados.

- Utilizando a rota http://localhost:8080/tarefa/status/id, será possivel atualizar o status das tarefas no banco de dados atraves do seu ID.

Exemplo: http://localhost:8080/tarefa/concluido/1 --> Busca no banco de dados a tarefa com ID == 1 e atualiza o campo de dados "status" para concluido.

- Utilizando a rota http://localhost:8080/usuario/email/id, será possivel atualizar o email dos usuarios no banco de dados atraves do seu ID.

Exemplo: http://localhost:8080/usuario/teste2@teste.com.br/1 --> Busca no banco de dados o usuario com ID == 1 e atualiza o campo de dados "email" para teste2@teste.com.br

## 🛠️ Construído com

- [VSCode](https://code.visualstudio.com/) - O editor de codigo
- [NPM](https://www.npmjs.com/) - Gerente de pacotes
- [Heroku](https://www.heroku.com/) - Plataforma de aplicacao em nuvem -- EM BREVE

## 📌 Versão

O projeto encontra-se na versao 1.0.0

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

- Eric Gomes Silva Abrunhosa - \_Desenvolvimento & Documentação - (https://github.com/ericwdw)

```

```
