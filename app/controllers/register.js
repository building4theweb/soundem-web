import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitForm: function() {
      var self = this,
          email =  this.get('email'),
          password = this.get('password');

      // clear passwords
      this.set('password', null);
      this.set('password2', null);

      Ember.$.ajax({
        url: SoundemWebENV.apiRoot + '/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            email: email,
            password: password
        })
      }).then(function() {

        // Login after registration
        Ember.run(function() {
          self.get('session').authenticate('authenticator:custom', {
            identification: email,
            password: password
          }).then(function() {
            self.transitionToRoute('albums');
          });
        });

      });
    }
  }
});
