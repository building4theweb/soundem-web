import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['se-control'],

  actions: {
    play: function() {
      this.sendAction('onPlay');
    },
    pause: function() {
      this.sendAction('onPause');
    },
    prev: function() {
      this.sendAction('onPrev');
    },
    next: function() {
      this.sendAction('onNext');
    }
  }
});
