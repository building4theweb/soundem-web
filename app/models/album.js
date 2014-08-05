import DS from 'ember-data';

var Album = DS.Model.extend({
  name: DS.attr('string'),
  artworkURL: DS.attr('string'),
  artist: DS.belongsTo('artist'),
  songs: DS.hasMany('song', {async: true})
});

// Album.reopenClass({
//   FIXTURES: [
//     {id: 1, name: 'Ultraviolence', artist: 1,
//     artworkURL: 'http://i.imgur.com/KfVv5mr.jpg',
//     songs: [1, 2, 3]},

//     {id: 2, name: 'Terror Amor', artist: 2,
//     artworkURL: 'http://i.imgur.com/0Z7W6hh.jpg',
//     songs: [4, 5]}
//   ]
// });

export default Album;
