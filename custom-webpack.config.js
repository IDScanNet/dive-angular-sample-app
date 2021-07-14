const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
   plugins: [
    new CopyWebpackPlugin ([
      {
        from: 'node_modules/@idscan/idvc/dist/networks/**/*',
        to: path.resolve( __dirname, 'src/assets/networks/[folder]/[name].[ext]' ),
        toType: 'template'
      }
    ])
  ]
};
