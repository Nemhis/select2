const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: `production`,
    entry: {
        'select2': `./src/select2.full.js`,
        'i18n/ru': './src/i18n/ru.js'
    },
    externals: {
        jquery: 'jquery'
    }
});
