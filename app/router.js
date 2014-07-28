import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SoundemWebENV.locationType
});

Router.map(function() {
  this.resource('songs');

  this.resource('albums', function() {
    this.resource('album', {path: '/:album_id'});
  });

  this.resource('paylists', function() {
    this.resource('playlist', {path: '/:playlist_id'});
  });

});

export default Router;
