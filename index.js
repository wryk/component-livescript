var livescript = require('livescript');
var path = require('path');
var fs = require('fs');

module.exports = function (builder) {
	builder.hook('before scripts', function (pkg, next) {
		if (pkg.config.scripts === undefined) {
			return next();
		}

		var ls = pkg.config.scripts.filter(function(file) {
			return path.extname(file) === '.ls';
		});

		if (ls.length === 0) {
			return next();
		}

		ls.forEach(function (file) {
			var realpath = pkg.path(file);
			var str = fs.readFileSync(realpath, 'utf8');
			var compiled = livescript.compile(str, { filename: realpath, bare: true });
			var filename = file.replace('.ls', '.js');

			pkg.addFile('scripts', filename, compiled);
			pkg.removeFile('scripts', file);
		});

		next();
	});
};