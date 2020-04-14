'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';

import './main/main.module';

var myApp = angular.module('myApp', [ngRoute, 'mainModule']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/book', {
            template: require('./book.html'),
            controller: 'BookCtrl',
        })
})

var myControl = myApp.controller('myCtrl', function($scope) {
    $scope.name = 'test1';
});

var bookCtrol = myApp.controller('BookCtrl', function ($scope) {
    $scope.book = '基督山伯爵';
})
