var b;
var n ;
var t ;
var d ;
var score1 ;
var flag ;
var img;
var y ;
var old_time ;
var time ;
var p;
var score;
function setup(){
	p=[];
	score=0;
	flag=0;
	t= new text1();
	n=1;
	img= loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzlKh-A7J_C9eMuuCX97-8Oy_hfu0RTYNiAB4AQGVv503BZEW2A");
	y=random(500,2000);
	 createCanvas(1000,1000);
  b=new bird();
  p[0]=new obstruct();
   d=new Date();
	 old_time =d.getTime();

}
function draw()
{
 d=new Date();
 time=d.getTime();
 if(time - old_time >y)
 {
 	score++;
    y=random(500,1000);
 	old_time=time ;
 	
 	p[n] =  new obstruct();
 	n++;
 }
 for( var i=0;i<n;i++)
 {

 	if(p[i].collide(b) || b.y >height)
       flag=1;

 }

 for( var i=0 ;i<n;i++)
 {
 	if(p[i].x <-30)
 	{	p.splice(i,1);
 	n--;}
 }

	if(flag !=1)
	{background(img);
	score1=score;
	b.update();
  b.show();
  
  for(var i=0 ;i<n;i++)
  {
  	p[i].show();
  	p[i].update();
  }t.show(score);}
  else 
  {
  	background(img);
    t.show1("Game over :(",width/2-100,height/2);
    t.show1("your score -",width/2-100,height/2+50);
    t.show1(score1,width/2-100,height/2+100);
    t.show1("Press X to play again",width/2-100,height/2+300);
  }
  

}
function keyPressed()
{
if(key==' ')
	b.lift();

if(key == 'X' && flag==1 )
	setup();

}