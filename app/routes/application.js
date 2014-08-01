import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    songPlayAction: function(song) {
      var url,
          isPlaying,
          playingSong;

      if(song.get('url')) {
        url = song.get('url');
        isPlaying = true;
        playingSong = song.get('id');
      } else {
        url = null;
        isPlaying = false;
        playingSong = null;
      }

      this.controller.set('audioPlayerURL', url);
      this.controller.set('audioPlayerIsPlaying', isPlaying);
      this.controllerFor('favorites').set('audioPlayerIsPlaying', isPlaying);
      this.controllerFor('favorites').set('playingSong', playingSong);
    },
    songPauseAction: function() {
      this.controller.set('audioPlayerIsPlaying',false);
      this.controllerFor('favorites').set('audioPlayerIsPlaying', false);
    },
    songSelected: function(song) {
      this.controllerFor('favorites').set('selectedSong', song.id);
    },

    // se-control actions
    ctrlOnPlay: function() {
      console.log('ctrlOnPlay');
      this.controllerFor('favorites').set('audioPlayerIsPlaying', true);
    },
    ctrlOnPause: function() {
      console.log('ctrlPause');
      this.controllerFor('favorites').set('audioPlayerIsPlaying', false);
    },
    ctrlOnPrev: function() {
      console.log('ctrlOnPrev');
    },
    ctrlOnNext: function() {
      console.log('ctrlOnNext');
    }

  }
});
