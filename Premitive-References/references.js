'use strict';

const creatures = {
    birds : ['dove','parrot','nail'],
    animals : ['cow', 'dog', 'cat'],
    wildAnimals : ['tiger', 'lion', 'hyna'],
    seaAnimals : ['shark', 'whale', 'dolphin']
}

const creaturesDump = creatures;

creatures.birds.pop();

console.log(creatures, creaturesDump);