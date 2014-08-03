import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SoundemWebENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('logout');

  this.resource('music', function() {
    this.resource('albums', function() {
      this.resource('album', {path: '/:album_id'});
    });
    this.resource('songs');
    this.resource('favorites');
  });
});

export default Router;
