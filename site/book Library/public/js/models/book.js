var app=app||{};
app.Book=Backbone.Model.extend({
	defaults:{
		coverImage:'img/placeholder.jpg',
		title:'No title',
		author:'Unkonw',
		releaseDate:'Unkown',
		keywords:'None'
	},
	parse:function(response){
		response.id=response._id;
		return response;
	}
});
