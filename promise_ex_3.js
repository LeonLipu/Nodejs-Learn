var q = require('q');
var githubnode = require('github');

var github=new githubnode({
  version :"3.0.0"
});
//This is normal flow which promise is not used
var getUrl=function(user,callback){

  github.search.users({q:user},function (err,data){

    if (err)
    callbakc(err,null);
    else {
      var url =data.items[0].avatar_url;
      callback(null,url)
    }

  });
}

getUrl('leonlipu',function (err,data){

  if (err)
  console.log(err);
  else {
    console.log(data);
  }


});
//This using promise and q

var getUrlbyq=function (user){

  var defered=q.defer();


  github.search.users({q:user},function (err,res){

    if(err)
    {

      defered.reject(msg);
    }
    else {
      defered.resolve(res.items[0].avatar_url);
    }

  });
 return  defered.promise;

};


getUrlbyq('Leonlipu').then(function (data){

  console.log(data);

});
