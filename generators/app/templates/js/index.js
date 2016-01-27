
function install(engine, options) {
    // Plugin code goes here.
    // TIP: you can test your plugin with the command:
    // quaint -p ./lib -e 'code that uses your custom rule or macro'
}

function main(quaintEngine, options) {
    if (!quaintEngine.isQuaintEngine) {
        options = quaintEngine;
        return function (realQuaintEngine) {
            return main(realQuaintEngine, options);
        }
    }
    options = options || {};
    install(quaintEngine, options);
}

module.exports = main;
