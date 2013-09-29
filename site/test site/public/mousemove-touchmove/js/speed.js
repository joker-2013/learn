$(function(){
	var prevCoord={},currentCoord={};
	$(document).bind('mousemove',function(e){
		// console.log(e)
		var speed={};
		currentCoord.x=e.pageX;
		currentCoord.y=e.pageY;
		currentCoord.time=(new Date()).getTime();
		if(('x' in prevCoord)&&('y' in prevCoord)&&('time' in prevCoord)){
			speed.x = (currentCoord.x - prevCoord.x) / (currentCoord.time - prevCoord.time) * 1000;
			speed.y = (currentCoord.y - prevCoord.y) / (currentCoord.time - prevCoord.time) * 1000;
		}
		console.log(speed);
		//$('body').append('<span>x:' + speed.x + ',y:' + speed.y + '</span><br>');
		//$('body').html('x:' + speed.x + ',y:' + speed.y);
		prevCoord.x = currentCoord.x;
		prevCoord.y = currentCoord.y;
		prevCoord.time = currentCoord.time;
	})
	$(document).bind('touchmove',function(e){
		console.log('touchmove')
		var originalEvent = e.originalEvent;
		if(originalEvent.touches.length != 1) return;
		//console.log(e)
		var speed = {};
		currentCoord.x = originalEvent.touches[0].pageX ;
		currentCoord.y = originalEvent.touches[0].pageX ;
		currentCoord.time = (new Date()).getTime();
		if(('x' in prevCoord)&&('y' in prevCoord)&&('time' in prevCoord)){
			speed.x = (currentCoord.x - prevCoord.x) / (currentCoord.time - prevCoord.time) * 1000;
			speed.y = (currentCoord.y - prevCoord.y) / (currentCoord.time - prevCoord.time) * 1000;
		}
		//console.log(speed);
		//$('body').append('<span>x:' + speed.x + ',y:' + speed.y + '</span><br>');
		//$('body').html('x:' + speed.x + ',y:' + speed.y);
		prevCoord.x = currentCoord.x;
		prevCoord.y = currentCoord.y;
		prevCoord.time = currentCoord.time;
	})
	$(document).bind('touchend',function(e){
		console.log('touchend')
		var originalEvent = e.originalEvent;
		if(originalEvent.touches.length != 1) return;
		console.log(e)
		var speed = {};
		currentCoord.x = originalEvent.touches[0].pageX ;
		currentCoord.y = originalEvent.touches[0].pageX ;
		currentCoord.time = (new Date()).getTime();
		if(('x' in prevCoord)&&('y' in prevCoord)&&('time' in prevCoord)){
			speed.x = (currentCoord.x - prevCoord.x) / (currentCoord.time - prevCoord.time) * 1000;
			speed.y = (currentCoord.y - prevCoord.y) / (currentCoord.time - prevCoord.time) * 1000;
		}
		//console.log(speed);
		//$('body').append('<span>x:' + speed.x + ',y:' + speed.y + '</span><br>');
		$('body').html('x:' + speed.x + ',y:' + speed.y);
		prevCoord.x = currentCoord.x;
		prevCoord.y = currentCoord.y;
		prevCoord.time = currentCoord.time;
	})
})