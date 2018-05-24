//객체를 선언하고 객체 단위로 exports하는 예제

var calc = {};

calc.add = function(a, b) {
    return a+b;
}

calc.sub = function(a, b) {
    return a-b;
}

module.exports = calc;