// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', this.shift);
    this.on('ended', function () {
      if (this.length > 0) {
        this.playFirst();
      } else if (this.length === 0) {
        // do nothing
      }
    }, this);
    this.on('dequeue', this.shift);
    this.on('enqueue', this.model);
  },

  playFirst: function () {
    this.at(0).play();
  }
  

});