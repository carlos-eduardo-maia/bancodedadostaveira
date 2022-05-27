/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TB_ItemNotaFiscal', table => {
        table.increments('ID').primary()
        table.integer('Sequencial').notNull()
        table.integer('Quantidade').notNull()
        table.float('Valor').notNull()
        table.integer('Produto_Id').unsigned()
        table.foreign('Produto_Id').references('TB_Produtos.id')
        table.integer('notaFiscal_Id').unsigned()
        table.foreign('notaFiscal_Id').references('TB_NotaFiscalVenda.id')
        table.enum('TipoCliente', ['Pessoa_Fisica', 'Pessoa_Juridica']).defaultTo('Pessoa_Fisica')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_ItemNotaFiscal')
};