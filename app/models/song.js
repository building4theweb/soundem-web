import DS from 'ember-data';

var Song = DS.Model.extend({
  name: DS.attr('string'),
  album: DS.belongsTo('album')
});

Song.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Pretty When You Cry', album: 1},
    {id: 2, name: 'Money Power Glory', album: 1},
    {id: 3, name: 'West Coast', album: 1},
    {id: 4, name: 'Animal', album: 2}
  ]
});

export default Song;
