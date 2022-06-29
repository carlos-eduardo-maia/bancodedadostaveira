/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {

  await knex('TB_NotaFiscalVenda').del()
  await knex('TB_NotaFiscalVenda').insert([
    {ID: 111, Código: "337", Data: "21/08", valorNota: "25,99", Cliente_Id: "1", itemNotaFiscal_id: "11"},
    {ID: 222, Código: "777", Data: "01/04", valorNota: "80,00", Cliente_Id: "2", itemNotaFiscal_id: "22"},
    {ID: 333, Código: "929", Data: "01/10", valorNota: "34,99", Cliente_Id: "3", itemNotaFiscal_id: "33"},
  ]);
};
await knex ('TB_NotaFiscalVenda')
.where ('ID', '=', '333')
.update ({Cliente_Id: "5"})