

var calc = require("./cal");

var a = 30;
var b = 20;

console.log(calc.add(a,b));
console.log(calc.sub(a,b));
console.log(calc.mul(a,b));
console.log(calc.div(a,b));

module.exports={add,sub,mul,div}
