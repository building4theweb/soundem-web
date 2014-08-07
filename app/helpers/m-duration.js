/* global moment */
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  var d = moment.duration(value, 'seconds'),
      seconds = d.seconds();

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return d.minutes() + ':' + seconds;
});
