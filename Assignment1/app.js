(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.checkIfMuch = function() {
      var arrayOfItems = $scope.lunchItems.split(',');
      console.log(arrayOfItems);
      if (arrayOfItems.length == 0){
          $scope.message = "Please enter data first";
      }
      else if (arrayOfItems.length == 1 && arrayOfItems[0] == "") {
          $scope.message = "Please enter data first";
      }
      else if (arrayOfItems.length <= 3){
          $scope.message = "Enjoy!";
      }
      else{
          $scope.message = "Too much!";
      }
  };
}

})();