/*jshint node:true*/

var Funnel = require('broccoli-funnel');
var path = require('path');

module.exports = {
  name: 'mockjax-without-bower',

  included: function(app) {
    app.import('vendor/jquery-mockjax/jquery.mockjax.js');
  },

  treeForVendor: function() {
    var mockjaxPath = path.dirname(require.resolve('jquery-mockjax'));

    return new Funnel(mockjaxPath, {
      destDir: 'jquery-mockjax',
      files: ['jquery.mockjax.js']
    });
  }
};
