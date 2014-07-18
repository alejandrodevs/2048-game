(function(){

  Game2048 = {}

  var ImageTypes = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];

  Game2048.Image = function() {
    this.loaded = false,
    this.element = new Image(),

    this.initialize = function(type) {
      this.loaded = false;
    }
  }

  var Board = Game2048.Board = function() {
    this.initialize = function() {
    }
  }

  Game2048.initialize = function() {
    this.board = new Board();
    this.board.initialize();
  }
})();
