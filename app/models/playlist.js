import DS from 'ember-data';

var Playlist = DS.Model.extend({
  name: DS.attr('string'),
  songs: DS.hasMany('song', {async: true})
});

Playlist.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Playlist 1', songs: [1, 2, 3]},
    {id: 2, name: 'Playlist 2', songs: [4, 3 ,2]},
    {id: 3, name: 'Playlist 3', songs: [2, 3]}
  ]
});


export default Playlist;
