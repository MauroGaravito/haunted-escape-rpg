class Character {
    name: string;
    health: number;
    inventory: string[];

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
        this.inventory = [];
    }

    attack(): string {
        return `${this.name} attacks!`;
    }

    defend(): string {
        return `${this.name} defends!`;
    }

    useItem(item: string): string {
        if (this.inventory.includes(item)) {
            return `${this.name} uses ${item}!`;
        } else {
            return `${this.name} does not have ${item} in their inventory.`;
        }
    }
}

export class Max extends Character {
    constructor() {
        super("Max", 100);
    }
}

export class Glitch extends Character {
    constructor() {
        super("Glitch", 80);
    }
}

export class Dalia extends Character {
    constructor() {
        super("Dalia", 90);
    }
}