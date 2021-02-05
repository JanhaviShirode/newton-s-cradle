class Chain{
    constructor(bodyA,bodyB,xvalue ){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB: {x:xvalue,y:0},
            
           
        }
       this.chain=Constraint.create(options);
       this.xvalue=xvalue;
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+this.xvalue,pointB.y);
    }
}