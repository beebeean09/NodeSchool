//Needed for modular problem
var fs = require('fs');

module.exports = function (directory, filter, callback) {
  var path = process.argv[2];
  var ext = "." + filter;

  fs.readdir(directory, (err, list) => {
    if (err) {
      callback(err, null);
    } else {
      let result = [];
      list.forEach(el => {
        if (el.includes(ext)) {
          result.push(el);
        }
      });
      callback(null, result);
    }
  });
};
