'use strict';

var app = angular.module('exampleApp', ['ngMaterial','JSONedit', 'yaru22.jsonHuman','ngAnimate']);
app.controller('MainViewCtrl',['$scope','$filter',MainViewCtrl]);
function MainViewCtrl($scope, $filter) {

    // example JSON
    $scope.shown = false;
}


