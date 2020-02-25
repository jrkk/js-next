'use strict';

// spread operators example
const names = ['kiran','paddu'];
const family = [...names, 'isabelle'];
console.log(family);

// rest operator example
const printInfo = (...args) => {
    console.log(args);
}

printInfo('n1','n2','n3','n4','n5');