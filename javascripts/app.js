(function(){

  var ImageTypes = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];

  Game2048 = function() {
    this.board = new Board();
    this.board.initialize();

    this.start = function() {
      requestAnimationFrame(this.start.bind(this));
    }
  }

  Game2048.Image = function() {
    this.loaded = false,
    this.element = new Image(),

    this.initialize = function(type) {
      this.loaded = false;
    }
  }

  var Board = Game2048.Board = function() {
    this.initialize = function() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = 500;
      this.canvas.height = 500;
      document.body.appendChild(this.canvas);
    }
  }
})();
