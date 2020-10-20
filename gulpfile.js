const { src, dest } = require('gulp');

function copyNetworks(cb) {
  return src('node_modules/@idscan/idvc/dist/networks/**/*')
    .pipe(dest('dist/dvs-sample-angular-app/assets/networks'));
}

exports.default = copyNetworks
