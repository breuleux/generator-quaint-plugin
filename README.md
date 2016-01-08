
# generator-quaint-plugin

Generate scaffolding for a Quaint plugin written in Earl Grey.

## Usage

    npm install -g generator-quaint-plugin
    yo quaint-plugin

Resulting directory structure:

    package-root
      .gitignore
      .npmignore
      package.json
      src
        index.eg
      test
        mocha.opt
        test.eg

## Commands

The following commands are defined for convenience:

To compile the project to JS:

    npm run compile

Lazy version of `compile`:

    npm run refresh

