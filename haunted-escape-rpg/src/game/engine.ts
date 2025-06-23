import { GameState } from './state';
import { Scene } from '../types';

class GameEngine {
    private gameState: GameState;
    private isRunning: boolean;
    private currentScene: Scene | null;

    constructor(gameState: GameState) {
        this.gameState = gameState;
        this.isRunning = false;
        this.currentScene = null;
    }

    start(initialScene: Scene) {
        this.currentScene = initialScene;
        this.isRunning = true;
        this.gameLoop();
    }

    private gameLoop() {
        while (this.isRunning) {
            this.update();
            this.render();
            // In a real game there would be timing logic here
            break; // avoid infinite loop during development
        }
    }

    update() {
        // Update game state logic here
        if (typeof this.gameState.update === 'function') {
            this.gameState.update();
        }
    }

    render() {
        // Render the current scene here
        console.log("Rendering current scene...");
    }

    stop() {
        this.isRunning = false;
    }
}

export default GameEngine;
