process.on('exit', function(){
    console.log('exit Event');
});

//타이머 이벤트 샘플
setTimeout(function(){
    console.log('2초 후 종료');

    process.exit();
}, 2000);