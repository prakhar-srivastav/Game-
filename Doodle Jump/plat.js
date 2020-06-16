function plat()
{
	
	this.v=0;
	this.x =random(400);
	this.y=random(400);

	this.show=function()
	{
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