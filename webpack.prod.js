const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: `production`,
    entry: `./src/select2.full.js`,
    externals: {
        jquery: 'jquery'
    }
});
