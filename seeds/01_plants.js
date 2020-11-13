exports.seed = async function(knex) {
    await knex('plants').truncate()
    await knex('plants').insert([
          {name: 'African Violet', type: 'saintpaulia genus'},
          {name: 'Bostobn Fern', type: 'sword fern genus'},
          {name: 'Areca Palm', type: 'dipsis genus'},
          {name: 'Dumb Cane', type: 'dieffenbachia amoena genus'},
          {name: 'Chinese Evergreen', type: 'aglaonema genus'},
          {name: 'European fan palm', type: 'dipsis genus'},
          {name: 'Hawaiian ti ', type: 'dipsis genus'},
          {name: 'Cast iron plant ', type: 'aspidistra elatior genus '},
          {name: 'Rattlesnake Plant ', type: 'calathea genus'},
          {name: 'Happy Bean', type: 'peperomia genus '},
          {name: 'Trail Jade', type: 'peperomia genus'},
          {name: 'Watermelon Peperomia ', type: 'peperomia genus'},
        ]);
  };