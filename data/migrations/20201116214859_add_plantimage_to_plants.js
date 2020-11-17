
exports.up = function(knex, Promise) {
  return knex.schema.table('plants', function(t) {
      t.string('plantImage');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('plants', function(t) {
        t.dropColumn('plantImage');
    })
};
