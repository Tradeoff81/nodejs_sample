//각 함수 및 객체 단위로 exports하여 테스트하는 예제

var exp_calc = require('./exp_module');         //함수 exports
var modexp_calc = require('./modexp_module');   //객체 exoprts

console.log(exp_calc.add(1,2));
console.log(modexp_calc.add(1,2));