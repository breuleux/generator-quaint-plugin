
function install(engine, options) {
    // Plugin code goes here.
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
