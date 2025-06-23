import { GameEngine } from './game/engine';
import { GameState } from './game/state';
import { HauntedHouse } from './scenes/hauntedHouse';
import { Max, Glitch, Dalia } from './characters';

const main = () => {
    const gameState = new GameState();
    const gameEngine = new GameEngine(gameState);
    const hauntedHouse = new HauntedHouse();

    gameEngine.start(hauntedHouse);
};

main();