import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var CustomAuthenticator = Base.extend({
  host: 'https://soundem-api.herokuapp.com/api/v1',

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(options) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: self.host + '/login',
        type: 'POST',
        data: JSON.stringify({
            email: options.identification,
            password: options.password
        }),
        contentType: 'application/json'
      }).then(function(response) {
        Ember.run(function() {
          resolve({
            token: response.user.token,
            userId: response.user.id,
            email: response.user.email
          });
        });
      }, function(xhr) {
        var res = JSON.parse(xhr.responseText);
        Ember.run(function() {
          reject(res.error);
        });
      });
    });
  },

  invalidate: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      localStorage['ember_simple_auth:session'] = '';
      resolve();
    });
  }
});

export default {
  name: 'authentication',
  initialize: function(container) {
    container.register('authenticator:custom', CustomAuthenticator);
  }
};
