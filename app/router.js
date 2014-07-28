import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SoundemWebENV.locationType
});

Router.map(function() {
  this.resource('albums');
  this.resource('album', {path: '/:album_id'});
  this.resource('songs');
});

export default Router;
