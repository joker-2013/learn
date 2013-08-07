var mongo=require('mongodb');
var host='127.0.0.1';
var port = mongo.Connection.DEFAULT_PORT;
console.log('the port is : ' + port);
var db=new mongo.Db('nodejs-introduction',new mongo.Server(host,port,{}));
db.open(function(error){
        console.log('we are connented@! '+ host + ':' + port);

        db.collection('user',function(error,collection){
                console.log('we have the collection!');

                collection.insert({
                        id:'1',
                        name:'ollie parsley',
                        twitter:'ollieparsley',
                        email:'ollie@ollieparsley.com'
                },function(){
                        console.log('successfully inserted ollieparsley')
                });
                 collection.insert({
                        id:'2',
                        name:'joe blogs',
                        twitter:'joeblogs',
                        email:'joeblogs@ollieparsley.com'
                },function(){
                        console.log('successfully inserted joeblogs')
                });
        })

})
