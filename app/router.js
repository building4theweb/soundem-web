import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SoundemWebENV.locationType
});

Router.map(function() {
  this.resource('albums', function() {
    this.resource('album', {path: '/:album_id'});
  });

  this.resource('songs');
  this.resource('favorites');
  this.route('application');
});

export default Router;
