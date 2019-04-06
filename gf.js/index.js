var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', () => {
  console.log('HTML task');
});


gulp.task('stream', () => {
  // Endless stream mode
  watch('../app/index.html', function() {
    gulp.series(html);
  });
});
 

