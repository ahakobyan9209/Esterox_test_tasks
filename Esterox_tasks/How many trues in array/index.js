let arrayWithTrues = [
	true,
	false,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
	true,
	false,
];
//solution 1 without any array methods
function howManyTruesInArray(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === false) {
			continue;
		}
		count += 1;
	}
	return count;
}
console.log('--------------- without array methods ------------');
console.log(howManyTruesInArray(arrayWithTrues));

//sulution 2 with array methods
function howManyTruesInArrayWithArrayMethods(arr) {
	let truesCount = arr.filter(Boolean).length;
	return truesCount;
}

console.log('--------------- with array methods ----------------');
console.log(howManyTruesInArrayWithArrayMethods(arrayWithTrues));

//another solution with arramethods

function filterTrues(arr) {
	let truesCount = arr.filter((el) => el).length;
	return truesCount;
}

console.log('-------- another one with array methods ---------');
console.log(filterTrues(arrayWithTrues));
