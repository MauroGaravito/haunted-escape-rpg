class HauntedHouse {
    constructor() {
        this.description = "You find yourself in a dark, eerie house filled with strange noises and flickering lights.";
        this.events = [];
    }

    describeEnvironment() {
        console.log(this.description);
    }

    addEvent(event) {
        this.events.push(event);
    }

    handleInteraction(character) {
        console.log(`${character.name} interacts with the haunted house.`);
        // Logic for interaction can be added here
    }

    triggerEvent() {
        if (this.events.length > 0) {
            const event = this.events[Math.floor(Math.random() * this.events.length)];
            console.log(`An event occurs: ${event}`);
        } else {
            console.log("Nothing happens... it's eerily quiet.");
        }
    }
}

export default HauntedHouse;