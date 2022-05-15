/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex,Promise) {
    return knex.schema.createTable('users', function(table) {
        id.number('id').increments().notNull();
        codigo.number('código').increments().notNull();
        data.string('data').notNull();
        valorNota.number('valor').notNull();
        cliente.integer(cliente).references('nome').inTable('TB_Cliente');
        items.integer('Array nota fiscal').notNull();

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
