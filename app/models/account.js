import DS from 'ember-data';

var Account = DS.Model.extend({
  songTotal: DS.attr('number'),
  albumTotal: DS.attr('number'),
  durationTotal: DS.attr('number')
});

Account.reopenClass({
  FIXTURES: [
    {id: 1, songTotal: 11, albumTotal: 3, durationTotal: 1322},
    {id: 2, songTotal: 21, albumTotal: 23, durationTotal: 21322},
  ]
});

export default Account;
