class Monster{

    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitutuion:0.5,
            density:0.009,
            friction:1
    
        }
        this.x =x;
        this.y= y;
        this.width= width;
        this.height= height;
        this.image = loadImage("Monster-01.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       
        push();
        translate(pos.x,pos.y);
        
         imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}




 