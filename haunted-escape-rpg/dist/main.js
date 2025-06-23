"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __importDefault(require("./game/engine"));
var state_1 = require("./game/state");
var hauntedHouse_1 = __importDefault(require("./scenes/hauntedHouse"));
var main = function () {
    var gameState = new state_1.GameState();
    var gameEngine = new engine_1.default(gameState);
    var hauntedHouse = new hauntedHouse_1.default();
    gameEngine.start(hauntedHouse);
};
main();
