let http = require('http');
let fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;



// 200 Okay : 정상적인 요청
app.get('/', function(request, response) {
 
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"}); 
        fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함
        
    } else {
        // 404 error message : 페이지 오류가 발생했을때,
        response.writeHead(404,{"Content-Type":"text/plain"}); 
        response.write("404 ERROR! ");
        response.end();
    }
 
});

http.createServer(app).listen(port, () => console.log("Listening on "+"3000!"));
