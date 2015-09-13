var express = require('express');


var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.listen(3000);

app.get("/", function(request, response) {


  response.send("brahmanadn kar")


});

app.get('/lipu', function(request, respose) {

  respose.send(

    {
      name: "brahmanada",
      age: 33,
      add: "telengana"
    }


  );




});

//curl --data "somethinng=hello" localhost:3000/po
app.post('/po', function(RT, RS) {

  console.log(RT.body);

  RS.send("server data"+JSON.stringify(RT.body));

});


//curl 'localhost:3000/api?something=hello'
app.get('/api', function(RT, RS) {

  console.log(RT.query)

  RS.send(RT.query);

});
