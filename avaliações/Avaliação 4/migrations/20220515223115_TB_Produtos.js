/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Produtos', function(table) {
        id.number('ID').increments().notNullable();
        codigo.number('Código').increments().notNullable();
        descrição.string('Descrição').notNullable();
        valor.number('Nome').notNullable();
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
