(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATE) {
    $stateProvider
      .state(STATE.app, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state(STATE.home, {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state(STATE.forms, {
        templateUrl: 'app/forms/forms.html',
        controller: 'FormsController',
        controllerAs: 'forms'
      })
      .state(STATE.complaints, {
        templateUrl: 'app/complaints/complaints.html',
        controller: 'ComplaintsController',
        controllerAs: 'complaints'
      })
      .state(STATE.reports, {
        templateUrl: 'app/reports/reports.html',
        controller: 'ReportsController',
        controllerAs: 'reports'
      })
      .state(STATE.dashboard, {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
