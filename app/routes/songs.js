import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    // reset selected song
    controller.set('songSelected', null);
  }
});
