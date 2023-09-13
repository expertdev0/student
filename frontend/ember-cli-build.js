'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    'ember-bootstrap': {
      importBootstrapCSS: true,
      blacklist: ['bs-popover', 'bs-accordion'],
    },
  });
  // Import fusioncharts library
  app.import('node_modules/fusioncharts/fusioncharts.js');
  app.import('node_modules/fusioncharts/fusioncharts.charts.js');
  app.import('node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js');
  app.import('node_modules/fusioncharts/themes/fusioncharts.theme.zune.js');
  // Import bootstrap library
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  // Import jquery library
  app.import('node_modules/jquery/dist/jquery.js');
  // Import toastr css
  app.import('node_modules/toastr/build/toastr.css');

  return app.toTree();
};
