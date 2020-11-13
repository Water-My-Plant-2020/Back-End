exports.seed = async function(knex) {
      await knex('plants').truncate()
      await knex('plants').insert([
            {id: '1', nickname: 'Sweet autumn clematis ', speciesName: 'Clematis terniflora', h2oFrequency: 'weekly', watered: false},
            {id: '2', nickname: 'Papyrus', speciesName: 'Cyperus papyrus', h2oFrequency: 'weekly', watered: false},
            {id: '3', nickname: 'Foxglove', speciesName: 'Digitalis grandiflora', h2oFrequency: 'weekly', watered: false},
            {id: '4', nickname: 'Digitalis grandiflora', speciesName: 'Equsietum hyemale', h2oFrequency: 'weekly', watered: false},
            {id: '5', nickname: 'Burning Bush', speciesName: 'Euonymus alatus', h2oFrequency: 'weekly', watered: false},
            {id: '6', nickname: 'Hosta Patriot', speciesName: 'Herbaceous', h2oFrequency: 'weekly', watered: false},
            {id: '7', nickname: 'Spruce Tree ', speciesName: 'Coral Bells', h2oFrequency: 'weekly', watered: false},
            {id: '8', nickname: 'Fire Storm', speciesName: 'Geum Fire Storm', h2oFrequency: 'weekly', watered: false},
            {id: '9', nickname: 'White Ash Tree', speciesName: 'Fraxinus americana', h2oFrequency: 'weekly', watered: false},
            {id: '10', nickname: 'Beech Tree', speciesName: 'Fangus spp', h2oFrequency: 'weekly', watered: false},
            {id: '11', nickname: 'Creeping phlox', speciesName: 'Chionodoxa', h2oFrequency: 'weekly', watered: false},
            {id: '12', nickname: 'Watermelon Peperomia ', speciesName: 'peperomia genus', h2oFrequency: 'weekly', watered: false},
          ]);
    };