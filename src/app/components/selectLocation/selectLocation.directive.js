(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .directive('selectLocation', selectLocation);

  /** @ngInject */
  function selectLocation() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/selectLocation/selectLocation.html',
      scope: {
      },
      controller: SelectLocationController,
      controllerAs: 'selectLocation',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SelectLocationController(LxDialogService) {
      var vm = this;
      vm.dialogId = 'dialog-test';

      vm.openDialog = function() {
        LxDialogService.open(vm.dialogId);
      };
    }
  }

})();
