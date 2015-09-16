/**
 * Created by junior on 2015/9/15.
 */
var person = {age: 12};
Object.defineProperty(person, "name", {writable: false, value: "jj", configurable: false});
person.name = "jjj";
delete person.name;
console.log(person.age);

var person1 = {name: "kk"};
console.log(person1);

var book = {_year: 1, edition: 1};
Object.defineProperty(book, "year", {
    get: function() {
        return this._year;
    },
    set: function(value) {
        this._year = value;
    }
});

var p1keys = Object.keys(person1);
console.log("p1keys=", p1keys);


book.year = 2015;
console.log("book.year=", book.year);



