import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SoundemWebENV.locationType
});

Router.map(function() {
  this.resource('albums', function() {
    this.route('album', {path: '/:album_id'});
  });
  this.route('songs');
  this.route('song');
});

export default Router;
