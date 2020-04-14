'use strict';

import * as angular from 'angular';

var myApp = angular.module('myApp', []);

var myControl = myApp.controller('myCtrl', function($scope) {
    $scope.name = 'test1';
});
