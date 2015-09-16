/**
 * Created by junior on 2015/9/14.
 */

var colors = ["red", "green", "blue"];

colors.push("yellow");
colors.pop();
var item = colors.shift();

colors.unshift("pink", "skyblue");
console.log(colors.join(","));

colors.splice(0, 1, "btnface");
console.log(colors.join(","));

colors.reverse();
console.log(colors.join(","));

colors.sort();
console.log(colors.join(","));


var values = [0, 1, 5, 10, 15];
values.sort( function compare(value1, value2){     return value2 - value1; }   );
console.log(values);
