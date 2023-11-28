class Spaceship {
    constructor(name, speed, health) {
        this._name = name;
        this._speed = speed;
        this._health = health;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getSpeed() {
        return this._speed;
    }

    setSpeed(speed) {
        this._speed = speed;
    }

    getHealth() {
        return this._health;
    }

    setHealth(health) {
        this._health = health;
    }

    fly() {
        console.log(`${this._name} is flying.`);
    }

    land() {
        console.log(`${this._name} has landed.`);
    }
}

class Character {
    constructor(name, health, strength) {
        this._name = name;
        this._health = health;
        this._strength = strength;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getHealth() {
        return this._health;
    }

    setHealth(health) {
        this._health = health;
    }

    getStrength() {
        return this._strength;
    }

    setStrength(strength) {
        this._strength = strength;
    }

    move() {
        console.log(`${this._name} is moving.`);
    }

    speak() {
        console.log(`${this._name} is speaking.`);
    }
}

class Alien extends Character {
    constructor(name, health, strength, alienTrait) {
        super(name, health, strength);
        this._alienTrait = alienTrait;
    }

    speak() {
        console.log(`${this._name} speaks in an alien language: ${this._alienTrait}`);
    }
}

class Astronaut extends Character {
    constructor(name, health, strength, astronautSkill) {
        super(name, health, strength);
        this._astronautSkill = astronautSkill;
    }

    speak() {
        console.log(`${this._name} speaks in astronaut lingo: ${this._astronautSkill}`);
    }
}

class CargoShip extends Spaceship {
    constructor(name, speed, health, cargoCapacity) {
        super(name, speed, health);
        this._cargoCapacity = cargoCapacity;
    }

    getCargoCapacity() {
        return this._cargoCapacity;
    }

    setCargoCapacity(cargoCapacity) {
        this._cargoCapacity = cargoCapacity;
    }
}

class FighterShip extends Spaceship {
    constructor(name, speed, health, weaponSystem) {
        super(name, speed, health);
        this._weaponSystem = weaponSystem;
    }

    getWeaponSystem() {
        return this._weaponSystem;
    }

    setWeaponSystem(weaponSystem) {
        this._weaponSystem = weaponSystem;
    }
}

class MissionControl {
    constructor() {
        this._missions = [];
    }

    createMission(missionName, spaceship, characters) {
        const mission = { name: missionName, spaceship: spaceship, characters: characters };
        this._missions.push(mission);
        console.log(`Mission '${missionName}' created!`);
    }

    manageMissions() {
        this._missions.forEach(mission => {
            console.log(`Managing mission '${mission.name}' with ${mission.spaceship.getName()} and ${mission.characters.map(char => char.getName()).join(', ')}`);
        });
    }
}

class Game {
    constructor() {
        this.spaceships = [];
        this.characters = [];
        this.missionControl = new MissionControl();
    }

    simulateGame() {
        // Creating instances
        const spaceship1 = new CargoShip("CargoShip1", 200, 100, 500);
        const spaceship2 = new FighterShip("FighterShip1", 300, 120, "Laser Cannon");
        const alien1 = new Alien("Zog", 80, 50, "Telepathy");
        const astronaut1 = new Astronaut("Buzz", 90, 60, "Piloting");

        // Simulating game scenarios
        spaceship1.fly();
        alien1.speak();
        spaceship2.land();
        astronaut1.move();

        // Creating missions
        this.missionControl.createMission("Exploration", spaceship1, [alien1]);
        this.missionControl.createMission("Defense", spaceship2, [astronaut1, alien1]);

        // Managing missions
        this.missionControl.manageMissions();
    }
}

// Run the game
const spaceGame = new Game();
spaceGame.simulateGame();
