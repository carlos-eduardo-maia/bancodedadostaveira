/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Produtos', function(table) {
        id.number('id').increments().notNullable();
        codigo.number('código').increments().notNullable();
        descrição.string('descrição').notNullable();
        valor.number('nome').notNullable();
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
