var fs = require('fs'),
path = require('path'),
exec = require('child_process').exec;

//only find folder one time
var isScaned = false;

//callback(err, filePath, isFolder)
function traversal(startPath, callback) {
	var _startPath = path.resolve(startPath);

	fs.stat(_startPath, function(err, stats) {
		if (err) {
			callback(err, null);
			return;
		}

		if (stats.isFile()) {
			callback(null, _startPath, false);
		} else if (stats.isDirectory()) {
			callback(null, _startPath, true);
		} else if (!isScaned && stats.isDirectory()) {
			var child = exec('find ' + _startPath, function(err, stdout, stderr) {
				if (err) {
					callback(err, null);
					return;
				}

				isScaned = true;

				var pathArry = stdout.split('\n');
				pathArry.forEach(function(v, i) {
					//exclude current folder and empty
					if (v !== __dirname && v !== '') {
						traversal(v, callback);
					}
				})

				child.kill();
			})
		}
	})
}

module.exports = traversal;

