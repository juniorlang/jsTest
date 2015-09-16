/**
 * Created by junior on 2015/9/16.
 */
// 1.
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
p1 = createPerson("junior", 31, "soft engineer");
console.log("p1=", p1);

// 2.
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}
p2 = new Person("jj", 1, "dd");
console.log("p2=", p2);

// 3
function man() {};
man.prototype = {
    name: "junior",
    age: 31,
    job: "sofe engineer",
    sayName: function () {
        console.log(this.name);
    }
}
var p3 = new man();
p3.sayName();


