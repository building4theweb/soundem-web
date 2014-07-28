import DS from 'ember-data';

var Album = DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('artist')
});

Album.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Ultraviolence', artist: 1},
    {id: 2, name: 'Terror Amor', artist: 2}
  ]
});

export default Album;
