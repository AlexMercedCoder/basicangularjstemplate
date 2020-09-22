// Define the `myApp` module
var myApp = angular.module("myApp", []);

// Define the `ctrl` controller on the `myApp` module
myApp.controller("ctrl", function ($scope) {
  $scope.hello = "Hello World";
  this.goodbye = "Goodbye World"
});
