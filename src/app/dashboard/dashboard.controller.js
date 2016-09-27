(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(RequestService) {
    var vm = this;

    RequestService.getControlPoints({})
      .then(function(response){
        vm.controlPoints = response;
      });
  }
})();
