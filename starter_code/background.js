function Background(game){
    this.game = game;
    this.img = new Image();
    this.img.src = "images/bg.png"

    //Initial coordinates
    this.x = 0;
    this.y = 0;

    //Initial speed:
    this.dx = 5;
    this.counter = 0;

} 

Background.prototype.draw = function(){
    this.counter++;
    if (this.counter == 100){
        this.counter = 0;
    }
    
    this.game.ctx.drawImage(this.img, 
                            this.x, this.y, 
                            this.game.canvas.width, 
                            this.game.canvas.height);
    this.game.ctx.drawImage(this.img,
                            this.x + this.game.canvas.width,
                            this.y,
                            this.game.canvas.width,
                            this.game.canvas.height);

};

Background.prototype.move = function(){
    this.x -= this.dx;
    if (this.x < -this.game.canvas.width){
        this.x = 0;
    }
};
