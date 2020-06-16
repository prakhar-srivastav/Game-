var img ;
var d ;
var p ;
var f;
var a;
var m ;
function setup()
{ 
	f=0;
	m=0;
	p=[];
	for(var i=0 ;i<20;i++)
	{
		p[i]=new plat();
	}
	a=0;
	createCanvas(400,400);
	d= new doodle();
	
 img =loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzlKh-A7J_C9eMuuCX97-8Oy_hfu0RTYNiAB4AQGVv503BZEW2A")
}
function draw ()
{
	
background(img);

		
	


if(keyIsPressed ) 
 {
 	if(key=='d') d.x+=5;
 	else if(key=='a') d.x-=5;
 }
 for(var i=0 ;i<20;i++)
 {
 	if(d.hits(p[i]))
 		d.recoil();
 }
 
if(d.y>height/2 )
	d.update();
 else 
 {
 	if(d.v<0)
    {
   d.update1();
	for(var i=0;i<20;i++)
{
	
	p[i].v=-d.v;
	p[i].update();

}
    }
    else 
    	d.update();
 }

for(var i=0;i<20;i++)
{
	if(p[i].y>height)
		p[i].renew();
}


// show==
d.show();
for(var i=0;i<20;i++)
{
	p[i].show();
}


}


