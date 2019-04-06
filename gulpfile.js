var gulp = require('gulp');
var watch = require('gulp-watch');


function html(done) {
  console.log("HTML task");
  done();
}



function stream() {
  // lack of callback is deliberate
  watch('./app/index.html', function () {
        gulp.series(html);
  });
}


exports.stream = stream;