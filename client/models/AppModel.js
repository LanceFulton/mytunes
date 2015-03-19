// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    // this.set('isPlaying', true);

    // console.log("this: ", this);
    // console.log("this.songQueue: ", this.get("songQueue") );

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // 'this' === AppModel
    // params = {library: library}
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      // add song to 'songQueue'
      this.get('songQueue').add(song);
      // first place we're trying to get songQueueView to render:
      // appView.get('songQueueView').render();
      console.log("songQueue: ", this.get('songQueue'));
      // create new songQueueEntryView and append to SongQueueView
    }, this);

    //params.library.on('')
  }

});
