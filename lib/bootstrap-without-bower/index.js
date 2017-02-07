/*jshint node:true*/

var Funnel = require('broccoli-funnel');
var path = require('path');

module.exports = {
  name: 'bootstrap-without-bower',

  init: function() {
    this._super.apply(this, arguments);
    this.bootstrapPath =
        path.dirname(require.resolve('bootstrap-sass/package.json')) + '/assets';
  },

  included: function(app) {
    var fontExtensions = ['eot', 'svg', 'ttf', 'woff', 'woff2'];
    var fontBase =
      'vendor/bootstrap/fonts/bootstrap/glyphicons-halflings-regular.';
    fontExtensions.forEach(function(extension) {
      app.import(fontBase + extension, { destDir: '/assets/fonts' });
    });
  },

  treeForStyles: function() {
    return new Funnel(this.treeGenerator(path.join(this.bootstrapPath, 'stylesheets')), {
      destDir: '/app/styles'
    });
  },

  treeForVendor: function() {
    return new Funnel(this.bootstrapPath, {
      destDir: '/bootstrap',
    });
  }
};
