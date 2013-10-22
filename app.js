var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/googleefc2e439fd107693.html', function(req, res){
  res.send('google-site-verification: googleefc2e439fd107693.html');
});

app.listen(process.env.PORT || 3000);