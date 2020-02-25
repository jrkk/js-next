'use strict';

let name = 'jrkkiran';
console.log('gloabal scope variable', name);

for (let i= 0; i < 2; i = (i + 1)) {
    console.log(i);
}

console.log(i); // error: is not defined

