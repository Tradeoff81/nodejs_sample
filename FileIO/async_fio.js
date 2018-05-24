var fs = require('fs');

//비동기 IO 방식으로 현재 디렉토리의 test.json을 읽음
fs.readFile('./FileIO/test.json', 'utf8', function(err, data) {
    console.log(data);
    console.log('파일 읽기 완료!');
});

//요청 후 바로 출력됨.
console.log('파일 읽기 요청 완료.');