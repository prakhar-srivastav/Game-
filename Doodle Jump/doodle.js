

function doodle()
{

a=200 ;
var img = loadImage("https://vignette.wikia.nocookie.net/doodlejump/images/f/ff/%D0%9E%D0%B1%D1%8B%D1%87%D0%BD%D1%8B%D0%B9.png/revision/latest?cb=20131030162846&path-prefix=ru");
	this.x =200 ;
	this.y= 200;
	this.g=.2;
	this.v=0;
	this.hits =function(p)
	{
		if(this.x >=p.x && this.x <=p.x+50)
			if(this.y >=p.y && this.y <=p.y+10)
			if(this.v>=0) return true ;
		return false
	}
	this.update1 =function()
	{
		
		
		this.v+=this.g;
	}
	this.update =function()
	{
		
		this.y+=this.v;
		this.v+=this.g;
	}
	this.recoil = function()
	{
		this.v=-8.7996;
	}
	this.show = function()
	{
		
		image(img, this.x-36, this.y-54,60,60);
		
	}
}
