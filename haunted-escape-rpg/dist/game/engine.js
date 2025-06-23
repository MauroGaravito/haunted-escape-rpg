"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine = /** @class */ (function () {
    function GameEngine(gameState) {
        this.gameState = gameState;
        this.isRunning = false;
        this.currentScene = null;
    }
    GameEngine.prototype.start = function (initialScene) {
        this.currentScene = initialScene;
        this.isRunning = true;
        this.gameLoop();
    };
    GameEngine.prototype.gameLoop = function () {
        while (this.isRunning) {
            this.update();
            this.render();
            // In a real game there would be timing logic here
            break; // avoid infinite loop during development
        }
    };
    GameEngine.prototype.update = function () {
        // Update game state logic here
        if (typeof this.gameState.update === 'function') {
            this.gameState.update();
        }
    };
    GameEngine.prototype.render = function () {
        // Render the current scene here
        console.log("Rendering current scene...");
    };
    GameEngine.prototype.stop = function () {
        this.isRunning = false;
    };
    return GameEngine;
}());
exports.default = GameEngine;
