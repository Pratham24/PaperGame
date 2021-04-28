class Paper{
	constructor(x,y,r)
	{
	var options={
		isStatic:false,
		restitution:.5,
		friction:0,
		density:50
	}
		this.r=r
		this.image = loadImage("paper.png")
		this.body=Bodies.circle(x,y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var Paperpos=this.body.position;		
			push()
			translate(Paperpos.x, Paperpos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r)

			pop()
	}

}

