// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
  	this.on('dequeue', function(){
      this.remove(this.at(0));
    });
  }

});