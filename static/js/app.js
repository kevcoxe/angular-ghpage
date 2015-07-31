
var app = angular.module("myApp", ['ui.bootstrap', 'ngRoute']);

// app.config(function($routeProvider) {
//     $routeProvider
//         // route for the home page
//         .when('/', {
//             templateUrl : 'home.html',
//             controller  : 'MyCtrl'
//         })
//         .otherwise({
//         	redirectTo: '/'
//         });
// });

app.controller("MyCtrl", function($scope) {

	$scope.name = "Kevin Coxe";

	$scope.myStyle = {
		"color":"#FFF",
        "background":"#000"
    }

    $scope.newValue = "";
    $scope.newKey = "";

    $scope.add_style = function() {
    	$scope.myStyle[$scope.newKey] = $scope.newValue;
    	$scope.newValue = "";
    	$scope.newKey = "";
    };

});