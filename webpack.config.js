const path = require('path')
const WebpackObfuscator = require('webpack-obfuscator');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new WebpackObfuscator({
      rotateStringArray: true
    })
  ]
};
