/*globals describe */

var test = require("./helpers").testSingleItem;

var path = require("path");
var fs = require("fs");
var testCasesPath = path.join(__dirname, "moduleMinimizeTestCases");
var testCases = fs.readdirSync(testCasesPath);

describe("module", function() {
	testCases.forEach(function(name) {
		var source = fs.readFileSync(path.join(testCasesPath, name, "source.css"), "utf-8");
		var expected = fs.readFileSync(path.join(testCasesPath, name, "expected.css"), "utf-8");

		test(name, source, expected, "?module&minimize&sourceMap&-discardComments&localIdentName=_[local]_");
	});
});
