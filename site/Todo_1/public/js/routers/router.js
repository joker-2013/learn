var Workspace=Backbone.Router.extend({
	routers:{
		'*filter':'setFilter'
	},
	setFilter:function(item){
		window.app.Todos.trigger('filter');
	}
});
app.TodoRouter =new Workspace();
Backbone.history.start();
