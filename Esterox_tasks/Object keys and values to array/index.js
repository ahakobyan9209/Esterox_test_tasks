//Write function that converts keys and values of an object into array
let testObject = {
	type: 'vehicle',
	brand: 'Audi',
	model: 's6',
	year: '2017',
	engine: '4.0L v8',
};

function objectToArray(obj) {
	let res;
	res = Object.keys(obj).map((el) => [el, obj[el]]);
	return res;
}

console.log(objectToArray(testObject));
