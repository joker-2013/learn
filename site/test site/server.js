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
app.get('/fashionWeekList',function(req,res){
	function getRandomString(len) {
    	len = len || 32;
    	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 
    	var maxPos = $chars.length;
    	var pwd = '';
    	for (var i = 0; i < len; i++) {
        	pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    	}
    	return pwd;
	}
	var charNum,imgNum,i=0,listNm=100,descString='',resJson={},listArray=[];
	for(;i<listNm;i++){
		imgNum=Math.floor(Math.random()*21);
		//charCode=Math.floor(Math.random()*26)+65;
		//descString=String.fromCharCode(charCode);
		descString=getRandomString(Math.floor(Math.random()*200));
		listArray.push({
			index:i,
			img:imgNum,
			description:descString
		});
	}
	resJson.num=listArray.length;
	resJson.list=listArray;
	res.json(resJson);
	res.end();

})

app.listen(port,function(){
	console.log('Express server listening on port %d in %s mode',port,app.settings.env)
});



