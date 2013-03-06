'use strict'

var MyWebApp = MyWebApp || {};

MyWebApp.Constants = angular.module('mywebapp.constants', []);
MyWebApp.Services = angular.module('mywebapp.services', []);
MyWebApp.Filters = angular.module('mywebapp.filters', []);
MyWebApp.Directives = angular.module('mywebapp.directives', []);
MyWebApp.Controllers = angular.module('mywebapp.controllers', []);

angular
    .module('mywebapp', ['mywebapp.constants', 'mywebapp.services', 'mywebapp.filters', 'mywebapp.directives', 'mywebapp.controllers'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise({ redirectTo: '/' });
    }]);
