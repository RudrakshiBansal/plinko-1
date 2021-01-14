class Plinko{
    constructor(x, y, radius){
        var options = {
            isStatic:true,
        }

        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);

        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position
        ellipseMode(RADIUS);
        fill("white");
        circle(pos.x, pos.y, 10,10);
    }
}