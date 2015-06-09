/**
 * Created by BryFa on 09/06/15.
 */
/// <reference path="../../_References.ts" />
module Application.Module2 {
    'use strict';
    export interface IModuleControllerScope extends ng.IScope {
        // todo: implement properties
        name:string;
        description:string;
    }

    export class ModuleController {
        public static $inject = ['$scope'];
        constructor(private $scope:IModuleControllerScope) {
            $scope.name = "Module2";
            $scope.description = "This is module 2.";
            // todo: initialize scope properties
        }
    }
}