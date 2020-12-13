
// DONE

// write a function that takes the last item of the second array, and adds it to the end of the first array.
//console.log the new array with the item added
let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

let numbers = ['1', '2', '3', '4'];      

const addTheLast = function (arr1, arr2) {
	arr1.push(arr2[3]);
	return arr1;
};

console.log(addTheLast(food, numbers));

// answer should be
//['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs', 4]