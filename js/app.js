var app = angular.module('ngCountry', ['ui.bootstrap']);
app.controller('country', function ($scope, $http) {

    $http.get('../country.json').
        then(function (response) {
            $scope.country = response.data;
            
        });

   

});
