
module.exports = mymodule;

function mymodule(directory, filter, callback) {
  var fs = require('fs');
  var path = process.argv[2];
  var ext = "." + process.argv[3];
  console.log('hello');
console.log(directory);
console.log(filter);
console.log(callback);
  fs.readdir(path, (err, list) => {
    if (err) {
      return err;
    } else {
      list.forEach(el => {
        if (el.includes(ext)) {
          return el;
        }
      });
    }
  });

//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data.split('\n').length - 1);
//     }
//   });
}
