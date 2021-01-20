class Hero {
    constructor(x,y,r){
        var options ={
            isStatic:false,
            density:1.3 ,
            frictionAir: 0.2
           
             
        }

        this.x = x;
        this.y = y;
        this.r = r;

       this.image = loadImage("hero.png");
       this.body=Bodies.circle(this.x,this.y,(this.r)/2, options);
      
       World.add(world,this.body);
    

    }
    display(){
        var pos= this.body.position ;
       

       
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,400,400);
        pop();
    }


}