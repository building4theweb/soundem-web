import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var CustomAuthenticator = Base.extend({
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
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: SoundemWebENV.apiRoot + '/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            email: options.identification,
            password: options.password
        })
      }).then(function(res) {
        Ember.run(function() {
          resolve({
            token: res.user.token,
            userId: res.user.id,
            email: res.user.email
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
