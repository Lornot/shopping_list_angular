var ShoppingList = angular.module('ShoppingList', []);

ShoppingList.controller('ShoppingListController', function ($scope) {

    $scope.title = 'My Shopping List';

    $scope.newItem = '';
    $scope.errorText = '';
    $scope.items = [
        'Milk',
        'Bread'
    ];

    $scope.addItem = function() {

        $scope.errorText = '';

        if (!$scope.newItem)
            return;

        if($scope.items.indexOf($scope.newItem) == -1) {
            $scope.items.push($scope.newItem);

            $scope.newItem = '';
        } else {
            $scope.errorText = 'This item has already added'
        }
    };

    $scope.removeItem = function(x){

        $scope.items.splice(x, 1);

    };

});