(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      
      $scope.lunchMenu = "";
      $scope.message = "";

      var checkMenu = function (string) {
        var message = "";
        if (string.length == 0) {
          return "Please enter data first";
        }else {
          var res = string.split(",");;
          var numberOfItems = res.length;
          if(numberOfItems > 0 && numberOfItems <= 3 ) {
            message="Enjoy!";
          } else if (numberOfItems > 3) {
            message="Too much!";
          }
          return message;
        }
      }
      $scope.displayMessage = function() {
        $scope.message = checkMenu($scope.lunchMenu);
      };
    }
})();