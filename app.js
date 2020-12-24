(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        
        var toBuy = this;
        toBuy.toBuyList = ShoppingListCheckOffService.getToBuyList();
        toBuy.movetoAlreadyBoughtList = function (ItemIndex) {
          ShoppingListCheckOffService.movetoAlreadyBoughtList(ItemIndex);

        }
        toBuy.isEmpty = function() {
          if(ShoppingListCheckOffService.counter == 0) {
            return true;
          }
          return false;
        }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.boughtList = ShoppingListCheckOffService.getBoughtList();
        
        alreadyBought.isEmpty = function() {
          if(ShoppingListCheckOffService.counter == 5) {
            return true;
          }
          return false;
        }
        
    }


    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyList = [
            {
              name: "Milk",
              quantity: "2"
            },
            {
              name: "Donuts",
              quantity: "200"
            },
            {
              name: "Cookies",
              quantity: "300"
            },
            {
              name: "Chocolate",
              quantity: "5"
            },
            {
              name: "Coconut",
              quantity: "5"
            }
        ];

        var boughtList = [];
        service.counter = toBuyList.length;

        service.movetoAlreadyBoughtList = function(ItemIndex) {
          
          boughtList.push(toBuyList[ItemIndex]);
          toBuyList.splice(ItemIndex, 1);
          service.counter = service.counter - 1;
        }

        service.getToBuyList = function () {
          return toBuyList;
        };

        service.getBoughtList = function() {
          return boughtList;
        }

        service.boughtListLength = boughtList.length;
    }
})();