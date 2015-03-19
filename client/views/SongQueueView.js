// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }

    tagName: "table",

  initialize: function() {
    this.render();
    // second place we're trying to get songQueueView to render:
    this.collection.on('add', function(){
    	console.log('songQueueView listener')
    	this.render();
    }, this)

  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    console.log("RENDER");

    console.log("this in SongQueueView: ", this);
    // append new songQueueEntryView
    this.$el.html('<th>Queue</th>').append(
    	this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    )
  }

});
