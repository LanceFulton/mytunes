// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'click': function() {
  //     // run enqueue method on clicked song
  //     this.model.enqueue()
  //     this.model.play();
  //   }
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
