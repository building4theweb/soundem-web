import Ember from 'ember';

export default Ember.Controller.extend({
  player: null,
  url: null,
  selected: null,
  isPlaying: false,

  actions: {
    play: function(song) {
      var player = this.get('player');

      if (song) {
        this.set('url', song.get('url'));
      }

      if (this.get('url')) {
        this.set('isPlaying', true);
      }

      Ember.run.later(function() {
        player.play();
      });
    },
    playSelected: function() {
      this.send('play', this.get('selected'));
    },
    pause: function() {
      var self = this;

      this.set('isPlaying', false);

      Ember.run.later(function() {
        self.get('player').pause();
      });
    },
    select: function(song) {
      this.set('selected', song.get('id'));
    },

    // This is called by the view afer insert
    registerPlayer: function(player) {
      this.set('player', player);
    }
  }
});
