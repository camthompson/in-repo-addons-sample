/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp({
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass-official/assets/stylesheets'
      ]
    }
  });

  var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
    srcDir: '/',
    destDir: '/assets/fonts'
  });

  app.import('bower_components/jquery-mockjax/dist/jquery.mockjax.js');

  return mergeTrees([app.toTree(), bootstrapFonts]);
};
