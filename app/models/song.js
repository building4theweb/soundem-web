import DS from 'ember-data';

var Song = DS.Model.extend({
  name: DS.attr('string'),
  album: DS.belongsTo('album'),
  favorite: DS.attr('boolean'),
  url: DS.attr('string'),
  duration: DS.attr('number')
});

Song.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Pretty When You Cry', album: 1, favorite: false},
    {id: 2, name: 'Money Power Glory', album: 1, favorite: false},
    {id: 3, name: 'West Coast', album: 2, favorite: true},
    {id: 4, name: 'Animal', album: 1, favorite: false, url: 'http://upload.wikimedia.org/wikipedia/commons/0/0a/Wolfgang_Amadeus_Mozart_-_Don_Giovanni_-_Overt%C3%BCre.ogg'},
    {id: 5, name: 'Dura Como Piedra', album: 2, favorite: true, url: 'http://upload.wikimedia.org/wikipedia/commons/5/5b/Ludwig_van_Beethoven_-_Symphonie_5_c-moll_-_1._Allegro_con_brio.ogg'}
  ]
});

export default Song;
