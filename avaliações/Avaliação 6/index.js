/* Criação das const e inicialização CRUD */ 
const express = require('express')
const server = express()
server.use(express.json())
const PORT = 3000
// mensagem do servidor
server.get('/', (req,res) => {
    res.json ({ message: 'Tabelas sendo criadas'}); });

// conexão com o BD
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database/avaliação4.db', (error) => {
    if (error) console.log(error);
});
/* Começo das etapas CRUD */
//Insert:
db.serialize(() => {
    db.run('create table if not exists TB_Gerentes (id integer primary key autoincrement , name text)', (error) => {
        if (error) console.log(error);  });

    db.run('insert into TB_Gerentes (name) values (?)', ['Wellington Santos'], (error) => {
        if (error) console.log(error);  });

    db.run('insert into TB_Gerentes (name) values (?)', ['Paulo William Nogueira'], (error) => {
        if (error) console.log(error);  });

    db.run('insert into TB_Gerentes (name) values (?)', ['Carlos Eduardo Maia'], (error) => {
        if (error) console.log(error);  });


    console.log("TB_Gerentes")

    
    
    
    //Select, Update e Delete:
db.all('select * from TB_Gerentes', (error, rows) => {
        console.log(error, rows);   })
db.run('update "TB_Gerentes" set name= "Fábio Santos de Oliveira" where id=1', (error) => {
        if (error) console.log(error);  })
db.run('delete from TB_Gerentes where id = 2', (error) => {
        if (error) console.log(error)   })
db.all('select * from TB_Gerentes', (error, rows) => {
    console.log(error, rows);   })
})

// Porta Do Servidor DB
server.listen(PORT, () => {
    console.log(`\n*** Server rodando na porta: ${PORT} ***\n`);
})