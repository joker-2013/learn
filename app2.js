
/**
 * Module dependencies.
 */

var express = require('express')
 // , routes = require('./routes')
  //, user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  //, MongoStore = require('connect-mongo')  这个语句书上有误，版本问题
  //, MongoStore = require('connect-mongo')(express)
  //, settings = require('./settings');

var app = express();

// all environments
app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.router(routes));   这句话也有误
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
//app.use(express.session({
//	secret:settings.cookieSecret,
//	store:new MongoStore({
//		db:settings.db
//	})
//}))
//routes(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/u/:user', routes.user);
//app.post('/post', routes.post);
//app.get('/reg', routes.reg);
//app.post('/reg',routes.doReg);
//app.get('/login',routes.login);
//app.post('/login',routes.doLogin);
//app.get('/logout',routes.logout);

app.get('/',function(req,res){
        //console.log(req)
        res.sendfile('backboneTest.html');
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
