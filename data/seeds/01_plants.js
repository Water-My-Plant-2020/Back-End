exports.seed = async function(knex) {
      await knex('plants').truncate()
      await knex('plants').insert([
            {id: '1', nickname: 'Sweet autumn clematis ', speciesName: 'Clematis terniflora', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.pexels.com/photos/5502336/pexels-photo-5502336.jpeg?cs=srgb&dl=pexels-eva-elijas-5502336.jpg&fm=jpg' },
            {id: '2', nickname: 'Papyrus', speciesName: 'Cyperus papyrus', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1590758368553-be7634ba7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'},
            {id: '3', nickname: 'Foxglove', speciesName: 'Digitalis grandiflora', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1564056040095-907d1f3cc842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80'},
            {id: '4', nickname: 'Digitalis grandiflora', speciesName: 'Equsietum hyemale', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1598619739751-2e15b0fb0f6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'},
            {id: '5', nickname: 'Burning Bush', speciesName: 'Euonymus alatus', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1582076654876-f72f0aeb9660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1167&q=80'},
            {id: '6', nickname: 'Hosta Patriot', speciesName: 'Herbaceous', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.pexels.com/photos/5073492/pexels-photo-5073492.jpeg?cs=srgb&dl=pexels-brett-sayles-5073492.jpg&fm=jpg'},
            {id: '7', nickname: 'Spruce Tree ', speciesName: 'Coral Bells', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.pexels.com/photos/4406663/pexels-photo-4406663.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-4406663.jpg&fm=jpg'},
            {id: '8', nickname: 'Fire Storm', speciesName: 'Geum Fire Storm', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.pexels.com/photos/4162025/pexels-photo-4162025.jpeg?cs=srgb&dl=pexels-lorena-schmidt-4162025.jpg&fm=jpg'},
            {id: '9', nickname: 'White Ash Tree', speciesName: 'Fraxinus americana', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'},
            {id: '10', nickname: 'Beech Tree', speciesName: 'Fangus spp', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1589720246565-9aae8c02932a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
            {id: '11', nickname: 'Creeping phlox', speciesName: 'Chionodoxa', h2oFrequency: 'weekly', watered: false, plantImage: 'https://cdn.pixabay.com/photo/2018/05/13/23/29/phlox-3398370_1280.jpg'},
            {id: '12', nickname: 'Watermelon Peperomia', speciesName: 'peperomia genus', h2oFrequency: 'weekly', watered: false, plantImage: 'https://images.unsplash.com/photo-1593768409671-0d68c6255a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'},
          ]);
    };