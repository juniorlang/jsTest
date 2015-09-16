/**
 * Created by junior on 2015/9/15.
 */

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var match = pattern.exec(text);
console.log(match);

