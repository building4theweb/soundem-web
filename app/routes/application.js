import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    songPlayAction: function(song) {
      this.controllerFor('audio').send('play', song);
    },
    songPauseAction: function() {
      this.controllerFor('audio').send('pause');
    },
    songNextAction: function() {
      console.log('songNextAction');
    },
    songPrevAction: function() {
      console.log('songPrevAction');
    },
    songSelectedAction: function(song) {
      this.controllerFor('audio').send('select', song);
    }
  }
});
