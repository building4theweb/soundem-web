import DS from 'ember-data';

var Artist = DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  albums: DS.hasMany('album')
});

Artist.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Lana Del Rey'},
    {id: 2, name: 'AJ Davila'}
  ]
});

export default Artist;
