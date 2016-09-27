/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('umaeyeApp')
      
    // Global configurations
    .constant('CONFIG', {
      __SERVICE_PATH : '/'
    })

    // Available states on the umaeye app
    .constant('STATE', {
      app:             'app',
      home:            'app.home',
      complaints:      'app.complaints',
      forms:           'app.forms',
      reports:         'app.reports',
      dashboard:       'app.dashboard'
    });

})();
