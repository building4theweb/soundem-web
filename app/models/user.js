import DS from 'ember-data';

var User = DS.Model.extend({
  email: DS.attr('string'),
  songTotal: DS.attr('number'),
  albumTotal: DS.attr('number'),
  durationTotal: DS.attr('number')
});

User.reopenClass({
  FIXTURES: [
    {id: 1, songTotal: 11, albumTotal: 3, durationTotal: 1322},
    {id: 2, songTotal: 21, albumTotal: 23, durationTotal: 21322},
  ]
});

export default User;
