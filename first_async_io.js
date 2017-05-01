// First ASYNC
var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.split('\n').length - 1);
  }
});
