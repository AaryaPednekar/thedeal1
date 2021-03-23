class Col {
    constructor(x,y,width,height){
        this.x = x,
        this.y = y
        this.image = loadImage("col.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 200, 150);
    }
    }