function text1()
{

	var x = 10;
	var y =  50;
	this.show = function(a)
	{
		fill(0);
		textSize(50 );
  text(a,x, y);
	}
	this.show1 = function(a,b,c)
	{
		fill(0);
		textSize(50 );text(a,b,c);
	}

}