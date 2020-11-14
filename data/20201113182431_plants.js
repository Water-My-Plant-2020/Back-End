exports.up = function (knex) {
    return knex.schema
    
      .createTable("users", tbl => {
        tbl.increments('id').notNullable().unique().primary();
        tbl.string("username").notNullable().unique().index();
        tbl.string('phoneNumber').notNullable().unique();
        tbl.string("password").notNullable().unique();
      })
    
      .createTable("plants", tbl => {
        tbl.increments("id").notNullable().unique().primary();
        tbl.string("nickname").notNullable().unique();
        tbl.string('speciesName').notNullable();
        tbl.string('h2oFrequency').notNullable();
        tbl.boolean('watered').defaultTo(false);
      })
    
   };
    
   exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('plants')
      .dropTableIfExists('users');
   };
   