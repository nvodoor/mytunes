     // LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= num %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
      this.model.set('num', this.model.get('num') + 1);
      this.render();
    },

  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
