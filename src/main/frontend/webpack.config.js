const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const common = {
    entry: path.join(__dirname, 'src/index.tsx'),
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            include: path.join(__dirname, 'src'),
            use: [
              'style-loader',
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true
                }
              }
            ]
          }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../../src/main/resources/static')
    }
}

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            contentBase: __dirname + '/../../../src/main/resources/static',
            port: 9090,
            proxy: {
                '/pomotodo': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}