var test = require('cloud/test.js');

AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.define("hello1", function(request, response) {
  response.success("Hello world!1");
});


