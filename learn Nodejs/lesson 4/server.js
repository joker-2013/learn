var http=require('http');
var fs=require('fs');
console.log('Starting');
var config=JSON.parse(fs.readFileSync('config.json'));
var host=config.host;
var port=config.port;
var server=http.createServer(function(req,res){
        console.log('Received request: '+ req.url);
        fs.readFile('./public'+req.url,function(error,data){
                if(error){
                        res.writeHead(404,{'Content-type':'text/plain'});
                        res.end('Sorry!The page is not found~!');
                }else{
                        res.writeHead(200,{'Content-type':'text/plain'});
                        res.end(data);
                }
        })
});
server.listen(port,host,function(){
        console.log('Listening '+host+ ':'+port);
});
fs.watchFile('config.json',function(){
        config=JSON.parse(fs.readFileSync('config.json'));
        port=config.port;
        host=config.host;
        server.close();
        server.listen(port,host,function(){
                console.log('Now listening ' +host+':' +port);
        })
})
