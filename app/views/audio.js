import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var player = this.$('#audio')[0];
    this.controller.send('registerPlayer', player);
  }
});
