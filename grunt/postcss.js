module.exports = {
  options: {
    map: false,
    processors: [
      require("pixrem")(),
      require("autoprefixer")({ browsers: "last 2 versions" })
    ]
  },
  dist: {
    src: "src/css/*.css",
    dest: "src/styles.css"
  }
};
