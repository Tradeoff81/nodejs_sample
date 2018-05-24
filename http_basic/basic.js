//http 웹서버 모듈 로딩
const http = require('http'); 

const host = '127.0.0.1';
const port = 3000;	

//웹 서버 객체 생성
const server = http.createServer((req, res) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Hello World\n'); 
}); 

//loopback IP에 3000번 포트로 웹서버 시작
server.listen(port, host, () => { 
    console.log(`Server running at http://${host}:${port}/`); 
});


//connection(클라이언트 접속 시) 이벤트 처리
server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('Connected - Client(%s:%d)', addr.address, addr.port);
});


//클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('Client Request Event');
    //console.dir(req);
});


//서버 종료 이벤트 처리
server.on('close', function() {
    console.log('Server Closed.');
});