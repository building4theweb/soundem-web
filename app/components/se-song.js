import Ember from 'ember';

export default Ember.Component.extend({
  hasUrl: Ember.computed.notEmpty('song.url'),

  isSelected: function() {
    return this.get('songSelected') === this.get('song.id');
  }.property('songSelected'),

  isPlaying: function() {
    if (this.get('audioIsPlaying') && this.get('song.url')) {
      return this.get('songPlayingUrl') === this.get('song.url');
    } else {
      return false;
    }
  }.property('songPlayingUrl', 'audioIsPlaying'),

  // Events
  click: function() {
    this.sendAction('onSelected', this.get('song'));
  },
  doubleClick: function() {
    this.sendAction('onPlay', this.get('song'));
  },

  actions: {
    playSong: function() {
      this.sendAction('onPlay', this.get('song'));
    },
    pauseSong: function() {
      this.sendAction('onPause');
    }
  }
});
