import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model) {
    this._super(controller, model);

    var userId = this.get('session.content.userId');
    controller.set('user', this.store.find('user', userId));

    this.transitionTo('albums');
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
