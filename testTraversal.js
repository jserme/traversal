var traver = require('./traversal');

traver('./', function(err, file) {
	console.log(file);
})

