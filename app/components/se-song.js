import Ember from 'ember';

export default Ember.Component.extend({
  hasUrl: Ember.computed.notEmpty('song.url'),

  isPlaying: function() {
    if(this.get('song.url')) {
      return this.get('currentlyPlaying') === this.get('song').id;
    }
  }.property('currentlyPlaying'),

  isSelected: function() {
    return this.get('currentlySelected') === this.get('song').id;
  }.property('currentlySelected'),

  click: function() {
    this.sendAction('onSelected', this.get('song'));
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
