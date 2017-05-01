// FILTERED LS
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
