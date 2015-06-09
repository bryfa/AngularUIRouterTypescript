/**
 * Created by BryFa on 09/06/15.
 */
/// <reference path="../../_References.ts" />
var Application;
(function (Application) {
    var Module2;
    (function (Module2) {
        'use strict';
        var ModuleController = (function () {
            function ModuleController($scope) {
                this.$scope = $scope;
                $scope.name = "Module2";
                $scope.description = "This is module 2.";
                // todo: initialize scope properties
            }
            ModuleController.$inject = ['$scope'];
            return ModuleController;
        })();
        Module2.ModuleController = ModuleController;
    })(Module2 = Application.Module2 || (Application.Module2 = {}));
})(Application || (Application = {}));
//# sourceMappingURL=ModuleController.js.map