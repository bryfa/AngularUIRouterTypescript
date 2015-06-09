/**
 * Created by BryFa on 05/06/15.
 */
/// <reference path="_References.ts" />
var Application;
(function (Application) {
    'use strict';
    var AppController = (function () {
        function AppController($scope) {
            this.$scope = $scope;
            $scope.name = "Application Example";
            // todo: initialize scope properties
        }
        AppController.$inject = ['$scope'];
        return AppController;
    })();
    Application.AppController = AppController;
})(Application || (Application = {}));
//# sourceMappingURL=AppController.js.map