const bcrypt = require("bcrypt");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Johndoe', password: bcrypt.hashSync('abc1234', 14)},
        {id: 2, username: 'Janedoe', password: bcrypt.hashSync('abc12345', 14)},
        {id: 2, username: 'Bobdoe', password: bcrypt.hashSync('abc123456', 14)},
        {id: 2, username: 'Marrisadoe', password: bcrypt.hashSync('abc1234567', 14)},
        {id: 2, username: 'Joshdoe', password: bcrypt.hashSync('bc12345', 14)},
        {id: 2, username: 'Josedoe', password: bcrypt.hashSync('c12345', 14)},
        {id: 2, username: 'Kevindoe', password: bcrypt.hashSync('bc123456', 14)},
        {id: 2, username: 'Cullendoe', password: bcrypt.hashSync('c123456', 14)},

      ]);
    });
};