(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .directive('customFooter', customFooter);

  /** @ngInject */
  function customFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
        creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var vm = this;
    }
  }

})();
