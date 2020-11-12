exports.seed = async function(knex) {
    await knex('species').truncate()
    await knex('species').insert([
          {name: '', type: ''},
          {name: '', type: ''},
          {name: '', type: ''},
          {name: '', type: ''},
          {name: '', type: ''}
        ]);
  };