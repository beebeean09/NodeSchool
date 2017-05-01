// BABY STEPS
// let array = process.argv.slice(2);
// let sum = 0;
//
// array.forEach(el => {
//   sum += parseInt(el);
// });
//
// console.log(sum);

// First SYNC
// var fs = require('fs');
//
// var path = process.argv[2];
// var buffer = fs.readFileSync(path);

// console.log(process.argv[2]);
// console.log(path);
// console.log(buffer);
// console.log(buffer.toString());

// var contents = buffer.toString();
// var length = contents.split('\n').length;
// console.log(length - 1);

// First ASYNC
// var fs = require('fs');
//
// var path = process.argv[2];
//
// fs.readFile(path, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.split('\n').length - 1);
//   }
// });

// FILTERED LS
// var fs = require('fs');
// var path = process.argv[2];
// var ext = "." + process.argv[3];
//
// fs.readdir(path, (err, list) => {
//   if (err) {
//     return console.log(err);
//   } else {
//     list.forEach(el => {
//       if (el.includes(ext)) {
//         console.log(el);
//       }
//     });
//   }
// });

// MAKE IT MODULAR
var mymodule = require('./mymodule.js');

console.log(mymodule());
// mymodule();
