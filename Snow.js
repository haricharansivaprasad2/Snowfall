class snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            frictionAir: 0.08
        }
        this.r = 10;
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {
        var snowPos=this.body.position;		
			push()
			translate(snowPos.x, snowPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
    }

};