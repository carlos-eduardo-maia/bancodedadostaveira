/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex){
    return knex.schema.createTable('users', function(table) {
    id.number('id').increments().notNull();
    sequencial.number('sqcl').notNull();
    valor.string('valor').notNull();
    quantidade.number('qnt').notNull();
    produto.integer('produto').references('Produto').inTable('TB_Produto');
    notaFiscal.integer('notafiscal').references('ItemNotaFiscal').inTable('TB_NotaFiscalVenda');
    
});
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
