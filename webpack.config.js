const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'my-dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
