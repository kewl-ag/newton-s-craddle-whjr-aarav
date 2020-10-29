class Rope{

    constructor(A,ptB){
        var options = {
            bodyA:A,
            pointB:ptB,
            length: 200,
            stiffness: 0.05
        }
//this.sling1 = loadImage("sprites/sling1.png");
//this.sling2 = loadImage("sprites/sling2.png")
//this.sling3 = loadImage("sprites/sling3.png");

        

        
        this.pointB = ptB
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling);
        
    }

display(){
//image(this.sling1,200,30);
//image(this.sling2,175,30);
    var posA = this.sling.bodyA.position;
    var posB = this.pointB
    
    strokeWeight(4);
    stroke(84,39,15);
  
  //  line(posA.x-25,posA.y,posB.x,posB.y);
 //line(posA.x-25,posA.y,posB.x+20,posB.y);
 //image(this.sling3,posA.x-25,posA.y-10,15,30);
    
        line(posA.x,posA.y,posB.x,posB.y);
 //line(posA.x+25,posA.y,posB.x+20,posB.y);
 //image(this.sling3,posA.x+25,posA.y-10,15,30);
 
    }
   


    
   
}