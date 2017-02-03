
var inq = require("inquirer-shortcuts");
var chalk = require("chalk");

function quaintSetup(config, instructions) {
    var shortName = "<%= name2 %>";
    var url = "https://github.com/<%= username %>/<%= name %>";
    console.log('Plugin documentation: ' + chalk.bold.cyan(url));

    data = config.plugins[shortName] =
        config.plugins[shortName] || {};

    // Configure the plugin using inq.input, inq.confirm, inq.list, and so on.
    // inq.input("Something", {default: "whatever"}).then(function (result) { ... });
}

module.exports = quaintSetup;
