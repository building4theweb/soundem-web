import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['audio'],
  audioIsPlaying: Ember.computed.alias('controllers.audio.isPlaying')
});
