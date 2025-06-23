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
    interact(): void;
    events: string[];
}

export interface GameState {
    playerPosition: string;
    inventory: string[];
    currentScene: string;
    save(): void;
    load(): void;
    reset(): void;
}