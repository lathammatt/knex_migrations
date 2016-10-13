'use strict';

module.exports.up = (knex, Promise) =>
    knex.schema.table('Users', table => table.dropColumn('password'))


module.exports.down = (knex, Promise) =>
  knex.schema.table('Users', table => table.string('password'))