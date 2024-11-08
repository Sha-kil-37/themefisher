// gulpfile.js
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const tailwindcss = require("tailwindcss");
const browserSync = require("browser-sync").create();

function css() {
  return gulp
    .src("src/styles/tailwind.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([tailwindcss("./tailwind.config.js"), require("autoprefixer")])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "./",
      routes: {
        "/css": "dist/css",
      },
    },
  });
  gulp.watch("src/styles/**/*.css", css);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.css = css;
exports.watch = gulp.series(css, watchFiles);
