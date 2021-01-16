class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:200

        }
        this.pointB = pointB;
        this.chain = Constriant.create(options);
        World.add(world,this.chain);

        
    }
   // fly(){
    //    this.chain.bodyA = null;
   // }
    display(){

        if(this.chain.bodyA){
            
            var pos =this.chain.bodyA.position;
            var point = this.pointB;
            
            push();
            stroke("black");
            strokeWeight(5);
            line(pos.x,pos.y,point.x,point.y);
            pop();
        }

    
    }
}