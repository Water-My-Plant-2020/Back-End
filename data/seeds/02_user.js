const bcrypt = require("bcrypt");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Johndoe', phoneNumber:'123-456-789', password: bcrypt.hashSync('abc1234', 14)},
        {id: 2, username: 'Janedoe', phoneNumber:'234-567-890', password: bcrypt.hashSync('abc12345', 14)},
        {id: 3, username: 'Bobdoe', phoneNumber:'345-678-901', password: bcrypt.hashSync('abc123456', 14)},
        {id: 4, username: 'Marrisadoe', phoneNumber:'456-789-012', password: bcrypt.hashSync('abc1234567', 14)},
        {id: 5, username: 'Joshdoe', phoneNumber:'567-890-123', password: bcrypt.hashSync('bc12345', 14)},
        {id: 6, username: 'Josedoe', phoneNumber:'678-901-234', password: bcrypt.hashSync('c12345', 14)},
        {id: 7, username: 'Kevindoe', phoneNumber:'789-012-345', password: bcrypt.hashSync('bc123456', 14)},
        {id: 8, username: 'Cullendoe', phoneNumber:'901-234-567', password: bcrypt.hashSync('c123456', 14)},

      ]);
    });
};