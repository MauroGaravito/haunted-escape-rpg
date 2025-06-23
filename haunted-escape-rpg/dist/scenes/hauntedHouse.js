"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HauntedHouse = /** @class */ (function () {
    function HauntedHouse() {
        this.description = "You find yourself in a dark, eerie house filled with strange noises and flickering lights.";
        this.events = [];
    }
    HauntedHouse.prototype.describeEnvironment = function () {
        console.log(this.description);
    };
    HauntedHouse.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    HauntedHouse.prototype.handleInteraction = function (character) {
        console.log("".concat(character.name, " interacts with the haunted house."));
        // Logic for interaction can be added here
    };
    HauntedHouse.prototype.triggerEvent = function () {
        if (this.events.length > 0) {
            var event_1 = this.events[Math.floor(Math.random() * this.events.length)];
            console.log("An event occurs: ".concat(event_1));
        }
        else {
            console.log("Nothing happens... it's eerily quiet.");
        }
    };
    return HauntedHouse;
}());
exports.default = HauntedHouse;
