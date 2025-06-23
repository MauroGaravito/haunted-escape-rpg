class GameEngine {
    private gameState: GameState;
    private isRunning: boolean;

    constructor() {
        this.gameState = new GameState();
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.gameLoop();
    }

    private gameLoop() {
        while (this.isRunning) {
            this.update();
            this.render();
            // Add a delay or wait for user input here
        }
    }

    update() {
        // Update game state logic here
        this.gameState.update();
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