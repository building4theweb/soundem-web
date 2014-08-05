import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('song', {favorite: true});
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    // reset selected song
    controller.set('songSelected', null);
  }
});
