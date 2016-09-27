(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, STATE) {
    $state.transitionTo(STATE.home);
  }
})();
