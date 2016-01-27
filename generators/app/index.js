'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Let us write a ' + chalk.green('Quaint') + ' plugin!'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'language',
        message: 'In what language are you writing this plugin?',
        choices: ["JavaScript", "Earl Grey"],
        default: "JavaScript",
        store: true
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        default: "",
        store: true
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
        default: this.appname.replace(" ", "-")
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe it?',
        default: ""
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is your name?',
        default: "Bobby Tables",
        store: true
      },
      {
        type: 'input',
        name: 'license',
        message: 'License?',
        default: "MIT",
        store: true
      },
    ];

    this.prompt(prompts, function (props) {
      props.name2 = props.name.replace(/^quaint-/, "");
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      this.fs.copy(
          this.templatePath('quaint-setup.js'),
          this.destinationPath('quaint-setup.js')
      );
      this.fs.copyTpl(
          this.templatePath('README.md'),
          this.destinationPath('README.md'),
          this.props
      );

      if (this.props.language === "JavaScript") {
          this.fs.copy(
              this.templatePath('js/index.js'),
              this.destinationPath('lib/index.js')
          );
          this.fs.copyTpl(
              this.templatePath('js/setup.js'),
              this.destinationPath('lib/setup.js'),
              this.props
          );
          this.fs.copyTpl(
              this.templatePath('js/_package.json'),
              this.destinationPath('package.json'),
              this.props
          );
      }
      else if (this.props.language === "Earl Grey") {
          this.fs.copy(
              this.templatePath('eg/index.eg'),
              this.destinationPath('src/index.eg')
          );
          this.fs.copyTpl(
              this.templatePath('eg/setup.eg'),
              this.destinationPath('src/setup.eg'),
              this.props
          );
          this.fs.copy(
              this.templatePath('eg/mocha.opts'),
              this.destinationPath('test/mocha.opts')
          );
          this.fs.copy(
              this.templatePath('eg/test.eg'),
              this.destinationPath('test/test.eg')
          );
          this.fs.copyTpl(
              this.templatePath('eg/_package.json'),
              this.destinationPath('package.json'),
              this.props
          );
      }
    },

    projectfiles: function () {
      if (this.props.language === "JavaScript") {
          this.fs.copy(
              this.templatePath('js/gitignore'),
              this.destinationPath('.gitignore')
          );
          this.fs.copy(
              this.templatePath('js/npmignore'),
              this.destinationPath('.npmignore')
          );
      }
      else if (this.props.language === "Earl Grey") {
          this.fs.copy(
              this.templatePath('eg/gitignore'),
              this.destinationPath('.gitignore')
          );
          this.fs.copy(
              this.templatePath('eg/npmignore'),
              this.destinationPath('.npmignore')
          );
      }
    }
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
