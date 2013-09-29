(function($){
	$.fn.dragable=function(){
		function fixStyle(e){
			var originalCoord = {};
			originalCoord.left = this.offset().left;
			originalCoord.top = this.offset().top;
			this.data('originalCoordX' , this.offset().left);
			this.data('originalCoordY' , this.offset().top);
			this.data('mouseToItemCoordX' , e.pageX - this.offset().left);
			this.data('mouseToItemCoordY' , e.pageY - this.offset().top);
			this.css({
				'position' : 'fixed',
				'z-index' : '999999',
				'margin' : '0px',
				'left' : originalCoord.left,
				'right' : originalCoord.right
			})
		}
		function updatePosition(e){
			console.log(e)
			this.css({
				'left' : e.pageX - this.data('mouseToItemCoordX'),
				'top' : e.pageY - this.data('mouseToItemCoordY')
			})
		}
		return this.each(function(){
			var $this=$(this);
				$this.bind('mousedown',function(){
					 if($this.hasClass('dragTrigger')){
					 	$this.removeClass('dragTrigger');
					 }
					 $this.addClass('dragTrigger');
				})
				$this.bind('mousemove',function(e){
					e.preventDefault();
					if(!$this.hasClass('dragTrigger')){
						return;
					}
					//$this.trigger('beforedrag');
					if(!$this.hasClass('dragging')){
						console.log('dragstart');
						fixStyle.call($this,e);
						$this.trigger('dragstart');
						$this.addClass('dragging');
						return;
					}
					console.log('dargging');
					updatePosition.call($this,e);
					$this.trigger('dragging');
				})
				$this.bind('mouseup',function(e){
					if($this.hasClass('dragging')){
						$this.removeClass('dragging');
						console.log('dragend')
						$this.trigger('dragend');
					}
					$this.removeClass('dragTrigger');
				})
		});
	}
})(jQuery)