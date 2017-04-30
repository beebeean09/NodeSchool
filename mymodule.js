
module.exports = function mymodule(args) {
  var fs = require('fs');
  var path = process.argv[2];
  var ext = "." + process.argv[3];

  fs.readdir(path, (err, list) => {
    if (err) {
      return console.log(err);
    } else {
      list.forEach(el => {
        if (el.includes(ext)) {
          console.log(el);
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
};
