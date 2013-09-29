(function($){
	var defaultOptions={
		scrollbar:'.CSScrollbar',
		scrollHandler:'.CSScrollHandle',
		autoScroll:false,
		minScrollbarLength:null,
		wheelSpeed:10
	}

	$.fn.CSScrollbar = function(settings,options){ //options: update ,destroy
		console.log('init');
		return this.each(function(){
			var settings = $.extend(true,{},defaultOptions,settings),$this = $(this);
			var container = $this , content = container.children();
			if(content.length !== 1){
				console.log('content must be wrapped in only one html ele!');
				return true;
			}
			console.log('settings',settings)
			var scrollbar = $(settings.scrollbar) , scrollHandler = $(settings.scrollHandler),$document = $(document);
			var containerheight = container.height(),contentHeight = content.height(),
			scrollbarHeight =scrollbar.height(),scrollHandlerHeight = scrollHandler.height();
			console.log(scrollbar)
			var  prevScrollHandlerPageY,prevScrollHandlerTop,currentScrollHandlerPageY,currentScrollHandlertop;
			var prevPageY,currentPageY;
			//var CSContaner
			bindMouseScrollHandler();

			function bindMouseScrollHandler(){
				console.log('bindMouseScrollHandler'); 
				scrollHandler.bind('mousedown',function(e){
					if(scrollHandler.hasClass('dragTrigger')){
						scrollHandler.removeClass('dragTrigger');
					}
					scrollHandler.addClass('dragTrigger');
					//currentPageY = e.pageY;
					e.stopPropagation();
          			e.preventDefault();
				})
				//scrollHandler.bind('mousemove',function(e){
				$document.bind('mousemove',function(e){
					e.stopPropagation();
          			e.preventDefault();
          			if(!scrollHandler.hasClass('dragTrigger')){
						return;
					}
					if(!scrollHandler.hasClass('dragging')){
						console.log('dragstart');
						scrollHandler.trigger('dragstart');
						scrollHandler.addClass('dragging');
						return;
					}
					console.log('dargging');
					updateScrollHandlerTop(e);
					scrollHandler.trigger('dragging');
				})
				scrollHandler.bind('mouseup',function(e){
					e.stopPropagation();
          			e.preventDefault();
          			if(scrollHandler.hasClass('dragging')){
						scrollHandler.removeClass('dragging');
						console.log('dragend')
						scrollHandler.trigger('dragend');
					}
					scrollHandler.removeClass('dragTrigger');
				})
				$(document).bind('mouseup',function(){
					if(scrollHandler.hasClass('dragging')){
						scrollHandler.removeClass('dragging');
						console.log('dragend')
						scrollHandler.trigger('dragend');
						scrollHandler.removeClass('dragTrigger');
					}

				})
			}
			function updateContentScrollTop(e){

			}
			function updateScrollHandlerTop(e){
				if(!prevPageY){
					prevPageY = e.pageY;
					return;
				}
				currentPageY = e.pageY;
				var distanceY = currentPageY - prevPageY , top = parseInt(scrollHandler.css('top'));
				console.log(top,distanceY,scrollbarHeight,scrollHandlerHeight)
				if(top + distanceY < 0){
					return;
				}
				if(top + distanceY >= scrollbarHeight - scrollHandlerHeight){
					return;
				}
				console.log(11)
				scrollHandler.css({
					//top: '+=' + (currentPageY - prevPageY)
					top: '+=' + (currentPageY - prevPageY)
				});
				prevPageY = currentPageY;
			}
		})
	}
})(jQuery)