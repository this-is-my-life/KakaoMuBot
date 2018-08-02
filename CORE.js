var API = require('express');
var http = require('http')
var mu = API();

mu.get('/keyboard', function(req, res) {
    var data = {
        "type" : "buttons",
        "buttons" : ["선택 1", "선택 2", "선택 3"]
      };
    res.json(data);
});

http.createServer(mu).listen(8080, function() {
    console.log('서버 실행중...');
});