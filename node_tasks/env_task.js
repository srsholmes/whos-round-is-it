var fs = require('fs');
var path = require('path');

//Usage
// NODE_ENV=ios node env_task.js
// NODE_ENV=android node env_task.js
// NODE_ENV=web node env_task.js
// node ../src/js/app.js

var buildEnv = process.env.NODE_ENV;

function getEnvironments() {
	var viewPath = path.resolve('../src/js/components');
	return fs.readdirSync(viewPath)
		.filter(function(file) {
			return fs.statSync(path.join(viewPath, file)).isDirectory();
		});
}

function getPackageFile() {
	return `var app = require('./${buildEnv}/App.jsx');`;
}

function createFile() {
	var availableEnvironments = getEnvironments();
	if (availableEnvironments.indexOf(buildEnv) === -1) return console.error('No build process for ' + buildEnv);
	fs.writeFileSync(path.resolve('../src/js/components/index.js'), getPackageFile(), 'utf8');
}

createFile();