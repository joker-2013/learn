var app=app||{};
app.BookView=Backbone.View.extend({
	model:app.Book,
	tagName:'div',
	className:'bookContainer',
	template:_.template($('#bookTemplate').html()),
	events:{
		'click .delete':'deleteBook'
	},
	render:function(){
		var bookData=this.model.toJSON();
		this.$el.html(this.template(bookData));
		return this;
	},
	initialize:function(){
	},
	deleteBook:function(e){
		//console.log(e);
		//console.log(this)
		this.model.destroy();
		this.stopListening();
		this.remove();
	}
})

//var testView=new app.BookView({
//	model:new app.Book({
//		title:'test title'
//	}),
//	testV:'test'
//})
