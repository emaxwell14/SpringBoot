"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var note_1 = require('./note');
var NoteTabComponent = (function () {
    function NoteTabComponent() {
        this.noteChange = new core_1.EventEmitter();
    }
    NoteTabComponent.prototype.onChange = function (note) {
        this.noteChange.emit(note);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', note_1.Note)
    ], NoteTabComponent.prototype, "note", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NoteTabComponent.prototype, "noteChange", void 0);
    NoteTabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-tab',
            templateUrl: 'note-tab.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NoteTabComponent);
    return NoteTabComponent;
}());
exports.NoteTabComponent = NoteTabComponent;
//# sourceMappingURL=note-tab.component.js.map