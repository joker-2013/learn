var _root=__dirname,
    express=require('express'),
    path=require('path'),
    mongoose=require('mongoose'),
    port=4711;
console.log(_root)
var app=express();
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(_root,'public')));
	app.use(express.errorHandler({
		dumpExceptions:true,
		showStack:true
	}))
});
//connect to the database
mongoose.connect('mongodb://localhost/library_database');
var Keywords=new mongoose.Schema({
	keyword:String
});

var Book=new mongoose.Schema({
	title:String,
	author:String,
	releaseDate:Date,
	keywords:[Keywords]
});
var BookModel=mongoose.model('Book',Book)

app.get('/api',function(req,res){
	res.send('Lib test')
})

app.get('/api/books',function(req,res){
	console.log('ttttttttt')
	return BookModel.find(function(error,books){
		if(!error){
			return res.send(books);
		}else{
			res.send(error);
			return console.log(error);
		}
	})
})

app.post('/api/books',function(req,res){
	var book=new BookModel({
		title:req.body.title,
		author:req.body.author,
		releaseDate:req.body.releaseDate,
		//keywords:req.body.keywords
	});
	book.save(function(error){
		if(!error){
			return console.log('A new book is created!!');
		}else{
			return console.log(error)
		}
	});
	return res.send(book);
})

app.get('/api/books/:id',function(req,res){
	return BookModel.findById(req.params.id,function(error,book){
		if(!error){
			return res.send(book);
		}else{
			return console.log(error)
		}
	})
})

app.put('/api/books/:id',function(req,res){
	console.log('Updating book '+req.body.title);
	return BookModel.findById(req.params.id,function(error,book){
		book.title=req.body.title;
		book.author=req.body.author;
		book.releaseDate=req.body.releaseDate;
		//book.keywords=req.body.keywords;
		return book.save(function(error){
			if(!error){
				console.log('Update book successly!!');
			}else{
				console.log(error)
			}
			return res.send(book)
		})
	})
})

app.delete('/api/books/:id',function(req,res){
	return BookModel.findById(req.params.id,function(error,book){
		return book.remove(function(error){
			if(!error){
				return res.send('delete success!!');
			}else {
				console.log(error);
				return res.send('delete failed!!')
			}
		})
	})
})

app.listen(port,function(){
	console.log('Express server listening on port %d in %s mode',port,app.settings.env)
});



