var MAlbumShow = {
	pdfshow:"",
	touchesStart:"",
	touchesStartLength:0,
	touchesMove:"",
	startX:0,
	startY:0,
	startDistance:0,
	moveXone:0,
	moveYone:0,
	centerX:0,
	centerY:0,
	scale:1,
	startMarginLeft:0,
	startMarginTop:0,
	init:function()
	{
		setTimeout
		(
			function()
			{
				MAlbumShow.pdfshow = util.$("pdfshow");
				MAlbumShow.pdfshow.addEventListener('touchstart', MAlbumShow._touchstart,true);
				MAlbumShow.pdfshow.addEventListener('touchmove',MAlbumShow._touchmove,true);			
				MAlbumShow.pdfshow.addEventListener('touchend', MAlbumShow._touchend,true);
				
			}
			,
			100
		);
		
	},
	changeCenter:function(demo)
	{  
		if(demo < 4 && demo >= 1){
			//document.title = MAlbumShow.root_moveLeft +" "+MAlbumShow.centerX;
		    MAlbumShow.pdfshow.style.marginLeft =   - ((MAlbumShow.centerX/document.documentElement.offsetWidth)*parseInt(MAlbumShow.pdfshow.offsetWidth) - MAlbumShow.centerX) + MAlbumShow.moveXone*(demo-1)*0.3 +"px";
			MAlbumShow.pdfshow.style.marginTop =   - ((MAlbumShow.centerY/window.innerHeight)*parseInt(MAlbumShow.pdfshow.offsetHeight) - MAlbumShow.centerY) +"px";
			//document.title = window.innerHeight;
			//MAlbumShow.pdfshow.style.marginLeft = -((MAlbumShow.overIndex)*document.documentElement.offsetWidth) - MAlbumShow.centerX*(demo-MAlbumShow.scale)+"px" ;
		}
	},
	prevent:function(e)
	{
		//e.preventDefault();
	},
	_touchstart:function(e)
	{
		MAlbumShow.startMarginLeft = parseInt(MAlbumShow.pdfshow.style.marginLeft);
		MAlbumShow.startMarginTop = parseInt(MAlbumShow.pdfshow.style.marginTop);
		
		MAlbumShow.touchesStart = e.targetTouches;
		MAlbumShow.touchesStartLength = e.targetTouches.length;
		//document.title = "TouchStart";
		if(MAlbumShow.touchesStartLength == 1)
		{
			MAlbumShow.startX = e.targetTouches[0].pageX;
			MAlbumShow.startY = e.targetTouches[0].pageY;
			
		}
		else if(MAlbumShow.touchesStartLength == 2)
		{ 
		   var x1 = MAlbumShow.touchesStart[0].pageX;
		   var x2 = MAlbumShow.touchesStart[1].pageX;
				
		   var y1 = MAlbumShow.touchesStart[0].pageY;
		   var y2 = MAlbumShow.touchesStart[1].pageY;
		   
		   MAlbumShow.startDistance = parseInt( Math.sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) ));
		}
	},
	_touchmove:function(e)
	{
		//document.title = "TouchMove";
	    if (util.$("catalog_area").style.display == "block")
            return;
	    MAlbumShow.touchesMove = e.targetTouches;
		//e.preventDefault();
		var moveX = e.targetTouches[0].pageX - MAlbumShow.startX;
		var moveY = e.targetTouches[0].pageY - MAlbumShow.startY;
		//alert(MAlbumShow.pdfshow.style.marginLeft);
		var tovalue = MAlbumShow.startMarginLeft + moveX*1;
		//document.title = "TV:"+tovalue;
        var upvalue = MAlbumShow.startMarginTop + moveY*1;
        
		if(MAlbumShow.touchesStartLength==1 )
		{	
		    e.preventDefault();
		    var minW = parseInt(MAlbumShow.pdfshow.style.marginLeft) <= 0 || (parseInt(MAlbumShow.pdfshow.style.marginLeft) > -100 && moveX < 0);
			var maxW = parseInt(MAlbumShow.pdfshow.style.marginLeft) >= - (MAlbumShow.pdfshow.childNodes[0].offsetWidth - window.innerWidth) || (parseInt(MAlbumShow.pdfshow.style.marginLeft) < -(MAlbumShow.pdfshow.childNodes[0].offsetWidth - window.innerWidth -100) && moveX > 0);
				
			if(!!minW && !!maxW){		
				MAlbumShow.pdfshow.style.marginLeft = tovalue + "px";		
			}
			//document.title = minW +""+maxW;
			var hi = parseInt(MAlbumShow.pdfshow.offsetHeight)-parseInt(document.documentElement.clientHeight);
			var minH = (parseInt(MAlbumShow.pdfshow.style.marginTop) >= -(hi)) || ((parseInt(MAlbumShow.pdfshow.style.marginTop) <= -(hi))&&moveY > 0);
			//var maxH = (parseInt(MAlbumShow.pdfshow.style.marginTop) <= hi ) || ((parseInt(MAlbumShow.pdfshow.style.marginTop) >= hi)&&moveY < 0);
			if( upvalue < 0 && minH)
			{
				MAlbumShow.pdfshow.style.marginTop = upvalue + "px";
					
			}
			
		} 
		if(MAlbumShow.touchesStartLength==2 )
		{
			MAlbumShow.imageZoom(e);	
		}
	},
	_touchend:function(e)
	{  
	    
		
		if(MAlbumShow.touchesStartLength == 2){
			
			MAlbumShow.scale = parseInt(MAlbumShow.pdfshow.style.width)/document.documentElement.offsetWidth;
		}
		
	}
	,imageZoom:function(e)
	{  
	    
			var touchDistance = [];
			e.preventDefault();
			
			if(MAlbumShow.touchesStart.length==MAlbumShow.touchesMove.length)
			{
				
				var startDistance = 0;
				var moveDistance = 0;
				
				//计算初始化的两点之间的距离
				for(var i=1;i<MAlbumShow.touchesStart.length;i++)
				{
					
					var x3 = MAlbumShow.touchesMove[i-1].pageX;
					var x4 = MAlbumShow.touchesMove[i].pageX;
					
					var y3 = MAlbumShow.touchesMove[i-1].pageY;
					var y4 = MAlbumShow.touchesMove[i].pageY;
					
					
					moveDistance += parseInt( Math.sqrt( (x4-x3)*(x4-x3) + (y4-y3)*(y4-y3) ));
				}
				MAlbumShow.centerX = (x3 + x4)/2;
				MAlbumShow.centerY = (y3 + y4)/2;
				startDistance = MAlbumShow.startDistance;
				//缩小
				MAlbumShow.moveDistance = moveDistance- startDistance ;
				var scale1 = ((moveDistance/startDistance)*MAlbumShow.scale); 
				if(scale1 < 4 && scale1 >= 1)
				{   
					
					MAlbumShow.change(MAlbumShow.pdfshow,scale1);
					
				}
	     	}
		  	
			if(MAlbumShow.moveDistance != 0 && scale1 > 1)
	        { 
			  MAlbumShow.changeCenter(scale1);
		    }
		//MAlbumShow.pdfshow.style.marginLeft = -(document.documentElement.offsetWidth*(MAlbumShow.overIndex+1))+"px";
	},
	change:function(demo,x){
		
		demo.style.width = (document.documentElement.offsetWidth *x) +"px";
		//MAlbumShow.isscale = true;
	 } 
	
}

