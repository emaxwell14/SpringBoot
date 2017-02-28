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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/share");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
// TODO Replace with real server call
exports.NOTES = [
    { id: 11, name: 'Shopping', body: 'Fish, Chips' },
    { id: 12, name: 'Movies', body: 'Scarface, Star Wars' },
    { id: 13, name: 'TV', body: 'South Park, Futurama, The Wire' },
    { id: 14, name: 'TODO', body: 'Gym, Clothes' },
    { id: 15, name: 'Other', body: 'blah blah' }
];
var NoteService = (function () {
    /**
     * Sets up event for when the selected note changes
     */
    function NoteService(http) {
        var _this = this;
        this.http = http;
        // share() allows multiple subscribers
        this.noteChange = new Observable_1.Observable(function (observer) {
            return _this.observer = observer;
        }).share();
    }
    /**
    * Return the list of notes for the list
    */
    NoteService.prototype.getNotes = function () {
        return this.http
            .get("/notes")
            .map(function (response) { return response.json(); });
        // return NOTES;
    };
    /**
     * When the selected note changes, tell subscribers
     */
    NoteService.prototype.changeSelectedNote = function (note) {
        this.observer.next(note);
    };
    NoteService.prototype.updateNote = function (note) {
        // TODO Will this update the note in the list?
        // Not doing anything with the return type currently
        var url = "/notes/" + note.id;
        return this.http
            .post(url, JSON.stringify(note))
            .map(function (response) { return response.json().data; });
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map