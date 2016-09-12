beforeEach(function () {
  console.log('============run helpers========')
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
});
