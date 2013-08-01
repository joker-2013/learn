var PORT=3000;
var http=require("http");
var url=require('url');
var fs=require("fs");
var e=require('express')
//var mine=require("./mine").types;
var path=require("path");

var server=http.createServer(function(request,response){
	var pathname=url.parse(request.url).pathname;
	var realpath=pathname.substring(1);
	console.log(realpath);
	var ext = path.extname(realpath);
	ext=ext?ext.slice(1):"unkown";
	fs.exists(realpath,function(exists){
		if(!exists){
			response.writeHead(404, {
                		'Content-Type': 'text/plain'
            		});
			console.log("noexists")
			response.write("This request URL "+pathname+" was not found on this server.");
			response.end();
		}else{
			fs.readFile(realpath,function(err,file){
				if(err){
					response.writeHead(500,{
						"Content-Type":"text/plain"
					});
					response.end(err);
				}else{
					response.write(file);
					response.end();
				}
			})
		}
	})
}).listen(8888)
