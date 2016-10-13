'use strict';

module.exports.up = (knex, Promise) =>
    knex.schema.table('Users', table => table.renameColumn('Name', 'name'))


module.exports.down = (knex, Promise) =>
    knex.schema.table('Users', table => table.renameColumn('name', 'Name'))