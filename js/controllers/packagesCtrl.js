angular
  .module("devmtnTravel")
  .controller("packagesCtrl", function($scope, mainSrv) {
    $scope.test = "there's vomit on the sweater already";
    $scope.packageInfo = mainSrv.packageInfo;
  });
