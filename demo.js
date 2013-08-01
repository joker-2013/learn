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
});
var TodoCounter={counterA:0,counterB:0};
_.extend(TodoCounter,Backbone.Events);
function incrA(){
	TodoCounter.counterA++;
	console.log('counterA:'+TodoCounter.counterA);
	TodoCounter.trigger('event');
}
function incrB(){
	TodoCounter.counterB++;
	console.log('counterB:'+TodoCounter.counterB);
	TodoCounter.trigger('evnet');
}
TodoCounter.once('event',incrA);
TodoCounter.on('event',incrB);

var todoCollection=new Backbone.Collection();
todoCollection.add([{
	id:1,
	title:'go to china',
	completed:false
},{
	id:2,
	title:'go to india',
	completed:false
},{
	id:3,
	title:'go to andro',
	completed:true
}]);
todoCollection.on('add',function(model){
	console.log('Added model:'+model.get('title'))
});
todoCollection.on('remove',function(model){
	console.log('Remove model:'+model.get('title'));
})
todoCollection.on('change:completed',function(model){
	console.log('Change model:'+model.get('title'));
})
todoCollection.set([{
	id:1,
	title:'go to china__1',
	completed:false
},{
	id:2,
	title:'go to india__',
	completed:true
},{
	id:4,
	title:'go to andra__',
	completed:false
}])
var todoCollection2=new Backbone.Collection();
todoCollection2.on('reset',function(){
	console.log('todoCollection2 is resetted!!')
});
todoCollection2.add([
	{title:'go to country1',completed:false},
	{title:'go to country2',completed:false},
	{title:'go to country3',completed:true}
]);
console.log('todoCollection2 lenght:'+todoCollection2.length);
todoCollection2.reset([
	{tilte:'go to country4',completed:false}
]);
console.log('todoCollection2 lenght:'+todoCollection2.length);
todoCollection2.reset();
todoCollection.forEach(function(model){
	console.log(model.get('title'))
})
