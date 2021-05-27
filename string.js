class String {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.1,
            length: 300
        }
        this.string = Matter.Constraint.create(options);
        World.add(world, this.string);
    }
    display() {
        line(this.string.bodyA.position.x, this.string.bodyA.position.y, this.string.bodyB.position.x, this.string.bodyB.position.y);
        
    }
}