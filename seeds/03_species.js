exports.seed = async function(knex) {
    await knex('species').truncate()
    await knex('species').insert([
          {name: 'Sweet autumn clematis ', type: 'Clematis terniflora'},
          {name: 'Papyrus', type: 'Cyperus papyrus'},
          {name: 'Foxglove', type: 'Digitalis grandiflora'},
          {name: 'Horsetail', type: 'Equsietum hyemale'},
          {name: 'Burning Bush', type: 'Euonymus alatus'},
          {name: 'Hosta Patriot', type: 'Herbaceous'},
          {name: 'Spruce Tree', type: 'Coral Bells'},
          {name: 'Fire Storm', type: 'Geum Fire Storm'},
          {name: 'White Ash Tree', type: 'Fraxinus americana'},
          {name: 'Beech Tree', type: 'Fangus spp'},
          {name: 'Creeping phlox', type: 'Chionodoxa'},
          {name: 'Foxglove', type: 'Chionodoxa'},
        ]);
  };