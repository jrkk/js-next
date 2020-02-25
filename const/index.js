'use strict';

const person = {
    name: 'jrkkiran',
    age: 30
};
console.log('Person :', person);
const newPerson = person;
console.log('Person1:', newPerson);
person.age = 35;
console.log('Person1:', newPerson);
const defaultAge = 24;
person.age = defaultAge;
console.log('Person1:', newPerson);
defaultAge = 25;

/** 
 * Only non permitive data types can be override using with constant
 * becuase, its holds the reference 
 * 
 * Finally, You can not re-assign the constant again.
 */