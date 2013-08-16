var _root=__dirname,
    express=require('express'),
    path=require('path'),
    mongoose=require('mongoose'),
    port=8888;
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
app.listen(port,function(){
	console.log('Express server listening on port %d in %s mode',port,app.settings.env)
});



