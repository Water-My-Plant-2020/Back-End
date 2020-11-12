exports.seed = async function(knex) {
    await knex('plants').truncate()
    await knex('plants').insert([
          {name: 'Chicken Tacos', type: 'entree'},
          {name: 'Black Beans', type: 'side'},
          {name: 'Mex Rice', type: 'side'},
          {name: 'Guac and Chips', type: 'side'},
          {name: 'Cadillac Margarita', type: 'drink'}
        ]);
  };