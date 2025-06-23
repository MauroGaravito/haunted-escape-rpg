export class GameState {
    currentScene: string;
    playerPositions: { [key: string]: { x: number; y: number } };
    inventory: { [key: string]: any };
    
    constructor() {
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

    update() {
        // Placeholder for future state updates
    }

    save() {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('gameState', JSON.stringify(this));
        }
    }

    load() {
        if (typeof localStorage !== 'undefined') {
            const savedState = localStorage.getItem('gameState');
            if (savedState) {
                const state = JSON.parse(savedState);
                this.currentScene = state.currentScene;
                this.playerPositions = state.playerPositions;
                this.inventory = state.inventory;
            }
        }
    }

    reset() {
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
}
