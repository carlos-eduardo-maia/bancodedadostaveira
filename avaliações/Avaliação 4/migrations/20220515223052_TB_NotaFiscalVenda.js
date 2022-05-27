/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TB_NotaFiscalVenda', table => {
        table.increments('id').primary()
        table.integer('código').notNull()
        table.timestamp('data').defaultTo(knex.fn.now())
        table.float('valor').notNull()
        table.integer('Cliente_id').unsigned()
        table.foreign('Cliente_id').references('TB_Cliente.id')
        table.integer('itemNotaFiscal_id').unsigned()
        table.foreign('itemNotaFiscal_id').references('TB_ItemNotaFiscal.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_NOTA_FISCAL_VENDA')
}