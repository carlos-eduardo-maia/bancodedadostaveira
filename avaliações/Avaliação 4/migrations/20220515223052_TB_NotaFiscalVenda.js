/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TB_NotaFiscalVenda', table => {
        table.increments('ID').primary()
        table.integer('Código').notNull()
        table.timestamp('Data').defaultTo(knex.fn.now())
        table.float('Valor').notNull()
        table.integer('Cliente_Id').unsigned()
        table.foreign('Cliente_Id').references('TB_Cliente.id')
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