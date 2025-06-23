"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = require("./game/engine");
var state_1 = require("./game/state");
var hauntedHouse_1 = require("./scenes/hauntedHouse");
var main = function () {
    var gameState = new state_1.GameState();
    var gameEngine = new engine_1.GameEngine(gameState);
    var hauntedHouse = new hauntedHouse_1.HauntedHouse();
    gameEngine.start(hauntedHouse);
};
main();
