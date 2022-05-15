/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) { 
    return knex.schema.createTable('users', function(table) {
        id.number('id').increments().notNullable();
        codigo.number('código').increments().notNullable();
        cnpjcpf.string('registro').notNullable();
        nome.string('nome').notNullable();

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
