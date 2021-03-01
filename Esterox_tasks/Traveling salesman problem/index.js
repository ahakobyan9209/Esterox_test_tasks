//traveling salesman problem

//solution with recursive function

function routeVarieties(points) {
	if (points == 1) {
		return 1;
	} else {
		return routeVarieties(points - 1) * points;
	}
}

console.log(`---- answer for 4, 6 and 9 stopping points of route ----`);
console.log(routeVarieties(4));
console.log(routeVarieties(6));
console.log(routeVarieties(9));

//solution with for loop
function routeVarietieswithFor(route) {
	if (route == 1) {
		return 1;
	}
	for (let i = route - 1; i >= 1; i--) {
		route *= i;
	}
	return route;
}

console.log(
	'------ answer for 4 stopping points using the function for loop ------'
);
console.log(routeVarietieswithFor(4));
