var express = require('express');
//var nunjucks  = require('nunjucks');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();


app.use(bodyparser.urlencoded({
  extended: false
}));

app.listen(3000);

app.get("/", function(request, response) {


  response.sendFile(__dirname + "/views/index.html");


});

app.get('/lipu', function(request, respose) {

  respose.send({
      name: "brahmanada",
      age: 33,
      add: "telengana"
    }


  );




});

//curl --data "somethinng=hello" localhost:3000/po
app.post('/po', function(RT, RS) {

  console.log(RT.body);

  RS.send("server data" + JSON.stringify(RT.body));

});


//curl 'localhost:3000/api?something=hello'
app.get('/api', function(RT, RS) {

  console.log(RT.query)

  RS.send(RT.query);

});
