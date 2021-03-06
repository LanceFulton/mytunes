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

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      if (this.get('songQueue')['length'] === 1){
        this.set('currentSong', song);
      }
    }, this);

    


    //DEQUEUE///////////////////////////////////
    // params.library.on('ended', function(song){
    //   console.log(this.get('songQueue'));
    // }, this);

  }

});
