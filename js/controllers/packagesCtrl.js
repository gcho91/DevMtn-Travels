angular
  .module("devmtnTravel")
  .controller("packagesCtrl", function($scope, mainSrv, $stateParams) {
    $scope.test = "there's vomit on the sweater already";
    $scope.packageInfo = mainSrv.packageInfo;
    $scope.country = $stateParams;
  });
