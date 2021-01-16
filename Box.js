class Box{

    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitutuion:0.5,
            density:0.04,
            friction:1
    
        }
        this.x =x;
        this.y= y;
        this.width= width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       
        push();
        translate(pos.x,pos.y);
        
        stroke("black");
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}




 