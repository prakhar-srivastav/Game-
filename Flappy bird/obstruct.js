function obstruct()
{
this .x=width;
this.y1=random(height/2);
this.y2= height/2 + 40 + random(height/2-90);
 
 this.show = function()
 {

 	fill(0,255,0);
 	rect(this.x,0,20,this.y1);
 	fill(0,255,0)
 	rect(this.x,this.y2,20,height);
 }
 this.collide = function(b)
 {
   if(((0 <=b.y && b.y <=this.y1) || (this.y2 <=b.y && b.y <=height)) && this.x <=b.x && b.x<=this.x+20 )
   	return true ;
   return false ;
 }
 this.update= function()
 {
 	this.x--;this.x--;this.x--;
 }

}