function plat2()
{
	this.v=0;
	this.x =random(400);
	this.y=random(400);

	this.show=function()
	{
		fill(0)
	    ellipse(this.x+25,this.y,20,20);
		fill(2,255,0);
		rect(this.x,this.y,50,10);
	}

	this.renew= function()
	{
		this.x=random(width);
		this.y=random(-100,0);
	}
	this.update=function()
	{
        this.y+=this.v;
        
	}
}