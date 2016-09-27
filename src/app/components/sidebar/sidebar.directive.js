(function () {
  function SidebarCtrl ($scope) {
    $scope.displayed = true;

    $scope.show = function () {
      $scope.displayed = true;
    }

    $scope.hide = function () {
      $scope.displayed = false;
    }

    $scope.toggle = function () {
      $scope.displayed = !$scope.displayed;
    }

    $scope.set = function (status) {
      $scope.displayed = status;
    };

    $scope.isVisible = function () {
      return $scope.displayed;
    }

    $scope.$watch('visible', $scope.set);

  }

  function SidebarDirective () {
    return {
      scope: {
        visible: '='
      },
      controller: 'SidebarCtrl',
      templateUrl: './components/sidebar/view/sidebar.html'
    }
  }

  angular.module('Sidebar', [])
    .controller('SidebarCtrl', SidebarCtrl)
    .directive('sidebar', SidebarDirective);

}());
