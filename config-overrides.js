const rewireLess = require("react-app-rewire-less-modules");

module.exports = function override(config, env) {

    config = rewireLess(config, env);

    config = rewireLess.withLoaderOptions({
    })(config, env);

    return config;
};
