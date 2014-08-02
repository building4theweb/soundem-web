import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['audio'],
  songSelected: Ember.computed.alias('controllers.audio.selected'),
  songPlayingUrl: Ember.computed.alias('controllers.audio.url'),
  audioIsPlaying: Ember.computed.alias('controllers.audio.isPlaying')
});
