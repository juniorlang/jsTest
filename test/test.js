/**
 * Created by junior on 2015/9/14.
 */

function setName(obj) {     obj.name = "Nicholas";
    obj = new Object();     obj.name = "Greg";}
var person = new Object();
setName(person);
console.log(person.name);    //"Nicholas"

console.log(person instanceof Object);
person = null;

var person = {     name : "Nicholas",     age : 29 };

function display(args) {
    var output = "";
    if (typeof args.name == "string") {
        output += "name=" + args.name;
    } else if (typeof  args.age == "number") {
        output += "age=" + args.age;
    }

    console.log(output);
}

display({name: "abc"});