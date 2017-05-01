// First SYNC
var fs = require('fs');

var path = process.argv[2];
var buffer = fs.readFileSync(path);

console.log(process.argv[2]);
console.log(path);
console.log(buffer);
console.log(buffer.toString());

var contents = buffer.toString();
var length = contents.split('\n').length;
console.log(length - 1);
