import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitForm: function() {
      console.log('try to log in', this.get('email'), this.get('password'));
    }
  }
});
