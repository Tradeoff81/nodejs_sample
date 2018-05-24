var fs = require('fs');

//동기 IO 방식으로 현재 디렉토리의 test.json을 읽음
var data = fs.readFileSync('./FileIO/test.json', 'utf8');

console.log(data);