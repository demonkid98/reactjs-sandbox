var express = require('express');

var app = express();

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade')
app.use(express.static('public'));

app.use(function(req, rsp, next) {
  rsp.locals.paths = {
    js: '/js'
  };
  next();
});

app.get('/', function(req, rsp) {
  rsp.render('index');
});

app.listen(3000, function() {
  console.log('app is now ready');
});
