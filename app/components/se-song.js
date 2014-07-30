import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    playSong: function() {
      console.log('onPlay', this.get('song.url'));
      this.toggleProperty('isPlaying');
      this.sendAction('onPlay', this.get('song.url'));
    },
    pauseSong: function() {
      console.log('onPause');
      this.toggleProperty('isPlaying');
      this.sendAction('onPause');
    }
  },

  isPlaying: false,
  hasUrl: Ember.computed.notEmpty('song.url')
});
