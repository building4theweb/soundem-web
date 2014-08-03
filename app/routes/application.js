import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    onSongPlay: function(song) {
      this.controllerFor('audio').send('play', song);
    },
    onSongPause: function() {
      this.controllerFor('audio').send('pause');
    },
    onSongNext: function() {
      console.log('songNextAction');
    },
    onSongPrev: function() {
      console.log('songPrevAction');
    },
    onSongSelected: function(song) {
      this.controllerFor('audio').send('select', song);
    }
  }
});
