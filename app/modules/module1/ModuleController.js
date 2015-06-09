/**
 * Created by BryFa on 09/06/15.
 */
/// <reference path="../../_References.ts" />
var Application;
(function (Application) {
    var Module1;
    (function (Module1) {
        'use strict';
        var ModuleController = (function () {
            function ModuleController($scope) {
                this.$scope = $scope;
                $scope.name = "Module1";
                $scope.description = "This is module 1.";
                // todo: initialize scope properties
            }
            ModuleController.$inject = ['$scope'];
            return ModuleController;
        })();
        Module1.ModuleController = ModuleController;
    })(Module1 = Application.Module1 || (Application.Module1 = {}));
})(Application || (Application = {}));
//# sourceMappingURL=ModuleController.js.map