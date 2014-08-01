import Ember from 'ember';

export default Ember.Component.extend({
  isPlaying: false,

  actions: {
    play: function() {
      this.sendAction('onPlay');
      this.toggleProperty('isPlaying');
    },
    pause: function() {
      this.sendAction('onPause');
      this.toggleProperty('isPlaying');
    },
    prev: function() {
      this.sendAction('onPrev');
    },
    next: function() {
      this.sendAction('onNext');
    }
  }
});
