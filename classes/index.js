'use strict;'

class Person {
    constructor() {
        this.name = 'jrk kiran';
        this.age = 29;
    }
    getInfo() {
        console.log(`Person:${this.name}, Age:${this.age}`);
    }
}

const person = new Person();
person.getInfo();