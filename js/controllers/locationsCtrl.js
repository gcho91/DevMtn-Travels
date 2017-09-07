angular
  .module("devmtnTravel")
  .controller("locationsCtrl", function($scope, mainSrv) {
    $scope.test = "KNEES WEAK ARMS ARE HEAVY";
    $scope.travelInfo = mainSrv.travelInfo;
  });
