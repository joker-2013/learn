var app=app||{};
app.LibraryView=Backbone.View.extend({
	el:'#books',
	initialize:function(initializeBooks){
		///this.collection=new app.Library(initializeBooks);
		this.collection=new app.Library();
		this.collection.fetch({reset:true});
		this.render();
		this.listenTo(this.collection,'add',this.renderBook);
		this.listenTo(this.collection,'reset',this.render);
	},
	events:{
		'click #add':'addBook'
	},
	render:function(){
		this.collection.each(function(book){
			this.renderBook(book)
		},this)
	},
	renderBook:function(book){
		var bookView=new app.BookView({
			model:book
		});
		this.$el.append(bookView.render().$el);
	},
	addBook:function(e){
		e.preventDefault();
		console.log('add book button is clicked!!');
		var formData={};
		$('#addBook div').children('input').each(function(index,el){
			var $this=$(el);
			if($this.val()!=''){
				formData[$this.attr('id')]=$this.val();
			};
		});
		//this.collection.add(new app.Book(formData));
		this.collection.create(formData);
		//console.log(this.collection)
	}
})
