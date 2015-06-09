/**
 * Created by BryFa on 05/06/15.
 */
/// <reference path="_References.ts" />
var Application;
(function (Application) {
    'use strict';
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state("module1", {
                abstract: false,
                url: '/module1',
                templateUrl: 'app/modules/module1/main.html',
                controller: Application.Module1.ModuleController
            }).state("home", {
                abstract: false,
                url: '/',
                templateUrl: 'app/views/home.html'
            }).state("about", {
                abstract: false,
                url: '/about',
                templateUrl: 'app/views/about.html',
                controller: Application.AppController
            });
        }
        return AppConfig;
    })();
    Application.AppConfig = AppConfig;
})(Application || (Application = {}));
angular.module('app', ['ui.router', 'app.module2']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    return new Application.AppConfig($stateProvider, $urlRouterProvider);
}]);
//# sourceMappingURL=AppConfig.js.map