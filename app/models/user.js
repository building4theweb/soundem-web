import DS from 'ember-data';

var Email = DS.Model.extend({
  email: DS.attr('email'),
  songTotal: DS.attr('number'),
  albumTotal: DS.attr('number'),
  durationTotal: DS.attr('number')
});

Email.reopenClass({
  FIXTURES: [
    {id: 1, songTotal: 11, albumTotal: 3, durationTotal: 1322},
    {id: 2, songTotal: 21, albumTotal: 23, durationTotal: 21322},
  ]
});

export default Email;
