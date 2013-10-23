var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/googleefc2e439fd107693.html', function(req, res){
  res.send('google-site-verification: googleefc2e439fd107693.html');
});

app.get('/baidu_verify_dX89zb2pJU.html', function(req, res){
  res.send('dX89zb2pJU');
});

app.listen(process.env.PORT || 3000);