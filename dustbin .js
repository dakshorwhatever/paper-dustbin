class Dustbin {
    constructor(x,y,width,height){
        var option ={
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image=loadImage("dustbingreen.png");
        this.image.scale = 0.4
        
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
        fill('green');
       
        image(this.image,pos.x,pos.y, 500,160,this.width, this.height);
    }
}

