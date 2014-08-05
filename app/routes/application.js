import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController: function(controller, model) {
    var self = this;

    this._super(controller, model);

    Ember.run.later(function() {
      if (controller.currentRouteName === 'music.index') {
        self.transitionTo('albums');
      }
    });
  }
});
