System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UsersView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsersView = (function () {
                function UsersView() {
                    this.data = {};
                    this.current = new core_1.EventEmitter();
                }
                UsersView.prototype.getContent = function (user) { return user.name; };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UsersView.prototype, "data", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], UsersView.prototype, "current", void 0);
                UsersView = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n        <simple-list\n            [list]=\"data\"\n            [content]=\"getContent\"\n            (current)=\"current.next($event)\"></simple-list>\n    ",
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersView);
                return UsersView;
            }());
            exports_1("UsersView", UsersView);
        }
    }
});
//# sourceMappingURL=users-view.js.map