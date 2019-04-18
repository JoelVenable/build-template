module.exports = {
  scripts: {
    files: [
      "./src/js/**/*.js",
      "!node_modules/**/*.js"
    ],
    tasks: ["eslint"],
    options: {
      spawn: false,
      debounceDelay: 1000
    }
  }
}