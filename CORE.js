/*
	μBot k1.0 Core. 
	-------------------------
	PMH Studio / Proj- μBot | Smart & Cute Kakao Bot_Mu~☆ 
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

var API = require('express');
var http = require('http')
var bodyParser = require('body-parser');
var mu = API();

mu.use(bodyParser.urlencoded({extended: false}));
mu.use(bodyParser.json());

mu.get('/keyboard', function(req, res) {
    var data = {
        "type" : "buttons",
        "buttons" : ["> Start μBot"]
      };
    res.json(data);
});

mu.post('/message', function(req, res) {
    var input = req.body.content;
    console.log('Input: '+ input);
    var send ={};
    switch (input) {

        // Commands ...................

        case '> Start μBot':
            send = {
                'message': {
                    'text': 'ㅎㅇ뮤~★'
                }
            }
            break;

        default:
            send = {
                'message': {
                    'text': '뮤가 알지못하는 단어다뮤~!'
                }
            }
            break;

        // ............................

    };
    res.json(send);
});

http.createServer(mu).listen(8080, function() {
    console.log('서버 실행중...');
});
