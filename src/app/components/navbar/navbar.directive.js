(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .directive('mainNavbar', mainNavbar);

  /** @ngInject */
  function mainNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state, STATE) {
      var vm = this;

      vm.selectedOption = 'home';

      vm.goToView = function(view) {
        vm.selectedOption = view;
        switch(view) {
          case 'home':
            if($state.$current.includes[STATE.home]) {
              $state.reload(STATE.home);
            } else {
              $state.go(STATE.home);
            }
            break;
          case 'forms':
            if($state.$current.includes[STATE.forms]) {
              $state.reload(STATE.forms);
            } else {
              $state.go(STATE.forms);
            }
            break;
          case 'complaints':
            if($state.$current.includes[STATE.complaints]) {
              $state.reload(STATE.complaints);
            } else {
              $state.go(STATE.complaints);
            }
            break;
          case 'reports':
            if($state.$current.includes[STATE.reports]) {
              $state.reload(STATE.reports);
            } else {
              $state.go(STATE.reports);
            }
            break;
          case 'dashboard':
            if($state.$current.includes[STATE.dashboard]) {
              $state.reload(STATE.dashboard);
            } else {
              $state.go(STATE.dashboard);
            }
            break;
          default:
        }
      };
    }
  }

})();
