/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex){
    return knex.schema.createTable('TB_Cliente', table => {
    table.number('ID').primary;
    table.number('Código').notNull();
    table.string('CnpjCpf').notNull().unique;
    table.number('Nome').notNull();
});
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('TB_Cliente')
};