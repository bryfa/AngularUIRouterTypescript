/**
 * Created by BryFa on 05/06/15.
 */
/// <reference path="_References.ts" />
module Application {
    'use strict';
    export class AppStorage {
        get(key: string): string {
            return JSON.parse(localStorage.getItem(key) || '""');
        }
        set(key: string, value: any): void {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}