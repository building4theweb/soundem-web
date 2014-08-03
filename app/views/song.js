import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'song',
  song: null,
  hasUrl: Ember.computed.notEmpty('song.url'),

  isSelected: function() {
    return this.get('controller.songSelected') === this.get('song');
  }.property('controller.songSelected', 'song'),

  // Events
  click: function() {
    this.get('controller').send('onSongSelected', this.get('song'));
  },
  doubleClick: function() {
    this.get('controller').send('onSongPlay', this.get('song'));
  }
});
