/**
 * Created by BryFa on 05/06/15.
 */
/// <reference path="_References.ts" />
module Application {
    'use strict';
    export interface IAppControllerScope extends ng.IScope {
        // todo: implement properties
    }

    export class AppController {
        public static $inject = ['$scope'];
        constructor(private $scope:IAppControllerScope) {
            // todo: initialize scope properties
        }
    }
}