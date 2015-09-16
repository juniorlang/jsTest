/**
 * Created by junior on 2015/9/15.
 */

function  factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
var func1 = factorial;
factorial = function(){     return 0; };

console.log(func1(8));

var color = "red";
var o = {color:"blue"};
function sayColor() {
    console.log(this, this.color);
}

sayColor();
o.sayColor = sayColor;
o.sayColor();

if (sayColor === o.sayColor)
    console.log("=");

function outer(){     inner();  }
function inner(){     console.log(arguments.callee.caller); }
outer();

console.log(inner.length);

function sum(num1, num2) {
    return num1 + num2;
}

function call1() {
    return sum.apply(this, arguments);
}
function call2(num1, num2) {
    return sum.call(this, num1, num2);
}
console.log("call1", call1(10, 20));
console.log("call2", call2(10, 20));

//sayColor(window);
sayColor.call(o);
sayColor.call(this);
var objSayColor = sayColor.bind(o);
objSayColor();