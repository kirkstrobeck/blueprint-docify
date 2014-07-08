
// Call as `node blueprint-docify/index.js branchName`

var fs = require('fs');
var aglio = require('aglio');

var readApiBlueprint = function (callback) {
  var apiFile = __dirname + '/../api.apib';
  fs.readFile(apiFile, 'utf8', function (err, data) {
    if (callback && typeof (callback) === "function") {
      callback(data);
    } else {
      console.log("error: 329478234");
    }
  });
};

var template = 'default';
var options = {
  template: __dirname + '/../node_modules/aglio/templates/' + template + '.jade',
  locals: {
    _: require('lodash'),
    async: require('async')
  }
};

readApiBlueprint(function (blueprint) {
  aglio.render(blueprint, options, function (err, html, warnings) {
    fs.writeFile(__dirname + '/../' + process.argv[2] + '/index.html', html, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      }
    });
  });
});
