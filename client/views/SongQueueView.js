// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    // second place we're trying to get songQueueView to render:
    this.collection.on('add remove', function(){
    	this.render();
    }, this)

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // append new songQueueEntryView
    this.$el.html('<th>Queue</th>').append(
    	this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    )
  }

});
