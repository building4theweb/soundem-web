import Ember from 'ember';

export default Ember.Component.extend({
  isPlaying: false,

  actions: {
    play: function() {
      this.sendAction('onPlay');
      this.set('isPlaying', true);
    },
    pause: function() {
      this.sendAction('onPause');
      this.set('isPlaying', false);
    },
    prev: function() {
      this.sendAction('onPrev');
    },
    next: function() {
      this.sendAction('onNext');
    }
  }
});
