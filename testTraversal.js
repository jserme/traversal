var traver = require('./traversal');

traver('./', function (err, file, isFolder) {
  console.log(file, isFolder);
})