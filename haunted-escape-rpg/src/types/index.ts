export interface Character {
    name: string;
    health: number;
    inventory: string[];
    attack(): void;
    defend(): void;
    useItem(item: string): void;
}

export interface Scene {
    description: string;
    describeEnvironment(): void;
    interact(): void;
    events: string[];
}

export interface GameState {
    playerPositions: { [key: string]: { x: number; y: number } };
    inventory: { [key: string]: any };
    currentScene: string;
    save(): void;
    load(): void;
    reset(): void;
}

