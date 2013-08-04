var PORT=3000;
var http=require("http");
var url=require('url');
var fs=require("fs");
var express=require('express')
//var mine=require("./mine").types;
var path=require("path");

//var server=http.createServer(function(request,response){
//	var pathname=url.parse(request.url).pathname;
//	var realpath=pathname.substring(1);
//	console.log(realpath);
//	var ext = path.extname(realpath);
//	ext=ext?ext.slice(1):"unkown";
//	fs.exists(realpath,function(exists){
//		if(!exists){
//			response.writeHead(404, {
//                		'Content-Type': 'text/plain'
//            		});
//			console.log("noexists")
//			response.write("This request URL "+pathname+" was not found on this server.");
//			response.end();
//		}else{
//			fs.readFile(realpath,function(err,file){
//				if(err){
//					response.writeHead(500,{
//						"Content-Type":"text/plain"
//					});
//					response.end(err);
//				}else{
//					response.write(file);
//					response.end();
//				}
//			})
//		}
//	})
//}).listen(8888)
app=module.exports=express();
//app.get('/',function(req,res){
//        console.log(req.host)
//        res.sendfile('backboneTest.html');
//}
app.get('/',function(req,res){
        res.sendfile('backboneTodoMvc.html')
})
app.get('/backboneTest.html',function(req,res){
        res.sendfile('backboneTest.html');
})
app.get('/script/lib/jquery.js',function(req,res){
        res.sendfile('script/lib/jquery.js');
})
app.get('/script/lib/backbone.js',function(req,res){
        res.sendfile('script/lib/backbone.js');
})
app.get('/script/lib/underscore.js',function(req,res){
        res.sendfile('script/lib/underscore.js');
})
app.get('/demo2.js',function(req,res){
        res.sendfile('demo2.js');
})
app.get('/router.js',function(req,res){
        res.sendfile('router.js');
})
app.get('/todos',function(req,res){
        res.sendfile('todos.json');
});
app.post('/todos',function(req,res){
        console.log('todos:post')
})
app.get('/TodoMVC.js',function(req,res){
        res.sendfile('TodoMVC.js')
});
app.get('/backboneTodoStyle.css',function(req,res){
        res.sendfile('backboneTodoStyle.css')
})
app.get('/script/lib/backbone.localStorage.js',function(req,res){
        res.sendfile('script/lib/backbone.localStorage.js')
})
app.get('/script/models/todo.js',function(req,res){
        res.sendfile('script/models/todo.js')
})
app.get('/script/collections/todos.js',function(req,res){
        res.sendfile('script/collections/todos.js')
})
app.get('/script/views/todos.js',function(req,res){
        res.sendfile('script/views/todos.js')
})
app.get('/script/views/app.js',function(req,res){
        res.sendfile('script/views/app.js')
})
app.get('/script/routers/router.js',function(req,res){
        res.sendfile('script/routers/router.js');
})
app.get('/script/app.js',function(req,res){
        res.sendfile('script/app.js')
})
app.get('/css/base.css',function(req,res){
        res.sendfile('css/base.css')
});
app.get('/css/bg.png',function(req,res){
        res.sendfile('css/bg.png')
})
app.listen(8888)
