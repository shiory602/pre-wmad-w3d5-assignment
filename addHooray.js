
//DONE

// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it
// and console.log it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (arr) {
	let yum = [];
	for (let i = 0; i < arr.length; i++) {
		yum.push(arr[i]);
	}
	yum.push("HOORAY");
	return yum;
};

console.log(addHooray(food));

// 'apple', 'orange',
//   'cake',  'carrots',
//   'pasta', 'rice',
//   'eggs',  'HOORAY'


// another answer

// let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];
// const addHooray = function (arr) {
// 	arr.push("HOORAY");
// 	return arr;
// };
// console.log(addHooray(food));