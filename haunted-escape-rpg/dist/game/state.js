"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var GameState = /** @class */ (function () {
    function GameState() {
        this.currentScene = 'hauntedHouse';
        this.playerPositions = {
            Max: { x: 0, y: 0 },
            Glitch: { x: 0, y: 0 },
            Dalia: { x: 0, y: 0 }
        };
        this.inventory = {
            Max: [],
            Glitch: [],
            Dalia: []
        };
    }
    GameState.prototype.update = function () {
        // Placeholder for future state updates
    };
    GameState.prototype.save = function () {
        localStorage.setItem('gameState', JSON.stringify(this));
    };
    GameState.prototype.load = function () {
        var savedState = localStorage.getItem('gameState');
        if (savedState) {
            var state = JSON.parse(savedState);
            this.currentScene = state.currentScene;
            this.playerPositions = state.playerPositions;
            this.inventory = state.inventory;
        }
    };
    GameState.prototype.reset = function () {
        this.currentScene = 'hauntedHouse';
        this.playerPositions = {
            Max: { x: 0, y: 0 },
            Glitch: { x: 0, y: 0 },
            Dalia: { x: 0, y: 0 }
        };
        this.inventory = {
            Max: [],
            Glitch: [],
            Dalia: []
        };
    };
    return GameState;
}());
exports.GameState = GameState;
