function bird()
{

	this.x=width/4 ;
	this.y=height/2;
	this.g=1 ;
	this.v=0;
	 this.update= function()
	 {
      this.y+=this.v ;
      this.v+=this.g ;
      if(this.y<=0)this.y=0;
	 }

	 this.show = function()
	 {
	 	fill(255,0,0);
	 	ellipse(this.x,this.y ,30,30);
	 }
	 this.lift =function()
	 {
         this.v=-15;

	 }
}