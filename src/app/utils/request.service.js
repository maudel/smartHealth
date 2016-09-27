(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .service('RequestService', RequestService);

  function RequestService(Restangular, toastr, UMAEYE_URL, LOCAL_URL) {
    var service = {};
    Restangular.setBaseUrl(LOCAL_URL);
    // Restangular.setBaseUrl(UMAEYE_URL);
    // Restangular.setBaseUrl('http://localhost\\:8080');

    service.getUsers = function() {
      var baseRequest;
      var request;
      baseRequest = Restangular.all(UMAEYE_URL + 'users');
      request = baseRequest.getList();
      return request;
    };

    service.getControlPoints = function() {
      var baseRequest;
      var request;
      baseRequest = Restangular.all(LOCAL_URL + 'controlPoints');
      request = baseRequest.getList();
      return request;
    };

    return service;
  }

})();
