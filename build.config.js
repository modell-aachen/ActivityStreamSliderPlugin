/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: '<%= pub_dir %>/bin',
  pub_dir: 'pub/System/ActivityStreamSliderPlugin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ '<%= pub_dir %>/src/**/*.js', '!<%= pub_dir %>/src/**/*.spec.js', '!<%= pub_dir %>/src/assets/**/*.js' ],
    assets: '<%= pub_dir %>/src/assets/*',

    atpl: [ '<%= pub_dir %>/src/app/templates/*.tpl.html' ],
    ctpl: [ '<%= pub_dir %>/src/common/**/*.tpl.html' ],

    html: [ '<%= pub_dir %>/src/index.html' ],
    less: '<%= pub_dir %>/src/less/main.less'
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      '<%= pub_dir %>/vendor/angular/angular.js',
      '<%= pub_dir %>/vendor/angular-animate/angular-animate.min.js',
      '<%= pub_dir %>/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      '<%= pub_dir %>/vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      '<%= pub_dir %>/vendor/simpler-sidebar/dist/jquery.simpler-sidebar.min.js',
      '<%= pub_dir %>/vendor/moment/moment.js',
      '<%= pub_dir %>/vendor/moment/locale/de.js',
      '<%= pub_dir %>/vendor/angular-moment/angular-moment.min.js',
      '<%= pub_dir %>/vendor/angular-sanitize/angular-sanitize.min.js'
    ],
    css: [
    ],
    assets: [
    ]
  },
};
