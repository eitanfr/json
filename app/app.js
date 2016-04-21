'use strict';

var app = angular.module('exampleApp', ['JSONedit', 'yaru22.jsonHuman','ngAnimate']);
app.controller('MainViewCtrl',['$scope','$filter',MainViewCtrl]);
function MainViewCtrl($scope, $filter) {

    // example JSON
    $scope.jsonData = {
        Name: "Joe", "Last Name": "Miller", Address: {Street: "Neverland 42"}, Hobbies: ["doing stuff", "dreaming"]
    };
    $scope.shown = false;

    $scope.$watch('jsonData', function(json) {
        $scope.jsonString = $filter('json')(json);
    }, true);
    $scope.$watch('jsonString', function(json) {
        try {
            $scope.jsonData = JSON.parse(json);
            $scope.wellFormed = true;
        } catch(e) {
            $scope.wellFormed = false;
        }
    }, true);
}


