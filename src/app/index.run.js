(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
