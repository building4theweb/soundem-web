import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'audio',
  attributeBindings: ['src'],

  playingStatusChanged: function() {
    console.log('playingStatusChanged', this.get('isPlaying'));
    var self = this;

    if(this.get('isPlaying')) {
      Ember.run.later(function() {
        self.$()[0].play();
      });
    } else {
      Ember.run.later(function() {
        self.$()[0].pause();
      });
    }
  }.observes('isPlaying', 'audioPlayerURL')
});
