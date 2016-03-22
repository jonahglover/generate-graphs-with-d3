var express = require('express');
var app = express();


app.engine('.html', require('ejs').__express);
app.set('views', __dirname);
app.set('view engine', 'html');


var fixtureData = require('./fixture_data.json');
app.locals.barChartHelper = require('./bar_chart_helper');
app.locals.donutChartHelper = require('./donut_chart_helper');


app.get('/', function(req, res) {
  res.render('index', { fixtureData: fixtureData });
});

app.get('/image.png', function(req, res) {
  params = {
        containerId: 'bar-chart-large',
        query : req.query
      }
  app.locals.donutChartHelper.getDonutChartImage(params, function(error, data) {
    res.writeHead('200', {'Content-Type': 'image/png'});
    res.end(data,'binary');
  });  
});

app.listen(4000);
console.log('listening on port '+ (process.env.PORT || 4000));