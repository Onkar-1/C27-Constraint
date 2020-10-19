class Chain{
    constructor(bodyA, bodyB){
        //options for the constraint
            var options = {
                bodyA: bodyA, 
                bodyB: bodyB, 
                stiffness: 0.04,
                length: 10
            }

            //function to create the constraint
            this.chain = Constraint.create(options);
            World.add(world, this.chain);
    }

    //display
    display(){
        //namespacing the pos.x and pos.y for the bodies
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        //creating the line to display
        //also the main of the display function
        //strokeWeight is the thickness of the line
        strokeWeight(4);
        //function used to create line's
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}