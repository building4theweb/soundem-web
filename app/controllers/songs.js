import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['audio'],
  songSelected: Ember.computed.alias('controllers.audio.songSelected'),
  songInPlayer: Ember.computed.alias('controllers.audio.songInPlayer'),
  audioIsPlaying: Ember.computed.alias('controllers.audio.isPlaying')
});
