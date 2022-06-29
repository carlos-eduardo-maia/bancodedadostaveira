/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('TB_Produtos').del()
  await knex('TB_Produtos').insert([
    {id: 1111, codigo: '337', Descricao: "Arroz", Valor: 3.50},
    {id: 2222, codigo: '777', Descricao: "Feijão", Valor: 5.00},
    {id: 3333, codigo: '929', Descricao: "Macarrão", Valor: 6.00},
  ]);
};
await knex('TB_Produtos')
.where('Valor', '=', '6.00')
.del()