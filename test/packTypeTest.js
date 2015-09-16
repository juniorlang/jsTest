/**
 * Created by junior on 2015/9/15.
 */
var s1 = "abcdefg";
var s = s1.substring(2);
console.log("charAt", s1[1]);

var num = 10;
console.log("num=", num.toPrecision(2));

var stringValue = "hello world";
console.log("slice", stringValue.slice(3, -5));
console.log("substr", stringValue.substr(3, -5));
console.log("substring", stringValue.substring(3, -5));


var text = "cat, bat, sat, fat";
var result = text.replace(/(.at)/g, "word ($1)");
console.log(result);

function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
            case "<":                 return "&lt;";
            case ">":                 return "&gt;";
            case "&":                 return "&amp;";
            case "\"":                return "&quot;";
        }
    });
}
console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",", 2);
console.log(colors1);
eval("console.log(Math.E)");

var num1 = Math.floor(Math.random() * 10 + 1);
console.log("num", num1);