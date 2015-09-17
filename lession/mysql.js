var mysql = require('mysql');


var connection =mysql.createConnection({

  host:'localhost',
    user:'root',
    password:'sss',
    database:'mydb'


  });

  connection.connect(function(err){

    if (err){

      console.log("something happened");
    }

    console.log("connection is established ");

  });


connection.query('select * from student;',function(err,rows,field){

  if (err)
  throw err;


  console.dir(rows);




});
