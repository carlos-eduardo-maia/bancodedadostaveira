/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
  exports.seed = function(knex) {
    return knex('TB_Cliente').truncate()
      .then(function () {
        return knex('TB_Cliente').insert([
          {ID: 1, Código: '10', CnpjCpf: '965.760.453-28', Nome: "Jennifer", TipoCliente: "Pessoa_Fisica"},
          {ID: 2, Código: '20', CnpjCpf: '514.734.203-69', Nome: "Artur", TipoCliente: "Pessoa_Juridica"},
          {ID: 3, Código: '30', CnpjCpf: '90.785.231/0001-66', Nome: "Raimundo", TipoCliente: "Pessoa_Juridica"},
        ]);
      });

};
await knex ('TB_Cliente').insert([
  {ID: 4, Código: '40', CnpjCpf: '777.253.122.00', Nome: "Álvaro", TipoCliente: "Pessoa_Fisica" },
]);

await knex ('TB_Cliente')
.where('ID', '=', '1')
.del();
var selectknex = knex.column('ID','Código', 'CnpjCpf', 'Nome', 'TipoCliente').select().from('TB_Cliente');
return (selectknex)