(function() {
  'use strict';

  angular
    .module('umaeyeApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($firebaseObject, $firebaseArray) {
    var vm = this;
    vm.chartConfig = {
      options: {
        chart: {
          type: 'line'
        }
      },
      series: [{
        data: [10, 15, 12, 8, 7]
      }],
      title: {
        text: 'Pulso Cardiaco'
      },
      loading: vm.presion || false
    };

    var refPatient = firebase.database().ref('datosPaciente/');
    var refSensor = firebase.database().ref('DatosArduino/');
    vm.paciente = $firebaseObject(refPatient);
    vm.presion = $firebaseArray(refSensor);
    //vm.chartConfig.series[0].data = vm.presion;
    vm.presion.$loaded(function() {
      if (vm.presion.length !== 0) {
        var result = vm.presion.map(function(a) {return a.Frecuencia;});
        vm.chartConfig.series[0].data = result.splice(1,5);
      }
    });
  }
})();
