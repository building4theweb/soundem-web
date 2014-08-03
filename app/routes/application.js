import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    var userId = 1;
    controller.set('account', this.store.find('account', userId));
  },

  actions: {
    onSongPlay: function(song) {
      this.controllerFor('audio').send('play', song);
    },
    onSongPause: function() {
      this.controllerFor('audio').send('pause');
    },
    onSongNext: function() {
      console.log('songNextAction');
    },
    onSongPrev: function() {
      console.log('songPrevAction');
    },
    onSongSelected: function(song) {
      this.controllerFor('audio').send('select', song);
    },
    onSongFavoriteToggle: function(song) {
      song.toggleProperty('favorite', true);
      song.save();
    }
  }
});
