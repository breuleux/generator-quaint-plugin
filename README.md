
# generator-quaint-plugin

Generate scaffolding for a Quaint plugin written in Earl Grey.


## Usage

    npm install -g generator-quaint-plugin
    yo quaint-plugin

You may write your plugin in JavaScript, or in
[Earl Grey](http://earl-grey.io).

[Relevant documentation.](http://breuleux.github.io/quaint/plugins/write.html)


## JavaScript 

Resulting directory structure:

    quaint-my-plugin
      .gitignore
      .npmignore
      package.json
      quaint-setup.js
      lib
        index.js
        setup.js

* `index.js` contains the plugin code
* `setup.js` contains the code to configure the plugin interactively


## Earl Grey

Resulting directory structure:

    package-root
      .gitignore
      .npmignore
      package.json
      quaint-setup.js
      src
        index.eg
        setup.eg
      test
        mocha.opt
        test.eg

* `index.eg` contains the plugin code
* `setup.eg` contains the code to configure the plugin interactively


### Commands

In an Earl Grey project, the following commands are defined for
convenience:

To compile the project to JS:

    npm run compile

Lazy version of `compile`:

    npm run refresh

