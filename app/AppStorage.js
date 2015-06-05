/**
 * Created by BryFa on 05/06/15.
 */
/// <reference path="_References.ts" />
var Application;
(function (Application) {
    'use strict';
    var AppStorage = (function () {
        function AppStorage() {
        }
        AppStorage.prototype.get = function (key) {
            return JSON.parse(localStorage.getItem(key) || '""');
        };
        AppStorage.prototype.set = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        };
        return AppStorage;
    })();
    Application.AppStorage = AppStorage;
})(Application || (Application = {}));
//# sourceMappingURL=AppStorage.js.map