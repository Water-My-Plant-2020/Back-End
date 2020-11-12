exports.seed = async function(knex) {
    await knex('user').truncate()
    await knex('user').insert([
          {name: '', type: ''},
          {name: '', type: ''},
          {name: '', type: 'e'},
          {name: '', type: ''},
          {name: '', type: ''}
        ]);
  };