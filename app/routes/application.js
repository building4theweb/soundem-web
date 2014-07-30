import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    songPlayAction: function(url) {
      console.log('songPlayAction', url);
      this.controller.set('audioPlayerURL', url);
      this.controller.set('audioPlayerIsPlaying', true);
    },
    songPauseAction: function() {
      this.controller.set('audioPlayerIsPlaying',false);
    }
  }
});
