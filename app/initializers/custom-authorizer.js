import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

var CustomAuthorizer = Base.extend({
  authorize: function(jqXHR) {
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
      jqXHR.setRequestHeader('Authorization', 'JWT ' + this.get('session.token'));
    }
  }
});

export default {
  name: 'authorization',
  initialize: function(container) {
    container.register('authorizer:custom', CustomAuthorizer);
  }
};
