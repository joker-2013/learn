var Todo= Backbone.Model.extend({
	defaults:{
		 title:'',
		completed:false
	}
});
var myTodo=new Todo({
	tilte:'check aaaaattributes!!!!!!!!!!'
});
var TodoView=Backbone.View.extend({
	tagName:"li",
	todoTpl:_.template($('#item-template').html()),
	events:{
		'dbclick label':'edit',
		'keypress .edit':'updateOnEnter',
		'blur .edit':'close'
	},
	initialize:function(){
		this.$el=$('#todo');
	},
	render:function(){
		this.$el.html(this.todoTpl(this.model.toJSON()));
		this.input=this.$('.eidt');
		return this;
	},
	edit:function(){
	},
	close:function(){
	},
	updateOnEnter:function(){
					
				  }
});
var todoView=new TodoView({
	model:myTodo
})
