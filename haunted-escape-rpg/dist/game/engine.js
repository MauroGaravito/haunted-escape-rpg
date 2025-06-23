"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine = /** @class */ (function () {
    function GameEngine() {
        this.gameState = new GameState();
        this.isRunning = false;
    }
    GameEngine.prototype.start = function () {
        this.isRunning = true;
        this.gameLoop();
    };
    GameEngine.prototype.gameLoop = function () {
        while (this.isRunning) {
            this.update();
            this.render();
            // Add a delay or wait for user input here
        }
    };
    GameEngine.prototype.update = function () {
        // Update game state logic here
        this.gameState.update();
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
