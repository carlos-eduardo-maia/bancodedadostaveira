var database = require("./database");

var dados = {
    nome:"Carlos Eduardo",
    CnpjCpf: "32544426700"
}

var query = database.insert(dados).into("TB_Cliente").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.select(["nome", "CnpjCpf"]).table("TB_Cliente").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
});

database.where({id: 1}).update({CnpjCpf: 12024565700}).table("games").then(data => {
    console.log(data);
}).catch(err =>{
    console.log(err);
});

database.where({id: 3}).delete().table("TB_Cliente").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

