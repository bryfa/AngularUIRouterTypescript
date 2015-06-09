/**
 * Created by BryFa on 09/06/15.
 */
/// <reference path="../../_References.ts" />
var Application;
(function (Application) {
    var Module2;
    (function (Module2) {
        var ModuleConfig = (function () {
            function ModuleConfig($stateProvider, $urlRouterProvider) {
                $stateProvider.state("module2", {
                    abstract: false,
                    url: '/module2',
                    templateUrl: 'app/modules/module2/main.html',
                    controller: Application.Module2.ModuleController
                });
            }
            return ModuleConfig;
        })();
        Module2.ModuleConfig = ModuleConfig;
    })(Module2 = Application.Module2 || (Application.Module2 = {}));
})(Application || (Application = {}));
angular.module('app.module2', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    return new Application.Module2.ModuleConfig($stateProvider, $urlRouterProvider);
}]);
//# sourceMappingURL=ModuleConfig.js.map