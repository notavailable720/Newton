class Balls{
    constructor(x, y) {
        var options = {
            isStatic: true,
            density: 0.5
        }
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.body = Matter.Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display(){
        fill('blue')
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}