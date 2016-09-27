(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .controller('ComplaintsController', ComplaintsController);

  /** @ngInject */
  function ComplaintsController(LxNotificationService, LxDialogService) {
    var vm = this;
    vm.complaint = {};
    vm.anonymous = false;
    vm.dialogId = 'dialog-test';

    vm.toggleAnonymous = function() {
      vm.anonymous = !vm.anonymous;
      vm.complaint.name = '';
      vm.complaint.lastName = '';
      vm.complaint.ci = '';
      vm.complaint.email = '';
      if(vm.anonymous) {
        LxNotificationService.success('Denuncia anónima activada');
        return;
      } else {
        LxNotificationService.warning('Denuncia anónima desactivada');
        return;
      }
    };

    vm.openDialog = function() {
      LxDialogService.open(vm.dialogId);
    };

    vm.manageFile = function(_newFile) {

    }

  }
})();
