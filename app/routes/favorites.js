import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // TODO: Fix query
    // return this.store.find('song', {favorite: true});
    return this.store.find('song');
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    // reset selected song
    controller.set('songSelected', null);
  }
});
