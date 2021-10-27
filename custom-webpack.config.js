const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "node_modules/@idscan/idvc/dist/networks/networks/*",
        to: path.resolve(
          __dirname,
          "dist/assets/networks/[name].[ext]"
        ),
        toType: "template",
      },
    ]),
  ],
};
