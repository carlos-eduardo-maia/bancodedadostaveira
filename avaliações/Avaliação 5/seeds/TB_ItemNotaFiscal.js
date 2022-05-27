/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('TB_ItemNotaFiscalL').del()
  await knex('TB_ItemNotaFiscal').insert([
    {ID: 11, Sequencial: '100', Quantidade: "5", Valor: "94,00", Produto_Id: "1111", notaFiscal_Id: "111", TipoCliente: "Pessoa_Fisica"},
    {ID: 12, Sequencial: '200', Quantidade: "12", Valor: "24,00", Produto_Id: "2222", notaFiscal_Id: "222", TipoCliente: "Pessoa_Fisica"},
    {ID: 13, sequencial: '300', Quantidade: "8", Valor: "80,99", Produto_Id: "3333", notaFiscal_Id: "333", TipoCliente: "Pessoa_Juridica"},
  ]);
};