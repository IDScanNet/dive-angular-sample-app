const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
   plugins: [
    new CopyWebpackPlugin ([
      {
        from: 'node_modules/@idscan/idvc/dist/networks/**/*',
        to: 'src/assets/[folder]/[name].[ext]',
        toType: 'template'
      }
    ])
  ]
};
