// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('remove', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderEntry, this);
    return this.$el;
  },

  renderEntry: function(entry) {
    var entryView = new SongQueueEntryView({model: entry});
    this.$el.append(SongQueueEntryView.prototype.render());
  }

});
