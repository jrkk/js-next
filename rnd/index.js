'use strict';

const data = JSON.parse(``);

delete data.Id;

var dt = [];

function traverseArrays(arrays, callback) {
	// console.log('traverse from arrays');
	const container = [];
	arrays.forEach((item, index) => {
		format(item, (formated) => {
			// console.log(item, formated);
			container.push(formated);
		});
	});
	// console.log(container);
	callback(container);
}

function traverseObjects(objects, callback) {
	// console.log('traverse from objects');
	const container = [];
	for (const key in objects) {
		if (objects.hasOwnProperty(key)) {
			const item = objects[key];
			format(item, (formated) => {
				// console.log(key, formated);
				container[key] = formated;
			});
		}
	}
	// console.log(container);
    callback(container);
}

function format(item, callback) {
	if (Array.isArray(item)) {
		const props = item.filter( el => (el.hasOwnProperty('value')));
		// console.log(props);
		if(props.length === 0) {
			traverseArrays(item, (formated) => {
				callback(formated);
			});
		} else {
			const container = [];
			item.forEach(el => {
				for (const key in el) {
					if (el.hasOwnProperty(key)) {
						const prop = el[key];
						container[key] = prop;
					}
				}
			});
			// console.log(container);
			callback(container);
		}
	} else if (typeof item === 'object') {
		traverseObjects(item, (formated)=> {
			callback(formated);
		});
	} else {
		callback(item);
	}
}

traverseObjects(data, (formated) => {
	console.log(data, formated);
});